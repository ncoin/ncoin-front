import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

const appRoutes: Routes = [
    { path: '', component: HeaderComponent, outlet: 'header' },
    { path: '', component: FooterComponent, outlet: 'footer' },
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', loadChildren: 'app/main/main.module#MainModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
