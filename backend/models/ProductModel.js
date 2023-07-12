import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// ProductModel.js: Model Sequelize untuk entitas Produk. 
// Menentukan struktur tabel dan tipe kolom untuk menyimpan informasi produk.

const {DataTypes} = Sequelize;

const Product = db.define('product',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default Product;

(async()=>{
    await db.sync();
})();