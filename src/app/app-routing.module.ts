import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationsComponent } from './consultations/consultations.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'consultations', component: ConsultationsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'presentation', component: PresentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

