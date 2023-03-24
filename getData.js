import axios from 'axios';

export default async function getUserData(userId) {
  const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  const user = userResponse.data;
  const posts = postResponse.data;

  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    address: user.address,
    phone: user.phone,
    website: user.website,
    company: user.company,
    posts: posts,
  };
}

