/* eslint-disable import/prefer-default-export */
import mysql from 'mysql2/promise';
import config from '../../config';
import { BeefViewModel } from '../types';
import SQL from './sql';

export const getBeefs = async (): Promise<BeefViewModel[]> => {
  const mySqlConnection = await mysql.createConnection(config.db);

  const sql = `
    ${SQL.SELECT}
    ${SQL.GROUP}
  `;
  const [beefs] = await mySqlConnection.query<BeefViewModel[]>(sql);

  mySqlConnection.end();

  return beefs;
};
