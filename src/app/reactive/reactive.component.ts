import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  name = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
  }
  
  defaultName() {
    this.name.setValue('default name');
  }
  
  

}
