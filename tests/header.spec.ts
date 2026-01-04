import { test, expect } from '@playwright/test';


test.describe('Header Test Cases', () => {

  test('Top Header titles', async ({ page }) => {
    await page.goto('https://www.target.com/');
    await page.getByRole('button', { name: 'close' }).click();
    await expect(page.getByTestId('@web/GlobalHeader/UtilityHeader/FindStores')).toBeVisible();
    await expect(page.getByTestId('@web/GlobalHeader/UtilityHeader/FindStores')).toContainText('Find Stores');
    await expect(page.getByTestId('@web/GlobalHeader/UtilityHeader/WeeklyAd')).toBeVisible();
    await expect(page.getByTestId('@web/GlobalHeader/UtilityHeader/WeeklyAd')).toContainText('Weekly Ad');
    await expect(page.getByTestId('@web/GlobalHeader/UtilityHeader/Registry')).toBeVisible();
    await expect(page.getByTestId('@web/GlobalHeader/UtilityHeader/Registry')).toContainText('Registry & Wish List');
    await expect(page.getByTestId('@web/GlobalHeader/UtilityHeader/TargetCircle360')).toBeVisible();
    await expect(page.getByTestId('@web/GlobalHeader/UtilityHeader/TargetCircle360')).toContainText('Target Circle 360™');
    await expect(page.getByTestId('@web/GlobalHeader/UtilityHeader/TargetCircleCard')).toBeVisible();
    await expect(page.getByTestId('@web/GlobalHeader/UtilityHeader/TargetCircleCard')).toContainText('Target Circle™ Card');
    await expect(page.getByTestId('@web/GlobalHeader/UtilityHeader/TargetCircle')).toBeVisible();
    await expect(page.getByTestId('@web/GlobalHeader/UtilityHeader/TargetCircle')).toContainText('Target Circle™');
  });

  test('Header titles', async ({ page }) => {
    await page.goto('https://www.target.com/');
    await page.getByRole('button', { name: 'close' }).click();
    await expect(page.getByRole('link', { name: 'Target home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Categories' })).toBeVisible();
    await expect(page.getByLabel('Categories')).toContainText('Categories');
    await expect(page.getByTestId('@web/HeaderPrimaryNav').getByRole('link', { name: 'Deals' })).toBeVisible();
    await expect(page.getByLabel('Deals')).toContainText('Deals');
    await expect(page.getByRole('link', { name: 'New & featured' })).toBeVisible();
    await expect(page.getByLabel('New & featured')).toContainText('New & featured');
    await expect(page.getByTestId('@web/PICKUP_AND_DELIVERY_PRIMARY_HEADER_LINK')).toBeVisible();
    await expect(page.getByTestId('@web/PICKUP_AND_DELIVERY_PRIMARY_HEADER_LINK')).toContainText('Pickup & delivery');
    await expect(page.getByTestId('@web/Search/SearchInput')).toBeVisible();
    await expect(page.getByTestId('@web/Search/Microphone')).toBeVisible();
    await expect(page.getByTestId('@web/Search/SearchButton')).toBeVisible();
    await expect(page.getByTestId('@web/AccountLink')).toBeVisible();
    await expect(page.getByTestId('@web/AccountLink')).toContainText('Account');
    await expect(page.getByTestId('@web/CartLink')).toBeVisible();
  });
})


// test('Add an item to cart', async ({ page }) => {

// });


// test('Update item quantity in cart', async ({ page }) => {

// });

// test('View cart details', async ({ page }) => {
  
// });


// test('Remove an item to cart', async ({ page }) => {

// }); 