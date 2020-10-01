import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    debugger;
    console.log(axios.defaults);
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
