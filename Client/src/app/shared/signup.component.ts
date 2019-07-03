import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { WebCamComponent } from 'ack-angular-webcam';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit, OnDestroy {

  addphoto = false;
  error: boolean = false;
  errorMessage: String = "Something went wrong with App";
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges: boolean = false;
  base64="";
  photo={};



  constructor(private _backendService: BackendService, private _route: Router) { }

  ngOnInit() {
  }
//   setUser(formData) {
//     this.dataLoading = true;
//     this.querySubscription = this._backendService.setUser(formData).subscribe((res) => {
//       if (res["errorCode"] > 0) {
//           this.error = false;
//           this.errorMessage = "";
//           this.dataLoading = false;
//           this.savedChanges = true;
//       } else {
//           this.error = true;
//           this.errorMessage = res["errorMessage"];
//           this.dataLoading = false;
//       }
//   },
//       (error) => {
//           this.error = true;
//           this.errorMessage = error.message;
//           this.dataLoading = false;
//       },
//       () => {
//           this.dataLoading = false;
//       });
// }

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
  }




}

addPhoto(){
  this.addphoto=true;
}

genBase64( webcam:WebCamComponent ){
  webcam.getBase64()
  .then( base=>this.base64=base)
  .catch( e=>console.error(e) )
}

//get HTML5 FormData object and pretend to post to server
genPostData( webcam:WebCamComponent ){
  webcam.captureAsFormData({fileName:'file.jpg'})
  .then( formData=>this.photo=formData )
  .catch( e=>console.error(e) )
}

onCamError(err){}
 
onCamSuccess(){}

setUser(formData) {

  console.log(formData)
  console.log(this.base64)
  console.log(this.photo)

}



}
