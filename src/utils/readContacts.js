import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';
export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error read:', err);
    return [];
  }
};
