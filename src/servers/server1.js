const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});