import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { moodItem } from '../models';

const tableName = 'moodData';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'mood-data.db', location: 'default' });
};

export const createTable = async (db) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        value TEXT NOT NULL
    );`;

  await db.executeSql(query);
};

export const getmoodItems = async (db) => {
  try {
    const moodItems = [];
    const results = await db.executeSql(`SELECT rowid as id,value FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        moodItems.push(result.rows.item(index))
      }
    });
    return moodItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get moodItems !!!');
  }
};

export const savemoodItems = async (db, moodItems) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
    moodItems.map(i => `(${i.id}, '${i.value}')`).join(',');

  return db.executeSql(insertQuery);
};

export const deletemoodItem = async (db, id) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};