import { MOTORCYCLE_PAGE_LOADED } from './types';

export const pageLoaded = (isLoaded) => dispatch => {
  dispatch({
    type: MOTORCYCLE_PAGE_LOADED,
    payload: isLoaded
  })
}
