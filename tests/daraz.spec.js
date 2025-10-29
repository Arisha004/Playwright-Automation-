import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';

test('Daraz: search electronics, apply filters, open product, check free shipping', async ({ page }) => {
  const home = new HomePage(page);
  const search = new SearchResultsPage(page);
  const product = new ProductPage(page);

  await home.open();
  await home.search('electronics');
  await search.waitForResults();
  await search.applyBrand('Samsung');
  await search.applyPriceRange(500, 5000);

  const count = await search.countProducts();
  expect(count).toBeGreaterThan(0);
  console.log('Step 8 Passed: Product count validated successfully.');

  await search.openFirstProduct();

  const hasFreeShipping = await product.hasFreeShipping();
  console.log(hasFreeShipping
    ? 'Step 9 Passed: Product has Free Shipping.'
    : 'Step 9: Product does not have Free Shipping.');

  const outOfStock = await product.isOutOfStock();
  console.log(outOfStock
    ? 'Step 10: Product is out of stock.'
    : 'Step 10 Passed: Product is in stock.');

  console.log('All steps executed successfully without skips.');
});
