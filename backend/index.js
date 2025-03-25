//dependencies
import express from "express"
import cookieParser from "cookie-parser"
import path from 'path'
import dotenv from 'dotenv'

//utils
import connectDB from "./config/db"

dotenv.config()
const port = process.env.PORT || 3000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World')
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname + '/uploads')))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});