import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import HomePage from '../pageobjects/home.page';

describe('My Login application', () => {
  it('should has main tag', async () => {
    // await LoginPage.open();
    // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //     'You logged into a secure area!');

    await expect(HomePage.main).toBeExisting();
    await expect(HomePage.leftBarParentComponent).toBeExisting();
  });
});
