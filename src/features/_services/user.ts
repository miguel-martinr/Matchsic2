import { matchsicAxios } from "./Axios/axios";


// const fakeDB = {
//   users: [{username: 'Lena_00', password: '1234', name: 'Lena L.'}],
// }


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



export const userService = {
  login,
  logout,
  getData,
}