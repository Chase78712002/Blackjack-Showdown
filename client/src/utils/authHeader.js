export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  if (user && user.token) {
    return { authorization: `BEARER ${user.token}` };
  } else {
    return {};
  }
}
