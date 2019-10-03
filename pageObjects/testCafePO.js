
import { Selector } from 'testcafe';

export default class testCafePO extends Someclass {
   
    searchBox(){
        return Selector("input[name='q']");
    }

    async openGoogle(t){
        await t.navigateTo('https://www.google.co.uk/');
    }
}