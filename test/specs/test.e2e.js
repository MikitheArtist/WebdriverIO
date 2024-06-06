import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe('Login testing', () => {
    it('0001_Valid Login', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await browser.pause(2000)
        await LoginPage.cartIconisPresent()
        await browser.pause(2000)
        await LoginPage.productsArePresent()
        await browser.pause(2000)

    })

    it('0002_Login with invalid password', async () => {
        await LoginPage.open()
        await browser.pause(2000)
        await LoginPage.login('standard_user', '123')
        await browser.pause(2000)
        await LoginPage.checkHighlightedRedInputUsername('border-bottom-color', { "parsed": { "alpha": 1, "hex": "#e2231a", "rgba": "rgba(226,35,26,1)", "type": "color" }, "property": "border-bottom-color", "value": "rgba(226,35,26,1)" })
        await LoginPage.checkXIconsAreDisplayed()
        await LoginPage.checkErrorMsg('Epic sadface: Username and password do not match any user in this service')
        await browser.pause(2000)

    })

    it('0003_Login with invalid login', async () => {
        await LoginPage.open()
        await browser.pause(2000)
        await LoginPage.login('123', 'secret_sauce')
        await browser.pause(2000)
        await LoginPage.checkHighlightedRedInputUsername('border-bottom-color', { "parsed": { "alpha": 1, "hex": "#e2231a", "rgba": "rgba(226,35,26,1)", "type": "color" }, "property": "border-bottom-color", "value": "rgba(226,35,26,1)" })
        await LoginPage.checkXIconsAreDisplayed()
        await LoginPage.checkErrorMsg('Epic sadface: Username and password do not match any user in this service')
        await browser.pause(2000)
    })

    it('0004_Logout', async () => {
        await LoginPage.open()
        await browser.pause(2000)
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(2000)
        await LoginPage.clickMenuButton()
        await LoginPage.checkCountOfMenuItems(4)
        await LoginPage.clickLogotBtn()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')  
        await LoginPage.checkEmptyInputUsername()
        await LoginPage.checkEmptyInputPassword()
    })

    

})

