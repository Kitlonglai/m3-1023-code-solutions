import { writeFile, readFile } from 'fs/promises';

async function cP() {
  try {
    const [source, destination] = process.argv.slice(2);
    const data = await readFile(source, 'utf-8');
    await writeFile(destination, data);
  } catch (err) {
    console.error(err);
  }
}
cP();
