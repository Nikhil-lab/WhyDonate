import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface CustomerData {
  id: string;
  name: string;
  address:string;
  email:string;
  phone:string;
  created_at:string;
  updated_at:string;
}

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  customerDetails:CustomerData;
  constructor(public dialogRef: MatDialogRef<CustomerdetailsComponent>,@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    console.log(this.data);
    this.customerDetails=this.data.row;
    console.log(this.customerDetails);
  


  }

}
