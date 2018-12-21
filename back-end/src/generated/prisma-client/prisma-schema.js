module.exports = {
        typeDefs: /* GraphQL */ `type AggregateComment {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Comment {
  id: ID!
  postedBy: User!
  commentBody: String!
  createdAt: DateTime!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  id: ID!
  postedBy: UserCreateOneWithoutCommentsInput!
  commentBody: String!
  createdAt: DateTime!
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutPostedByInput {
  create: [CommentCreateWithoutPostedByInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutPostedByInput {
  id: ID!
  commentBody: String!
  createdAt: DateTime!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  commentBody_ASC
  commentBody_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommentPreviousValues {
  id: ID!
  commentBody: String!
  createdAt: DateTime!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  commentBody: String
  commentBody_not: String
  commentBody_in: [String!]
  commentBody_not_in: [String!]
  commentBody_lt: String
  commentBody_lte: String
  commentBody_gt: String
  commentBody_gte: String
  commentBody_contains: String
  commentBody_not_contains: String
  commentBody_starts_with: String
  commentBody_not_starts_with: String
  commentBody_ends_with: String
  commentBody_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateDataInput {
  id: ID
  postedBy: UserUpdateOneRequiredWithoutCommentsInput
  commentBody: String
  createdAt: DateTime
}

input CommentUpdateInput {
  id: ID
  postedBy: UserUpdateOneRequiredWithoutCommentsInput
  commentBody: String
  createdAt: DateTime
}

input CommentUpdateManyDataInput {
  id: ID
  commentBody: String
  createdAt: DateTime
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
  update: [CommentUpdateWithWhereUniqueNestedInput!]
  upsert: [CommentUpsertWithWhereUniqueNestedInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyMutationInput {
  id: ID
  commentBody: String
  createdAt: DateTime
}

input CommentUpdateManyWithoutPostedByInput {
  create: [CommentCreateWithoutPostedByInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutPostedByDataInput {
  id: ID
  commentBody: String
  createdAt: DateTime
}

input CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateDataInput!
}

input CommentUpdateWithWhereUniqueWithoutPostedByInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutPostedByDataInput!
}

input CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentUpsertWithWhereUniqueWithoutPostedByInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutPostedByDataInput!
  create: CommentCreateWithoutPostedByInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  commentBody: String
  commentBody_not: String
  commentBody_in: [String!]
  commentBody_not_in: [String!]
  commentBody_lt: String
  commentBody_lte: String
  commentBody_gt: String
  commentBody_gte: String
  commentBody_contains: String
  commentBody_not_contains: String
  commentBody_starts_with: String
  commentBody_not_starts_with: String
  commentBody_ends_with: String
  commentBody_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type Event {
  id: ID!
  createdAt: DateTime!
  category: String!
  name: String!
  description: String
  primaryImage: String
  images: [String!]!
  owner: User!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  eventDate: DateTime
  startingTime: String
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateimagesInput {
  set: [String!]
}

input EventCreateInput {
  id: ID!
  createdAt: DateTime!
  category: String!
  name: String!
  description: String
  primaryImage: String
  images: EventCreateimagesInput
  owner: UserCreateOneWithoutOwnedEventsInput!
  members: UserCreateManyWithoutEventsInput
  eventDate: DateTime
  startingTime: String
  comments: CommentCreateManyInput
}

input EventCreateManyWithoutMembersInput {
  create: [EventCreateWithoutMembersInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateManyWithoutOwnerInput {
  create: [EventCreateWithoutOwnerInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateWithoutMembersInput {
  id: ID!
  createdAt: DateTime!
  category: String!
  name: String!
  description: String
  primaryImage: String
  images: EventCreateimagesInput
  owner: UserCreateOneWithoutOwnedEventsInput!
  eventDate: DateTime
  startingTime: String
  comments: CommentCreateManyInput
}

input EventCreateWithoutOwnerInput {
  id: ID!
  createdAt: DateTime!
  category: String!
  name: String!
  description: String
  primaryImage: String
  images: EventCreateimagesInput
  members: UserCreateManyWithoutEventsInput
  eventDate: DateTime
  startingTime: String
  comments: CommentCreateManyInput
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  category_ASC
  category_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  primaryImage_ASC
  primaryImage_DESC
  eventDate_ASC
  eventDate_DESC
  startingTime_ASC
  startingTime_DESC
}

type EventPreviousValues {
  id: ID!
  createdAt: DateTime!
  category: String!
  name: String!
  description: String
  primaryImage: String
  images: [String!]!
  eventDate: DateTime
  startingTime: String
}

input EventScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  primaryImage: String
  primaryImage_not: String
  primaryImage_in: [String!]
  primaryImage_not_in: [String!]
  primaryImage_lt: String
  primaryImage_lte: String
  primaryImage_gt: String
  primaryImage_gte: String
  primaryImage_contains: String
  primaryImage_not_contains: String
  primaryImage_starts_with: String
  primaryImage_not_starts_with: String
  primaryImage_ends_with: String
  primaryImage_not_ends_with: String
  eventDate: DateTime
  eventDate_not: DateTime
  eventDate_in: [DateTime!]
  eventDate_not_in: [DateTime!]
  eventDate_lt: DateTime
  eventDate_lte: DateTime
  eventDate_gt: DateTime
  eventDate_gte: DateTime
  startingTime: String
  startingTime_not: String
  startingTime_in: [String!]
  startingTime_not_in: [String!]
  startingTime_lt: String
  startingTime_lte: String
  startingTime_gt: String
  startingTime_gte: String
  startingTime_contains: String
  startingTime_not_contains: String
  startingTime_starts_with: String
  startingTime_not_starts_with: String
  startingTime_ends_with: String
  startingTime_not_ends_with: String
  AND: [EventScalarWhereInput!]
  OR: [EventScalarWhereInput!]
  NOT: [EventScalarWhereInput!]
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

input EventUpdateimagesInput {
  set: [String!]
}

input EventUpdateInput {
  id: ID
  createdAt: DateTime
  category: String
  name: String
  description: String
  primaryImage: String
  images: EventUpdateimagesInput
  owner: UserUpdateOneRequiredWithoutOwnedEventsInput
  members: UserUpdateManyWithoutEventsInput
  eventDate: DateTime
  startingTime: String
  comments: CommentUpdateManyInput
}

input EventUpdateManyDataInput {
  id: ID
  createdAt: DateTime
  category: String
  name: String
  description: String
  primaryImage: String
  images: EventUpdateimagesInput
  eventDate: DateTime
  startingTime: String
}

input EventUpdateManyMutationInput {
  id: ID
  createdAt: DateTime
  category: String
  name: String
  description: String
  primaryImage: String
  images: EventUpdateimagesInput
  eventDate: DateTime
  startingTime: String
}

input EventUpdateManyWithoutMembersInput {
  create: [EventCreateWithoutMembersInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutMembersInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithoutOwnerInput {
  create: [EventCreateWithoutOwnerInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput!
  data: EventUpdateManyDataInput!
}

input EventUpdateWithoutMembersDataInput {
  id: ID
  createdAt: DateTime
  category: String
  name: String
  description: String
  primaryImage: String
  images: EventUpdateimagesInput
  owner: UserUpdateOneRequiredWithoutOwnedEventsInput
  eventDate: DateTime
  startingTime: String
  comments: CommentUpdateManyInput
}

input EventUpdateWithoutOwnerDataInput {
  id: ID
  createdAt: DateTime
  category: String
  name: String
  description: String
  primaryImage: String
  images: EventUpdateimagesInput
  members: UserUpdateManyWithoutEventsInput
  eventDate: DateTime
  startingTime: String
  comments: CommentUpdateManyInput
}

input EventUpdateWithWhereUniqueWithoutMembersInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutMembersDataInput!
}

input EventUpdateWithWhereUniqueWithoutOwnerInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutOwnerDataInput!
}

input EventUpsertWithWhereUniqueWithoutMembersInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutMembersDataInput!
  create: EventCreateWithoutMembersInput!
}

input EventUpsertWithWhereUniqueWithoutOwnerInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutOwnerDataInput!
  create: EventCreateWithoutOwnerInput!
}

input EventWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  primaryImage: String
  primaryImage_not: String
  primaryImage_in: [String!]
  primaryImage_not_in: [String!]
  primaryImage_lt: String
  primaryImage_lte: String
  primaryImage_gt: String
  primaryImage_gte: String
  primaryImage_contains: String
  primaryImage_not_contains: String
  primaryImage_starts_with: String
  primaryImage_not_starts_with: String
  primaryImage_ends_with: String
  primaryImage_not_ends_with: String
  eventDate: DateTime
  eventDate_not: DateTime
  eventDate_in: [DateTime!]
  eventDate_not_in: [DateTime!]
  eventDate_lt: DateTime
  eventDate_lte: DateTime
  eventDate_gt: DateTime
  eventDate_gte: DateTime
  startingTime: String
  startingTime_not: String
  startingTime_in: [String!]
  startingTime_not_in: [String!]
  startingTime_lt: String
  startingTime_lte: String
  startingTime_gt: String
  startingTime_gte: String
  startingTime_contains: String
  startingTime_not_contains: String
  startingTime_starts_with: String
  startingTime_not_starts_with: String
  startingTime_ends_with: String
  startingTime_not_ends_with: String
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Mutation {
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  avatarURI: String
  password: String!
  createdAt: DateTime!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  ownedEvents(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID!
  name: String!
  email: String!
  avatarURI: String
  password: String!
  createdAt: DateTime!
  events: EventCreateManyWithoutMembersInput
  ownedEvents: EventCreateManyWithoutOwnerInput
  comments: CommentCreateManyWithoutPostedByInput
}

input UserCreateManyWithoutEventsInput {
  create: [UserCreateWithoutEventsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedEventsInput {
  create: UserCreateWithoutOwnedEventsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCommentsInput {
  id: ID!
  name: String!
  email: String!
  avatarURI: String
  password: String!
  createdAt: DateTime!
  events: EventCreateManyWithoutMembersInput
  ownedEvents: EventCreateManyWithoutOwnerInput
}

input UserCreateWithoutEventsInput {
  id: ID!
  name: String!
  email: String!
  avatarURI: String
  password: String!
  createdAt: DateTime!
  ownedEvents: EventCreateManyWithoutOwnerInput
  comments: CommentCreateManyWithoutPostedByInput
}

input UserCreateWithoutOwnedEventsInput {
  id: ID!
  name: String!
  email: String!
  avatarURI: String
  password: String!
  createdAt: DateTime!
  events: EventCreateManyWithoutMembersInput
  comments: CommentCreateManyWithoutPostedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  avatarURI_ASC
  avatarURI_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  avatarURI: String
  password: String!
  createdAt: DateTime!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  avatarURI: String
  avatarURI_not: String
  avatarURI_in: [String!]
  avatarURI_not_in: [String!]
  avatarURI_lt: String
  avatarURI_lte: String
  avatarURI_gt: String
  avatarURI_gte: String
  avatarURI_contains: String
  avatarURI_not_contains: String
  avatarURI_starts_with: String
  avatarURI_not_starts_with: String
  avatarURI_ends_with: String
  avatarURI_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  id: ID
  name: String
  email: String
  avatarURI: String
  password: String
  createdAt: DateTime
  events: EventUpdateManyWithoutMembersInput
  ownedEvents: EventUpdateManyWithoutOwnerInput
  comments: CommentUpdateManyWithoutPostedByInput
}

input UserUpdateManyDataInput {
  id: ID
  name: String
  email: String
  avatarURI: String
  password: String
  createdAt: DateTime
}

input UserUpdateManyMutationInput {
  id: ID
  name: String
  email: String
  avatarURI: String
  password: String
  createdAt: DateTime
}

input UserUpdateManyWithoutEventsInput {
  create: [UserCreateWithoutEventsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutEventsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutEventsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  update: UserUpdateWithoutCommentsDataInput
  upsert: UserUpsertWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOwnedEventsInput {
  create: UserCreateWithoutOwnedEventsInput
  update: UserUpdateWithoutOwnedEventsDataInput
  upsert: UserUpsertWithoutOwnedEventsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCommentsDataInput {
  id: ID
  name: String
  email: String
  avatarURI: String
  password: String
  createdAt: DateTime
  events: EventUpdateManyWithoutMembersInput
  ownedEvents: EventUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutEventsDataInput {
  id: ID
  name: String
  email: String
  avatarURI: String
  password: String
  createdAt: DateTime
  ownedEvents: EventUpdateManyWithoutOwnerInput
  comments: CommentUpdateManyWithoutPostedByInput
}

input UserUpdateWithoutOwnedEventsDataInput {
  id: ID
  name: String
  email: String
  avatarURI: String
  password: String
  createdAt: DateTime
  events: EventUpdateManyWithoutMembersInput
  comments: CommentUpdateManyWithoutPostedByInput
}

input UserUpdateWithWhereUniqueWithoutEventsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutEventsDataInput!
}

input UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput!
  create: UserCreateWithoutCommentsInput!
}

input UserUpsertWithoutOwnedEventsInput {
  update: UserUpdateWithoutOwnedEventsDataInput!
  create: UserCreateWithoutOwnedEventsInput!
}

input UserUpsertWithWhereUniqueWithoutEventsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutEventsDataInput!
  create: UserCreateWithoutEventsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  avatarURI: String
  avatarURI_not: String
  avatarURI_in: [String!]
  avatarURI_not_in: [String!]
  avatarURI_lt: String
  avatarURI_lte: String
  avatarURI_gt: String
  avatarURI_gte: String
  avatarURI_contains: String
  avatarURI_not_contains: String
  avatarURI_starts_with: String
  avatarURI_not_starts_with: String
  avatarURI_ends_with: String
  avatarURI_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    