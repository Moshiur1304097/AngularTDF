import { Component } from '@angular/core';
import { User } from './user'
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // title = 'TDF';
topics =['Angular', 'React', 'Vue'];
topicHasError=true;

submitted = false;

errorMsg ='';

userModel = new User('', 'rob@test.com', 1737711756,'','morning',true);

constructor(private _enrollmentService: EnrollmentService){}

validateTopic(value){
  if(value==='default'){
    this.topicHasError=true;
  }
  else{
    this.topicHasError=false;

  }
}


// Local storage

// onSubmit(userForm){
//   console.log("vbsdk");
//   console.log(userForm);
//   let cur= JSON.stringify(userForm);
//   localStorage.setItem("xxx",cur);
//   let xx=localStorage.getItem("xxx");
//   alert(xx);
// }


onSubmit(){
  this.submitted = true;
  this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data=> console.log('success!',data),
       // error => console.error('Error!', error)
       error => this.errorMsg = error.statusText
      )

}


}
