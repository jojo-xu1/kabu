import Gradient, { GradientObject, GradientColorStop } from './Gradient';
export interface LinearGradientObject extends GradientObject {
    type: 'linear';
    x: number;
    y: number;
    x2: number;
    y2: number;
    global: boolean;
}
export default class LinearGradient extends Gradient {
    type: 'linear';
    x: number;
    y: number;
    x2: number;
    y2: number;
    global: boolean;
    constructor(x: number, y: number, x2: number, y2: number, colorStops?: GradientColorStop[], globalCoord?: boolean);
}
