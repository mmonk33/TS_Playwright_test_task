import { test } from '@playwright/test';
import TabPage from "../pages/tab_page"
import {TimePicker} from "../pages/timepicker"
import {TwinColumn} from "../pages/twin_column"

test("Test 1. Tabs", async ({ page }) => {
    const Tabs_page = new TabPage(page);
    await Tabs_page.goto('http://89.189.152.235:1337/?path=/story/eos-tabs--default');
    await Tabs_page.tab7_click()
    await Tabs_page.check_for_text7_is_visible()
});
test('Test 2. Timepicker', async ({ page }) => {
    const TimePickerPage = new TimePicker(page);
    await TimePickerPage.goto('http://89.189.152.235:1337/?path=/story/eos-timepicker--in-form')
    await TimePickerPage.drop_down_arrow_click()
    await TimePickerPage.pick_time_now()
    await TimePickerPage.submit()
    await TimePickerPage.isMessageDisplayed()
    await TimePickerPage.isFieldContainsCurrentTime()
});

test('Test 3. Twincolumn', async ({ page }) => {
    const TwinColumnPage = new TwinColumn(page);
    await TwinColumnPage.goto('http://89.189.152.235:1337/?path=/story/eos-twincolumn--default')
    await TwinColumnPage.item_4_click()
    await TwinColumnPage.isElementContainsCheckedClass()
    await TwinColumnPage.right_arrow_click()
    await TwinColumnPage.isButtonHaveAttributeDisable()
    await TwinColumnPage.isTitleMovedToFinalColumn()
});