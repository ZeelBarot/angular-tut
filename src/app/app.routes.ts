import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './signal/signal';
import { Variables } from './components/variables/variables';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'data-binding',
        pathMatch: 'full'
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'variables',
        component: Variables
    },
    {
        path: 'signal',
        component: Signal
    },
    {
        path: '**',
        component: NotFound
    }
];
