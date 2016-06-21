import {Component, Input, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import {Expense} from '../../expenses/expense';
import {Employee} from '../../expenses/employee';

//TODO: add expense as input
//TODO: create template
//TODO: create event for approval 
@Component({
    selector: 'expense-detail'
})
export class ExpenseDetailComponent {}

//TODO: if you get to the changing amount event, use this interface as your event argument!
export interface ExpenseAmountChangedEvent {
    expense: Expense;
    amount: number;
}