import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExppnentialPipe } from './pipes/exponential/exppnential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExppnentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
  ],

  exports:[
    ExppnentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    

  ],

  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})

export class SharedModule { }
