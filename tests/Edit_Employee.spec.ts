import {general } from '../lib/General';
import{test} from '@playwright/test';
test('update_employee',async({page})=>{

 const obj= new general(page);
    await obj.openApplication();
    await obj.loginbutton();
    await obj.pim_button();
    await obj.AddEmployee_button();
    await obj. BtnSave_AddEmployee();
    await obj.editkey_personalDetails();
    await obj.updatEmp();
    await obj.Savebtn_personalDetail();
    await obj.logoutLink();
})
