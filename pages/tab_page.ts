import BasePage from '../pages/base_page';
import {expect} from "@playwright/test";
export default class TabPage extends BasePage{
    getTab: any;
    get7TabText: any;
    constructor(page) {
        super(page)
        this.getTab = page.frameLocator('#storybook-preview-iframe').locator('span.eos-badge > span', {hasText: 'Вкладка 7'});
        this.get7TabText = page.frameLocator('#storybook-preview-iframe').locator('div.eos-tabs-tabpane:nth-child(7)');
    }
    async tab7_click() {
        await this.getTab.click();
    }
    async check_for_text7_is_visible() {
        await expect(this.get7TabText).toContainText('Текст 7');
    }
}