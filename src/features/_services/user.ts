import { ActiveUserInterface } from "../../../backend/src/Data/Models/activeUsers";
import { LocationData } from "../../../backend/src/types/location";
import { matchsicAxios } from "./Axios/axios";
import { config } from "./config";

// const fakeDB = {
//   users: [{username: 'Lena_00', password: '1234', name: 'Lena L.'}],
// }

interface userDataRegister {
  username: string,
  name: string,
  password: string,
  secondName: string,
  birthDate: string,
}

interface userDataUpdate {
  username: string,
  name: string,
  description: string,
  musicPreference: string[],
}



const login = (username: string, password: string) => {
  
  return new Promise<{username: string, name: string} | void>((resolve, reject) => {
      // const register = fakeDB.users.find(user => user.username === username && user.password === password);
      matchsicAxios.post('login',
        {
            "user": {
              "username": username,
              "password": password,
            }
        }).then(() => {
            resolve();
        }).catch(() => {
          reject('Nombre de usuario o contraseña incorrectos');
        });
  });
}

const logout = () => {
  return matchsicAxios.get('/logout');
}

const getData = () => {
  return matchsicAxios.get('/user/data');
}

const register = (data :userDataRegister) => {
  return new Promise<userDataRegister | void>((resolve, reject) => {
    matchsicAxios.post('user',
      {
          "user": {
            ...data,
            "description": "Aquí puedes poner tu descripción",
            "musicPreference": [ "Rock", "Pop" ],
            "socialNetwork": ["Twitter", "Telegram"]
          }
      }).then(() => {
          resolve();
      }).catch(() => {
        reject('Problema al registrar');
      });
  });
}

const amILoggedIn = async () => {
  const response = await  matchsicAxios.get('/am-i-logged-in');
  return response.data;
}

const update = (data :userDataUpdate) => {
  return new Promise<userDataUpdate | void>((resolve, reject) => {
    matchsicAxios.patch('/user/data',
      {
          "user": {
            ...data,
          }
      }).then(() => {
          resolve();
      }).catch(() => {
        reject('Problema al actualizar');
      });
  });
}

const getNearUsers = async () => {
  const response = await matchsicAxios.get('/near-users');
  return response.data.nearUsers;
}

const updateActiveData = async (data: Partial<ActiveUserInterface>) => {
  return matchsicAxios.patch('/user/active-data', {activeData: data});
}

const getLocationFromBrowser = async () => {
  return new Promise<LocationData> ((resolve, reject) => {
    if (!navigator) {
      reject('Allow browser to get your location');
    }
    navigator.geolocation.getCurrentPosition(({coords}) => {
      resolve({coordinates: {latitude: coords.latitude, longitude: coords.longitude}});
    }, (reason) => reject(reason));
  });
}

const connectSpotify = () => {
  window.location.href = config.server.baseURL + '/music/login';
}

export const userService = {
  login,
  logout,
  getData,
  register,
  update,
  amILoggedIn,
  getNearUsers,
  updateActiveData,
  getLocationFromBrowser,
  connectSpotify,
}