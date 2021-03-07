export declare function parse(colorStr: string, rgbaArr?: number[]): number[];
export declare function lift(color: string, level: number): string;
export declare function toHex(color: string): string;
export declare function fastLerp(normalizedValue: number, colors: number[][], out?: number[]): number[];
export declare const fastMapToColor: typeof fastLerp;
declare type LerpFullOutput = {
    color: string;
    leftIndex: number;
    rightIndex: number;
    value: number;
};
export declare function lerp(normalizedValue: number, colors: string[], fullOutput?: boolean): string | LerpFullOutput;
export declare const mapToColor: typeof lerp;
export declare function modifyHSL(color: string, h?: number, s?: number, l?: number): string;
export declare function modifyAlpha(color: string, alpha?: number): string;
export declare function stringify(arrColor: number[], type: string): string;
export declare function lum(color: string, backgroundLum: number): number;
export declare function random(): string;
export {};
