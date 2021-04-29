import { Page, Response } from 'playwright';

export class ManageCases {
  private readonly url = 'https://www.google.com/';

  constructor (public page: Page) {
    this.page = page;
  }

  async navigate (): Promise<Response|null> {
    return await this.page.goto(this.url);
  }
}
