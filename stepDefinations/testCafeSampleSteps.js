import { Given, When, Then} from 'cucumber'
//import { Selector, t } from 'testcafe';
import page from '../pageObjects/testCafePO';

Given('I am on google search page', async function () {
    await page.testCafePO.openGoogle(testController);    
   //await testController.navigateTo('');
    });

When('I enter search value', async function () {
    await testController.typeText(page.testCafePO.searchBox(),"Search here");
    await testController.pressKey('enter');
    }); 

Then('Search results should be displayed', function () {
         
         });
