import { MOTORCYCLE_PAGE_LOADED } from '../actions/types';

const initialState = {
  pageLoaded: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case MOTORCYCLE_PAGE_LOADED:
      return {
        ...state,
        pageLoaded: action.payload
      }
    default:
      return state;
  }
}