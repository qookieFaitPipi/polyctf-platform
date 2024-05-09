import axios from 'axios';

const makeRequest = ({ url, method, data }) => {
  try {
    const response = axios({ method, url, data });
    console.log(url);
    console.log(method);
    console.log(data)


    return { 
      response: response.data, 
      error: null, 
      isLoading: false 
    };
  } catch (error) {
    return { 
      response: null, 
      error: error.message, 
      isLoading: false 
    };
  }
};

export default makeRequest;