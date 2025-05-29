import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data || '[]');
    if (contacts.length === 0) {
      console.log('Not have contacts');
      return false;
    }
    const remowedContact = contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log(`Done clean: ${remowedContact.name}, ${remowedContact.phone}`);
    return true;
  } catch (err) {
    console.log(`Error:`, err);
    return false;
  }
};

removeLastContact();
