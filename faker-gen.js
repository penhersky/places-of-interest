const faker = require("faker");
const fs = require("fs");

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
      ...generator(),
    });
    count--;
  }
  return data;
};

// users generation
const generateUsers = (number) =>
  generateWithId(number, () => ({
    name: faker.name.firstName(),
    description: faker.lorem.paragraphs(2),
    image: faker.image.avatar(),
    email: faker.internet.email(),
  }));

fs.writeFileSync(
  "./db.json",
  JSON.stringify({
    users: generateUsers(10),
    authUser: {
      id: 1,
      name: "Megan Fox",
      email: "meganFox@gmail.com",
      image:
        "https://www.usmagazine.com/wp-content/uploads/2021/07/Megan-Fox-Reveals-Becoming-a-Mother-Saved-Her.jpg",
    },
  })
);
