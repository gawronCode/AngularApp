import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IuserCreationDTO } from '../users.model';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  selected: number = 2;

  @Output()
  onSaveChanges: EventEmitter<IuserCreationDTO> = new EventEmitter<IuserCreationDTO>();

  @Input()
  model: IuserCreationDTO;


  

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.pattern('[A-Z][a-zżźćńółęąś]*'), Validators.minLength(2), Validators.maxLength(20)]
      }],
      secondName: ['', {
        validators: [Validators.required, Validators.pattern('[A-Z][a-zżźćńółęąś]*'), Validators.minLength(2), Validators.maxLength(20)]
      }],
      age: ['', {
        validators: [Validators.required, Validators.min(0), Validators.max(120)]
      }],
      phone: ['', {
        validators: [Validators.required, Validators.pattern('[0-9]{3,12}')]
      }],
      email: ['', {
        validators: [Validators.required, Validators.email]
      }],
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }


  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMesageFieldName(): string {
    const field = this.form.get('name');

    if(field?.hasError('required')){
      return 'Name is required'
    } else if(field?.hasError('pattern')){
      return 'Name should start with one upper letter followed by lowercase'
    } else if(field?.hasError('minlength')){
      return 'Name length should be at least 2'
    } else if(field?.hasError('maxlength')){
      return 'Name length should be at maximum 20'
    } 

    return ''
  }

  getErrorMesageFieldSecondName(): string {
    const field = this.form.get('secondName');

    if(field?.hasError('required')){
      return 'Second Name is required'
    } else if(field?.hasError('pattern')){
      return 'Second Name should start with one upper letter followed by lowercase'
    } else if(field?.hasError('minlength')){
      return 'Second Name length should be at least 2'
    } else if(field?.hasError('maxlength')){
      return 'Second Name length should be at maximum 20'
    } 

    return ''
  }

  getErrorMesageFieldAge(): string {
    const field = this.form.get('age');

    if(field?.hasError('required')){
      return 'Age is required'
    } else if(field?.hasError('min')){
      return 'Age cannot be lower than 0'
    } else if(field?.hasError('max')){
      return 'Age cannot be higher than 120'
    }

    return ''
  }

  getErrorMesageFieldPhone(): string {
    const field = this.form.get('phone');

    if(field?.hasError('required')){
      return 'Phone is required'
    } else if(field?.hasError('pattern')){
      return 'Phone number can contain only 0-9 symbols and it\'s length should be 3 to 12'
    }

    return ''
  }

  getErrorMesageFieldEmail(): string {
    const field = this.form.get('email');

    if(field?.hasError('required')){
      return 'Email is required'
    } else if(field?.hasError('email')){
      return 'This email is invalid'
    }

    return ''
  }

}
