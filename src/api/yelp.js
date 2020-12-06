import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'BearerhduqwbaXG66Ee76kwbAhvueYDXIS_9cWkIxi4D5P_DPMso2RMwM8wGwh8Xf78F8W71APekRujcsV3CLxar6ULjgiM7NqZuBWm87laYQMofzR9yJJyCHQddvjJwvNX3Yx',
  },
});
