

const fakeDB = {
  users: [{username: 'Lena_00', password: '1234', name: 'Lena L.'}],
}



const login = (username: string, password: string) => {
  
  return new Promise<{username: string, name: string}>((resolve, reject) => {
    setTimeout(() => {
      const register = fakeDB.users.find(user => user.username === username && user.password === password);
      if (register) {
        const {password, ...user} = register;
        resolve(user);
      } else {
        reject('Nombre de usuario o contraseña incorrectos');
      }
    }, 500);
  });
}

const logout = () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
}

export const userService = {
  login,
  logout,
}