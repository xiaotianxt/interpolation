import { FeatureCollection, Point, interpolate } from '@turf/turf';
import geojson from './assets/vector.geojson.json';

describe('Interpolation test', () => {
  // read geojson
  // convert geojson to a list of points

  // call interpolation
  const result = interpolate(geojson as FeatureCollection<Point>, 100);

  it('test', () => {
    console.log(result.features[0]);
  });
});
