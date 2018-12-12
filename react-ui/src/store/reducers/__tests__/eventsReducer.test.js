import eventsReducer, { initialState } from '../eventsReducer';
import setFilter from '../../actions/eventsAction';

describe('eventsReducer', () => {
  it('should return the initial state for events by default', () => {
    expect(eventsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle actions of type "SET_FILTER"', () => {
    expect(eventsReducer({}, setFilter('Humor'))).toEqual({ selectedCategory: 'Humor' });
  });

  it('should return the full list of events if no category is selected', () => {
    expect.assertions(2);
    expect(eventsReducer(undefined, setFilter('')).list).toHaveLength(30);
    expect(eventsReducer(undefined, setFilter('')).list[9].title).toEqual('Game Session 9');
  });
});
