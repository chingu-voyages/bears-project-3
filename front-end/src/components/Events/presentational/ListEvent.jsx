import React from 'react'
import { Card, Header, Grid, Image, Label } from 'semantic-ui-react'

const ListEvent = ({ event }) => (
	<Card fluid color={event.color}>
		<Card.Content>
			<Grid>
				<Grid.Column width={2}>
					<Card.Header style={{ color: 'rgb(171, 171,171)' }}>
						{new Date(event.createdAt).toLocaleTimeString()}
					</Card.Header>
				</Grid.Column>

				<Grid.Column width={14}>
					<Grid>
						<Grid.Column floated="left" width={12}>
							<Card.Header
								style={{
									marginBottom: 0,
									fontWeight: '700',
									color: 'rgb(171, 171, 171)'
								}}
							>
								{event.name.toUpperCase()}
							</Card.Header>
							<Header as="h3" style={{ marginTop: 0, marginBottom: 15 }}>
								{event.description}
							</Header>
						</Grid.Column>
						<Grid.Column textAlign="right" floated="right" width={4}>
							<Label>{event.category}</Label>
						</Grid.Column>
					</Grid>
				</Grid.Column>
			</Grid>
		</Card.Content>
		<Card.Content extra>
			<Grid>
				<Grid.Column floated="left" width={4}>
					<Image style={{ margin: '0 auto' }} src={event.owner.avatar} avatar />{' '}
					<span>{event.owner.name}</span>
				</Grid.Column>
				<Grid.Column
					floated="right"
					width={3}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
				>
					<Header as="h4" style={{ fontWeight: '400' }}>
						<strong>{event.members.length}</strong> Gamers Going
					</Header>
				</Grid.Column>
			</Grid>
		</Card.Content>
	</Card>
)

export default ListEvent
