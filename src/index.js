const express = require('express');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use('/', authRoutes);
app.use(cors());

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is up and running...')
})