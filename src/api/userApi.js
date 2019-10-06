import {post} from 'axios';

export const saveUser = ({user}) => {
  const data = {email: user._user.email, uid: user._user.uid};
  post('http://192.168.0.10:5000/api/v1/user', data)
    .then(response => {
      return response.message;
    })
    .catch(error => {
      return error.message;
    });
};
