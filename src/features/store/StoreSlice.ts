import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationData, ProfileData, UserData } from '../../types/user';


interface MatchsicState {
  userProfile: ProfileData | null,
  userSession: UserData | null,
  nearUsers: UserData[],
  notifications: NotificationData[], 
}


const initialState: MatchsicState = {
  userProfile: null,
  userSession: null,
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
  }
});


export const { sayHi } = matchsicSlice.actions;
export default matchsicSlice.reducer;