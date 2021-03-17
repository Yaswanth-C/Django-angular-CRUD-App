import { Component, OnInit } from '@angular/core';
import { ApiService } from'../apiservice.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})

export class MyformComponent implements OnInit {
  // a form for entering and validating data
  productForm = new FormGroup({
    name : new FormControl(),
    price : new FormControl(),
    category : new FormControl(),
  });
  
  constructor(private serv:ApiService) { }
  
  ngOnInit(): void {
  }

  productData_post:any;  // variable that takes form data.
  // service for posting data to server
  postMyData(){
    if(this.validate_form()){
        this.productData_post = this.productForm.value; // assign form data to the variable
        this.serv.postData(`products/`,this.productData_post).subscribe((data)=>{
          //console.log(this.productData_post);
          alert('Product Added');
        });
    }
    else{
      alert('Please fill form correctly');
    }
  }
  validate_form(){
    const formData = this.productForm.value;
    if(formData.name== null){
      return false;
    }else if(formData.price == null || formData.price <= 0 ){
      return false;
    }else if(formData.category == null){
      return false;
    }else{
      return true;
    }
  }
}