export const fullUrl = window.location.origin;
export const LOCALE = "EN";

export const localhostDev = import.meta.env.VITE_APP_URL;

const APP_URL = localhostDev;

export const APIURL = APP_URL !== undefined ? APP_URL : fullUrl + '/api';
