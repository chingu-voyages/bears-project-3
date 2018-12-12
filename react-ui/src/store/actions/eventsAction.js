import { SET_FILTER } from './actionTypes';

export default function eventsAction(filter) {
  return {
    type: SET_FILTER,
    payload: filter,
  };
}
