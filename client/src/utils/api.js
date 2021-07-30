import axios from 'axios'

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
    try {
      const response = await fetch(url, options);
  
      if (response.status === 204) {
      
        return null;
      }
  
      const payload = await response.json();
  
      if (payload.error) {
        return Promise.reject({ message: payload.error });
      }
      return payload.data;
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error.stack);
        throw error;
      }
      return Promise.resolve(onCancel);
    }
  }

export async function postUser(reqBody, signal) {
    const url = new URL(`${API_BASE_URL}/users/register`);
    return await fetchJson(url, { method: 'POST', headers, signal, body: JSON.stringify({data: reqBody})}, [])
  }


export async function loginUser(data) {
  axios
  .put(`${API_BASE_URL}/users/login`, {data})
  .then((res) => {
    console.log('logged in')
    console.log(res.data)
    localStorage.setItem('currentUser', JSON.stringify(res.data))
    return res.data
  }).catch((error) => {
    console.error(error.stack)
  })  
}

export async function logout(data){
  localStorage.removeItem('currentUser')
}