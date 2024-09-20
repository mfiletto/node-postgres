const { Model, DataTypes, Sequelize } = require('sequelize');

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
  customer_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
};

class Customer extends Model {
  // static means that the method is called on the class itself, not on an instance of the class
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false
    };
  }
}

module.exports = { Customer, CustomerSchema, CUSTOMER_TABLE };
