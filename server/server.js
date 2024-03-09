const express = require('express')
const app = express();
const cors = require('cors');
const pool = require('./db');
const Member = require('../models/member.model');
const CRUD = require('./crud');
const PORT = 5000;
const CLIENT_PORT = 3000;
const URL = `http://localhost:${CLIENT_PORT}`
const authRouter = require('./routers/authRouter')


//middleware
app.use(cors({
  origin: URL,
  credentials: true
}));
app.use(express.json()); // gives us access to request.body to get json data

/* Authentication */
app.use("/auth", authRouter);

/* Routes */
/* Create a new user */
app.post('/createUser', async(req, res) => {
  try {
    let {name, email, password} = req.body;
    let newMem = new Member(name, email, password);
    console.log(CRUD.CREATE_MEMBER);
    const newMember = await pool.query(CRUD.CREATE_MEMBER, newMem.toArr());
    res.json(newMember.rows[0]);

  }catch(err) {
   console.log(err); 
  } 
});

/* Get all members */
app.get('/members', async(req, res) => {
  try {
    const allMembers = await pool.query(CRUD.READ_ALL_MEMBER);
    res.json(allMembers.rows)
  } catch (error) {
   console.error(error.message) 
  }
});

/* Get one member */
app.get('/members/:id', async(req, res) => {
  try {
    console.log(req.params);
    const member = await pool.query(CRUD.READ_MEMBER, [req.params.id]);
    res.json(member.rows[0]);
  } catch (error) {
   console.error(error.message); 
  }
});

/* Update a member */
app.put('/members/:id', async(req, res) => {
  const {id} = req.params;
  const {name, email, password} = req.body;
  const updateMember = await pool.query(CRUD.UPDATE_MEMBER, [name, email, password, id]);
  res.json(updateMember.rows[0]);
});

/* Delete a member */
app.delete('/members/:id', async(req, res) => {
  const {id} = req.params;
  const deletedMember = await pool.query(CRUD.DELETE_MEMBER, [id]);
  res.json(`MEMBER with id: ${id} was deleted`);
});

/* Start server */
app.listen(PORT, () => {
  console.log(`Server has started on ${PORT}`);
});
