
const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
//to add more scurity dotenv can be used
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


// Middleware
// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para cargar módulos individuales
app.get('/modules/:moduleName', (req, res) => {
    const moduleName = req.params.moduleName;
    const filePath = path.join(__dirname, 'views', `${moduleName}.html`);
    res.sendFile(filePath);
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Servidor iniciado en http://localhost:${PORT}`));

// app.listen(PORT, () => console.log(`Servidor iniciado en http://localhost:${PORT}`));
