// import { test } from '@playwright/test';

class LoginPage{
  constructor(page){
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
   }

   async BrowserOpen(){
    await this.page.goto('https://www.saucedemo.com/');
    console.log('Browser opened and navigated to the login page');
  }

  async login(username, password){
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async getErrorMessage(){
    try {
      await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
      return (await this.errorMessage.textContent()).trim();
    } catch {
      return '';
    }
  }
  
  async enterUsername(username){
    await this.usernameInput.fill(username);
    console.log('Username entered');
  }
  
  async enterPassword(password){
    await this.passwordInput.fill(password);
    console.log('Password entered');  
  }
  
  async clickLoginButton(){
    await this.loginButton.click();
    console.log('Login button clicked');  
  } 
   
  

  async closeBrowser(){
    await this.page.close();
    console.log('Browser closed');
  } 

}
export {LoginPage};
