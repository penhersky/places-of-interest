const faker = require("faker");
const fs = require("fs");

const canBeNull = (id, data) => (id % 3 === 0 ? null : data);

/**
 *
 * @param {number} count
 * @param {() => ({ schema })} generator
 * @returns {schemasByData[]}
 */
const generateWithId = (count, generator) => {
  const data = [];
  while (count >= 0) {
    data.push({
      id: count,
      ...generator(count),
    });
    count--;
  }
  return data;
};

// users generation
const generateUsers = (number) =>
  generateWithId(number, (id) => ({
    name: faker.name.firstName(),
    description: canBeNull(id, faker.lorem.paragraphs(2)),
    image: canBeNull(id, faker.image.avatar()),
    backgroundImage: canBeNull(id, faker.image.nature()),
    email: faker.internet.email(),
    gender: canBeNull(id, faker.name.gender()),
    birth: canBeNull(id, faker.date.past()),
    phoneNumber: canBeNull(id, faker.phone.phoneNumber()),
    createdAt: faker.date.past(),
  }));

fs.writeFileSync(
  "./db.json",
  JSON.stringify({
    users: generateUsers(10),
    authUser: [
      {
        id: 1,
        name: "Megan Fox",
        email: "meganFox@gmail.com",
        image:
          "https://www.usmagazine.com/wp-content/uploads/2021/07/Megan-Fox-Reveals-Becoming-a-Mother-Saved-Her.jpg",
      },
    ],
  })
);
