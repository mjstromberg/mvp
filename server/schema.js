var sequelize = new Sequelize('rentocracy', 'root', '');

var User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});
