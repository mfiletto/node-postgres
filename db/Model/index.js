const { UserModel, UserSchema } = require('./user.model');

function createUserModel(sequelize) {
  UserModel.init(UserSchema, UserModel.config(sequelize));
}

module.exports = createUserModel;