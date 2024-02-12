const express = require('express');
const knex = require('./database');
const listaDeTareas = require('./task');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  knex('tu_tabla').select('*')
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: 'Error al obtener datos' }));
});

app.get('/hola', (req, res) => {
  res.send('Hola Mundo');
});

app.get('/task', (req, res) => {
  res.json({
    success: true,
    message: 'Lista de tareas',
    data: listaDeTareas
  });
});

app.post('/task', (req, res) => {
  const nuevaTarea = req.body;

  knex('tareas').insert(nuevaTarea)
    .then(() => res.json({
      success: true,
      message: 'Tarea agregada',
      data: nuevaTarea
    }))
    .catch(err => res.status(500).json({ error: 'Error al insertar tarea: ' + err }));
});

/*app.post('/task', (req, res) => {
  const nuevaTarea = req.body;
  listaDeTareas.push(nuevaTarea);
  res.json({
    success: true,
    message: 'Tarea agregada',
    data: nuevaTarea
  });
});*/

app.get('/tasks', (req, res) => {
  knex.select('*').from('tareas')
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: 'Error al obtener datos' }));
});

app.put('/task/:id', (req, res) => {
  const id = req.params.id;
  const tareaActualizada = req.body;

  knex('tareas').where({ id: id }).update(tareaActualizada)
    .then(() => res.json({
      success: true,
      message: 'Tarea actualizada',
      data: tareaActualizada
    }))
    .catch(err => res.status(500).json({ error: 'Error al actualizar tarea: ' + err }));
});


app.listen(3000, () => {
  console.log('Aplicación escuchando en el puerto 3000');
});