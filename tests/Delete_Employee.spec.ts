import {test} from '@playwright/test';
import {general } from '../lib/General';

test('delete Emploee from list', async({page})=> 
    {
const obj= new general(page);
await obj.openApplication();
await obj.loginbutton();
await obj.pim_button();
await obj.click_EmpList();
await obj.filter_for_employee();
await obj.delete_chekbox();
await obj.delete_btn();
await obj.logoutLink();  

})




