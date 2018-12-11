import React from 'react';
import eventsReducer, { SET_FILTER, initialState } from '../reducer';
import { setFilter } from '../actions';

describe('Events Reducer', () => {
	it('should return the initial state for events', () => {
		expect(eventsReducer(undefined, {})).toEqual(initialState);
	});

	it('should handle SET_FILTER', () => {
		expect(eventsReducer({}, setFilter('Humor'))).toEqual({ selectedCategory: 'Humor' });
	});

	it('should return a full list of events if selectedCategory is empty', () => {
		expect.assertions(2);
		expect(eventsReducer(undefined, setFilter('')).list).toHaveLength(30);
		expect(eventsReducer(undefined, setFilter('')).list[0].title).toEqual(
			expect.stringContaining('Board Game')
		);
	});
});
