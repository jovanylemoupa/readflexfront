import { AdminDashboardComponent } from './features/admin/components/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './features/admin/components/user-management/user-management.component';
import { StoryManagementComponent } from './features/admin/components/story-management/story-management.component';
import { CategoryManagementComponent } from './features/admin/components/category-management/category-management.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'c',
    loadComponent: () =>
      import(
        './features/home/pages/home-container/home-container.component'
      ).then((m) => m.HomeContainerComponent),
  },
  {
    path: 'SeConnecter',
    loadComponent: () =>
      import(
        './features/se_connecter/pages/se-connecter-container/se-connecter-container.component'
      ).then((m) => m.SeConnecterContainerComponent),
  },
  {
    path: 'sIdentifier',
    loadComponent: () =>
      import(
        './features/s_Identifier/pages/s-identifier-container/s-identifier-container.component'
      ).then((m) => m.SIdentifierContainerComponent),
  },
  {
    path: 'Nos-programme',
    loadComponent: () =>
      import(
        './features/nos-programmes/pages/programme-container/programme-container.component'
      ).then((m) => m.ProgrammeContainerComponent),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import(
        './features//faq/pages/faq-container/faq-container.component'
      ).then((m) => m.FaqContainerComponent),
  },
  {
    path: 'Apropos',
    loadComponent: () =>
      import(
        './features/Apropos/pages/apropos-container/apropos-container.component'
      ).then((m) => m.AproposContainerComponent),
  },
  {
    path: 'home-story',
    loadComponent: () =>
      import(
        './features/read-home/pages/read-container/read-container.component'
      ).then((m) => m.ReadContainerComponent),
  },
  {
    path: 'write-admin',
    loadComponent: () =>
      import(
        './features/admin/components/writeplace/writeplace.component'
      ).then((m) => m.WriteplaceComponent),
  },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'story-management', component: StoryManagementComponent },
  { path: 'category-management', component: CategoryManagementComponent },
];
