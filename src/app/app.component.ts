import { Component } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // title = 'TDF';
topics =['Angular', 'React', 'Vue'];

userModel = new User('Rob', 'rob@test.com', 1737711756,'','morning',true);

onSubmit(userForm){
  console.log("vbsdk");
  console.log(userForm);
  let cur= JSON.stringify(userForm);
  localStorage.setItem("xxx",cur);
  let xx=localStorage.getItem("xxx");
  alert(xx);
}



}
