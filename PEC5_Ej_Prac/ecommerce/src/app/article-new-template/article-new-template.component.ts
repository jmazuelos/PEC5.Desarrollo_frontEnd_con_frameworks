import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})
export class ArticleNewTemplateComponent {
  submitted: boolean = false;

  article: FormGroup = new FormGroup({
    articleName: new FormControl(null, [Validators.required]),
    articlePrice: new FormControl(null, [Validators.required, Validators.min(0)]),
    imageUrl: new FormControl(null, [Validators.required, Validators.pattern('^(https?|HTTPS?):\/\/[a-zA-Z0-9]+\.([a-zA-Z])+\.([a-zA-Z]){2,3}\/[a-zA-Z0-9]+\.(jpg|jpeg|png|gif|bmp)$')]),
    isOnSale: new FormControl(false)
  });

  constructor() {}

  get articleName() {
    return this.article.get('articleName');
  }

  get articlePrice() {
    return this.article.get('articlePrice');
  }

  get imageUrl() {
    return this.article.get('imageUrl');
  }

  get isOnSale() {
    return this.article.get('isOnSale');
  }

  onSubmit() {
    this.submitted = true;

    if (this.article.valid) {
      console.log(this.article.value);
    }else{
      console.log('Error en uno o varios campos');
    }
  }

}
