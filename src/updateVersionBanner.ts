import latestVersion from 'latest-version';
import { readFileSync } from 'fs';
import { compare } from 'compare-versions';

export default async function checkVersionAndShowUpdateBanner() {
  try {
    const remoteVersion = await latestVersion('vitest-autogen');
    const version = JSON.parse(readFileSync(`${__dirname}/../package.json`, 'utf-8')).version;
    if ( compare(remoteVersion, version, '>') ){
      console.warn('🎉 A new version of the cli is available! TO UPDATE: npm install -g vitest-autogen 🎉')
    }
  } catch(err) {
    console.warn('check for updates failed :( Please check at https://www.npmjs.com/package/vitest-autogen')
  }
}
