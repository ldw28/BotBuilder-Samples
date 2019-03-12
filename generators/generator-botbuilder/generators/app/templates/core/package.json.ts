{
    "name": "<%= botname %>",
    "version": "1.0.0",
    "description": "<%= botDescription %>",
    "author": "Generated using Microsoft Bot Builder Yeoman generator v<%= version %>",
    "license": "MIT",
    "main": "<%= npmMain %>",
    "scripts": {
        "build": "node_modules/.bin/tsc --build",
        "lint": "node_modules/.bin/tslint -c tslint.json 'src/**/*.ts'",
        "postinstall": "npm run build && node ./deploymentScripts/webConfigPrep.js",
        "start": "node_modules/.bin/tsc --build && node ./lib/index.js",
        "test": "echo \"Error: no test specified\" && exit 1",
        "watch": "node_modules/.bin/nodemon --watch ./src -e ts --exec \"npm run start\""
    },
    "repository": {
        "type": "git",
        "url": "https://github.com"
    },
    "dependencies": {
        "botbuilder": "^4.3.0",
        "botbuilder-ai": "^4.3.0",
        "botbuilder-core": "^4.3.0",
        "botbuilder-dialogs": "^4.3.0",
        "botframework-config": "^4.3.0",
        "botframework-connector": "^4.3.0",
        "botframework-schema": "^4.3.0",
        "dotenv": "^6.2.0",
        "replace": "^1.0.1",
        "restify": "^7.7.0"
    },
    "devDependencies": {
        "@types/dotenv": "6.1.0",
        "@types/restify": "7.2.7",
        "nodemon": "^1.18.10",
        "tslint": "^5.12.1",
        "typescript": "^3.3.3"
    }
}
