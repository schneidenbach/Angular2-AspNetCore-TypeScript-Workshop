import { Routes, RouterModule } from '@angular/router';
import { KataOneComponent } from './1/KataOne.component';
import { KataTwoComponent } from './2/KataTwo.component';
import { KataThreeComponent } from './3/KataThree.component';
import { KataFourComponent } from './4/KataFour.component';
import { KataFiveComponent } from './5/KataFive.component';


const kataRoutes: Routes = [
  { path: 'kata-one', component: KataOneComponent },
  { path: 'kata-two', component: KataTwoComponent },
  { path: 'kata-three', component: KataThreeComponent },
  { path: 'kata-four', component: KataFourComponent },
  { path: 'kata-five', component: KataFiveComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forChild(kataRoutes);