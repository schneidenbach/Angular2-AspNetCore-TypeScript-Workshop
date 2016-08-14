import { Routes, RouterModule } from '@angular/router';
import { KataOneComponent } from './1/KataOne.component';
import { KataTwoComponent } from './2/KataTwo.component';
import { KataThreeComponent } from './3/KataThree.component';
import { KataFourComponent } from './4/KataFour.component';
import { KataFiveComponent } from './5/KataFive.component';


import { KataOneCompletedComponent }  from './1-completed/KataOneCompleted.component';
import { KataTwoCompletedComponent }  from './2-completed/KataTwoCompleted.component';
import { KataThreeCompletedComponent } from './3-completed/KataThreeCompleted.component';
import { KataFourCompletedComponent }  from './4-completed/KataFourCompleted.component';
import { KataFiveCompletedComponent }  from './5-completed/KataFiveCompleted.component';


const kataRoutes: Routes = [
  { path: 'kata-one', component: KataOneComponent },
  { path: 'kata-two', component: KataTwoComponent },
  { path: 'kata-three', component: KataThreeComponent },
  { path: 'kata-four', component: KataFourComponent },
  { path: 'kata-five', component: KataFiveComponent },
  { path: 'kata-one-completed', component: KataOneCompletedComponent },
  { path: 'kata-two-completed', component: KataTwoCompletedComponent },
  { path: 'kata-three-completed', component: KataThreeCompletedComponent },
  { path: 'kata-four-completed', component: KataFourCompletedComponent },
  { path: 'kata-five-completed', component: KataFiveCompletedComponent },
];

export const routing = RouterModule.forChild(kataRoutes);