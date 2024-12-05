import { step } from "allure-js-commons"
export class SearchPopup {

    constructor (page) {
        this.page = page,
        this.popupSearchInput = this.page.locator('.popup_content').getByPlaceholder('Что вы ищете?'),
        this.popupSearchButton = this.page.locator('.popup-search__btn')
    }

    async searchSomething(query) {
        await step(`Поиск ${query} через попап`, async () => {
        await this.popupSearchInput.click();
        await this.popupSearchInput.fill(query);
        await this.popupSearchButton.click();

    }
)}
}