const API_AUTH = import.meta.env.VITE_API_AUTH;
const API_BONUS = import.meta.env.VITE_API_BONUS;

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const DEVICE_ID = import.meta.env.VITE_DEVICE_ID;

export async function fetchToken() {
    const res = await fetch(API_AUTH + '/api/v3/clients/accesstoken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'AccessKey': ACCESS_KEY,
        },
        body: JSON.stringify({
          "idClient": CLIENT_ID,
          "accessToken": "",
          "paramName": "device",
          "paramValue": DEVICE_ID,
          "latitude": 0,
          "longitude": 0,
          "sourceQuery": 0
        }),
    })
    const data = await res.json();
    return data.accessToken;
}

export async function fetchBonus(access_token) {
    const res = await fetch(API_BONUS + `/api/v3/ibonus/generalinfo/${access_token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'AccessKey': ACCESS_KEY,
        },
    });
    const data = await res.json();
    return data.data;
}

export function formatDate(str) {
    const date = new Date(str);
    const day = date.getDate();
    const month = date.getMonth().toString().padStart(2, '0');
    return `${day}.${month}`;
}