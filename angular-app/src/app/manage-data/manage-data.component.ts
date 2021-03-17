import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms'

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css']
})
export class ManageDataComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private http:ApiService) { }
  id:any; // to store product_id
  product_data:any;  // variable that take form data

  productForm = new FormGroup({
    name : new FormControl(),
    price : new FormControl(),
    category : new FormControl(),
  });


  ngOnInit(): void {
      this.id=this.route.snapshot.paramMap.get('id'); // get the id from the url.
      this.collectDataFromId(this.id); // collect the data of that particular product.
  }
  
  collectDataFromId(p_id:number){
    this.http.getData(`products/${this.id}/`).subscribe(data=>{
      //console.log(data);
      this.product_data = data;
      // populate the form using the data from the server.
      this.productForm.setValue({'name':this.product_data.name,
                                 'price':this.product_data.price,
                                 'category':this.product_data.category
                                });
    });
  }
  dataToUpdate:any;   // variable to hold the updated data fro, form
  updateMyData(){
    this.dataToUpdate = this.productForm.value;
    // calling updateData service.
    this.http.updateData(`products/${this.id}/`,this.dataToUpdate).subscribe(data=>{
      alert('Data updated');
    });
  }
}
