import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./auth/routes/AuthRoute.js";

// Menginisialisasi aplikasi Express.
// Menggunakan express-fileupload untuk mengelola upload file.
// Menggunakan cors untuk mengatasi masalah kebijakan lintas sumber (CORS).
// Menggunakan express.json() untuk mem-parsing body permintaan sebagai JSON.
// Menggunakan express.static() untuk menyajikan file statis dari direktori public.
// Menggunakan rute ProductRoute untuk menangani permintaan terkait produk.
// Menggunakan rute /auth untuk menangani permintaan terkait autentikasi.
// Aplikasi mendengarkan pada port 5000 dan mencetak pesan "Server Up and Running..." saat server berjalan.

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);
app.use("/auth", AuthRoute);

app.listen(5000, ()=> console.log('Server Up and Running...'));