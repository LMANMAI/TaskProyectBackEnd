const express = require('express');
const conectarDB = require('./config/database');
const cors = require('cors');
const app = express();
//hanilitar express.json
app.use(express.json({ extended: true }));
//habilito cors
app.use(cors());
//conceto con la db
conectarDB();
const port = process.env.port || 4000;
//importo las rutas
app.use('/api/users', require('./routes/usurios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyect', require('./routes/proyecto'));
app.use('/api/task', require('./routes/task'));

//inicio del servidor
app.listen(port, '0.0.0.0', ()=>{
    console.log('desde el servidor, en el puerto:', PORT);
})