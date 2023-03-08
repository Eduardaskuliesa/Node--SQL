/* eslint-disable import/prefer-default-export */
import mysql from 'mysql2/promise';
import { colonObjectQueryFormat } from '../../services/my-sql';
import config from '../../config';
import { BeefViewModel, PartialBeefData } from '../types';
import SQL from './sql';

type PrepareSqlResult = [string, Record<string, string>];

type PrepareSql = (beefData: PartialBeefData) => PrepareSqlResult;

const prepareImagesSql: PrepareSql = (beefData) => {
  const bindingsOrNull = beefData.images?.reduce((prevBindings, img, i) => ({
    ...prevBindings,
    [`img${i + 1}`]: img,
  }), {} as Record<string, string>) ?? null;
  const shouldInsert = bindingsOrNull !== null;
  const shouldInsertImages = beefData.images !== undefined && beefData.images.length > 0;

  const sql = shouldInsert
    ? `
      DELETE FROM images 
      WHERE images.beefId = :id;
    
      ${shouldInsertImages ? `INSERT INTO images (src, beefId) VALUES
        ${Object.keys(bindingsOrNull).map((imgBinding) => `(:${imgBinding}, :id)`).join(',\n')};`
    : ''}
    ` : '';

  const bindings = bindingsOrNull ?? {};

  return [sql, bindings];
};

const prepareFarmSql: PrepareSql = (beefData) => {
  const sql = beefData.farm !== undefined ? `
    INSERT INTO farms (country, name) VALUES
    (:country, :name);` : '';
  const bindings = beefData.farm ?? {};

  return [sql, bindings];
};

const prepareBeefSql: PrepareSql = (beefData) => {
  const propsSql = [
    beefData.cut !== undefined ? 'cut = :cut' : null,
    beefData.rating !== undefined ? 'rating = :rating' : null,
    beefData.price !== undefined ? 'price = :price' : null,
    beefData.farm !== undefined ? 'farmId = LAST_INSERT_ID()' : null,
  ].filter((setPropSql) => setPropSql !== null).join(',\n');

  const sql = propsSql.length > 0 ? `
    UPDATE beefs SET
    ${propsSql}
    WHERE beefs.id = :id;
    ` : '';

  const bindings: Record<string, string> = {};
  if (beefData.cut !== undefined) bindings.cut = beefData.cut;
  if (beefData.rating !== undefined) bindings.rating = String(beefData.rating);
  if (beefData.price !== undefined) bindings.price = String(beefData.price);

  return [sql, bindings];
};

// const prepareSqlArr = [preparebeefSql, preparefarmSql, prepareImagesSql];

export const updateBeef = async (
  id: string,
  beefData: PartialBeefData,
): Promise<BeefViewModel> => {
  const mySqlConnection = await mysql.createConnection(config.db);
  mySqlConnection.config.queryFormat = colonObjectQueryFormat;

  // const [preparedSql, bindings] = prepareSqlArr.reduce<PreparationResult>(
  //   ([prevSql, prevBindings], prepareSql) => {
  //     const [sql, binds] = prepareSql(beefData);

  //     return [
  //       sql + prevSql,
  //       { ...prevBindings, ...binds },
  //     ];
  //   },
  //   [`${SQL.SELECT} WHERE b.id = :id ${SQL.GROUP}`, { id }],
  // );

  const [imagesSql, imagesBindings] = prepareImagesSql(beefData);
  const [farmSql, farmBindings] = prepareFarmSql(beefData);
  const [beefSql, beefBindings] = prepareBeefSql(beefData);

  const preparedSql = `
    ${imagesSql}
    ${farmSql}
    ${beefSql}
    ${SQL.SELECT}
    WHERE b.id = :id
    ${SQL.GROUP};
  `.trim();

  const bindings = {
    id,
    ...imagesBindings,
    ...farmBindings,
    ...beefBindings,
  };

  const [queryResultsArr] = await mySqlConnection.query<BeefViewModel[]>(preparedSql, bindings);
  const updatedbeef = queryResultsArr.at(-1) as BeefViewModel;

  await mySqlConnection.end();

  return updatedbeef;
};
