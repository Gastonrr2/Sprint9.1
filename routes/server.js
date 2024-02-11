const express = require('express');
const testsRoutes = require('./tests');

const app = express();

// Middleware para analizar el cuerpo de las solicitudes POST
app.use(express.json());

app.use('/tests', testsRoutes);

app.listen(5432, () => {
  console.log('Servidor corriendo en el puerto 5432');
});

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.get('/task', (req, res) => {
  const task = {
    titulo: "Mi primera tarea",
    prioridad: 1,
    autor_id: 1,
    completado: true,
  };

  res.json(task);
});

let tasks = []; 

app.post('/task', (req, res) => {
  const task = req.body; // 
  tasks.push(task); 
  res.status(201).json(task); // Retorna la tarea creada 
});