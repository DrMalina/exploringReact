import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f554c153ef7cf2cc219bd2eaecc5a41290c01683363cd17e88e89ba82f56eb27"
  }
});
