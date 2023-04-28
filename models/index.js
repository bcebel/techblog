const User = require('./User');
const Project = require('./Project');
const Response = require('./response.js');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
});

Project.hasMany(Response, {
  foreignKey: 'id',
});

module.exports = { User, Project, Response };
