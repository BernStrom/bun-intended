import axios from 'axios';

const dbInstance = axios.create({
  baseURL: 'https://bun-intended-default-rtdb.firebaseio.com/',
});

export default dbInstance;
