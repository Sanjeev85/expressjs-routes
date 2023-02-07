import express from 'express';
import bodyParser from 'body-parser'; // for post request

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

// initialize bodyparser (json data in whole application)
app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});
