import axios from "axios";
import { store } from '../../store/store';
import { loggedOut } from "../../store/storeSlice";
import { config } from '../config';

export const matchsicAxios = axios.create({
  baseURL: config.server.baseURL,
  withCredentials: true,
});

// matchsicAxios.interceptors.response.use(undefined, (error) => {
//   const {response} = error;
//   if (response && response.status == 401) {
//     console.log('401'); 
//     store.dispatch(loggedOut());
//     window.location.href = '/';
//   }

//   return Promise.reject(error);
// });