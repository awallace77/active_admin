const MEMBER_TABLE = 'member';
const TRAINER_TABLE = 'trainer';


/* SQL Statements */ 
let CRUD = {
  READ_ALL_MEMBER: `SELECT * FROM ${MEMBER_TABLE}`,
  
  /* Member */
  CREATE_MEMBER: `INSERT INTO ${MEMBER_TABLE} (name, email, password) VALUES ($1, $2, $3) RETURNING *`, 
  READ_MEMBER: `SELECT * FROM ${MEMBER_TABLE} WHERE ${MEMBER_TABLE}.member_id = $1`,
  UPDATE_MEMBER: `UPDATE ${MEMBER_TABLE} SET name = $1, email = $2, password = $3 WHERE ${MEMBER_TABLE}.member_id = $4 RETURNING *`,
  DELETE_MEMBER: `DELETE FROM ${MEMBER_TABLE} WHERE ${MEMBER_TABLE}.member_id = $1`,

  /* Trainer */
  READ_ALL_TRAINER: `SELECT * FROM ${TRAINER_TABLE}`,
  CREATE_TRAINER: `INSERT INTO ${TRAINER_TABLE} (name, email, password, specialty) VALUES ($1, $2, $3, $4) RETURNING *`, 
  READ_TRAINER: `SELECT * FROM ${TRAINER_TABLE} WHERE ${TRAINER_TABLE}.trainer_id = $1`,
  UPDATE_TRAINER: `UPDATE ${TRAINER_TABLE} SET name = $1, email = $2, password = $3, specialty = $4 WHERE ${TRAINER_TABLE}.trainer_id = $5 RETURNING *`,
  DELETE_TRAINER: `DELETE FROM ${TRAINER_TABLE} WHERE ${TRAINER_TABLE}.trainer_id = $1`,
}

module.exports = CRUD;
