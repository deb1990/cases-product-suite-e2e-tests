import { Page } from 'playwright';
import { BrowserService } from './../utils/browser.service';
import { ManageCases } from './../../pages/CiviCase/manage-cases.page';

describe('Manage Cases', function () {
  let page: Page;
  let manageCases: ManageCases;
  const browser = new BrowserService();

  beforeAll(async () => {
    await browser.setup();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    manageCases = new ManageCases(page);
  });

  afterEach(async () => {
    await page.close();
  });

  describe('on navigate', function () {
    beforeEach(async () => {
      await manageCases.navigate();
    });

    it('should work', async () => {
      expect(await page.title()).toBe('Google');
    });
  });
});
