import React from 'react';
import { SET_FILTER } from '../reducer';
import { setFilter } from '../actions';

describe('Events Redux Actions', () => {
	it('should setFilter to filter events', () => {
		expect(setFilter('Humor')).toEqual({ type: SET_FILTER, filter: 'Humor' });
	});
});
