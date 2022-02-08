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
  userProfile: { name: '', username: '' , description: '', musicPreference: [] , socialNetwork: []},
  userSession: {
    username: 'Lena_00', profileLink: '',
    // profilePicture: { url: '', width: 0, height: 0 },
    music: { trackName: 'The Rover', authorsNames: ['Led Zeppelin'], coverImage: { url: 'https://extrachill.com/wp-content/uploads/2021/03/led-zeppelin-logos.jpeg', width: 0, height: 0 }, status: 'stopped' },
    location: { coordinates: { latitude: 28.47762873997604, longitude: -16.312475617040874 } }
  },

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

    userDataFetched(state, action: PayloadAction<ProfileData>) {
      const { username, name, description, socialNetwork, musicPreference } = action.payload;
      state.userSession.username = username;
      state.userProfile.name = name;
      state.userProfile.username = username;
      state.userProfile.description = description;
      state.userProfile.musicPreference = musicPreference;
      state.userProfile.socialNetwork = socialNetwork;
    },

    loggedIn(state) {
      state.userIsLoggedIn = true;
    },
    
    loggedOut(state) {
      state.userSession.username = '';
      state.userProfile.name = '';
      state.userIsLoggedIn = false;
    },

    updateUser(state, action: PayloadAction<ProfileData>) {
      const { username, name, description, musicPreference } = action.payload;
      state.userSession.username = username;
      state.userProfile.name = name;
      state.userProfile.username = username;
      state.userProfile.description = description;
      state.userProfile.musicPreference = musicPreference;
    },

    setNearUsers(state, action: PayloadAction<UserData[]>) {
      state.nearUsers = action.payload;
    },

    updateSession(state, action: PayloadAction<UserData>) {
      state.userSession = action.payload;
    },
  }
});


export const { sayHi, loggedIn, loggedOut, updateUser,
userDataFetched, setNearUsers, updateSession} = matchsicSlice.actions;
export default matchsicSlice.reducer;