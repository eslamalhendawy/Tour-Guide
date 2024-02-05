import axios from "axios";
const baseURL = "https://egytravel.pildextech.cf/api/v1/";

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
