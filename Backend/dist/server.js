const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(cors()); // enable cors
app.get('/', (req, res) => {
    console.log(req.body);
    console.log('status success');
    res.send('OK');
});
app.get('/api/transactions', (req, res) => {
    res.send(require('./transactions.json'));
});
app.listen(8080, () => {
    console.log('Express app listening on port 8080!');
});
//# sourceMappingURL=server.js.map