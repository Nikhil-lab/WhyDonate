
import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../api.service';
import { CustomerdetailsComponent } from '../customerdetails/customerdetails.component';


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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  displayedColumns: string[] = ['email', 'name','details'];
  dataSource: MatTableDataSource<CustomerData>;
  custData:any[]=[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _service:ApiService,private _dialog: MatDialog) {
  }

  ngOnInit(): void {
    this._service.getData().subscribe(data=>{
      console.log(data);
       this.dataSource = new MatTableDataSource(data);
       this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
   
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDetails(row){
    console.log(row);


    const dialogRef=this._dialog.open(CustomerdetailsComponent ,{panelClass: 'myapp-no-padding-dialog',
                    data: {
                      crud:"Add",
                      row:row,
                      
                    },
                    height: '320px',
                     width: '400px',
                  });
  }

}
