// CORRECTED backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const needsRoutes = require('./routes/needsRoutes');

// --- FIX IS HERE ---
// Create the app variable immediately after imports
const app = express();
// -------------------

const PORT = process.env.PORT || 5000;

// Now you can use app, because it has been defined
app.use(cors());
app.use(express.json());

// ... (the rest of your server.js code is correct)
