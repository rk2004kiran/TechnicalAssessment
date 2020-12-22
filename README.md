completed technical assignment by RaviKiran

Prerequisites -
1 - install Node

2 - after installing node open any IDE or Terminal or Git bash and run bellow two commands
     (1) - npm install ---- npm install to install the project dependencies
     (2) - npm update ----- npm update to update webdriver

3 - I used the browser : Chrome for automation

4 - To run the test use 'npm run test' command from Terminal or any IDE if there are isuues running tests please use this command protractor .\protractorCucumberConf.js
    to run single scenario tag the scenario with any name and then use this command - npm run test -- --tags "@ravi" then it will only run the taged scenario

5 - After running all 3 scenarios the report will be generated under './reports' folder in .html and .json  format
       Note - Please delete the reports inside the reports folder befor running the tests

6 - To run a single scenario, the scenario need to be tagged and use this command to run the test npm run test -- --tags '@tagName' for example npm run test -- --tags '@ravi'

Framework Description -
 1 - I used Cucumber to write test scenarios in BDD and Gherkin format
 2 - I used Protractor for automation
 3 - I used Typescript
 4 - For reporting I used cucumber-html-reporter to generate the report after running the tests
 5 - I designed the tests in Page Object Model(POM)
 6 - Folder ./Pages contains the paymentPage, product page and review_Your_Order_page class which I extended in the productPage.steps.ts class under ./Tests/stepDefs/productPage.steps.ts
 7 - Under ./helpers/waitFor.ts I wrote a WaitFor class and the function elementToBePresent() will wait for the element to be present on the page
        Note - I used long timeout since the since because of lazy loading

8 - Automated User journies
There are many user journeys which we can automate on https://gocity.com/boston/en-us/products/all-inclusive page, out of which I have automated   1. Adding Item to cart and going to payment page and validating on each page. 2. Adding item to cart clicking on Cart icon and validating on cart icon and clicking on checkout button ang going till payment page and validating on each page till payment page 3. Filtering the by product and and validation the Attraction after getting results by filter. 4. Sorting the Attractions by A - Z and validating the sort. 5. Validating all Attractions are loaded or not after clicking See all attractions. 6. Clicking on Quick view oa Attraction and validating. 7. Sign up a user and validate, is user sign up was successful or not. 8. Automated redirecting to the page is working as expected or nor for the links under Why choose the All-Inclusive Pass? 9. Automated redirecting to the page is working as expected or not for all secondary menu links.
10Automated selecting the pass from Choose your All-Inclusive pass dropdown dynamically and giving the pass name from the Feature file itself instead.
Over all I have automated 20 user journeys scenarios out various user journeys on https://gocity.com/boston/en-us/products/all-inclusive page.

10 - I used Chai Node module for asserting,

Note -
Mostly I automated in such a way that the feature user journeys we can automate by just writing scenarios in the feature file.
Most of my tests are automated in dynamic style which will be easy to add or change the test data from feature itself 
Note- Because of lazy loading I have used sleep in 2 places , I tried with various Protractor waits but it didn't work, but rest of all the areas I used Explicit Wait only which will wait for the element to present, ones present it will perform the required action.

If there any troubles running tests please run this command  -- node_modules/.bin/webdriver-manager update and then run npm run test
