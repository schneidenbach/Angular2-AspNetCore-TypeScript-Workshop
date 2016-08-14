
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { routing } from './kata.routing';

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

//for kata 3
import { ExpenseDetailComponent } from './3/expense-detail.component';
import { ExpenseDetailCompletedComponent } from './3-completed/expense-detail.component';

//for kata 4/5

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule
  ],
  declarations: [
    KataOneComponent,
    KataTwoComponent,
    KataThreeComponent,
    KataFourComponent,
    KataFiveComponent,
    KataOneCompletedComponent,
    KataTwoCompletedComponent,
    KataThreeCompletedComponent,
    KataFourCompletedComponent,
    KataFiveCompletedComponent,
    ExpenseDetailCompletedComponent,
    ExpenseDetailComponent
  ]
})
export class KataModule {}