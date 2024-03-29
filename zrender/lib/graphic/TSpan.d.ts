import Displayable, { DisplayableProps, DisplayableStatePropNames } from './Displayable';
import BoundingRect from '../core/BoundingRect';
import { PathStyleProps } from './Path';
export interface TSpanStyleProps extends PathStyleProps {
    x?: number;
    y?: number;
    text?: string;
    font?: string;
    textAlign?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
}
export declare const DEFAULT_TSPAN_STYLE: TSpanStyleProps;
interface TSpanProps extends DisplayableProps {
    style?: TSpanStyleProps;
}
export declare type TSpanState = Pick<TSpanProps, DisplayableStatePropNames>;
declare class TSpan extends Displayable<TSpanProps> {
    style: TSpanStyleProps;
    hasStroke(): boolean;
    hasFill(): boolean;
    createStyle(obj?: TSpanStyleProps): TSpanStyleProps;
    setBoundingRect(rect: BoundingRect): void;
    getBoundingRect(): BoundingRect;
    protected static initDefaultProps: void;
}
export default TSpan;
