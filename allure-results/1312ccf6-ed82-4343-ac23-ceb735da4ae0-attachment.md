# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Edit_Employee.spec.ts >> update_employee
- Location: tests\Edit_Employee.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.savebutton')

```

# Test source

```ts
  1  | 
  2  | import { Global } from "./Global";
  3  | 
  4  | //To provide all reuseable functions and methods related to whole applications
  5  | export class general extends Global{
  6  | 
  7  |     async openApplication()
  8  |     {
  9  |      await this.page.goto(this.url);
  10 |      console.log('Application opened');
  11 | 
  12 |     }
  13 | 
  14 |     async loginbutton()
  15 |     {
  16 |         await this.page.locator(this.textusername).fill(this.username);
  17 |         await this.page.locator(this.textpassword).fill(this.password);
  18 |         await this.page.locator(this.login).click();
  19 |         console.log('login done');
  20 |     }
  21 |     async logoutLink()
  22 |     {
  23 |         await this.page.getByRole('link',{name: 'Logout'}).click();
  24 |         console.log('logout done');
  25 |     }
  26 | 
  27 |     async pim_button()
  28 |     {
  29 |        await this.page.locator(this.pimtab).hover();
  30 |        await this.page.waitForTimeout(3000);
  31 |        console.log('pim-hover done');
  32 | 
  33 |     }
  34 |  
  35 |    async AddEmployee_button() 
  36 |    {
  37 |     await this.page.getByRole('link', { name: 'Add Employee' }).waitFor({state:'visible'});
  38 |     await this.page.getByRole('link', { name: 'Add Employee' }).click();
  39 |     console.log('clicked on add employee button');
  40 |    }
  41 | 
  42 | 
  43 |     async BtnSave_AddEmployee() 
  44 |     {
  45 |         const frame= this.page.frameLocator("//iframe[@id='rightMenu']");
  46 |         await frame.locator(this.lname).fill(this.lastname);
  47 |         await frame.locator(this.fname).fill(this.firstname);
  48 |         await frame.locator(this.savebtn).click();
  49 |         await this.page.waitForTimeout(3000);
  50 |         console.log('Saved')
  51 |     }
  52 | 
  53 |     async editkey_personalDetails()
  54 |     {    
  55 |     const frame = this.page.frameLocator("//iframe[@id='rightMenu']");
  56 |     await frame.locator(this.editbtn).click();
  57 |     console.log('clicked on edit button');
  58 | 
  59 |     }
  60 |     async updatEmp()
  61 |     {
  62 |         const frame = this.page.frameLocator("//iframe[@id='rightMenu']");
  63 |        await frame.locator(this.lastnameedit).fill(this.updatedlastname);
  64 |         console.log('update lastname');
  65 |     }
  66 | 
  67 |     
  68 |     async Savebtn_personalDetail()
  69 |     {
> 70 |         await this.page.locator(this.personalDetailSavebtn).click();
     |                                                             ^ Error: locator.click: Target page, context or browser has been closed
  71 |         console.log('personal details updated');
  72 |     }
  73 | }
```