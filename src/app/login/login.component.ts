import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //  username:String="";
  // password:any;
  // email:any;
  loginFormdata:any;
  registerFormdata:any;



  constructor( private router: Router,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.loginFormdata = new FormGroup({
      username: new FormControl(""),
      user_password: new FormControl("")
          });
          this.registerFormdata = new FormGroup({
           username: new FormControl(""),
            email: new FormControl("", Validators.required),
            user_password: new FormControl("")
        });
  }


 login(data:FormGroup) {
  this.http.post('http://localhost:8080/login',data).subscribe((res:any)=> {
    debugger
     if(res) {
       localStorage.setItem("userId",res.userid)
       this.router.navigateByUrl("#");
    }

    else this.messageService.add({severity:'error', summary:'Error', detail:"invalid user Name or Password"});

  });

  }

  register(data:any) {
    debugger;
    this.http.post('http://localhost:8080/AddNewUser',data).subscribe((res:any)=> {
    debugger
  });
    }

}

