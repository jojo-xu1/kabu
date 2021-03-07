import { __extends } from "tslib";
import Eventful from '../core/Eventful';
import requestAnimationFrame from './requestAnimationFrame';
import Animator from './Animator';
var Animation = (function (_super) {
    __extends(Animation, _super);
    function Animation(opts) {
        var _this = _super.call(this) || this;
        _this._running = false;
        _this._time = 0;
        _this._pausedTime = 0;
        _this._pauseStart = 0;
        _this._paused = false;
        opts = opts || {};
        _this.stage = opts.stage || {};
        _this.onframe = opts.onframe || function () { };
        return _this;
    }
    Animation.prototype.addClip = function (clip) {
        if (clip.animation) {
            this.removeClip(clip);
        }
        if (!this._clipsHead) {
            this._clipsHead = this._clipsTail = clip;
        }
        else {
            this._clipsTail.next = clip;
            clip.prev = this._clipsTail;
            clip.next = null;
            this._clipsTail = clip;
        }
        clip.animation = this;
    };
    Animation.prototype.addAnimator = function (animator) {
        animator.animation = this;
        var clip = animator.getClip();
        if (clip) {
            this.addClip(clip);
        }
    };
    Animation.prototype.removeClip = function (clip) {
        if (!clip.animation) {
            return;
        }
        var prev = clip.prev;
        var next = clip.next;
        if (prev) {
            prev.next = next;
        }
        else {
            this._clipsHead = next;
        }
        if (next) {
            next.prev = prev;
        }
        else {
            this._clipsTail = prev;
        }
        clip.next = clip.prev = clip.animation = null;
    };
    Animation.prototype.removeAnimator = function (animator) {
        var clip = animator.getClip();
        if (clip) {
            this.removeClip(clip);
        }
        animator.animation = null;
    };
    Animation.prototype.update = function (notTriggerFrameAndStageUpdate) {
        var time = new Date().getTime() - this._pausedTime;
        var delta = time - this._time;
        var clip = this._clipsHead;
        while (clip) {
            var nextClip = clip.next;
            var finished = clip.step(time, delta);
            if (finished) {
                clip.ondestroy && clip.ondestroy();
                this.removeClip(clip);
                clip = nextClip;
            }
            else {
                clip = nextClip;
            }
        }
        this._time = time;
        if (!notTriggerFrameAndStageUpdate) {
            this.onframe(delta);
            this.trigger('frame', delta);
            this.stage.update && this.stage.update();
        }
    };
    Animation.prototype._startLoop = function () {
        var self = this;
        this._running = true;
        function step() {
            if (self._running) {
                requestAnimationFrame(step);
                !self._paused && self.update();
            }
        }
        requestAnimationFrame(step);
    };
    Animation.prototype.start = function () {
        if (this._running) {
            return;
        }
        this._time = new Date().getTime();
        this._pausedTime = 0;
        this._startLoop();
    };
    Animation.prototype.stop = function () {
        this._running = false;
    };
    Animation.prototype.pause = function () {
        if (!this._paused) {
            this._pauseStart = new Date().getTime();
            this._paused = true;
        }
    };
    Animation.prototype.resume = function () {
        if (this._paused) {
            this._pausedTime += (new Date().getTime()) - this._pauseStart;
            this._paused = false;
        }
    };
    Animation.prototype.clear = function () {
        var clip = this._clipsHead;
        while (clip) {
            var nextClip = clip.next;
            clip.prev = clip.next = clip.animation = null;
            clip = nextClip;
        }
        this._clipsHead = this._clipsTail = null;
    };
    Animation.prototype.isFinished = function () {
        return this._clipsHead == null;
    };
    Animation.prototype.animate = function (target, options) {
        options = options || {};
        this.start();
        var animator = new Animator(target, options.loop);
        this.addAnimator(animator);
        return animator;
    };
    return Animation;
}(Eventful));
export default Animation;
