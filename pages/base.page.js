import { step } from "allure-js-commons"
export class BasePage {

    constructor (page) {
        this.page = page
    }
    async open(url) {
        await step(`Go to page ${url}`, async () => {
            await this.page.goto(url);
        })
    }

    getUrl() {

            return this.page.url(); 
    }


    // async getUrl() {
    //     try {
    //         return await this.page.url();
    //     } catch (error) {
    //         console.error('Error getting URL:', error);
    //         throw error;
    //     }
    // }

    // async function getUrl() {
    //     const url = await this.page.url(); // Ждем получения URL
    //     return url;
    // }

//     async getUrl() {
//     await step(`Get URL`, async () => {
//         let url = await this.page.url();
//         // url = await this.page.url();
//         return url 
// }
// )}

}