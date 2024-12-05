import { step } from "allure-js-commons"
export class Header {

    constructor (page) {
        this.page = page,
        this.notificationButton = this.page.locator('.header-top__actions-link').nth(0),
        this.searchButton = this.page.locator('.header-top__actions-link').nth(1),
        this.languageButton = this.page.locator('.header-top__actions-link').nth(2)
    }

    async openSearchPopup () {
        await step(`Open search Popup`, async () => {
        await this.searchButton.click();
        })
    }
}