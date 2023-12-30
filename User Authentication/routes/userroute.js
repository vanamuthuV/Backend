import express from "express"
import Poool from "../db.js";
import bcrypt from "bcrypt";
import { AuthenticateToken } from "../middleware/authorization.js";

const router = express.Router();

router.get('/', AuthenticateToken, async (req, res) => {
    const AllData = await Poool.query('SELECT * from users');
    
    res.status(200).json({ "users" : AllData });
})

router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Poool.query('INSERT INTO users (user_name, user_email, user_password) values ($1,$2,$3) RETURNING *', [name, email, hashedPassword]);
        res.status(200).json({users : newUser.rows[0]})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

export default router;