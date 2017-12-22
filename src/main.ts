import * as path from 'path';
import {AutoLanguageClient} from 'atom-languageclient';

class BrightScriptLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'source.brightscript' ]; }
  getLanguageName () { return 'BrightScript'; }
  getServerName () { return 'WillowTreeApps'; }

  startServerProcess () {
    const args = path.join(require.resolve('@willowtreeapps/hinoki'),'/../','bin/cli');
    return super.spawnChildNode([args], { cwd: path.join(__dirname, '..') });
  }
}

module.exports = new BrightScriptLanguageClient();