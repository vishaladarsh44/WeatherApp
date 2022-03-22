import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiuxService } from '../apiux.service';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements OnInit {

  public weatherSearchForm!: FormGroup;

  public wheatherdata: any;


  constructor(private formBuilder: FormBuilder,
            private apiuxservice: ApiuxService
    ) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: any) {
    this.apiuxservice
      .getweather(formValues.location)
      .subscribe(data => this.wheatherdata=data);
      console.log(this.wheatherdata);

  }

}
