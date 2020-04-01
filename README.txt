Gulp Commands
  Install 'npm' (is istall with node JS)
    https://nodejs.org/en/

  Go to you theme folder and:
  Istall packege:
    1. command: npm install -g gulp 
      description: install global gulp if don't install yet

    2. command: npm install
    description: this command is userd in forlder where is
    gulpfile.js and package.json

  Use gulp
    1. command: gulp
       description: run gulp and all services

  Update gulp
    1. command: npm outdated
       description: show all module what need to update

    2. Need to do this modification in package.json
       Example:
          Package          Current  Wanted  Latest  Location
          gulp-sass          2.3.2   2.3.2   3.1.0  bootstrap_4_defaulttheme

          modification example:
          "gulp-ruby-sass": "^2.3.2", change in "gulp-ruby-sass": "^2.1.1",

    3. command: npm update
       description: will update module tu last version.
