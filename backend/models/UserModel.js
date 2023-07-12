import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// UserModel.js: Model Sequelize untuk entitas Pengguna. 
// Menentukan struktur tabel dan tipe kolom untuk menyimpan informasi pengguna.

const { DataTypes } = Sequelize;

const User = db.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
