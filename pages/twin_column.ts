import BasePage from '../pages/base_page';
import {expect} from "@playwright/test";

export class TwinColumn extends BasePage{
    getMovedItem: any;
    getListItem4: any;
    getRightArrow: any;
    constructor(page) {
        super(page)
        this.getListItem4 = page.frameLocator('#storybook-preview-iframe').locator('.eos-transfer-list-content-item', {hasText: '{4}'});
        this.getRightArrow = page.frameLocator('#storybook-preview-iframe').locator('//*[@class=\'anticon anticon-right\']/..')
        this.getMovedItem = page.frameLocator('#storybook-preview-iframe').locator('//span[contains(text(),\'Итоговый список\')]/..//following::div/ul/li[1]')
    }
    async goto(url) {
        await this.page.goto(url);
    }

    async item_4_click() {
        await this.getListItem4.click();
    }
    async right_arrow_click() {
        await this.getRightArrow.click();
    }
    async isElementContainsCheckedClass() {
        await expect(this.getListItem4).toHaveClass(/eos-transfer-list-content-item-checked/)
    }
    async isButtonHaveAttributeDisable() {
        await expect(this.getRightArrow).toHaveAttribute('disabled', '')
    }
    async isTitleMovedToFinalColumn() {
        await expect(this.getMovedItem).toContainText('{4}')
    }

}
