import { Selector, t, testcafe } from 'testcafe';
import { testData } from '../testData/data.json';
import hooks from '../support/hooks';


export class Someclass {

    async loadApp(testController, app) {

        const dropdown = Selector("portal-navigation .dropdown:not(.userProfile)");
        await testController.click(dropdown);
        const appElement = Selector('ul > li'+ app);
        await testController.click(appElement);
    
    }
}