import { SET_FILTER } from '../actionTypes';
import setFilter from '../eventsAction';

describe('eventsAction', () => {
  it('should filter events', () => {
    expect(setFilter('Humor')).toEqual({ type: SET_FILTER, payload: 'Humor' });
  });
});
