import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  // address is a nested group
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
  }
  
  // Partial model updates
  exampleData() {
    this.userForm.patchValue({
    firstName: 'Steve',
    lastName: 'Rogers',
      address: {
        street: '123 Marvel Street'
      }
    });
  }
  
  clearForm() {
    this.userForm.setValue({
      firstName: '',
      lastName: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    }); 
  }
  
  onSubmit() {
  // TODO: Use EventEmitter with form value
    console.warn(this.userForm.value);
  }

}
