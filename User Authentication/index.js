import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import userrouter from "./routes/userroute.js"
import authRouter from "./routes/authroute.js"

// As we set the type as module therefore the import must have .extensions which is not required in type : commonjs

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = dirname(fileURLToPath(import.meta.url));
const corOptions = { Credential: true, origin: process.env.url || '*' };

app.use(cors(corOptions));
app.use(json());
app.use(cookieParser());

app.use('/api/data', userrouter)
app.use('/api/auth', authRouter)

app.use('/', express.static(join(__dirname, 'public')));
app.listen(PORT, () => { console.log(`server is listening on ${PORT}...`) });

/*

1. We have to encrypt the users password therefore we will be using a module name bcrypt which will encrypt the password.
2. bcrypt must be imported where you are writing the queries to the database inorder to hash the password and store.
3. To login you just want to compare the entered pass word with the hashed password using the .compare(pass, hashpass);
4. After That JWT :

*/