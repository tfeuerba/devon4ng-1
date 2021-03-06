import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent as ContentRight } from './second-right/content/content.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
  {
    path: 'second-left',
    loadChildren: './second-left/second-left.module#SecondLeftModule',
  },
  {
    path: 'second-right',
    component: ContentRight,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstRoutingModule {}
