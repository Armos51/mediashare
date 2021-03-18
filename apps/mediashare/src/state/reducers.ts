/* eslint-disable @typescript-eslint/no-unused-vars */
import { combineReducers } from 'redux';

import { userReducer, usersReducer } from './modules/user';
import { playlistReducer, playlistsReducer, playlistItemsReducer } from './modules/playlists';
import { mediaItemReducer, mediaItemsReducer } from './modules/media-items';
import { shareItemsReducer } from './modules/share-items';
import { rootReducer } from './root';

const reducers = combineReducers({
  rootReducer,
  userReducer,
  usersReducer,
  mediaItemReducer,
  mediaItemsReducer,
  playlistReducer,
  playlistsReducer,
  playlistItemsReducer,
  shareItemsReducer,
});

export { reducers };
