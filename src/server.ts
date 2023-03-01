import express from 'express';
import morgan from 'morgan';
import config from './config';
import { connectMySql } from './services/my-sql';
import beefsController from './controllers/beefs-controller';

const server = express();

server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());
server.use('/api/beefs/', beefsController);

connectMySql(() => {
  server.listen(config.server.port, () => {
    console.log(`server is running on: http://${config.server.domain}:${config.server.port}`);
  });
});
