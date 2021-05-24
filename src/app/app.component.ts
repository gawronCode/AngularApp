import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    setTimeout(() => {
      
      this.users = []
      
      // this.users = [{
      //   Name: "Janusz",
      //   SecondName: "Tracz",
      //   Age: 21,
      //   Phone: "123456778",
      //   Email: "tracz@o2.pl",
      //   RoleName: "Boss"
      // },{
      //   Name: "Jan",
      //   SecondName: "Kowalski",
      //   Age: 24,
      //   Phone: "111111111",
      //   Email: "kowal@o2.pl",
      //   RoleName: "Gangster"
      // }];
    }, 3000);
  }
  
  title: string = 'TAI_Projekt';
  
  
  users;

}
