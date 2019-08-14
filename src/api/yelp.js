import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer H5DJvA1rZjuZIM6NrMOaXlR-4M2jj8QA-0BVPSNsVUWiCd-HlbDcbh6mzT-SlevODnjN9OCGMCNOx10QfQKs3_jENeEFBx7D7jIYZ6_f4ZFqOiqbrwOv6chpp8hOXXYx"
  }
});
