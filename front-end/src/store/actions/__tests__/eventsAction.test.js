import { SET_FILTER, SELECT_DAY } from '../actionTypes';
import { setFilter, selectDay } from '../eventsAction';

describe('Event Actions', () => {
	it('should filter events', () => {
		expect(setFilter('Humor')).toEqual({ type: SET_FILTER, payload: 'Humor' });
	});

	it('should filter events by date if a day is selected', () => {
		const today = new Date();
		expect(selectDay(today)).toEqual({ type: SELECT_DAY, payload: today });
	});
});
