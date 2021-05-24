import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    setTimeout(() => {
      
      // this.users = []
      
      this.users = [{
        Id: 1,
        Name: "Janusz",
        SecondName: "Tracz",
        Age: 21,
        Phone: "123456778",
        Email: "tracz@o2.pl",
        RoleName: "Boss"
      },{
        Id: 2,
        Name: "Jan",
        SecondName: "Kowalski",
        Age: 24,
        Phone: "111111111",
        Email: "kowal@o2.pl",
        RoleName: "Gangster"
      }];
    }, 1000);
  }
  
  users;

  title: string = 'TAI_Projekt';
  
  
}
