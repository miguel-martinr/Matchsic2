import path from 'path';


const SERVER_ADDRESS = '192.168.1.140';
const SERVER_PORT = '3000';

export const config = {
  server: {
    address: SERVER_ADDRESS,
    port: SERVER_PORT,
    baseURL: `http://${SERVER_ADDRESS}:${SERVER_PORT}`,
  },



};