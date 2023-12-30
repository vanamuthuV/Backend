import pg from "pg";

// Be cautious while importing Pool

const { Pool } = pg;

let pool = {
  user: "xxxxxx",
  password: "xxxxxxx",
  database: "xxxxxxx",
  host: "xxxx",
  port: xxxx,
};

const poolconfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    }
    : pool;
  
const Poool = new Pool(poolconfig);

export default Poool;
