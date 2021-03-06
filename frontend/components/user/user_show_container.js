import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchAllTracks } from '../../actions/track_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.userId],
    tracks: state.entities.tracks
});

const mapDispatchToProps = (dispatch) => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchAllTracks: () => dispatch(fetchAllTracks()),
    createFollow: userId => dispatch(createFollow(userId)),
    deleteFollow: userId => dispatch(deleteFollow(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);