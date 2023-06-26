import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './auth/auth.Guard';
import { AuthService } from './auth/auth.service';
import { BlogsComponent } from './blogs/blogs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { NewsComponent } from './news/news.component';
import { PublishComponent } from './publish/publish.component';

const routes: Routes = [];

const childRoutes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate: [CanActivateGuard], canActivateChild: [CanActivateGuard],
    // {
    //   path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
       { path: 'app-dashboard', component: DashboardComponent },
      { path: 'app-blogs', component: BlogsComponent },
      { path: 'app-news', component: NewsComponent },
      { path: 'app-publish', component: PublishComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(childRoutes)],
  exports: [RouterModule],
  providers: [CanActivateGuard, AuthService]
})




export class AppRoutingModule { }
