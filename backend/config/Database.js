// Database.js: File ini berisi konfigurasi koneksi database menggunakan Sequelize. 
// Melakukan koneksi ke database MySQL dengan mengatur nama database, 
// username, password, host, dan jenis dialect.

import { Sequelize } from "sequelize";
const db = new Sequelize('upload_db','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;