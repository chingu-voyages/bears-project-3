import React, { Fragment } from 'react';
import { Image, Grid, Placeholder } from 'semantic-ui-react';

const user = {
  name: 'Jon Snow',
  email: 'jon@example.com',
  avatarHash: 'dc36565cc2376197358fa27ed4c47253',
  groups: {
    group1: {
      owner: true,

    }
  },

}

const Profile = () => {
  return (
    <Grid
      style={{ height: '100vh', paddingTop: 100 }}
    >
      <Image
        style={{ height: 150, width: 150 }}
        src={`https://robohash.org/${user.avatarHash}`}
        circular
      />
      <h2 className={'name'}>{user.name}</h2>
    </Grid>
  )
}

export default Profile
