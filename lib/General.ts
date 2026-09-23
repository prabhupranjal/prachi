
import { Global } from "./Global";

//To provide all reuseable functions and methods related to whole applications

export class general extends Global{

    async openApplication()
    {
     await this.page.goto(this.url);
     console.log('Application opened');

    }

    async loginbutton()
    {
        await this.page.locator(this.textusername).fill(this.username);
        await this.page.locator(this.textpassword).fill(this.password);
        await this.page.locator(this.login).click();
        console.log('login done');
    }
    async logoutLink()
    {
        await this.page.getByRole('link',{name: 'Logout'}).click();
        console.log('logout done');
    }

    async pim_button()
    {
       await this.page.locator(this.pimtab).hover();
       await this.page.waitForTimeout(3000);
       console.log('pim-hover done');

    }
 
   async AddEmployee_button() 
   {
    await this.page.getByRole('link', { name: 'Add Employee' }).waitFor({state:'visible'});
    await this.page.getByRole('link', { name: 'Add Employee' }).click();
    console.log('clicked on add employee button');
   }


    async BtnSave_AddEmployee() 
    {
        const frame= this.page.frameLocator("//iframe[@id='rightMenu']");
        await frame.locator(this.lname).fill(this.lastname);
        await frame.locator(this.fname).fill(this.firstname);
        await frame.locator(this.savebtn).click();
        await this.page.waitForTimeout(3000);
        console.log('Saved')
    }

    async editkey_personalDetails()
    {    
    const frame = this.page.frameLocator("//iframe[@id='rightMenu']");
    await frame.locator(this.editbtn).click();
    console.log('clicked on edit button');

    }
    async updatEmp()
    {
        const frame = this.page.frameLocator("//iframe[@id='rightMenu']");
       await frame.locator(this.lastnameedit).fill(this.updatedlastname);
        console.log('update lastname');
    }

    
    async Savebtn_personalDetail()
    {
         const frame = this.page.frameLocator("//iframe[@id='rightMenu']");
        await frame.locator(this.personalDetailSavebtn).click();
        console.log('personal details updated');
    }

    async click_EmpList()
    {
        await this.page.getByRole('link',{name:'Employee List'}).click();
        console.log('open employee list');
    }

    async filter_for_employee()
    {
        const frame = this.page.frameLocator("//iframe[@id='rightMenu']");
        await frame.locator(this.searchby_EmpInfo).selectOption({value:'1'});
        await frame.locator(this.searchfor).fill(this.search_fstName);
        await frame.locator(this.searchbtn).click();
        await this.page.waitForTimeout(3000);
        console.log('filter applied for employee search');

    }
    async delete_chekbox()
    {
        const frame = this.page.frameLocator("//iframe[@id='rightMenu']");
        await frame.locator(this.checkbox_delete).first().click();
        console.log('checkbox selected');

    }

    async delete_btn()
    {
         const frame = this.page.frameLocator("//iframe[@id='rightMenu']");
        await frame.locator(this.dlt).click();
        console.log('deleted');
    }



}
