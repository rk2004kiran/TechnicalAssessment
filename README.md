completed technical assignment by RaviKiran

Prerequisites -
1 - install Node

2 - after installing node open any IDE or Terminal or Git bash and run bellow two commands
     (1) - npm install ---- npm install to install the project dependencies
     (2) - npm update ----- npm update to update webdriver

3 - I used the browser : Chrome for automation

4 - To run the test use 'npm run test' command from Terminal or any IDE

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

8 - Features I automated to transfer link

10 - I used Chai Node module for asserting,

Note -
 So I can run scenario alone by it self

If there any troubles running tests please run this command  -- node_modules/.bin/webdriver-manager update and then run npm run test
