import { Component, OnInit } from '@angular/core';
//Importo las librerias de formularios que voy a utilizar
import { Form, FormBuilder, FormGroup, Validators as val } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  //Inyectar en el ctor el FormBuilder
  constructor(private formBuilder: FormBuilder) {
    //Creamos el grupo de controladores para el form de login
    this.form = this.formBuilder.group({
      password: ['',[val.required, val.minLength(8)]],
      email: ['', [val.required, val.email]]
    })
   }

  ngOnInit(): void {}

  get Password(){
    return this.form.get("passaword");
  }
  get Email(){
    return this.form.get("email");
  }
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  get EmailValid(){
    return false;
  }
  onSubmit(event: Event){
    //Detengo la propagacion o ejecucion del comportamiento submit del form
    event.preventDefault;
    
    if(this.form.valid){
        //Aca se llama al servicio para enviar los datos al servidor
        //Tambien se puede ejecutar alguna logica extra
        alert("Todo correcto, se enviará el formulario");
    }
    else{
      //Aca se corren todas las validaciones para que se ejecuten los mensajes de error
      this.form.markAllAsTouched();
    }
  }
}
