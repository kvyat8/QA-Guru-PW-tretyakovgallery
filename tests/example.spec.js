import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';




test('Несколько поисков из хедера', async ({ page }) => {

  let pm = new PageManager(page);

  let query = `Пушкин`

  await pm.basePage.open('/');
  await pm.header.openSearchPopup();
  await pm.searchPopup.searchSomething(query)

  await expect(pm.searchPage.searchInput).toHaveValue(query);
  await expect(pm.searchPage.firstSearchResult).toContainText(query);
  await expect(pm.basePage.getUrl()).toContain(encodeURIComponent(query));

  query = `италия`

  await pm.header.openSearchPopup();
  await pm.searchPopup.searchSomething(query)

  await expect(pm.basePage.getUrl()).toContain(encodeURIComponent(query));
  await expect(pm.searchPage.firstSearchResult).toContainText(query);
  await expect(pm.searchPage.searchInput).toHaveValue(query);

});

