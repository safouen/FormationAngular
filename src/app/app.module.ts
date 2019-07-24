import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import {FormsModule} from '@angular/forms';
import { CardRotationComponent } from './card-rotation/card-rotation.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListeComponent } from './cv/liste/liste.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { WordComponent } from './directive/word/word.component';
import { RainbowDirective } from './directive/rainbow.directive';
import { ImagePipe } from './pipe/image.pipe';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observavle/observable/observable.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ColorChangerComponent,
    CardRotationComponent,
    CardFormComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    WordComponent,
    RainbowDirective,
    ImagePipe,
    TodoComponent,
    HeaderComponent,
    SidebarComponent,
    DetailCvComponent,
    AddPersonneComponent,
    LoginComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
