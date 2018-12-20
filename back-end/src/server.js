require('dotenv').config();

const createServer = require('./createServer');

const { PORT, FRONTEND_URL } = process.env;
const server = createServer();

// TODO: Implement middleware to handle session cookies (JWT) and get tokens off of local storage

server.start(
  {
    cors: {
      origin: FRONTEND_URL,
      credentials: true,
    },
  },
  // eslint-disable-next-line no-console
  () => console.log(`Server is listening on http://localhost:${PORT}`),
);
