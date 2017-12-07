import { connect } from 'react-redux';
import TrackList from './track-list';

export default connect(({tracks}) => ({tracks}))(TrackList);