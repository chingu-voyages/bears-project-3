import eventsReducer, { initialState } from '../eventsReducer';
import { setFilter, selectDay } from '../../actions/eventsAction';
import { selectors } from '../eventsReducer';
describe('eventsReducer', () => {
	it('should return the initial state for events by default', () => {
		expect(eventsReducer(initialState, {})).toEqual(initialState);
	});

	it('should handle actions of type "SET_FILTER"', () => {
		const state = eventsReducer(initialState, setFilter('Humor'));
		expect(state.selectedCategory).toEqual('Humor');
	});

	it('should return the full list of events if no category is selected', () => {
		expect.assertions(2);
		const state = eventsReducer(initialState, setFilter(''));
		expect(state.list).toHaveLength(30);
		expect(state.list[9].title).toEqual('Game Session 9');
	});

	it('should return the full list of events if no selectedDate is set', () => {
		const state = eventsReducer(initialState, selectDay(null));
		expect(state.list).toHaveLength(30);
	});

	describe('Selectors', () => {
		it('should return a filtered list by date when a selectedDate is set', () => {
			const today = new Date().getTime();
			const state = eventsReducer(initialState, selectDay(today));
			expect(selectors.getFilteredEvents(state).length).toBeGreaterThanOrEqual(0);
		});

		it('should return a list of categories', () => {
			const state = eventsReducer(initialState, {});
			expect(selectors.getCategories(state).length).toEqual(6);
		});
	});
});
