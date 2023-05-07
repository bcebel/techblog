const sequelize = require('../config/connection');
const { User, Project, Response } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const responseData = require('./responseData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const response of responseData) {
    await Response.create({
      ...response,
      name: users[2].name,
      response_id: 3,
      id: 2,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    process.exit(0);
  }
};
seedDatabase();
