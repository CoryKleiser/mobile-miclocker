import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const COMPONENTS = [
    HomeComponent,
    DashboardComponent,
    EditComponent,
    AddComponent
]

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'edit',
                component: EditComponent
            }
        ]
    },
    {
        path: 'add',
        component: AddComponent
    }
];

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    declarations: [
        COMPONENTS
    ],
    exports: [
        COMPONENTS,
        NativeScriptModule,
        NativeScriptRouterModule
    ]
})
export class ComponentsModule {

}