import { writeFile } from 'node:fs/promises';
async function noteToSelf() {
  try {
    const argument = process.argv.slice(2);
    const promise = writeFile('note.txt', `${argument}\n`);
    await promise;
  } catch (err) {
    console.error(err);
  }
}
noteToSelf();
