import { connect } from 'react-redux';
import HomePage from './components/HomePage';

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps)(HomePage);
