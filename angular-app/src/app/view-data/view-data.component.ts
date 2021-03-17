import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  constructor(private serv:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getMyData(); // load data while the component is loaded everytime.
  }
  productData_get:any;  // the variable that serves the data to the template.
  // service to get data from the server
  getMyData(){
    this.serv.getData('products/').subscribe((data)=>{
      this.productData_get = data;
      //console.log(data);
    })
  }
  // service to delete the product
  deleteTheData(id:any){
    this.serv.deleteData(`products/${id}/`).subscribe(data=>{
      alert('product deleted');
      // to refresh the component
      this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['viewadded']);
      });
    });
  }

}
