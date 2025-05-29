import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Ошибка чтения контактов:', err);
    return [];
  }
};
const main = async () => {
  const contacts = await getAllContacts();
  console.log('Список контактов:', contacts);
};

main();
