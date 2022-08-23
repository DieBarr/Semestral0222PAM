import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'teacher-home',
    loadChildren: () => import('./pages/teacher-home/teacher-home.module').then( m => m.TeacherHomePageModule)
  },
  {
    path: 'restore-password',
    loadChildren: () => import('./pages/restore-password/restore-password.module').then( m => m.RestorePasswordPageModule)
  },
  {
    path: 'section-home',
    loadChildren: () => import('./pages/section-home/section-home.module').then( m => m.SectionHomePageModule)
  },
  {
    path: 'student-home',
    loadChildren: () => import('./pages/student-home/student-home.module').then( m => m.StudentHomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./pages/classes/classes.module').then( m => m.ClassesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
