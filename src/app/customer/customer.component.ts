import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  // customerForm=new FormGroup ({
  //   name :new FormControl('', [Validators.required]),
  // email : new FormControl('', [Validators.required, Validators.email]),
  // phone : new FormControl('', [Validators.required]),
  // address : new FormControl('', [Validators.required]),
  // });

  customerForm: FormGroup;

  constructor(private api:ApiService,private _formBuilder:FormBuilder) { }

  // getErrorMessage() {
  //   if (this.customerForm.controls['name'].hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   else{
  //     if(this.customerForm.controls['name'].hasError('email') ){
  //       return 'Invalid Email';
  //     }

  //   }
    
  // }

  ngOnInit(): void {

    this.customerForm= this._formBuilder.group({
      name :['', [Validators.required]],
       email : ['', [Validators.required, Validators.email]],
       phone : ['', [Validators.required]],
       address : ['', [Validators.required]],

    })
  }

  onSubmit(customerForm:any,formDirective: FormGroupDirective){
    console.log(this.customerForm.value);

    
    this.api.getData().subscribe(data=>{
      console.log("received data from server");
      console.log(data);
      debugger;
      
    })
    
    formDirective.resetForm();
    customerForm.reset();
    
    
    
  }


}
