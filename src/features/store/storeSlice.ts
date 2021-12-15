import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationData, ProfileData, UserData } from '../../types/user';


interface MatchsicState {
  userProfile: ProfileData,
  userSession: UserData,
  nearUsers: UserData[],
  notifications: NotificationData[], 
  userIsLoggedIn: boolean,
}


const initialState: MatchsicState = {
  userProfile: {name: '', description: '', musicGenres: []},
  userSession: {username: 'Lena', profileLink: '', 
    profilePicture: {url: '', width: 0, height: 0}, 
    music: {trackName: '', authorsNames: [], coverImage: {url: '', width: 0, height: 0}, status: 'stopped'}, 
    location: {coordinates: {latitude: 0, longitude: 0}}},

  nearUsers: [],
  notifications: [],
  userIsLoggedIn: false,
}

const matchsicSlice = createSlice({
  name: 'matchsic',
  initialState,
  reducers: {
    sayHi(state) {
      console.log('Hi!');
      return state;
    },

    loggedIn(state, action: PayloadAction<{username: string, name: string}>) {
      const { username, name } = action.payload;
      state.userSession.username = username;
      state.userProfile.name = name;
      state.userIsLoggedIn = true;
    },

    loggedOut(state) {
      state.userSession.username = '';
      state.userProfile.name = '';
      state.userIsLoggedIn = false;
    }
  }
});


export const { sayHi, loggedIn, loggedOut } = matchsicSlice.actions;
export default matchsicSlice.reducer;