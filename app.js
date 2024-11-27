const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres', // tu usuario de PostgreSQL
  host: 'localhost',
  database: 'db_prueba',
  password: 'luisfernang10', // tu contraseña de PostgreSQL
  port: 5432,
});

client.connect();

// Middleware para parsear JSON en las peticiones
app.use(bodyParser.json());

// Ruta para obtener publicaciones
app.get('/posts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las publicaciones');
    }
});

// Ruta para crear una nueva publicación
app.post('/posts', async (req, res) => {
    const { user_id, post_image_url, caption } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO posts (user_id, post_image_url, caption) VALUES ($1, $2, $3) RETURNING *',
            [user_id, post_image_url, caption]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear la publicación');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Servidor iniciado en http://localhost:${PORT}`));


