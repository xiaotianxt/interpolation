import { generateGrid } from './index';

describe('unit | gridGeneration', () => {
  it('should generate identical grid', () => {
    generateGrid(
      [],
      { width: 0, height: 0, delta_x: 0, delta_y: 0 },
      'inverse-distance',
    );
  });
  it('shoule generate a slope grid', () => {
    // TODO
  });
});
