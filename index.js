const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const recipeRouter = require('./routes/recipe');
const adminRouter = require('./routes/admin');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRouter); // User authentication routes
app.use('/api/recipes', recipeRouter); // Recipe-related routes
app.use('/api/admin', adminRouter); // Admin routes for generating CSV

// MongoDB connection and server start
mongoose.connect('          mongodb://127.0.0.1:27017/RecipeApp?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.8', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(8080, () => {
            console.log('Server running on http://localhost:5000');
        });
    })
    .catch(err => console.error('MongoDB connection error', err));
