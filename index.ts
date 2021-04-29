import * as jest from 'jest';

jest.run();
// async function writeCookies () {
//   const cookiesDir = path.join(CONFIGS.BACKSTOP_DIR, 'cookies');
//   const cookieFilePath = path.join(cookiesDir, 'admin.json');
//   const config = CONFIGS.getSiteConfig();

//   const loginUrl = execSync(`drush uli --name=admin --uri=${config.url} --browser=0`, { encoding: 'utf8', cwd: config.root });
//   const browser = await puppeteer.launch({
//     headless: true,
//     args: ['--no-sandbox']
//   });
//   const page = await browser.newPage();
//   await page.goto(loginUrl);
//   const cookies = await page.cookies();
//   await browser.close();

//   !fs.existsSync(cookiesDir) && fs.mkdirSync(cookiesDir);
//   fs.existsSync(cookieFilePath) && fs.unlinkSync(cookieFilePath);

//   fs.writeFileSync(cookieFilePath, JSON.stringify(cookies));
// }
