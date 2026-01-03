const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require('./Config/connDB');


const authRoutes = require('./Routes/AuthRoutes');


app.use(
    cors({
        origin: '*',
        methods: ['GET', 'PUT', 'DELETE', 'POST'],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
)

connectDB()
app.use(express.json())

app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});