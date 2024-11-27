var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;

//
//
// const express = require('express');
//
// module.exports = (pool) => {
//    const router = express.Router();
//
//    // Ruta principal
//    router.get('/', async (req, res) => {
//        try {
//            // Consulta a la base de datos
//            const result = await pool.query('SELECT * FROM publicaciones ORDER BY fecha DESC');
//            const publicaciones = result.rows;
//
//            // Renderiza la vista con los datos
//            res.render('index', { publicaciones });
//        } catch (error) {
//            console.error('Error al obtener publicaciones:', error);
//            res.status(500).send('Error interno del servidor');
//        }
//    });
//
//    return router;
// };
//
