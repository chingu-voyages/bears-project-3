const Event = {
  async owner(parent, args, context, info) {
    const eventOwner = await context.prisma.event({ id: parent.id }).user();
    return eventOwner;
  },
};

module.exports = Event;
