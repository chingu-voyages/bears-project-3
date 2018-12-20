const Query = {
  async events(parent, args, context, info) {
    const events = await context.prisma.query.events();
    return events;
  },

  async users(parent, args, context, info) {
    const users = await context.prisma.query.users();
    return users;
  }
};

module.exports = Query;
