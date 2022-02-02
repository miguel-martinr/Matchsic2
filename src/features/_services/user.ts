import { matchsicAxios } from "./Axios/axios";


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
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
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

export const userService = {
  login,
  logout,
  getData,
  register,
}