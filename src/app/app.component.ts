import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginApp';
  uname: string;
  psw: string; 
  private authData = {
    "user1": {
      "name":"Admin",
      "permission":"all",
      "password":"Admin"
    },
    "user2": {
      "name":"MyName",
      "permission":"none",
      "password":"test"
    }
  };
  onSubmit() {
    if(this.authData[this.uname] && this.authData[this.uname].password == this.psw) {
      console.log('Password match');
      //Navigate to home page.

    } else {
      console.log('Password doesn\'t match');
      //Show error message.
    }
  }
}
