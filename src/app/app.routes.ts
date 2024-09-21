import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'flower',
        loadComponent: () => import('./flower/flower.component'),
        children:[
            {
                path:'home',
                title: 'Home',
                loadComponent: () => import('./flower/pages/home/home.component')
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
              }

        ]
    }
];
