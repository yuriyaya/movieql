export const people = [
  {
    id: 1,
    name: "Yuri",
    age: 18,
    gender: "male",
  },
  {
    id: 2,
    name: "Yuri2",
    age: 182,
    gender: "male2",
  },
  {
    id: 3,
    name: "Yuri3",
    age: 183,
    gender: "male3",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
