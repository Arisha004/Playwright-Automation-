export class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('input[type="search"]');
  }

  async open() {
    console.log('Step 1: Opening Daraz homepage...');
    await this.page.goto('https://www.daraz.pk/', { waitUntil: 'domcontentloaded' });
    console.log('Step 1 Passed: Homepage opened successfully.');
  }

  async search(keyword) {
    await this.searchBox.fill(keyword);
    await this.page.keyboard.press('Enter');
    console.log(`Step 2: Searched for "${keyword}".`);
    await this.page.waitForLoadState('domcontentloaded');
  }
}
