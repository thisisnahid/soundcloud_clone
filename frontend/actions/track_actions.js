import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

const receiveAllTracks = (tracks) => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
});

const receiveTrack = (track) => ({
    type: RECEIVE_TRACK,
    track
});

const removeTrack = (trackId) => ({
    type: REMOVE_TRACK,
    trackId
});

export const fetchAllTracks = () => dispatch => (
    TrackApiUtil.fetchAllTracks()
        .then(tracks => dispatch(receiveAllTracks(tracks)))
);

export const fetchTrack = (trackId) => dispatch => (
    TrackApiUtil.fetchTrack(trackId)
        .then(track => dispatch(receiveTrack(track)))
);

export const createTrack = (track) => dispatch => (
    TrackApiUtil.createTrack(track)
        .then(track => dispatch(receiveTrack(track)))
);

export const updateTrack = (track) => dispatch => (
    TrackApiUtil.updateTrack(track)
        .then(track => dispatch(receiveTrack(track)))
);

export const destroyTrack = (trackId) => dispatch => (
    TrackApiUtil.destroyTrack(trackId)
        .then(() => dispatch(removeTrack(trackId)))
);