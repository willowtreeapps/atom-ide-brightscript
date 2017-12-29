"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const atom_languageclient_1 = require("atom-languageclient");
class BrightScriptLanguageClient extends atom_languageclient_1.AutoLanguageClient {
    getGrammarScopes() { return ['source.brightscript']; }
    getLanguageName() { return 'BrightScript'; }
    getServerName() { return 'WillowTreeApps'; }
    startServerProcess() {
        const args = path.join(require.resolve('@willowtreeapps/hinoki'), '/../', 'bin/cli');
        return super.spawnChildNode([args], { cwd: path.join(__dirname, '..') });
    }
}
module.exports = new BrightScriptLanguageClient();
//# sourceMappingURL=main.js.map