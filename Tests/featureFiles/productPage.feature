@test
Feature: User journeys tests on the products gocity boston all inclusive page

    Background: Navigate to Products All Inclusive page
        Given User navigates to Gocity Boston Products All Inclusive page
        Then user should be on All-Inclusive page and 'All-Inclusive Pass' title should be displayed

    Scenario: User should redirect to Home page after clicking Home link
        When User clicks on the Home link on products all-inclusive page
        Then User should redirect to home page and 'Experience more with Go Boston' should be displayed on Home page

    Scenario: User should redirect to pricing page after clicking Buy button
        When User clicks on Buy button on products all-inclusive page
        Then User should redirect tp pricing page and 'Choose your All-Inclusive pass' title should be displayed

    Scenario: Click on What's included from secondary-menu
        When User clicks on the 'What's included' from 'secondary-menu item'
        Then User should be redirected to the 'what-you-get' page
        And 'What’s included with the Go Boston All-Inclusive pass' content title should be displayed

    Scenario: Click on How it works from secondary-menu
        When User clicks on the 'How it works' from 'secondary-menu item'
        Then User should be redirected to the 'how-it-works' page
        And 'How does the Go Boston All–Inclusive pass work?' content title should be displayed

    Scenario: Click on Attractions from secondary-menu
        When User clicks on the 'Attractions' from 'secondary-menu item'
        Then User should be redirected to the 'attractions' page
        And 'All-in admission to 45+ Boston attractions' content title should be displayed


    Scenario: Click on Real customer savings from secondary-menu
        When User clicks on the 'Real customer savings' from 'secondary-menu item'
        Then User should be redirected to the 'customer-savings' page
        And 'Real Customer Savings' content title should be displayed


    Scenario: Click on Plan your trip from secondary-menu
        When User clicks on the 'Plan your trip' from 'secondary-menu item'
        Then User should be redirected to the 'guidebook' page
        And 'Download your free Boston guidebook' content title should be displayed

    Scenario: Click on Unlimited admission. Great savings and easy budgeting from view-content
        When User clicks on the 'Unlimited admission. Great savings and easy budgeting. ' from 'view content'
        Then User should be redirected to the 'what-you-get' page
        And 'What’s included with the Go Boston All-Inclusive pass' content title should be displayed

    Scenario: Click on 1, 2, 3, 5, or 7-day pass duration's to pick from from view-content
        When User clicks on the '1, 2, 3, 5, or 7-day pass duration's to pick from' from 'view content'
        Then User should be redirected to the 'what-you-get' page
        And 'What’s included with the Go Boston All-Inclusive pass' content title should be displayed

    Scenario: Click on All on one digital pass. Enjoy contactless entry. from view-content
        When User clicks on the 'All on one digital pass. Enjoy contactless entry.' from 'view content'
        Then User should be redirected to the 'what-you-get' page
        And 'What’s included with the Go Boston All-Inclusive pass' content title should be displayed

    Scenario: Click on Plan in advance or visit on the fly. Use our expert App to breeze between attractions. from view-content
        When User clicks on the 'Plan in advance or visit on the fly. Use our expert App to breeze between attractions.' from 'view content'
        Then User should be redirected to the 'what-you-get' page
        And 'What’s included with the Go Boston All-Inclusive pass' content title should be displayed

    Scenario: Checkout button should be not clickable and cart icon should not display when no pass item is added to the cart
        Given User closes 'Want to win a $250 voucher?' if displayed
        When User clicks on All-Inclusive pass drop down and select '1 day pass from $65' 'd1'
        And User adds 'one' 'Adult' item to cart
        And User should 'see' that cart icon is displayed
        And User deletes the added item
        Then User should 'not see' that cart icon is displayed
        And Checkout button should be 'Disabled'

    Scenario: All attractions should display after clicking See all attractions link
        When User clicks on See all attractions
        Then User should see all attractions cards

    Scenario: Risk free guarantee page should be displayed after clicking Learn more on all inclusive page
        When User clicks Learn more link on all inclusive page
        Then User should redirect to 'risk-free-guarantee' page and 'New! 90-day cancellation'

    Scenario: All Food & Drink attractions should display when User filter with Food & Drink
        Given User closes 'Want to win a $250 voucher?' if displayed
        When User clicks on Filter and selects 'Food & Drink'
        And 'Samuel Adams Brewery Tour and Souvenir Glass' only should display after selecting Food & Drink attraction
        And User Quick view on  'Samuel Adams Brewery Tour and Souvenir Glass' card
        Then 'Samuel Adams Brewery Tour and Souvenir Glass' Attractions quickview content should be displayed

    Scenario: Attractions should be displayed in ascending order after selecting A-Z from Sort
        And User closes 'Want to win a $250 voucher?' if displayed
        When User clicks on Filter and selects 'Outdoor'
        And User clicks Sort and select A-Z
        Then All attractions cards should be displayed in ascending order
    @clean
    Scenario: Add 1 day pass from $65 to basket proceed checkout
        Given User closes 'Want to win a $250 voucher?' if displayed
        Given User clicks on All-Inclusive pass drop down and select '1 day pass from $65' 'd1'
        And '1 day pass from $' '65' option from drop down should be selected
        And User adds 'one' 'Adult' item to cart
        And User should 'see' that cart icon is displayed
        And cart icon counter should be '1'
        And Order Total should be 'One Adult' price and Checkout button should be 'Enabled'
        When User clicks on Checkout button
        And user redirects to 'Review your order' page and order total should be '$65'
        And User selects 'February 2021' '20' as a visiting date to Boston
        And selected date should be '02-20-2021' and user clicks Continue to payment button
        And User redirects to 'Payment' page and order total should be '$65'
    @clean
    Scenario: Add 1 day pass from $65 to basket proceed checkout through Cart
        Given User closes 'Want to win a $250 voucher?' if displayed
        When User clicks on All-Inclusive pass drop down and select '2 day pass from $89' 'd2'
        And '2 day pass from $' '89' option from drop down should be selected
        And User adds 'one' 'Adult' item to cart
        And User should 'see' that cart icon is displayed
        And Order Total should be 'One Adult' price and Checkout button should be 'Enabled'
        And User clicks on cart icon and 'Your cart' order total '$89' should be displayed and user selects Checkout button
        And user redirects to 'Review your order' page and order total should be '$89'
        And User selects 'February 2021' '20' as a visiting date to Boston
        And selected date should be '02-20-2021' and user clicks Continue to payment button
        And User redirects to 'Payment' page and order total should be '$89'

    Scenario: Signup the user on products all inclusive page
        Given User closes 'Want to win a $250 voucher?' if displayed
        When user enters 'test12324@gmail.com' inside email address type box and clicks checkbox and Submit button
        Then 'Thanks for signing up!' popup message should be displayed

    Scenario: Signup the user on products all inclusive page
        Given User closes 'Want to win a $250 voucher?' if displayed
        When user enters 'empty email' inside email address type box Submit button
        Then 'Email field is required.' and 'Please agree to our privacy policy.' error message should be displayed

