import { SET_IMAGES } from "../actions/types";
import { SET_COMPONENTS } from "../actions/types";

const initialState = {
  images: [],
  components: [], 
}

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: action.payload,
      }
    case SET_COMPONENTS:
      return {
        ...state,
        components: action.payload,
      }
    default:
      return state;
  }
}