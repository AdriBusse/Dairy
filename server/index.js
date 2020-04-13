const express = require('express');

PORT = 5000;

const app = express()

app.listen(PORT, console.log(`server listen on Port ${PORT}`));