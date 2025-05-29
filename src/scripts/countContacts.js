import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data || '[]');
    const arrayLength = contacts.length;

    return arrayLength;
  } catch (err) {
    console.error('Ошибка чтения контактов:', err);
    return 0;
  }
};
const main = async () => {
  const count = await countContacts();
  console.log(`Количество контактов: ${count}`);
};

main();
