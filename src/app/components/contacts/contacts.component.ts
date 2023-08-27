import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent   {

  

 constructor(private service : ContactService){
 }

  post :any;
  errorMessage= "";

 ngOnInit() {
  console.log(":::::::::::::::::::::::::;;", this.post);
  this.service.getContacts().subscribe(
    post => {
         console.log("post ", post);
          this.post = post;
    },
    error => this.errorMessage = <any>error
  );

}

ngDoCheck(){
  this.getValue();
}
 

getValue() {
  console.log('getValiue' ,JSON.stringify(this.post));
}

/*
getContacts() {
  return this.service.getContacts().subscribe(
    post => {
         console.log("post ", post);
          this.post = post;
    },
    error => this.errorMessage = <any>error
);
*/

}



