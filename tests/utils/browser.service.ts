import { chromium, ChromiumBrowser, Page } from 'playwright';
import { ConfigService } from '../utils/config.service';

export class BrowserService {
  private browser: ChromiumBrowser;

  async setup (): Promise<void> {
    new ConfigService().touchSiteConfigFile();
    await this.launchChrome();
  }

  async newPage (): Promise<Page> {
    return await this.browser.newPage();
  }

  async close (): Promise<void> {
    return await this.browser.close();
  }

  private async launchChrome (): Promise<ChromiumBrowser> {
    this.browser = await chromium.launch();

    return this.browser;
  }
}
