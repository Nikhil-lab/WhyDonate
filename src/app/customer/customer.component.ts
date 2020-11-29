import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm=new FormGroup ({
    name :new FormControl('', [Validators.required]),
  email : new FormControl('', [Validators.required, Validators.email]),
  phone : new FormControl('', [Validators.required]),
  address : new FormControl('', [Validators.required]),
  });

  

  constructor(private api:ApiService) { }

  getErrorMessage() {
    if (this.customerForm.controls['name'].hasError('required')) {
      return 'You must enter a value';
    }
    else{   
      if (this.customerForm.controls['name'].hasError('email')) {
        return 'not a valid email';
      }
    }

    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.customerForm.value);
    this.api.getData().subscribe(data=>{
      console.log("received data from server");
      console.log(data);
    })
  }


}
