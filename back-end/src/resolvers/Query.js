const Query = {
  async users(parent, args, context, info) {
    const userList = await context.prisma.users();
    return userList;
  },

  async events(parent, args, context, info) {
    const eventList = await context.prisma.events();
    return eventList;
  },
};

module.exports = Query;
