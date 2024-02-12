import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: "root",
  password: "",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const ExecuteQuery = async (query, data) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, data);
    return result;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

export default ExecuteQuery;
