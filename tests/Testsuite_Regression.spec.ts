import {test} from'@playwright/test';
import { general } from '../lib/General';

test.describe('Regression_Suite', () => {

    test('login_test',async({page})=>{
    
        const obj = new general(page);
        await obj.openApplication();
        await obj.loginbutton();
        await obj.logoutLink();
    });

    test('Add_New_Employee',async({page})=>{
        
    const obj = new general(page);
    await obj.openApplication();
    await obj.loginbutton();
    await obj.pim_button();
    await obj.AddEmployee_button();
    await obj.BtnSave_AddEmployee();
    await obj.logoutLink();
    
    });
  
});