export const API_URL: string = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export const API_TIMEOUT: number = Number(process.env.REACT_APP_API_TIMEOUT) || 0;

export const LOADING_DELAY: number = Number(process.env.REACT_APP_LOADING_DELAY) || 0;

export const BOUNCE_DELAY: string = process.env.REACT_APP_BOUNCE_DELAY || '-1s';

export const MAX_FILE_UPLOAD: number = Number(process.env.MAX_FILE_UPLOAD) || 2000000;
