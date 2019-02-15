import { Component, OnInit } from '@angular/core';
// import { constants } from 'zlib';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    
  username : string =""
  password : string =""
  cpaswword : string = ""

    constructor(public afAuth: AngularFireAuth) { }

    ngOnInit() {
    }
    async register(){
      const { username, password, cpaswword} = this
      if(password !== cpaswword) {
        return console.error("Password don`t match") 
      }
      try{
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedwon.com', password)
        console.log(res)
      }catch(error) {
        console.dir(error)
      }
    }
}
