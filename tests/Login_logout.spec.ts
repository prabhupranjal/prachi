import {test} from '@playwright/test';
import { general } from '../lib/General';

test('login_test',async({page})=>{

    const obj = new general(page);
    await obj.openApplication();
    await obj.loginbutton();
    await obj.logoutLink();


});

