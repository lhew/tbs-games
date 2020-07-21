const { exec } = require('child_process');
const fs = require('fs');

const filename = 'CHANGELOG.md';
let currentVer = '';

exec('git rev-parse --abbrev-ref HEAD', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }

  currentVer = stdout;
});

exec("git log --no-merges master..develop --pretty=format:' - %h - %s'", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }

  const file = fs.readFileSync(filename, 'utf-8');
  const match = file.match(/.+\n/g);
  match.splice(
    2,
    0,
    `### ${currentVer}
${stdout}
\n`,
  );

  fs.writeFileSync(filename, `${match.join('')}`);
});
