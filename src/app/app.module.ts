import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component';
import { MagazineComponent } from './magazine/magazine.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonalAltComponent } from './personal-alt/personal-alt.component';
import { MinimalComponent } from './minimal/minimal.component';
import { ClassicComponent } from './classic/classic.component';
import { CategoryComponent } from './category/category.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';

import { BlogSingleAltComponent } from './blog-single-alt/blog-single-alt.component';
import { AboutComponent } from './about/about.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LifestyleComponent,
    InspirationComponent,
    PagesComponent,
    ContactComponent,
    MagazineComponent,
    PersonalComponent,
    PersonalAltComponent,
    MinimalComponent,
    ClassicComponent,
    CategoryComponent,
    BlogSingleComponent,
    BlogSingleAltComponent,
    AboutComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
