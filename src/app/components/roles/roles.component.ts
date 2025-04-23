import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: string = "Angular tutorial";
  angularVersion = "version 19";

  version: number = 19;

  isActive: boolean = false;

  currentDate: Date = new Date();

  inputType : string = "button";

  selectedState : string ="";

  showWelcomeAlert (){
    alert("Welcome to  angular ")
  }
  showMessage(message: string){
    alert(message)
  }
}
