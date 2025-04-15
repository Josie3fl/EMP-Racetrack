//const mysql = require("mysql2");
//import mysql from "mysql2"; // Import mysql2 with promise support

/*
const db = mysql.createConnection({
    host: "localhost",
    user: "postgres", // Change this if your MySQL username is different
    password: "Cod3r@36",
    database: "employee_db"
});
db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL");
});
*/

import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import pg from "pg"; // Import pg for PostgreSQL
const { Pool } = pg; // Destructure Pool from pg

const db = new Pool({
    host: "localhost",
    user: process.env.DB_USER, // Change this if your MySQL username is different
    password: process.env.DB_PASSWORD,
    database: process.env.NAME,
    port: 5432, // Default PostgreSQL port
});

const connectionToDB = async () => {
    try {
        await db.connect();
        console.log("Connected to PostgreSQL");
    } catch (err) {
        console.error("Connection error", err.stack);
        process.exit(1);   // this will stop the server if the connection fails
    }
}

export { db, connectionToDB };
// export default db; // Export the db object for use in other files