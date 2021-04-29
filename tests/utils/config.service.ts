import { readFileSync, copyFileSync } from 'fs';
import { ErrorService } from './error.service';

export class ConfigService {
  siteConfigFileName = 'site-config.json';
  siteConfigSampleFileName = 'site-config.json.sample';

  getSiteConfig (): Buffer {
    return JSON.parse(readFileSync(this.siteConfigFileName).toString());
  }

  touchSiteConfigFile (): void {
    try {
      readFileSync(this.siteConfigFileName);
    } catch (err) {
      copyFileSync(this.siteConfigSampleFileName, this.siteConfigFileName);

      new ErrorService().throwError(
        'No site-config.json file detected!\n' +
        '\tOne has been created for you \n' +
        '\tPlease insert the real value for each placeholder and try again'
      );
    }
  }
}
