![cover](https://user-images.githubusercontent.com/1287098/144083262-2f90a537-eaa4-4be4-b451-e66661a113a6.png)

### ChainAlert
A free service by [Checkmarx](https://checkmarx.com/) for the Open Source community that scans popular packages and alerts in cases there is a suspicion those packages' accounts were hacked.

### The Need

Recent package takeover incidents such as [coa](https://checkmarx.com/blog/attackers-write-bugs-as-well/) and [ua-parser-js](https://checkmarx.com/blog/uaparser-js-attack-preparations/) have stressed the need for an alarm system to alert developers and users.

Learning the lessons of these supply chain incidents we've created **ChainAlert**, a monitoring service that will help minimize the damages from those attacks by closing the gap between takeover to detection and mitigation.


### What It Does?

ChainAlert cloud service continuously monitor and analyse new releases of packages:
- Detection of newly added auto install scripts such as `install`, `preinstall`, `postinstall` 
- Checking the consistency of the version and if presented in the package's linked git repository tags

![Group 468](https://user-images.githubusercontent.com/1287098/144894054-1ca132cf-e3f2-448a-bfdb-d04b00cbd02c.png)


If ChainAlert finds a suspicious activity of a package, it will automatically open GitHub issues on:
- The package's linked GitHub repo, to notify the maintainers of that activity
- Any package dependents' GitHub repo who's opted-in via [this GitHub action](https://github.com/marketplace/actions/chainalert)

![111](https://user-images.githubusercontent.com/1287098/144894036-8b414468-8a93-464f-bbf9-6961043c91b8.png)
![Frame 240](https://user-images.githubusercontent.com/1287098/144136718-200904ca-c01f-4bd8-825a-add9762e40dc.png)


### How Do I Opt In?

You need to add our [GitHub action](https://github.com/marketplace/actions/chainalert) to your project. If you already have an existing workflow, add the following step:

```yml
 - uses: checkmarx/chainalert-github-action@v1
```

Alternatively, create a dedicated workflow file under `.github/workflows/chainalert.yml`

```yml
name: ChainAlert
on:
  push:
    branches: [ master ]
jobs:
  chainalert:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: checkmarx/chainalert-github-action@v1
```
- 💡 This action and service are only available for public GitHub projects


### Features
- NPM packages support

#### WIP 
- PyPi packages support
- Private repos support
- Automatic pull-requests


### Contact
For any further question please feel free to open an issue or contact us at supplychainsecurity@checkmarx.com 

