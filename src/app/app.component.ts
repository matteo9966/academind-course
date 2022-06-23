import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form = new FormGroup({
    address: new FormControl()
  })

  onSubmit=()=>{
    console.log(this.form.value);
    console.log(this.form.errors);
  }

  title = 'academind-course';
}
