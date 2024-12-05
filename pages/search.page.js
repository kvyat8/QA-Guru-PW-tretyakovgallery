import { step } from "allure-js-commons"
export class SearchPage {

    constructor (page) {
        this.page = page,
        this.searchInput = this.page.locator('.search__group ').getByPlaceholder('Что вы ищете?'),
        this.firstSearchResult = this.page.locator('.result-item').nth(0)

    }

    async getFirstResultText () {
        await step(`Получение первого результата поиска`, async () => {
        return this.firstSearchResult.selectText()
    }
        )}
    
}