interface Config {
  apiUrl: string;
  baseUrl: string;
}

export const config: Config = {
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1',
  baseUrl: process.env.REACT_APP_BASE_URL || 'http://localhost:3000',
};