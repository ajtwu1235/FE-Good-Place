import axios from "axios";

axios.defaults.baseURL = "https:localhost:8080";
export const springApi = async (url, method, body) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { body: data, status: "success" };
  } catch (error) {
    return { body: null, status: "err or" };
  }
};
