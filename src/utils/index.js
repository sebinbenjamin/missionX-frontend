// Utils contain the common methods available to all components/files or non-component specific functionality

import { API_URL } from '../config';

// Function to get the data from the APIs
export const fetchData = (apiEndpoint) => {
  return (
    fetch(API_URL + apiEndpoint)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
  );
};

export const callUploadAPI = (postBody) => {
  const endPoint = `api/user/profilePic`;
  const fetchURL = API_URL + endPoint;
  console.log(fetchURL);
  const requestOptions = {
    method: 'POST',
    body: postBody,
  };

  fetch(fetchURL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log('Request succeeded with JSON response', data);
      alert(JSON.stringify(data));
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
};

export const fetchProfilePic = (userId) => {
  const endPoint = `api/user/profilePic`;
  const fetchURL = API_URL + endPoint;

  const requestOptions = {
    method: 'GET',
  };

  return fetch(`${fetchURL}/${userId}`, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log('Request succeeded with JSON response', data);
      return data.dataURI;
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
};
