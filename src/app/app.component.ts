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
topicHasError=true;

userModel = new User('', 'rob@test.com', 1737711756,'','morning',true);

validateTopic(value){
  if(value==='default'){
    this.topicHasError=true;
  }
  else{
    this.topicHasError=false;

  }
}

onSubmit(userForm){
  console.log("vbsdk");
  console.log(userForm);
  let cur= JSON.stringify(userForm);
  localStorage.setItem("xxx",cur);
  let xx=localStorage.getItem("xxx");
  alert(xx);
}



}
