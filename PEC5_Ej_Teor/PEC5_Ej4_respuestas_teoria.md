# ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?
- FormControl: representa un solo control en un formulario. Puede ser un input, un select, etc. Se utiliza para registrar y gestionar el valor, además de ciertos estados (como el de validación) del control individual. La manera de aplicarlo es la siguiente.

//Archivo item.component.html

<div class="form-control">
  <input type="text" name="itemName" [formControl]="nameControl"> 
  <button (click)="onSubmit()">Submit</button>
</div>

<p>Form Control value: {{ nameControl.value | json }}</p>    
<p>Form Control status: {{ nameControl.status | json }}</p>

//Archivo item.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {

  public nameControl = new FormControl();
  constructor() {}

  onSubmit() {
    console.log('Name Control Value', this.nameControl.value);
  }
}
 
- FormGroup: representa una colección de controles en un formulario. Realiza prácticamente la misma función que FormControl, pero en este caso se aplica a un conjunto de controles relacionados. Se implementa de la siguiente manera.

//Archivo item.component.html

<div class="form-group">
  <form [formGroup]="itemForm" (ngSubmit)="onSubmit()">      
    <input type="text" name="stockName" formControlName="name">                         
    <input type="text" formControlName="code">
    <input type="number" formControlName="price">
    <button type="submit">Submit</button>
  </form>
</div>

<p>Form Control value: {{ stockForm.value | json }}</p>        
<p>Form Control status: {{ stockForm.status | json }}</p>

//Archivo item.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  public itemForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    price:new FormControl(0, [Validators.required, Validators.min(0)])
  });
  constructor() {}

  onSubmit() {
    console.log('Item Form Value', this.itemForm.value);
  }
}

- FormBuilder: es una clase que proporciona métodos para facilitar la creación de instancias de FormControl y FormGroup de manera programática. Facilita la creación rápida y limpia de formularios, como por ejemplo, reduciendo la necesidad de llamar manualmente a new para cada FormControl. Se utiliza de la siguiente manera (suponiendo que el archivo item.component.html es igual que en el caso del FormGroup).

//Archivo item.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';    

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  public itemForm: FormGroup;                 
  constructor(private fb: FormBuilder) {       
    this.createForm();
  }

  createForm() {
    this.itemForm = this.fb.group({             
      name: [null, Validators.required],         
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    console.log('Item Form Value', this.itemForm.value);
  }
}

Como puede verse, se importa FormBuilder desde @angular/forms y no se inicializa el FormGroup ya que se crea un FormGroup usando la instancia de FormBuilder.

Por último, para utilizar FormControl, FormGroup y FormBuilder, es necesario importar 'ReactiveFormsModule' al archivo principal app.module.ts.

# Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.

Según la página oficial de Angular: 

class Validators {
  static min(min: number): ValidatorFn. Establece el valor mínimo permitido para un número.  
  static max(max: number): ValidatorFn. Establece el valor máximo permitido para un número.
  static required(control: AbstractControl<any, any>): ValidationErrors | null. Indica que el campo es obligatorio.
  static requiredTrue(control: AbstractControl<any, any>): ValidationErrors | null. Verifica que el valor del campo sea `true`. Por ejemplo, para checkboxes que deben estar marcados.
  static email(control: AbstractControl<any, any>): ValidationErrors | null. Verifica si el valor es una dirección de correo electrónico válida.
  static minLength(minLength: number): ValidatorFn. Establece la longitud mínima de una cadena de texto. 
  static maxLength(maxLength: number): ValidatorFn. Establece la longitud máxima de una cadena de texto.
  static pattern(pattern: string | RegExp): ValidatorFn. Verifica si el valor cumple con un patrón de expresión regular.
  static nullValidator(control: AbstractControl<any, any>): ValidationErrors | null. Permite valores nulos, haciendo que el campo sea opcional.
  static compose(validators: ValidatorFn[]): ValidatorFn | null. Combina varios validadores en uno solo.
  static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null. Combina varios validadores asíncronos en uno solo.
}

# ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?

 - Pristine: estado que indica que el formulario aún no ha sido modificado por el usuario. Puede ser utilizado para determinar si el formulario ha sido alterado desde su carga inicial.

 - Touched: estado que refleja que el usuario ha interactuado con al menos un control del formulario. Se utiliza para validar la interacción del usuario con los campos del formulario.

 - Dirty: estado que aparece cuando el valor de al menos un control ha cambiado desde que se cargó el formulario. Es útil para detectar cambios en los valores del formulario.

 - Valid: estado cuando todos los controles del formulario han pasado sus validaciones. Puede utilizarse para habilitar o deshabilitar elementos basados en la validez del formulario.

 - Invalid: estado que indica que al menos uno de los controles del formulario no ha pasado su validación. Se utiliza para manejar elementos en los que los datos ingresados por el usuario no son válidos.

 - Submitted: estado cuando el formulario ha sido enviado. Puede ser útil para realizar acciones específicas después de que el formulario se haya enviado con éxito, como dirigirse a otra pantalla.