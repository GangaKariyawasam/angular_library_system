import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainMenuComponent} from './view/main-menu/main-menu.component';
import {CoursesComponent} from './view/courses/courses.component';
import {LogInComponent} from './view/log-in/log-in.component';
import {RegistrationComponent} from './view/registration/registration.component';
import {SearchResultComponent} from './view/search-result/search-result.component';
import {StudentRegisterComponent} from './view/student-register/student-register.component';
import {DashBoardComponent} from './view/dash-board/dash-board.component';
import {FooterComponent} from "./view/footer/footer.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main'
  },
  {
    component: MainMenuComponent,
    path: 'main'
  },
  {
    component: CoursesComponent,
    path: 'courses'
  },
  {
    component: LogInComponent,
    path: 'log-in'
  },
  {
    component: RegistrationComponent,
    path: 'registration'
  },
  {
    component: SearchResultComponent,
    path: 'search-book'
  },
  {
    component: StudentRegisterComponent,
    path: 'student-register'
  },
  {
    component: DashBoardComponent,
    path: 'dash-board'
  },
  {
    component: FooterComponent,
    path: 'footer'
  },
  {
    path: '**',
    redirectTo: '/log-in'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
