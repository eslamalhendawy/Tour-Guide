import axios from "axios";
const baseURL = "https://egytravel.codepeak.live/api/v1/";

export const postData = async (url, data) => {
  let result = [];
  await axios
    .post(baseURL + url, data)
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error;
    });
  return result;
};

export const getData = async (url, token) => {
  let result = [];
  await axios
    .get(baseURL + url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error;
    });
  return result;
};

export const putData = async (url, data) => {
  let result = [];
  await axios
    .put(baseURL + url, data)
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error;
    });
  return result;
};
