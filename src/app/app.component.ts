




// import { Component, OnInit } from '@angular/core';
//  import { RouterOutlet } from '@angular/router';
//  import { CommonModule } from '@angular/common'; 


// interface Service {
//   Name: string;
//   gender: string;
//   email: string;
//   phone: number;
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'first-app';
//   employees: Service[] = [
//     {
//       Name:'sivakasireddy',
//       gender: 'male',
//       email: 'sivakasimanda@gmail.com',
//       phone: 8688137918
//     }
//   ];

//   sections = {
//     DEV: true,
//     QA: true,
//     PRODUCTION: true,
//     VM: true
//   };

//   toggleSection(section: string) {
//     this.sections[section] = !this.sections[section];
//   }
// }


//   constructor() {}

//   ngOnInit(): void {}
// }


import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Service {
  name: string;
  gender: string;
  email: string;
  phone: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

 
})
export class AppComponent implements OnInit {
  title = 'first-app';
    areCardsVisible: boolean = true;






  employees: Service[] = [
    {
      name: 'sivakasireddy',
      gender: 'male',
      email: 'sivakasimanda@gmail.com',
      phone: 8688137918
    }
  ];


  constructor() {}

  ngOnInit(): void {}

  openCardId: number | null = null;

  toggleCard(id: number): void {
    this.openCardId = this.openCardId === id ? null : id;
  }

  isCardOpen(id: number): boolean {
    return this.openCardId === id;
  }
}



// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';

// interface Service {
//   id: number;
//   name: string;
//   gender: string;
//   email: string;
//   phone: string;
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'first-app';
//   areCardsVisible: boolean = true;

//   employees: Service[] = [
//     { id: 1, name: 'Sivakasireddy', gender: 'male', email: 'sivakasimanda@gmail.com', phone: '8688137918' },
//     // Add more employees as needed
//   ];

//   openCardId: number | null = null;

//   constructor() {}

//   ngOnInit(): void {}

//   services = [
//     { name: 'Service-1', isActive: true },
//     { name: 'Service-2', isActive: true },
//     { name: 'Service-3', isActive: true },
//   ];

//   toggleCollapse(service: any) {
//     // Toggle the visibility of the clicked service
//     service.isActive = !service.isActive;
//   }
// }




// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//     standalone: true,
//     imports: [RouterOutlet,CommonModule],
//     templateUrl: './app.component.html',
//     styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'first-app';
//   areCardsVisible: boolean = true; // Set initial visibility state
//   constructor() {}

//     ngOnInit(): void {}

//   toggleCardsVisibility() {
//     this.areCardsVisible = !this.areCardsVisible;
//   }
// }




 
