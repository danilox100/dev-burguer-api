const { resolve } = require('node:path');
const express = require('express');

const uploadPath = resolve(__dirname, '..', '..', 'uploads');

const fileRoutesConfig = express.static(uploadPath);

<<<<<<< HEAD

=======
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479
module.exports = fileRoutesConfig;
