import {SET_IMAGES} from './types';
import {SET_COMPONENTS} from './types';

export const setImages = (images) => ({
  type: SET_IMAGES, // SET_IMAGES is the type of the action
  payload: images // payload is the data that we want to send to the reducer
});

export const setComponents = (components) => ({
  type: SET_COMPONENTS, // SET_COMPONENTS is the type of the action
  payload: components // payload is the data that we want to send to the reducer
});