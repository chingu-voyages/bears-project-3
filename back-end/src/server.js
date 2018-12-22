require('dotenv').config();

const createServer = require('./createServer');

const { PORT, FRONTEND_URL } = process.env;
const server = createServer();

// TODO: Implement middleware to handle session cookies (JWT) and get tokens off of local storage

// server.express.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', FRONTEND_URL);
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

server.start(
  // {
  // cors: {
  //   origin: FRONTEND_URL,
  //   credentials: true,
  // },
  // },
  // eslint-disable-next-line no-console
  () => console.log(`Server is listening on http://localhost:${PORT}`),
);
