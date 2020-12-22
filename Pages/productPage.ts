import { by, element, $, $$, browser } from 'protractor';
import { HelpersClass } from 'helpers/helperClass';

export class ProductPage extends HelpersClass{
    
    public productTitleElement = $('[class="product-title"]');
    public secondary_menu_item = $$('[class="secondary-menu--item"]');
    public content_title = $('[class="content--title"]');
    public productsStackHeader = $('.products-stack-header--title');
    public key_selling_points_item = $$('[class="key-selling-points-item--description"]');
    public dropDownElement = $('[class="form-control"]');
    public orderTotal = element(by.xpath('.//*[@class="lc-cart__prices-total lc-font__regular"]//*[@class="lc-cart__prices-number "]'));
    public cartItemIncrease = $$('[data-testid="cartItemIncrease"]');
    public cartItemDecrease = $$('[data-testid="cartItemDecrease"]');
    public cartIcon = $$('[class="cart-icon__icon"]').get(1);
    public checkout_On_Cart = $('[class="lc-cart__purchase lc-font__regular"]');
    public checkoutButton = $('[class="lc-cart__purchase lc-font__regular "]');
    public checkoutButtonDisable = $('[class="lc-cart__purchase lc-font__regular lc-cart__purchase--disabled"]');
    public itemPrice = $$('[class="lc-cart__item-price lc-cart__item-price-colored"]');
    public discountItemPrice = $$('[class="lc-cart__item-price lc-cart__item-price-colored lc-cart__item-price-inline"]');
    public closeSideAction: any = $$('[class="slide-in--actions--close"]');
    public submitButton = element(by.id('edit-actions-submit'));
    public errorMessageAlert = $$('.form-item--error-message.alert.alert-danger.alert-sm');
    public productBuy = $$('[class="pass-product-buy"]');
    public clickHome = $$('[href="/boston/en-us"]');
    public allAttrationsCards = $$('[class="lpg-attractions-card__details"]');
    public loadMore = $('[href="load-more"]');
    public filter = $('[class="lpg-attractions-product-filter__filter-button"]');
    public filterContent = $$('[class="lpg-attractions-filter__filter-content-tags-checkbox"]');
    public cardTitle = $$('[class="lpg-attractions-card__title"]');
    public quickView = $$('[class="sc-bdnylx jMhaxE"]');
    public attractions_quickview__content = $('[class="lpg-attractions-quickview__content"]');
    public quickViewContentHeaderTitle = $('[class="lpg-attractions-quickview__header--title"]');
    public sort = $('[class="lpg-attractions-product-filter__sort-button"]');
    public sort_AtoZ = $$('[class="lpg-attractions-filter__filter-content-tags-sort"]');
    public cartOrderTotal = $$('[class="lc-cart__prices-number "]');
    public cartTitle = element(by.xpath('.//*[@class="lc-cart lc-cart--popup  "]//h2'));
    public learnMore = $('.cta--link');
    public new90Days = $('.field.field--name-field-title');
    public signUp = element(by.id('edit-email--2'));
    public editSubscription = element(by.id('edit-subscription--2'));
    public emailSubmitButton = element(by.id('edit-actions-submit--2'));
    public signUpConfirmation = $('.slide-in--content--header.confirmation-header');
    public signUpError = $$('.form-item--error-message.alert.alert-danger.alert-sm');


    /**
     * 
     * @param url - URL of the page
     */
    public async navigateToPage(url: string) {
            await browser.get(url);
    }
    /**
     * @getProductTitle function will return the title text
     */

