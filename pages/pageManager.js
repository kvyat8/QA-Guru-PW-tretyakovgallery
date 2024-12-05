import { Header } from "./index";
import { SearchPopup } from "./index";
import { SearchPage } from "./index";
import { BasePage } from "./index";


export class PageManager {

    constructor(page){
        this.basePage = new BasePage(page);
        this.header = new Header(page);
        this.searchPopup = new SearchPopup(page);
        this.searchPage = new SearchPage(page);
    }
}