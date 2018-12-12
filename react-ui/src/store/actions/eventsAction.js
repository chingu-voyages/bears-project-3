import { actionTypes as types } from './actionTypes';

export const setFilter = filter => ({
  type: types.SET_FILTER,
  filter,
});

export const eventsAction = () => (dispatch) => {
  dispatch({
    type: type.SET_FILTER,
    payload: filter => filter,
  });
};
