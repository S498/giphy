import axios from "axios";

export default axios.create({
  baseURL: "http://api.giphy.com/v1",
  // ?q=${query}&api_key=f2HFAPLB9mqdgpVHFo7mfiGnQwVBiNiD&limit=$limit",
});
