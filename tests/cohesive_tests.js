// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Cohesive p0 cases", ()=>{
  test.describe.configure({ mode: 'parallel' });

  test('Successful login', async ({ page }) => {
    await page.goto('https://client-2-staging-router.evn.cohesive.heave.us/');
  
    await page.getByRole('button', { name: 'Login' }).click()
    const newTodo = page.getByPlaceholder('Enter work email');
    await newTodo.fill("gunesh.p+1@cohesive.so");
   // await newTodo.fill("gunesh.p121@cohesive.so");
    await page.getByRole('button', { name: 'Continue', exact: true }).click()
    await page.getByLabel('Password').type("torres@f9")
    await page.getByRole('button', { name: 'Login' }).nth(1).click()
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Cohesive");
    await expect(page.getByText("Describe what you want to create").first()).toBeVisible()
   // await page.context().storageState({path: "user.json"})  
  });
  
  test('Generate response', async ({ page }) => {
    await page.goto('https://client-2-staging-router.evn.cohesive.heave.us/');
  
    await page.getByRole('button', { name: 'Login' }).click()
    const newTodo = page.getByPlaceholder('Enter work email');
    await newTodo.fill("gunesh.p+1@cohesive.so");
   // await newTodo.fill("gunesh.p121@cohesive.so");
    await page.getByRole('button', { name: 'Continue', exact: true }).click()
    await page.getByLabel('Password').type("torres@f9")
    await page.getByRole('button', { name: 'Login' }).nth(1).click()
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Cohesive");
    await expect(page.getByText("Describe what you want to create").first()).toBeVisible()
    await page.getByText("Describe what you want to create").first().type("Write a Twitter ad about for sports");
    await expect(page.getByRole('button', { name: 'Go', exact: true })).toBeVisible()
    await page.getByRole('button', { name: 'Go', exact: true }).click()
    await page.keyboard.press("Enter");
    await expect(page.locator('xpath=//span[contains(@class, "title-40")]')).toBeVisible({ timeout: 120000 })
    await expect(page.locator('xpath=//span[contains(@class, "title-14")]')).toBeVisible({ timeout: 120000 })
   // await expect(page.getByText("Translate to")).toBeVisible({ timeout: 120000 })
   await page.getAttribute
  });

  test('Generate audio', async ({ page }) => {
    await page.goto('https://client-2-staging-router.evn.cohesive.heave.us/');
  
    await page.getByRole('button', { name: 'Login' }).click()
    const newTodo = page.getByPlaceholder('Enter work email');
    await newTodo.fill("gunesh.p+1@cohesive.so");
   // await newTodo.fill("gunesh.p121@cohesive.so");
    await page.getByRole('button', { name: 'Continue', exact: true }).click()
    await page.getByLabel('Password').type("torres@f9")
    await page.getByRole('button', { name: 'Login' }).nth(1).click()
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Cohesive");
    await expect(page.getByText("Describe what you want to create").first()).toBeVisible()
    await page.getByText("Describe what you want to create").first().type("Write a Twitter ad about for sports");
    await expect(page.getByRole('button', { name: 'Go', exact: true })).toBeVisible()
    await page.getByRole('button', { name: 'Go', exact: true }).click()
    await page.getByText("Go", {exact: true}).click()
    await page.keyboard.press("Enter");
    await expect(page.locator('xpath=//span[contains(@class, "title-14")]')).toBeVisible({ timeout: 120000 })
    await expect(page.getByText("AI Voices", {exact: true})).toBeVisible({ timeout: 120000 })
    await page.getByText("AI Voices", {exact: true}).click( {
      timeout: 5000,
   })
    await expect(page.getByRole('button', { name: 'Generate', exact: true }).first()).toBeVisible()
    await page.locator('xpath=//div[@id="audio-gen-panel"]/div[2]/div/div/div/div[2]/div[2]/button').click()
  
    await expect(page.getByText("Genearating", {exact: true})).toBeVisible()
    await page.waitForTimeout(10000);
    await expect(page.getByText("00:00", {exact: true})).toBeVisible()

    await page.getAttribute
  });


  test('Purchase subscription india user', async ({ page }) => {
    test.setTimeout(60000)
    await page.goto('https://client-2-staging-router.evn.cohesive.heave.us/');
  
    await page.getByRole('button', { name: 'Login' }).click()
    const email = page.getByPlaceholder('Enter work email');
    const rndInt = Math.floor(Math.random() * 10000000) + 1
    await email.fill("gunesh.p"+rndInt+"@cohesive.so");
   // await newTodo.fill("gunesh.p121@cohesive.so");
    await page.getByRole('button', { name: 'Continue', exact: true }).click()
    await page.locator('xpath=//input[contains(@id, "otp")]').fill("111111")
    await page.getByRole('button', { name: 'Continue', exact: true }).click()
    await page.getByLabel('Password').type("torres@f9")
    await page.locator('xpath=//input[@id="first-name"]').fill("gunesh")
    await page.locator('xpath=//input[@id="last-name"]').fill("gunesh")
    await page.getByRole('button', { name: 'Create account', exact: true }).click()
    await page.getByText("Continue", {exact: true}).click()
    await page.getByText("Skip tour", {exact: true}).click()
    await page.getByText("I’ll start with free, limited usage", {exact: true}).click()
    await expect(page).toHaveTitle("Cohesive");
    await expect(page.getByText("Describe what you want to create").first()).toBeVisible()
    await expect(page.getByRole('button', { name: 'Upgrade', exact: true })).toBeVisible()
    await page.getByRole('button', { name: 'Upgrade', exact: true }).click()
    await expect(page.getByText("Subscribe to Creator")).toBeVisible()
    await expect(page.getByText("Yearly", {exact: true})).toBeVisible()
    await expect(page.getByText("Monthly", {exact: true})).toBeVisible()
  //  await expect(page.getByText("Subscribe to Creator")).toBeVisible()
    await page.getByText("Subscribe to Creator", {exact: true}).click()
    await expect(page.getByText("Order summary")).toBeVisible()
   // await expect(page.getByText("$15 /mo").first()).toBeVisible()
    await expect(page.getByText("Your plan renews")).toBeVisible()
    await expect(page.getByRole('button', { name: 'Pay $180 now', exact: true })).toBeVisible()
    await page.getByRole('button', { name: 'Pay $180 now', exact: true }).click()

    await expect(page.getByText("Total due today")).toBeVisible()
    await expect(page.getByText("Pay with card")).toBeVisible()
    const newTodo = page.getByPlaceholder('1234 1234 1234 1234');
    await newTodo.fill("4242 4242 4242 4242");
    await page.getByPlaceholder("MM / YY").fill("01");
    await page.getByPlaceholder("MM / YY").fill("224");
    await page.getByPlaceholder("CVC").fill("123");
    await page.locator('xpath=//input[contains(@id, "billingName")]').fill("gunesh")
    await page.locator('xpath=//button[contains(@class, "SubmitButton")]').click()
    await expect(page.locator('xpath=//button[contains(@class, "SubmitButton--processing")]')).toBeVisible()
    test.setTimeout(60000)
    await expect(page.locator('xpath=//button[contains(@class, "SubmitButton--success")]')).toBeVisible()
   // await expect(page.getByRole('button', { name: "Let's start creating", exact: true })).toBeVisible()
  });
});