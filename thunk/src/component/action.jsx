import axios from 'axios';

export const fetchUsers = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: users
  };
};

export const GOUserData = () => {
  return {
    type: "GO_DATA"
  };
};
