// import { test } from '@playwright/test';
import { LoginPage } from './LoginPage.js';

class InventoryPage extends LoginPage{
  constructor(page){ 
    super(page);
    this.title = page.locator('[data-test="title"]');
    this.inventoryList = page.locator('[data-test="inventory-list"]');
    this.addBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.addBikeLightButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async isLoaded(){
    try {
      await this.title.waitFor({ state: 'visible', timeout: 5000 });
      return (await this.title.textContent()).trim() === 'Products';
    } catch (error) {
      console.error('Inventory page did not load within the expected time:', error);
      return false;
    } 
  }

  async clickAddBackpackButton(){
    await this.addBackpackButton.click();
    console.log('Add to cart button for backpack clicked');
  }     

  async clickAddBikeLightButton(){
    await this.addBikeLightButton.click();
    console.log('Add to cart button for bike light clicked');
  } 

 async clickCartLink(){
    await this.cartLink.click();
    console.log('Cart link clicked');
  }

}
export {InventoryPage};