    public async getProductTitle() {
        await this.elementToBePresent(this.productTitleElement);
        return await this.productTitleElement.getText();
    }
    /**
     * @goToHomePage function will redirect to home page from products/all-inclusive page and return content title text
     */
    public async goToHomePage() {
        await browser.actions().mouseMove(this.clickHome.get(1)).click().perform();
        // await this.clickHome.get(1).click();
        await this.elementToBePresent(this.content_title);
        return await this.content_title.getText();
    }
    /**
     * @param linkName - Link text 
     * @clickOnLinkFromSecondaryMenuItem function will get all elements and will filter with @linkName and will click on the link
     */
    public async clickOnLinkFromSecondaryMenuItem(linkName: string) {
        await this.elementToBePresent(this.secondary_menu_item);
        await this.filterAndClick(this.secondary_menu_item, linkName);        
    }
    /**
     * @onSubMenuItemPage function will return the current URL of the page and text of the content title
     */
    public async onSubMenuItemPage() {
        await this.elementToBePresent(this.content_title);
        return [await browser.getCurrentUrl(), await this.content_title.getText()];        
    }
    /**
     * 
     * @clickOnCloseSideAction function will close the side action pop up if displayed 
     */
    public async clickOnCloseSideAction() {
        await browser.executeScript('window.scrollTo(94, 250);');
        await browser.sleep(2000);
        if (await this.closeSideAction.get(0).isDisplayed() === true) {
            await this.closeSideAction.get(0).click();
            await browser.sleep(2000);
        } else {
            console.log("");
        }
    }
    /**
     * 
     * @param linkName - Link text
     * @clickOnLinkFromView_Content function will get all elements and will filter with @linkName and will click on the link
     */
    public async clickOnLinkFrom_View_Content(linkName: string) {
        await this.elementToBePresent(this.key_selling_points_item);
        await this.filterAndClick(this.key_selling_points_item, linkName);  
    }
    public async clickSubmit() {
        await this.submitButton.click();
    }
    public async errorMessage() {
        return await this.elementToBePresent(this.errorMessageAlert.get(0))
        
    }
   /**
    * 
    * @param option - Option which need to be selected
    * @clickAndSelectFromProductStackDropDown function will click on the Choose your All-Inclusive pass drop down and will select the @option
    */
    public async clickAndSelectFromProductStackDropDown(option: string) {
        await browser.executeScript('window.scrollTo(94, 800);');
        await this.elementToBePresent(this.dropDownElement);
        await this.dropDownElement.click();
        await $(`option[value="Bos_Prod_Go_${option}"]`).click();
        await browser.sleep(2000);
    }
    /**
     * @addAdultPassToCart function will add adult pass to the cart
     */
    public async addAdultPassToCart() {
        await this.elementToBePresent(this.cartItemIncrease.get(0));
        await this.cartItemIncrease.get(0).click();
        await this.elementToBePresent(this.cartIcon);
    }
    public async deleteAdultItem() {
        await browser.sleep(2000);
        await this.elementToBePresent(this.cartItemDecrease);
        await this.cartItemDecrease.get(0).click();
        await this.elementToBePresent(this.productBuy.get(1));
    }
    /**
     * @getOrderTotal function will return the order total
     */
    public async getOrderTotal() {
        await this.elementToBePresent(this.orderTotal);
        return (await this.orderTotal.getText()).substring(1)
    }
    /**
     * @isCartIconPresent function will return cart icon is present or not on the page
     */
    public async isCartIconPresent() {
        return await this.cartIcon.isPresent();
    }
    /**
     * @getCartIconText function will return the text of the Cart Icon
     */
    public async getCartIconText() {
        return await this.cartIcon.getText();
    }
    /**
     * @isCheckoutButtonEnabled function will return is checkout button is enabled or disabled
     */
    public async isCheckoutButtonEnabled(button: string) {
        if (button === 'Enabled') {
            return await this.checkoutButton.isEnabled();
        } else {
            return await this.checkoutButtonDisable.isPresent();
        }
    }
    /**
     * @clickCheckoutButton function will click on the checkout button
     */
    public async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
    /**
     * @priceOfAdultForSelectedOption function will return the price of the Adult
     */
    public async priceOfAdultForSelectedOption() {
        if (await this.itemPrice.get(0).isPresent() === true) {
            return (await this.itemPrice.get(0).getText()).substring(1);
        } else { 
            return (await this.discountItemPrice.get(0).getText()).substr(-2);
        }
    }
    /**
     * @priceOfChildForSelectedOption function will return the price of the Child
     */
      public async priceOfChildForSelectedOption() {
         return (await this.itemPrice.get(0).getText()).substring(1);
    }
    /**
     * @getTheCountOfAllCards function will return the count of all cards
     */    
    public async getTheCountOfAllCards() {
        await browser.executeScript('window.scrollTo(0, 10000);');
        await this.elementToBePresent(this.allAttrationsCards);
        const countOfAllCards = await this.allAttrationsCards.count();
        return countOfAllCards;
    }
    /**
     * @clickSeeAllAttractions function will click on See all attractions link on the page
     */
    public async clickSeeAllAttractions() {
        
        await this.elementToBePresent(this.loadMore);
        await this.loadMore.click();        
    }
    /**
     * 
     * @param filterText - Filter text @example Food & Drink
     * @filterWithAttractions function will click on Filter and selects the @example
     */
    public async filterWithAttractions(filterText: string) {
        await browser.executeScript('window.scrollTo(94, 900);');
        await this.elementToBePresent(this.filter);
        await this.filter.click();
        await this.filterAndClick(this.filterContent, filterText);
        await this.filter.click();
    }
    public async food_N_DrinkCardTitle() {
        await this.elementToBePresent(this.cardTitle.last());
        return await this.cardTitle.last().getText();
    }
    /**
     * 
     * @param attraction - Name of the attraction
     * @clickOnQuickViewOfAttraction function will click on quick view on a cart based on @parm
     */
    public async clickOnQuickViewOfAttraction(attraction: string) {
        await this.elementToBePresent(this.cardTitle.last());
        const index: any = await this.getIndexOfElement(this.cardTitle, attraction);
        await this.quickView.get(index).click();  
        await this.elementToBePresent(this.attractions_quickview__content);
    }
    /**
     * @quickViewContentText function will return is quick view content is present or not and the text of the title
     */
    public async quickViewContentText() {
        await this.elementToBePresent(this.attractions_quickview__content);
        return [await this.attractions_quickview__content.isPresent(), await this.quickViewContentHeaderTitle.getText()];
    }
    /**
     * @clickOnSort_N_AtoZ function will click on sort and selects A - Z and returns the attractions before sort and after sort
     */
    public async clickOnSort_N_AtoZ() {     
        const beforeSort = await this.cardTitle.getText();
        await this.elementToBePresent(this.sort);
        await this.sort.click();
        await this.elementToBePresent(this.sort_AtoZ.get(0));
        await this.sort_AtoZ.get(0).click();
        const afterSort = await this.cardTitle.getText();
        return [beforeSort, afterSort];        
    }
    /**
     * @clickCartIcon_N_SelectCheckout function will click cart icon and will return cart title and order total and clicks checkout
     */
    public async clickCartIcon_N_SelectCheckout() {
        await this.cartIcon.click();
        await this.elementToBePresent(this.checkout_On_Cart);
        const cartTitle = await this.cartTitle.getText();
        let orderToatl = await this.cartOrderTotal.get(0).getText();
        orderToatl.includes('-') ? orderToatl = await this.cartOrderTotal.get(1).getText() : orderToatl = orderToatl;
        await this.checkout_On_Cart.click();
        return [cartTitle, orderToatl];
    }
    /**
     * @clickLearnMore function will click on Learn more on the page and returns the redirected page URL and content title
     */
    public async clickLearnMore() {
        await browser.executeScript('window.scrollTo(94, 800);');
        await this.elementToBePresent(this.learnMore);
        await this.learnMore.click();
        await this.elementToBePresent(this.new90Days);
        return [await browser.getCurrentUrl(), await this.new90Days.getText()];        
    }
    /**
     * 
     * @param emailAddress - Email address to sign up
     * @signUpUser function will sign up the user
     */
    public async signUpUser(emailAddress: string, termsConditions?: any) {
        let emailIs: any;
        emailAddress === 'empty email' ? emailIs = '' : emailIs = emailAddress;
        await browser.executeScript('window.scrollTo(0, 10000);');
        await this.signUp.sendKeys(emailIs);
        if (termsConditions) { 
            await this.emailSubmitButton.click();
            await this.elementToBePresent(this.signUpError);
            return [await this.signUpError.get(0).getText(), await this.signUpError.get(1).getText()];
        } else {
            await this.editSubscription.click();
            await this.emailSubmitButton.click();
            await this.elementToBePresent(this.signUpConfirmation);
            return await this.signUpConfirmation.getText();
        }
    }
    public async clickBuyButton() {
        await this.elementToBePresent(this.productBuy.get(1))
        await this.productBuy.get(1).click();
        await this.elementToBePresent(this.productsStackHeader);
        return await this.productsStackHeader.getText();
    }

}