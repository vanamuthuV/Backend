import express from "express";
import Poool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {jwtToken} from "../utils/jwthelpers.js"

/*

The major mistake i mad is that await bcrypt is blocking every further steps so be carefull while youn are using.

*/

const { Jwt } = jwt;

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const Users = await Poool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [email]
    );
    if (Users.rows.length === 0) {
      return res.status(401).json({ error: "Email Is Not Regiterd" });
    } else {
      const validPass = await bcrypt.compare(
        password,
        Users.rows[0].user_password
      );
      if (validPass === true) {
        let tokens = jwtToken(Users.rows[0]);
        res.cookie('refresh_token', tokens.refereshToken, { httpOnly: true }); // Here When We Make front-end and backend to run on 
        // different port then wwe have to use {httpOnly : true, sameSite : "none", secure : true}
        res.status(200).json(tokens);
      } else return res.status(401).json({ error: "Invalid Password!!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/refresh', async (req, res) => {
  try {
    let refreshToken = req.cookies.refresh_token;

    if (refreshToken == null)
      return res.status(401).json({ error: "Token Is Null" });

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (error, user) => {
      if (error) return res.status(403).json({ error: error.message });
      let token = jwtToken(user)
      res.cookie("refresh_token", token.refereshToken, { httpOnly: true });
      res.json(token)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
})

router.delete('/refresh', (req, res) => {
  try {
    res.clearCookie("refresh_token");
    res.status(200).json({ message: "Refresh Toekn Deletion Success!!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

export default router;