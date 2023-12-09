import { matchsicAxios } from "./Axios/axios";


const connect = () => {
  return matchsicAxios.get('/music/login');
}

export const spotifyService = {
  connect,
};