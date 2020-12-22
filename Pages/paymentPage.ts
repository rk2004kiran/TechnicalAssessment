import { $ } from 'protractor';
import { ReviewYourOrder } from "./review_Your_Order_Page";

export class PaymentPage extends ReviewYourOrder {
    public cookieAgree = $('[class="agree-button eu-cookie-compliance-default-button"]');
    
    /**
     * @onPaymentPage function will return the text of content title on Payment page
     */
    public async onPaymentPage() {
        await this.elementToBePresent(this.content_title);
        await this.elementToBePresent(this.cookieAgree);
        await this.cookieAgree.click();
       return await this.content_title.getText();
    }
    /**
     * @orderTotalOnPaymentPage function will return the order total on payment page
     */
    public async orderTotalOnPaymentPage() {
        return await this.cartOrderTotal.get(0).getText();
    }

}