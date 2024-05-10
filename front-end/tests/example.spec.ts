import { test, expect } from '@playwright/test';
import { URLS,CREDENTIALS } from '../data/constants';
import { LoginPage } from '../page-object/login-page';
import { MainPage } from '../page-object/main-page';

test('has title', async ({ page }) => {
await page.goto(URLS.baseUrl as string)
const loginPage = new LoginPage(page)
await loginPage.submitLogin(CREDENTIALS.user, CREDENTIALS.pass)
const mainPage = new MainPage(page)
await expect(mainPage.invContainer).toBeVisible()
await page.pause()
});
