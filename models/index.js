const User = require('./User');
const Response = require('./Users/Brian/Desktop/bootcamp/projects/Module-14/techblog/models/Response');
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
});

Project.hasMany(Response, {
  foreignKey: 'project_id',
});

User.hasMany(Response, {
  foreignKey: 'user_id',
});
module.exports = { User, Project, Response };
