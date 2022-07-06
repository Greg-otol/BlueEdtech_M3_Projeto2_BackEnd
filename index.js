const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/toDoLists.routes');
const connectionDB = require('./src/database/database');
const swaggerRoute = require('./src/routes/swagger.route');

const port = 3000;
const application = express();

connectionDB();

application.use(express.json());
application.use(cors());
application.use('/todolists', routes);
application.use('/api', swaggerRoute);

application.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
