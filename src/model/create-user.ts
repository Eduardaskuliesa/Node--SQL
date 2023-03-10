/* eslint-disable import/prefer-default-export */
import mysql from 'mysql2/promise';
import config from '../config';
import { UserEntityRow } from '../auth/types';
import SQL from './sql';
import BcryptService from '../services/bcrypt-services';

type UserData = {
  email: string,
  password: string,
  name: string,
  surname: string,
};

export const createUser = async ({
  email,
  password,
  name,
  surname,
}: UserData): Promise<UserEntityRow> => {
  const mySqlConnection = await mysql.createConnection(config.db);

  const preparedSql = `
    INSERT INTO users (email, password, name, surname) VALUES 
    (?, ?, ?, ?);
    ${SQL.SELECT}
    WHERE users.id = LAST_INSERT_ID();
  `;

  const hashedPassword = BcryptService.hash(password);

  const preparedSqlData = [email, hashedPassword, name, surname];
  const [queryResultsArr] = await mySqlConnection.query(
    preparedSql,
    preparedSqlData,
  );

  const [createdUser] = (queryResultsArr as UserEntityRow[][])[1];

  mySqlConnection.end();

  return createdUser;
};
