const bcrypt = require("bcryptjs");

bcrypt.hash("pepe", 6).then(r => console.log(r));

bcrypt.compare("pepe","$2a$06$U0rPCawrAOishWKApPYUJeJFewqVgwlX1sgnjMHUjjodZdi3mqCwS").then(console.log)