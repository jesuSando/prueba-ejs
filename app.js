import expressLayouts from 'express-ejs-layouts';
import express from 'express';
import routes from './routes/index.routes.js';
import dotenv from 'dotenv'
dotenv.config();

const app = express();

app.set('view engine', 'ejs');

app.use(expressLayouts);

app.set('layout', 'layout');

// Rutas
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
