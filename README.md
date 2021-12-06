![cover](https://user-images.githubusercontent.com/1287098/144083262-2f90a537-eaa4-4be4-b451-e66661a113a6.png)

### ChainAlert
A free service by [Checkmarx](https://checkmarx.com/) for the Open Source community that scans popular packages and alerts in cases there is a suspicion those packages' accounts were hacked.

### The Need
Recent package takeover incidents such as [coa](https://checkmarx.com/blog/attackers-write-bugs-as-well/) and [ua-parser-js](https://checkmarx.com/blog/uaparser-js-attack-preparations/) have stressed the need for an alarm system to alert developers and users.

Learning the lessons of these supply chain incidents we've created **ChainAlert**, a monitoring service that will help minimize the damages from those attacks by closing the gap between takeover to detection and mitigation.

### What It Does?

ChainAlert service monitors new releases of packages and analyze:
- Newly added auto install scripts such as `install`, `preinstall`, `postinstall` scripts 
- Inconsistent package version compared the linked VCS git tags


Once ChainAlert detect one of these suspicious activities, it will open automatic GitHub issues on:
- The package's GitHub repo, to notify the maintainers of that activity
- Any package dependents' GitHub repo who's opted-in with this github action

![Frame 240](https://user-images.githubusercontent.com/1287098/144136718-200904ca-c01f-4bd8-825a-add9762e40dc.png)


### How Do I Opt In?

Simply add the following workflow to your `.github/workflows` folder, we will take it from there:

```yml
name: "ChainAlert"

on:
  push:
    # Run when the master is changed
    branches: [ master ]
  schedule:
    # Run every day at midnight
    - cron: '0 1 * * *'

jobs:
  chainalert:
    name: ChainAlert
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: checkmarx/chainalert-github-action@master
```
- 💡 This service is only available for public GitHub projects


### Features
- NPM packages support

#### WIP 
- PyPi packages support
- Private repos support
- Automatic pull-requests


### Contact
For any further question please feel free to open an issue or contact us at <@checkmarx.com> 

