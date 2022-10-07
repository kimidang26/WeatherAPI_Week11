import express from "express";
// import { restart } from "nodemon";
import db from "../db/db-connection.js";
const router = express.Router();

// **********GET REQUEST*******************

router.get('/', async (req, res) => {
    try {
      const recentSearch = await db.query('SELECT * FROM recent_search ORDER BY id');
      res.send(recentSearch);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

  export default router;