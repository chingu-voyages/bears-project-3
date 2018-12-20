import React from 'react'
import PropTypes from 'prop-types'
import { Header, Card, Image } from 'semantic-ui-react'
const EventPhotos = ({ event }) => {
	return (
		<div className="event-photos" style={{ marginTop: 40 }}>
			<Header as="h2">Photos</Header>
			<Card.Group itemsPerRow={5}>
				{event.photos &&
					event.photos.map((photo, index) => (
						<Card fluid key={photo + index}>
							<Image src={photo} />
						</Card>
					))}
			</Card.Group>
		</div>
	)
}

EventPhotos.propTypes = {
	event: PropTypes.instanceOf(Object)
}

EventPhotos.defaultProps = {
	event: {}
}

export default EventPhotos
