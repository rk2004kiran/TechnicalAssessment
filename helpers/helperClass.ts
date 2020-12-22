import { browser, ExpectedConditions } from 'protractor';

export class HelpersClass {
  /**
   *
   * @param - element value
   * @waitForElementToBePresent will wait for element to be present
   *
   */
  public async elementToBePresent(element: any) {
    return await browser.wait(
      () => element.isPresent(),
      600000,
    );
  }
/**
 * 
 * @param value - element value
 * @param textValue - Text value to filter with
 * @getIndexOfElement function will return the index of the element based on @textValue
 */
  public async getIndexOfElement(value: any, textValue: string) {
    const arrayList = await value.getText();
    for (let index in await arrayList) {
      if (arrayList[index] === textValue) {
        return index;
       }
    }
  }
/**
 * 
 * @param element - element value
 * @elementToBeClickable function will wait untill the element is enable and clickable
 */
  public async elementToBeClickable(element: any) {
    let condition = ExpectedConditions.elementToBeClickable(element);
    return browser.wait(condition, 6000);
  }

  public async filterAndClick(element: any, textValue: string) {
    await element.filter((element: any) => element.getText().then((text: any) => text === textValue)).first().click();    
  }
}
