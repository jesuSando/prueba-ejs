const express = require('express');
const app = express();

const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');

// Usar el middleware de layouts ANTES de las rutas
app.use(expressLayouts);

// Opcional: puedes especificar un layout por defecto (usa views/layout.ejs)
app.set('layout', 'layout');

// Rutas
const userRoutes = require('./routes/userRoutes');
app.use('/usuarios', userRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
