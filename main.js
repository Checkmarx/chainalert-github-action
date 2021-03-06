const core = require("@actions/core");
const github = require("@actions/github");
const axios = require("axios");
const fs = require("fs");

async function main() {
    try {
        let file = core.getInput('file', {required: false}) || 'package.json';
        let packageJson = fs.readFileSync(file, 'utf8');
        packageJson = JSON.parse(packageJson);

        let githubUsername = github.context.repo.owner;
        let githubRepository = github.context.repo.repo;
        let gitUrl = `https://github.com/${githubUsername}/${githubRepository}`

        try {
            await axios.head(gitUrl);
        } catch (e) {
            core.setFailed('Private GitHub repositories are not supported at the moment');
            return;
        }

        let data = {
            'git_url': gitUrl,
            'package_json': packageJson
        }

        await axios.post("https://api.chainalert.dev/v1/subscriptions", data)

    } catch (err) {
        console.error(err)
    }
}

if (require.main === module) {
    main()
        .then(() => process.exit(0))
        .catch(e => {
            console.error(e);
            process.exit(1);
        });
}

module.exports.main = main;

