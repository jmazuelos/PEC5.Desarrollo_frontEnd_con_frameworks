import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { NameArticleValidator } from '../custom-validators/custom-validators';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent {
  article: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { this.createForm(); }

  createForm() {
    this.article = this.fb.group({
      articleName: [null, [Validators.required, NameArticleValidator()]],
      articlePrice: [null, [Validators.required, Validators.min(0.1)]],
      imageUrl: [null, [Validators.required, Validators.pattern('^(https?|HTTPS?):\/\/[a-zA-Z0-9]+\.([a-zA-Z])+\.([a-zA-Z]){2,3}\/[a-zA-Z0-9]+\.(jpg|jpeg|png|gif|bmp)$')]],
      isOnSale: [false]
    });
  }

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

