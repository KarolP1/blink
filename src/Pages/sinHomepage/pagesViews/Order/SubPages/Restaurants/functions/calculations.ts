import {geoProps} from './../RestaurantPages';
import React from 'react';

export const degreesToRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};

export function getDistanceBetweenPoints(
  location1: geoProps,
  location2: geoProps,
) {
  let result;
  let R = 6378137;
  if (location1 && location2) {
    let dLat = degreesToRadians(location2.latitude - location1.latitude);
    let dLong = degreesToRadians(location2.longitude - location1.longitude);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(location1.latitude)) *
        Math.cos(degreesToRadians(location1.latitude)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c;

    result = Math.round(distance / 1000).toFixed();
  } else result = 0;
  return result;
}
