const yuri = {
  name: "Yuri",
  age: 18,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => yuri,
  },
};

export default resolvers;
