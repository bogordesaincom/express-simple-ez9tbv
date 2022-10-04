const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const cors = require('cors');
const RTSPClient = require('rtsp-client');

app.use(express.static('static'));

app.use(cors());

const client = new RTSPClient();

await client.connect(
  'rtsp://admin:Ksgcctv18@36.71.159.222:80/cam/realmonitor?channel=1&subtype=1'
);

const options = await client.options();

console.log(options);

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
