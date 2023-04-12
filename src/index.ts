/**
 * A Branded Type for values parseable to number.
 */
export type NumberParseable = (number | string | boolean) & {
  readonly isNumberParseble: unique symbol;
};

/**
 * A 2D Point with `x` and `y` coordinates.
 */
export type Point = [number, number];

/**
 * A 2D grid of `number` values represented as a 2D array.
 */
export type Grid = number[][];

/**
 * A 2d model for TIN (Triangulated Irregular Network).
 */

export type Triangle = {
  v1: Point;
  v2: Point;
  v3: Point;
};

export type TIN = {
  points: Point[];
  triangles: Triangle[];
};

/**
 * A 2d model for contour lines.
 */
export interface ContourLine {
  value: number;
  points: Point[];
}

export interface SmoothContourLine extends ContourLine {
  controlPoints: Point[];
}

export type ContourLines = ContourLine[] | SmoothContourLine[];

/**
 * A Map Type of a 2D grid and some metadata.
 */
export type GridMap = {
  grid: Grid;
  width: number;
  height: number;
  delta_x: number;
  delta_y: number;
};

/**
 * 格网模型生成方式：
 * 距离平方倒数法
 * 按方位加权平均法
 */
export type InterpolationMode = 'inverse-distance' | 'azimuth-weighted';

/**
 * 基于数据点，生成格网模型
 */
export type gridGeneration = (
  points: Point[],
  option: Exclude<GridMap, 'grid'>,
  mode: InterpolationMode,
) => GridMap;

/**
 * 基于数据点，生成凸包的 TIN 模型
 */
export type tinGeneration = (
  points: Point[],
  option: Exclude<GridMap, 'grid'>,
) => GridMap;

/**
 * 基于格网或 TIN 模型，生成等值线
 */
export type contourGeneration = (
  gridMap: GridMap,
  option: {
    // 等值线间距
    interval: number;
    // 等值线光滑度
    smooth: boolean;
  },
) => (typeof option)['smooth'] extends true
  ? SmoothContourLine[]
  : ContourLines;
