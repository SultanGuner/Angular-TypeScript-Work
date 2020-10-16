import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/facade/lang';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../Model/EmployeeModel'
import { FormPost } from '../Services/form-post.server';

@Component({
  moduleId: module.id,
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {
  constructor(private service: FormPost) {
    service.getLanguageList()
      .subscribe(
        data => this.languages = data.languages,
        err => console.log('error' + err)
      );
  }
  hasLanguageError: boolean = true;
  model = new EmployeeModel("Taylor", "David", true, "month", 'default', new Date('3/29/1994'), 3);
  languages = [];
  
  validateLanguage(lang: string) {
    if (lang == "default") {
      this.hasLanguageError = true;
    }
    else {
      this.hasLanguageError = false;
    }
  }
  submitForm(form: NgForm) {
    this.validateLanguage(this.model.language);
    if (this.hasLanguageError) {
      return;
    }
    //alert(this.model.birthDate);
    this.service.postEmployeeForm(this.model)
      .subscribe(
        (data: any) => console.log("Gönderilen Data :" + data),
        err => console.log('error' + err),
        () => console.log('HTTP request completed.')
      );

    // this.service.postEmployeeForm(this.model)
    //   .subscribe(
    //     res => console.log("Gönderilen Data :" + res),
    //     err => console.log('error' + err),
    //     () => console.log('HTTP request completed.')
    //   );
  }
  checkValue(e) {
    if (e.which >= 48 && e.which <= 57) {
      return true;
    }
    else {
      return false;
    }
  }

  pattern = "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$";

  UpperCaseName(name: string, type: string) {
    if (name.length > 0) {

      if (type == "surname")
        this.model.lastName = name.toUpperCase();
      else if (type == "name")
        this.model.firstName = name.charAt(0).toUpperCase() + name.slice(1);
    }
    else {
      if (type == "surname")
        this.model.lastName = name;
      else if (type == "name")
        this.model.firstName = name;
    }
  }
  ngOnInit() {
  }
}
