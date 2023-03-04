/* eslint-disable import/prefer-default-export */
import mysql from 'mysql2/promise';
import { NotFoundError } from '../../services/error-service';
import config from '../../config';
import { BeefViewModel } from '../types';
import SQL from './sql';

export const getBeef = async (id: string): Promise<BeefViewModel> => {
  const mySqlConnection = await mysql.createConnection(config.db);

  const preparedSql = `
    ${SQL.SELECT}
    WHERE b.id = ?
    ${SQL.GROUP};
  `;

  const preparedSqlData = [id];
  const [beefs] = await mySqlConnection.query<BeefViewModel[]>(preparedSql, preparedSqlData);

  mySqlConnection.end();

  if (beefs.length === 0) throw new NotFoundError(`beef with id <${id}> was not found`);

  return beefs[0];
};
