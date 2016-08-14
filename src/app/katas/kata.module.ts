
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { KataOneComponent } from './1/KataOne.component';
import { KataTwoComponent } from './2/KataTwo.component';
import { KataThreeComponent } from './3/KataThree.component';
import { KataFourComponent } from './4/KataFour.component';
import { KataFiveComponent } from './5/KataFive.component';
import { routing } from './kata.routing';

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
    KataFiveComponent
  ]
})
export class KataModule {}