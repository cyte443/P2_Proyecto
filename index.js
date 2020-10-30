require('dotenv').config();

const express = require('express');
const cors = require('cors');
//const sql = require('mssql');
const app = express();

app.use(cors({
    origin: true
}));
app.use(express.json());

app.use('/api/alumnos', require('./routes/alumnos'));
app.use('/api/docentes', require('./routes/docentes'));
app.use('/api/materias', require('./routes/materias'));

app.listen(process.env.PORT);