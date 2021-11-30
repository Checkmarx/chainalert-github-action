const exec = require('child_process').exec;
const path = require('path');

function executeCommand(cmd, workingDirectory = null) {
    return new Promise((resolve, reject) => {
        let options = {};
        if (workingDirectory) {
            options.cwd = path.resolve(workingDirectory);
        }
        let p = exec(cmd, options, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            resolve(stdout ? stdout : stderr);
        });

        p.stdout.pipe(process.stdout);
        p.stderr.pipe(process.stderr);
    });
}

async function main() {
    await executeCommand('npm ci --only=prod', __dirname);
    await require('./main').main();
}

if (require.main === module) {
    main()
        .then(() => process.exit(0))
        .catch(e => {
            console.error(e);
            process.exit(1);
        });
}

