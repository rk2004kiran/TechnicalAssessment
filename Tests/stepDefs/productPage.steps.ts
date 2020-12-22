import { binding, given, then, when } from 'cucumber-tsflow';
import { expect } from 'chai';
import { PaymentPage } from 'Pages/paymentPage';


@binding([])
export class ProductPageSteps extends PaymentPage {
    public onSubMenuItemPageStep: any;
    public contentTitleStep: any;
    public count_N_OrderOfAllCards: any;
    @given(/^User navigates to Gocity Boston Products All Inclusive page$/)
    public async goToProductPage() {
        await this.navigateToPage(process.env.BASE_URL);
    }
    @then(/^user should be on All-Inclusive page and '(.*)' title should be displayed$/)
    public async onProductPage(productTitle: string) {
        
        expect(await this.getProductTitle()).to.equal(productTitle);
    }
    @when(/^User clicks on the '(.*)' from (.*)$/)
    public async clickOnLink(linkText: string, menuType: string) {
        
        (menuType.includes('view content')) ? await this.clickOnLinkFrom_View_Content(linkText) :
            await this.clickOnLinkFromSecondaryMenuItem(linkText);
    }
    @then(/^User should be redirected to the '(.*)' page$/)
    public async isUserRedirectedToThePage(text: string) {
        
        this.onSubMenuItemPageStep = await this.onSubMenuItemPage();
        expect(this.onSubMenuItemPageStep[0]).to.contain(text);
    }
    @then(/^User closes '(.*)' if displayed$/)
    public async closePopupStep(text: string) {
        await this.clickOnCloseSideAction();
    }
    @then(/^'(.*)' content title should be displayed$/)
    public async validationText(text: string) {
        
        expect(this.onSubMenuItemPageStep[1]).to.contain(text);
    }
    @when(/^User clicks on All-Inclusive pass drop down and select '(.*)' '(.*)'$/)
    public async selctOption(optionType: string, option: string) {
        
        await this.clickAndSelectFromProductStackDropDown(option);
    }
    @then(/^'(.*)' '(.*)' option from drop down should be selected$/)
    public async isOptionSelected(option: string, amount: any) {
        
        expect(await this.priceOfAdultForSelectedOption()).to.equal(amount);
    }
    @when(/^User adds '(.*)' '(.*)' item to cart$/)
    public async addItem(totalItem: string, itemName: string) {
        
        await this.addAdultPassToCart();
    }
    @then(/^User should '(.*)' that cart icon is displayed$/)
    public async isCartIconDisplayed(action: string) {
        
        action === 'see' ? expect(await this.isCartIconPresent()).to.equal(true) :
            expect(await this.isCartIconPresent()).to.equal(false);
    }
    @then(/^cart icon counter should be '(.*)'$/)
    public async cartCount(count: any) {
        
        expect(await this.getCartIconText()).to.equal(count);
    }
    @then(/^Order Total should be '(.*)' price and Checkout button should be '(.*)'/)
    public async checkoutButton_N_OrderTotal(total: string, button: string) {
        
        expect(await this.priceOfAdultForSelectedOption()).to.equal(await this.getOrderTotal());
        expect(await this.isCheckoutButtonEnabled(button)).to.equal(true);
    }
    @when(/^User deletes the added item$/)
    public async deleteItem() {
        
        await this.deleteAdultItem();
    }
    @then(/^Checkout button should be '(.*)'$/)
    public async checkoutButtonStep(button: string) {
        
        expect(await this.isCheckoutButtonEnabled(button)).to.equal(true);
    }
    @when(/^User clicks on the Home link on products all-inclusive page$/)
    public async toHomePage() {
        this.contentTitleStep = await this.goToHomePage();
    }
    @then(/^User should redirect to home page and '(.*)' should be displayed on Home page$/)
    public async isUserOnHomePage(message: string) {
        expect(this.contentTitleStep).to.equal(message);
    }
    @when(/^User clicks on See all attractions$/)
    public async SeeAllAttractionsStep() {
        
        this.count_N_OrderOfAllCards = await this.getTheCountOfAllCards();
        await this.clickSeeAllAttractions();
    }
    @then(/^User should see all attractions cards$/)
    public async latestCount() {
        
        expect(await this.getTheCountOfAllCards()).to.not.equal(this.count_N_OrderOfAllCards);
    }
    @when(/^User clicks on Filter and selects '(.*)'$/)
    public async clickByFilter(attraction: string) {
        
        await this.filterWithAttractions(attraction);
    }
    @when(/^'(.*)' only should display after selecting Food & Drink attraction$/)
    public async cardTitleStep(attraction: string) {
        
        expect(await this.food_N_DrinkCardTitle()).to.equal(attraction);
    }
    @when(/^User Quick view on  '(.*)' card$/)
    public async quickViewStep(attraction: string) {
        
        await this.clickOnQuickViewOfAttraction(attraction);
    }
    @then(/^'(.*)' Attractions quickview content should be displayed$/)
    public async quickViewPopUp(header: string) {
        
        const quickViewPopUp = await this.quickViewContentText();
        expect(quickViewPopUp[0]).to.equal(true);
        expect(quickViewPopUp[1]).to.equal(header)
    }
    @when(/^User clicks Sort and select A-Z$/)
    public async selectSortOrder() {
        
        this.count_N_OrderOfAllCards = await this.clickOnSort_N_AtoZ();
    }
    @then(/^All attractions cards should be displayed in ascending order$/)
    public async order_ASC() {
        
        expect(this.count_N_OrderOfAllCards[0]).to.not.equal(this.count_N_OrderOfAllCards[1]);
    }
    @when(/^User clicks on Checkout button$/)
    public async reviewOrderStep() {
        await this.clickCheckoutButton();
    }
    @then(/^user redirects to '(.*)' page and order total should be '(.*)'$/)
    public async reviewOrderPageStep(contentTitle: string, orderTotal: string) {
        const reviewOrder = await this.onReviewYourOrderPage();
        expect(reviewOrder).to.equal(contentTitle);
        expect(await this.orderTotalIs()).to.equal(orderTotal);
        
    }
    @when(/^User selects '(.*)' '(.*)' as a visiting date to Boston$/)
    public async selectDateStep(month_n_year: string, date: any) {
        await this.selectVisitingDate(month_n_year, date);
    }
    @then(/^selected date should be '(.*)' and user clicks Continue to payment button$/)
    public async dateValueStep(dateIs: any) {
        expect(await this.returnDateValue()).to.equal(dateIs)
        await this.clickContinueToPayment();
    }
    @when(/^User redirects to '(.*)' page and order total should be '(.*)'$/)
    public async fillPaymentDetails(title: string, amount: string) {
        expect(await this.onPaymentPage()).to.equal(title);
        expect(await this.orderTotalOnPaymentPage()).to.equal(amount);
    }
    @when(/^User clicks on cart icon and '(.*)' order total '(.*)' should be displayed and user selects Checkout button$/)
    public async cartIconStep(title: string, orderTotal: string) {
        const cart = await this.clickCartIcon_N_SelectCheckout();
        expect(cart[0]).to.equal(title);
        expect(cart[1]).to.equal(orderTotal);
    }
    @when(/^User clicks Learn more link on all inclusive page$/)
    public async clickLearnMoreStep() {
        this.contentTitleStep = await this.clickLearnMore();
    }
    @then(/^User should redirect to '(.*)' page and '(.*)'$/)
    public async onFreeGuaranteePage(url: string, title: string) {
        expect(this.contentTitleStep[0]).to.contain(url);
        expect(this.contentTitleStep[1]).to.equal(title);
    }
    @when(/^user enters '(.*)' inside email address type box and clicks checkbox and Submit button$/)
    public async signUpStep(emailAddress: string) {
        this.contentTitleStep = await this.signUpUser(emailAddress);
    }
    @then(/^'(.*)' popup message should be displayed$/)
    public async isUserFinshedSignUp(message: string) {
        expect(this.contentTitleStep).to.equal(message);
    }
    @when(/^user enters '(.*)' inside email address type box Submit button$/)
    public async errorSignUp(errorMessage1: string) {
        this.contentTitleStep = await this.signUpUser(errorMessage1, 'dontSelectCheckBox');
    }
    @then(/^'(.*)' and '(.*)' error message should be displayed$/)
    public async errorMessageSignUp(errorMessage1: string, errorMessage2: string) {
        expect(this.contentTitleStep[0]).to.equal(errorMessage1);
        expect(this.contentTitleStep[1]).to.equal(errorMessage2);  
    }

}
