import { Page } from 'playwright';
import BrowserService from '../../src/utils/browser.service';
import { ManageCases } from '../../src/pages/civicase/manage-cases.page';

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

    manageCases = new ManageCases(browser);
  });

  afterEach(async () => {
    await page.close();
  });

  describe('on navigate', function () {
    beforeEach(async () => {
      await browser.loadCookies();
      await manageCases.navigate(page);
    });

    it('should show manage cases page title', async () => {
      expect(await page.title()).toBe(manageCases.pageTitle);
    });
  });
});
