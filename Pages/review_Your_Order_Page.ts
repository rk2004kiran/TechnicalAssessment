import { $, $$, browser } from 'protractor';
import { ProductPage } from "./productPage";

export class ReviewYourOrder extends ProductPage {
    public datePlaceholder = $('[placeholder="MM-DD-YYYY"]');
    public datepickerTitle = $('[class="ui-datepicker-title"]');
    public datePickerNext = $('[title="Next"]');
    public selectDate = $$('[data-handler="selectDay"]');
    public continueToPayment = $$('[data-testid="continueToPayment"]').get(0);
    public datepickerCalendar = $('[class="ui-datepicker-calendar"]');

   /**
    * @onReviewYourOrderPage function will click on checkout button and will wait for page to load and returns content title text
    */
    public async onReviewYourOrderPage() {
        await this.elementToBePresent(this.content_title);
        return await this.content_title.getText();
    }
    /**
     * @orderTotalIs function will return the order total inside Your Cart
     */
    public async orderTotalIs() {
        let orderToatl = await this.cartOrderTotal.get(0).getText();
        orderToatl.includes('-') ? orderToatl = await this.cartOrderTotal.get(1).getText() : orderToatl = orderToatl;
        return orderToatl;       
    }
    /**
     * 
     * @param monthYear - month and year
     * @param date - Date 
     * @selectVisitingDate function will click on dateplace holder and select the Given date from the feature file
     */
    public async selectVisitingDate(monthYear: string, date: any) {
        await this.datePlaceholder.click();
        await this.elementToBePresent(this.datepickerCalendar);
        let monthNyearIs = false;
        while (!monthNyearIs) {
           if (await this.datepickerTitle.getText() !== monthYear) {
               await this.datePickerNext.click();
           } else {
               monthNyearIs = true;
           } 
        }
        await this.filterAndClick(this.selectDate, date);
    }
    /**
     * @returnDateValue function will return value of datePlaceholder
     */
    public async returnDateValue() {
        return await this.datePlaceholder.getAttribute('value');
    }
    public async clickContinueToPayment() {
        await browser.executeScript('window.scrollTo(94, 250);');
        await this.continueToPayment.click();
    }
}