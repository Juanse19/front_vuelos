import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredencialesUsuarioDTO } from 'src/app/@core/models/seguridad.interface';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent implements OnInit {

  formAuth!: FormGroup;

  @Input()
  errores: string[] = [];

  @Input()
  accion?: string;

  @Output()
  onSubmit: EventEmitter<CredencialesUsuarioDTO> = new EventEmitter<CredencialesUsuarioDTO>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formAuth = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, ]]
    })
  }

}
