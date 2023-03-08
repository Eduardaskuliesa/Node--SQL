/* eslint-disable import/prefer-default-export */
import mysql from 'mysql2/promise';
import config from '../../config';
import { BeefViewModel, BeefData } from '../types';
import SQL from './sql';

type CreateBeefQueryResult = [
  mysql.ResultSetHeader,
  mysql.ResultSetHeader,
  mysql.ResultSetHeader,
  mysql.ResultSetHeader,
  BeefViewModel[],
];

export const createBeef = async (beefData: BeefData): Promise<BeefViewModel> => {
  const mySqlConnection = await mysql.createConnection(config.db);

  const preparedSql = `
    INSERT INTO farms (country, name) VALUES 
    (?, ?);
    
    INSERT INTO beefs (cut, price, rating, farmId) VALUES
    (?, ?, ?, LAST_INSERT_ID());
    SET @beefId = LAST_INSERT_ID();
    
    INSERT INTO images (src, beefId) VALUES
    ${beefData.images.map(() => '(?, @beefId)').join(',\n')};
    ${SQL.SELECT}
    WHERE b.id = @beefId
    ${SQL.GROUP};
  `;
  const preparedSqlData = [
    beefData.farm.country,
    beefData.farm.name,
    beefData.cut,
    beefData.price,
    beefData.rating,
    ...beefData.images,
  ];

  const [queryResultsArr] = await mySqlConnection.query(preparedSql, preparedSqlData);
  const [createdBeef] = (queryResultsArr as CreateBeefQueryResult)[4];

  await mySqlConnection.end();

  return createdBeef;
};
