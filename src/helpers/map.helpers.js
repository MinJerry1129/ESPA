import { fromJS } from 'immutable';

export const mapImmuatableDataById = (items, mapObject, withFromJS = false) => {
  items.forEach((item) => {
    mapObject = mapObject.set(item.id, withFromJS ? fromJS(item) : item);
  });
  return mapObject;
};
