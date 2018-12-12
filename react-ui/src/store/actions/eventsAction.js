import { SET_FILTER } from './actionTypes';

export default function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter,
  };
}
