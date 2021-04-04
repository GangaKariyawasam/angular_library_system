import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainMenuComponent} from './view/main-menu/main-menu.component';
import {StudentRegistrationComponent} from './view/dash-board/student-registration/student-registration.component';
import {SearchResultComponent} from './view/search-result/search-result.component';
import {DashBoardComponent} from './view/dash-board/dash-board.component';
import {FooterComponent} from "./view/footer/footer.component";
import {StudentProfileComponent} from "./view/student-profile/student-profile.component";
import {MainMenuGuard} from "./guards/main-menu.guard";
import {DashboardGuard} from "./guards/dashboard.guard";
import {StudentProfileGuard} from "./guards/student-profile.guard";
import {HomeComponent} from "./view/dash-board/home/home.component";
import {StudentComponent} from "./view/dash-board/student/student.component";
import { BookRegistrationComponent } from './view/dash-board/book-registration/book-registration.component';
import {AuthorRegistrationComponent} from "./view/author-registration/author-registration.component";
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main'
  },
  {
    component: MainMenuComponent,
    path: 'main',
    canActivate: [MainMenuGuard]
  },
  {
    component: BookRegistrationComponent,
    path: 'book-registration'
  },
  {
    component: StudentRegistrationComponent,
    path: 'student-registration'
  },
  {
    component: AuthorRegistrationComponent,
    path: 'author-registration'
  },
  {
    component: SearchResultComponent,
    path: 'search-book'
  },
  {
    component: StudentProfileComponent,
    path: 'student-profile',
    canActivate: [StudentProfileGuard]
  },
  {
    component: DashBoardComponent,
    path: 'dash-board',
    canActivate: [DashboardGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', component: HomeComponent},
      {path: 'student', component: StudentComponent},
      {path: '**', pathMatch:'full', redirectTo: 'home'},
    ]
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
