import * as graphic from './graphic';
import { Dictionary } from 'zrender/lib/core/types';
import { ZRColor } from './types';
declare type ECSymbol = graphic.Path & {
    __isEmptyBrush?: boolean;
    setColor: (color: ZRColor, innerColor?: string) => void;
    getColor: () => ZRColor;
};
export declare const symbolBuildProxies: Dictionary<ECSymbol>;
/**
 * Create a symbol element with given symbol configuration: shape, x, y, width, height, color
 */
export declare function createSymbol(symbolType: string, x: number, y: number, w: number, h: number, color?: ZRColor, keepAspect?: boolean): ECSymbol;
export {};
