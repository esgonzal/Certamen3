import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {

  activeId = 1;
  cursos = [
    {"id":1, "nombre":"Física", "nota1":67, "porcentaje1":0.2, "nota2":67, "porcentaje2":0.2, "nota3":67, "porcentaje3":0.2,"nota4":67, "porcentaje4":0.2,"nota5":67, "porcentaje5":0.2,},
    {"id":2, "nombre":"Matemáticas", "nota1":50, "porcentaje1":0.2, "nota2":50, "porcentaje2":0.2, "nota3":50, "porcentaje3":0.2, "nota4":50, "porcentaje4":0.2, "nota5":50, "porcentaje5":0.2,},
    {"id":3, "nombre":"Programación", "nota1":30, "porcentaje1":0.2, "nota2":30, "porcentaje2":0.2, "nota3":30, "porcentaje3":0.2, "nota4":30, "porcentaje4":0.2, "nota5":30, "porcentaje5":0.2},
    {"id":4, "nombre":"Ingeniería Web", "nota1":69, "porcentaje1":0.2, "nota2":69, "porcentaje2":0.2, "nota3":69, "porcentaje3":0.2, "nota4":69, "porcentaje4":0.2, "nota5":69, "porcentaje5":0.2}
  ];

  formulario:FormGroup;
  formulario2:FormGroup;
  constructor(public FormB:FormBuilder, private router:Router) {
    this.formulario=FormB.group({
      nombre: ["", Validators.required],
      nota1: ["", Validators.required],
      porcentaje1: ["", Validators.required],
      nota2: ["", Validators.max(70)],
      porcentaje2: ["", ],
      nota3: ["", Validators.max(70)],
      porcentaje3: ["", ],
      nota4: ["", Validators.max(70)],
      porcentaje4: ["", ],
      nota5: ["", Validators.max(70)],
      porcentaje5: ["", ]
    })

    this.formulario2=FormB.group({
      nombre: ["", Validators.required],
      nota1: ["", Validators.required],
      porcentaje1: ["", Validators.required],
      nota2: ["", Validators.max(70)],
      porcentaje2: ["", ],
      nota3: ["", Validators.max(70)],
      porcentaje3: ["", ],
      nota4: ["", Validators.max(70)],
      porcentaje4: ["", ],
      nota5: ["", Validators.max(70)],
      porcentaje5: ["", ]
    })
  }

  

  ngOnInit(): void {
  }

  validacion(){
    
    console.log(this.formulario.value);
    this.cursos.push(this.formulario.value)
  }

  actualizar(item:any){
    console.log(this.cursos.values);
    console.log(this.formulario2.value);
    let i:number = this.cursos.indexOf(item);
    this.cursos[i].nombre = item.nombre;
    this.cursos[i].nota1 = item.nota1;
    this.cursos[i].nota2 = item.nota2;
    this.cursos[i].nota3 = item.nota3;
    this.cursos[i].nota4 = item.nota4;
    this.cursos[i].nota5 = item.nota5;
    this.cursos[i].porcentaje1 = item.porcentaje1;
    this.cursos[i].porcentaje2 = item.porcentaje2;
    this.cursos[i].porcentaje3 = item.porcentaje3;
    this.cursos[i].porcentaje4 = item.porcentaje4;
    this.cursos[i].porcentaje5 = item.porcentaje5;
  }

  getColor(item:any){
    let promedio:number = (item.nota1*item.porcentaje1 + item.nota2*item.porcentaje2 + item.nota3*item.porcentaje3 + item.nota4*item.porcentaje4 + item.nota5*item.porcentaje5);
    if(promedio < 45)
    {
      return 'red';
    }
    else if(promedio <= 60 && promedio >= 45)
    {
      return 'yellow';
    }
    else
      return 'white';
  }

  getCara(item:any){
    let promedio:number = (item.nota1*item.porcentaje1 + item.nota2*item.porcentaje2 + item.nota3*item.porcentaje3 + item.nota4*item.porcentaje4 + item.nota5*item.porcentaje5);
    if(promedio >= 60){
      return true;
    }
    else
      return false;
  }

  
}
