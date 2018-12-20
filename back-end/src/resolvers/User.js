const User = {
  async events(parent, args, context, info) {
    const userEvents = await context.prisma.user({ id: parent.id }).events();
    return userEvents;
  },
};

module.exports = User;
