import  express  from "express";
import cors from 'cors';
import db from './db/db.js'

import router from './routes/router.js'
const app = express();

db();
app.use(cors());
// app.use((_req, res, next) => {
//     cors("*");
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader(
//       'Access-Control-Allow-Headers',
//       'X-Requested-With,content-type'
//     );
//     res.setHeader('Access-Control-Allow-Credentials', false);
//     next();
//   });

app.use(express.json());

app.use("/api", router)

app.listen(3000, () => {
    console.log("Servidor rodando");
});