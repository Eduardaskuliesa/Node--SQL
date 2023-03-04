/* eslint-disable import/prefer-default-export */
import mysql from 'mysql2/promise';
import config from '../../config';
import { BeefViewModel } from '../types';

export const deleteBeef = async (id: string): Promise<void> => {
  const mySqlConnection = await mysql.createConnection(config.db);

  const preparedSql = `
    DELETE FROM images WHERE beefId = ?;
    DELETE from beefs WHERE id = ?;`;
  const preparedSqlData = [id, id];

  await mySqlConnection.query<BeefViewModel[]>(preparedSql, preparedSqlData);

  mySqlConnection.end();
};
