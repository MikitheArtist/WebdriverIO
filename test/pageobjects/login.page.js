import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {

    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('input[type="submit"]');
    }

    get cartIcon() {
        return $('#shopping_cart_container');
    }

    get productItems() {
        return $('.inventory_list');
    }

    get logoutButton() {
        return $('#logout_sidebar_link');
    }

    get burgerMenuButton() {
        return $('#react-burger-menu-btn');
    }

    get burgerMenuElements() {
        return $$('nav>a');
    }

    get swgIcons() {
        return $$('//*[local-name()="svg" and @data-icon="times-circle"]');
    }

    get errorMsg() {
        return $('h3[data-test="error"]');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async cartIconisPresent() {
        const elem = await this.cartIcon
        await expect(elem).toBeDisplayed()
        
    }

    async productsArePresent() {
        const elem = await this.productItems
        await expect(elem).toBeDisplayed()
    
    }

    async checkErrorMsg(msg) {
        await expect(this.errorMsg).toHaveText(expect.stringContaining(msg));
    }

    async checkHighlightedRedInputUsername(prop, val) {
        const color = await (this.inputUsername).getCSSProperty(prop);
        await expect(color).toEqual(val);
    }

    async checkXIconsAreDisplayed() {
        const icons = await (this.swgIcons).length;
        await expect(icons).toEqual(2); 
    }

    async clickMenuButton() {
        await this.burgerMenuButton.click();
    }

    async checkCountOfMenuItems(count) {
        const items = await (this.burgerMenuElements).length;
        await expect(items).toEqual(count);
    }

    async clickLogotBtn() {
        await this.logoutButton.click();
    }

    async checkEmptyInputUsername() {
        const userField = await (this.inputUsername).getValue();
        await expect(userField).toEqual('');
    }

    async checkEmptyInputPassword() {
        const pass = await (this.inputPassword).getValue();
        await expect(pass).toEqual('');
    }

    open() {
        return super.open();
    }
}

export default new LoginPage();
