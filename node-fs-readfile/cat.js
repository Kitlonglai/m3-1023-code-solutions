import { readFile } from 'fs/promises';
async function cat() {
  const files = process.argv.slice(2);
  try {
    const contents = await Promise.all(
      files.map((file) => readFile(file, 'utf8'))
    );
    for (const content of contents) {
      console.log(content);
    }
  } catch (err) {
    console.log(err);
  }
}
cat();
