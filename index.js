const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const errors = require('./network/errors')
const router = require('./components/customers/router')
const config = require('./config')

const PORT = config.customers_port || 3004
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/customers', router);

app.use(morgan("dev"));
app.use(errors);

app.listen(PORT, () => {
    console.log('customers in', PORT);
});