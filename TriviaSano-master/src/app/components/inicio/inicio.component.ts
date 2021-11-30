import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/usuarios.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  correo:any;
  password:any;
  constructor(public userService:UsuariosService) { }


  ngOnInit(): void {
  }

  formulario = new FormGroup({
    'correo': new FormControl('',Validators.required),
    'contrasenna': new FormControl('',Validators.required)
  });

  login(){
    this.userService.login(this.formulario.value).subscribe(data=>{
      console.log(data)
      if(this.formulario.valid){
        console.log(this.formulario.value);
        this.formulario.reset();
      }
      
        
    })
    
  }

}
