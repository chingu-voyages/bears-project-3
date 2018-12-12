import { connect } from 'react-redux';
import HomePage from './presentational/HomePage';

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(HomePage);
