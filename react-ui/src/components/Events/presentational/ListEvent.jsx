import React from 'react';
import { Card, Header, Grid, Image } from 'semantic-ui-react';

const ListEvent = ({ event }) => (
	<Card fluid>
		<Card.Content>
			<Grid>
				<Grid.Column width={2}>
					<Header as="h4" style={{ color: 'rgb(171, 171,171)' }}>
						{event.timeStarting.toLocaleTimeString('en-US', {
							hour: '2-digit',
							minute: '2-digit',
							hour12: true
						})}
					</Header>
				</Grid.Column>

				<Grid.Column width={14}>
					<Grid>
						<Grid.Column floated="left" width={12}>
							<Header
								as="h4"
								style={{
									marginBottom: 0,
									fontWeight: '700',
									color: 'rgb(171, 171, 171)'
								}}
							>
								{event.title.toUpperCase()}
							</Header>
							<Header as="h3" style={{ marginTop: 0, marginBottom: 15 }}>
								{event.description}
							</Header>
						</Grid.Column>
						<Grid.Column floated="right" width={4} />
					</Grid>
				</Grid.Column>
			</Grid>
		</Card.Content>
		<Card.Content extra>
			<Grid>
				<Grid.Column floated="left" width={4}>
					<Image style={{ margin: '0 auto' }} src={event.creator.avatar} avatar />{' '}
					<span>{event.creator.name}</span>
				</Grid.Column>
				<Grid.Column
					floated="right"
					width={3}
					style={{ display: 'flex', alignItems: 'center' }}
				>
					<Header as="h4" style={{ fontWeight: '400' }}>
						8 Gamers Going
					</Header>
				</Grid.Column>
			</Grid>
		</Card.Content>
	</Card>
);

export default ListEvent;
