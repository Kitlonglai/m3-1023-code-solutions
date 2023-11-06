import { writeFile } from 'node:fs/promises';
async function writeRand() {
  try {
    const randomNum = Math.random();
    const promise = writeFile('random.txt', `${randomNum}\n`);
    await promise;
  } catch (err) {
    console.error(err);
  }
}
writeRand();
