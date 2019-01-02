require('dotenv').config();
const jwt = require('jsonwebtoken');

const { APP_SECRET } = process.env;

function getUserId(context) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userID } = jwt.verify(token, APP_SECRET);

    return userID;
  }

  throw new Error('Not authenticated.');
}

module.exports = getUserId;
