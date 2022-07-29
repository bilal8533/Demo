import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MagazineComponent } from './magazine/magazine.component';
import { AboutComponent } from './about/about.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogSingleAltComponent } from './blog-single-alt/blog-single-alt.component';
import { CategoryComponent } from './category/category.component';
import { ClassicComponent } from './classic/classic.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { MinimalComponent } from './minimal/minimal.component';
import { PagesComponent } from './pages/pages.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonalAltComponent } from './personal-alt/personal-alt.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { PopularpostComponent } from './shared/popularpost/popularpost.component';
import { CelebrationComponent } from './shared/celebration/celebration.component';
import { TagsComponent } from './shared/tags/tags.component';
import { SponsoredadComponent } from './shared/sponsoredad/sponsoredad.component';
import { ExploreComponent } from './shared/explore/explore.component';


const routes: Routes = [

  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'header',component: HeaderComponent},
  {path: 'preloader',component: PreloaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'magazine',component: MagazineComponent},
  {path: 'personal',component: PersonalComponent},
  {path: 'personal-alt',component: PersonalAltComponent},
  {path: 'minimal',component: MinimalComponent},
  {path: 'classic',component: ClassicComponent},
  {path: 'lifestyle',component: LifestyleComponent},
  {path: 'inspiration',component: InspirationComponent},
  {path: 'pages',component: PagesComponent},
  {path: 'category',component: CategoryComponent},
  {path: 'blog-single/:id',component: BlogSingleComponent},
  {path: 'blog-single-alt',component: BlogSingleAltComponent},
  {path: 'about',component: AboutComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'popularpost',component:PopularpostComponent},
  {path: 'celebration',component:CelebrationComponent},
  {path: 'tags',component:TagsComponent},
  {path: 'sponsoredad',component:SponsoredadComponent},
  {path: 'explore',component:ExploreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
