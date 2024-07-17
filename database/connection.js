// Escribir el código para conectarse a la base de
// datos MySQL y ejecutar una consulta simple.
// Exportar la archivo db.sql
const connection = require('./connection');

const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the database');
});

// Perform a simple query
connection.query('SELECT * FROM MAQUINARIA', (err, results) => {
    if (err) {
        console.error('Error executing the query: ', err);
        return;
    }
    console.log('Results: ', results);
});

// Close the connection
connection.end((err) => {
    if (err) {
        console.error('Error closing the connection: ', err);
        return;
    }
    console.log('Connection closed');
});

