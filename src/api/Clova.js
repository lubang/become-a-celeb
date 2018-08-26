import axios from 'axios';

const baseUrl = 'https://bycors.herokuapp.com/route';

axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 8000;

/* eslint-disable no-param-reassign */
axios.interceptors.request.use((config) => {
  config.headers['X-Naver-Client-Id'] = 'NAVER API Client ID';
  config.headers['X-Naver-Client-Secret'] = 'NAVER API Client Secret';
  config.headers['X-TARGET-URL'] = 'https://openapi.naver.com/v1/vision/celebrity';
  return config;
}, error => Promise.reject(error));

export default {
  verifyCelebrity(file) {
    console.log('verifyCelebrity ::::::: ', file);
    return new Promise((resolve, reject) => {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const payload = new FormData();
      payload.append('image', file);

      axios.post('/route', payload, config)
        .then((response) => {
          console.log('m.m.m.m.m', response);
          resolve(response.data);
        })
        .catch((err) => {
          console.log('e.e.e.e.e.', err);
          reject(err);
        });
    });
  },
};
