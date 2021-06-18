import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  formGroup: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      feedback: ['', Validators.required],
    });
  }
  get formGroupControl() {
    return this.formGroup.controls;
  }
  onClickSubmit(): void {
    this.submitted = true;
    if (this.formGroup.valid) {
      alert('Form Submitted succesfully!!!');
      console.table(this.formGroup.value);
      let data = {
        name: this.formGroup.value.name,
        email: this.formGroup.value.email,
        phone: this.formGroup.value.phone,
        feedback: this.formGroup.value.feedback
      };
      localStorage.setItem("formdata",JSON.stringify(data));
      console.log(localStorage.getItem("formdata"));
    }
  }

}
