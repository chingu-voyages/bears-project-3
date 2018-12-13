import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const ListEvent = ({ event }) => (
	<Segment style={{ display: 'flex', flexDirection: 'row', padding: '1.5em' }}>
		<div className="event-time">
			<Header as="h4" style={{ color: 'rgb(171, 171,171)' }}>
				{event.timeStarting.toLocaleTimeString('en-US', {
					hour: '2-digit',
					minute: '2-digit',
					hour12: true
				})}
			</Header>
		</div>
		<div className="event-content" style={{ marginLeft: 10 }}>
			<Header
				as="h4"
				style={{ marginBottom: 0, fontWeight: '700', color: 'rgb(171, 171, 171)' }}
			>
				{event.title.toUpperCase()}
			</Header>
			<Header as="h3" style={{ marginTop: 0, marginBottom: 15 }}>
				{event.description}
			</Header>
			<Header as="h4" style={{ fontWeight: '400' }}>
				8 Gamers Going
			</Header>
		</div>
	</Segment>
);

export default ListEvent;
