import BasePage from '../pages/base_page';
import {expect} from "@playwright/test";

export class TimePicker extends BasePage{
    getDropDownListArrow: any;
    getTimeNow: any;
    ButtonSubmit: any;
    getMessage: any;
    getSelectedTime: any;
    constructor(page) {
        super(page)
        this.getDropDownListArrow = page.frameLocator('#storybook-preview-iframe').locator('svg');
        this.getTimeNow = page.frameLocator('#storybook-preview-iframe').locator('.eos-picker-now-btn');
        this.ButtonSubmit = page.frameLocator('#storybook-preview-iframe').getByRole('button', { name: 'Submit' });
        this.getMessage = page.frameLocator('#storybook-preview-iframe').locator('span.eos-message__content');
        this.getSelectedTime = page.frameLocator('#storybook-preview-iframe').locator('input#basic_timepicker')
    }
    async drop_down_arrow_click() {
        await this.getDropDownListArrow.click();
    }
    async pick_time_now() {
        await this.getTimeNow.click();
    }
    async submit() {
        await this.ButtonSubmit.click();
    }
    async current_time() {
        const today = new Date();
        let currentHours;
        currentHours = today.getHours();
        currentHours = ("0" + currentHours).slice(-2);
        return currentHours + ":" + today.getMinutes();
    }
    async isMessageDisplayed() {
        await expect(this.getMessage).toBeVisible()
    }
    async isFieldContainsCurrentTime() {
        await expect(this.getSelectedTime).toHaveAttribute('value', await (this.current_time()));
    }

}
