import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

dotenv.config();

const { SERVER_PORT, SERVER_DOMAIN } = process.env;

if (SERVER_PORT === undefined || SERVER_DOMAIN === undefined) {
  throw new Error('Please define constant in "env" file');
}

const server = express();
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());

const beefs = [
  { id: 1, cut: 'cut 1' },
  { id: 2, cut: 'cut 2' },
  { id: 3, cut: 'cut 3' },
  { id: 4, cut: 'cut 4' },
  { id: 5, cut: 'cut 5' },
];

const apiRouter = express.Router();
server.use('/api', apiRouter);

apiRouter.get('/beefs', (req, res) => {
  res.status(200).json(beefs);
});

apiRouter.post('/beefs', (req, res) => {
  const { body } = req;
  const newBeef = { id: 6, cut: body.cut };
  beefs.push(newBeef);
  res.status(201).json(newBeef);
});

server.listen(5001, () => {
  console.log(`server is runing on : http://${SERVER_DOMAIN}:${SERVER_PORT}`);
});
