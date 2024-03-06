const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  password: "Wolfthorn@77",
  host: "localhost",
  port: "5432", 
  database: "fitness_app"
});

module.exports = pool;