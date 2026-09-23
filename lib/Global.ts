//To provide test data & objects  / elements realted to whole application

import {Page} from '@playwright/test';

export class Global{
constructor(public page : Page){}

//************************** Test Data ****************************//
public url : string=  "https://ctcorphyd.com/SureshIT/login.php";
public username: string='sureshit';
public password: string='sureshit';
public lastname: string= 'selenium';
public firstname:string='Kanchan';
public updatedlastname : string ='Khanna';
public search_fstName :string ='Kanchan';


//***************************** Object / elements**************************//
public textusername : string = "//input[@name='txtUserName']";
public textpassword: string ="//input[@name='txtPassword']";
public login : string= "//input[@type='Submit']";
public logout : string= "getByRole('link',{name: 'Logout'})";
public pimtab : string = "//li[@id='pim']";
public addemployee : string = "getByRole('link',{name : 'Add Employee'})";
public lname : string ="//input[@name='txtEmpLastName']";
public fname : string ="//input[@name='txtEmpFirstName']"
public savebtn : string = "//input[@value='Save']";
public editbtn : string = "#btnEditPers";
public lastnameedit : string = "//input[@id='txtEmpLastName']";
public personalDetailSavebtn : string ="#btnEditPers";
public employeList : string = "//getByRole('link',{name:'Employee List'})";
public checkbox_delete : string = "//input[@name='chkLocID[]']";
public searchby_EmpInfo : string ="//select[@id='loc_code']";
public searchfor :string ="//input[@id='loc_name']";
public searchbtn :string ="//input[@value='Search']";
public dlt : string ="//input[@value='Delete']";


}