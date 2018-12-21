require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Util imports
const getUserId = require('../utils/getUserId');

const { APP_SECRET } = process.env;

const Mutation = {
  async register(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({ ...args, password });
    const token = jwt.sign({ userID: user.id }, APP_SECRET);

    return {
      token,
      user,
    };
  },

  async login(parent, args, context, info) {
    const user = await context.prisma.user({ email: args.email });
    if (!user) {
      throw new Error('Invalid credentials.');
    }

    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      throw new Error('Invalid credentials.');
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    return {
      token,
      user,
    };
  },

  createEvent(parent, args, context, info) {
    const userId = getUserId(context);

    return context.prisma.createEvent({
      name: args.name,
      description: args.description,
      category: args.category,
      owner: { connect: { id: userId } },
    });
  },

  // TODO: joinEvent, leaveEvent, updateEvent, deleteEvent, postComment, editComment, deleteComment, updateUser, deleteUser

  // postComment(parent, args, context, info) {
  //   const userId = getUserId(context);

  //   return context.prisma.postComment({
  //     commentBody: args.commentBody,
  //     postedBy: { connect: { id: userId } },
  //     createdAt: new Date.now(),
  //   });
  // },
};

module.exports = Mutation;
