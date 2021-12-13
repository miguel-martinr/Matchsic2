import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationData, ProfileData, UserData } from '../../types/user';


interface MatchsicState {
  userProfile: ProfileData,
  userSession: UserData,
  nearUsers: UserData[],
  notifications: NotificationData[], 
}


const initialState: MatchsicState = {
  userProfile: {name: '', description: '', musicGenres: []},
  userSession: {username: '', profileLink: '', 
    profilePicture: {url: '', width: 0, height: 0}, 
    music: {trackName: '', authorsNames: [], coverImage: {url: '', width: 0, height: 0}, status: 'stopped'}, 
    location: {coordinates: {latitude: 0, longitude: 0}}},

  nearUsers: [],
  notifications: [],
}

const matchsicSlice = createSlice({
  name: 'matchsic',
  initialState,
  reducers: {
    sayHi(state) {
      console.log('Hi!');
      return state;
    },

    loggedin(state, action: PayloadAction<{username: string, password: string}>) {
      const { username, password } = action.payload;
      state.userSession.username = username;
    },
  }
});


export const { sayHi, loggedin } = matchsicSlice.actions;
export default matchsicSlice.reducer;