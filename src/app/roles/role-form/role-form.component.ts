import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IuserDTO } from 'src/app/users/users.model';
import { IroleDTO } from '../roles.model';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<IroleDTO> = new EventEmitter<IroleDTO>();

  @Input()
  model: IroleDTO;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      description: ''
    })

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
      return "Role name is required"
    }

    return ''
  }

}
