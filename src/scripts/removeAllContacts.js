import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf8');
    console.log('Done clean');
    return true;
  } catch (err) {
    console.log('Error:', err);
    return false;
  }
};

removeAllContacts();
