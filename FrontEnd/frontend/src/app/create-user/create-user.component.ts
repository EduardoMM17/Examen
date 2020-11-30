import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CreateUserService } from './create-user.service';
import { UserCredentials } from './interface/user-credentials.interface';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public createUserForm: FormGroup;
  public email: string;
  public firstName: string;
  public lastName: string;
  public telephone: number;

  constructor(
    private createUserService: CreateUserService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      email: [this.email, [Validators.email, Validators.required]],
      firstName: [this.firstName, Validators.required],
      lastName: [this.lastName, Validators.required],
      telephone: [this.telephone, [Validators.pattern(/^[0-9]+$/), Validators.required]],
    })
  }

  createUser(){
    if(!this.createUserForm.valid){
      return;
    }
    const body: UserCredentials = this.createUserForm.value;
    this.createUserService.createUser(body).subscribe(response =>{
      console.log(response);
    })
  }
}
