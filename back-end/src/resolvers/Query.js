const Query = {
  async users(parent, args, context, info) {
    const userList = await context.prisma.users();
    return userList;
  },
};

module.exports = Query;
