import {Component, Input, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import {Expense} from '../expenses/expense';
import {Employee} from '../expenses/employee';

@Component({
    selector: 'expense-detail',
    template: `
        <strong>Expense Amount:</strong> <input type="number" #expenseAmount [value]="expense.Amount" /><br>
        <strong>Expense Description:</strong> {{ expense.Description }}<br>
        <button class="btn btn-primary" (click)="save()">Save</button>
        <button class="btn btn-default" [disabled]="expense.ApprovedBy" (click)="approve()">Approve</button>
        <button class="btn btn-danger" (click)="cancel()">Cancel</button>
    `
})
export class ExpenseDetailComponent {
    @Input() expense: Expense;
    @Output() expenseApproved = new EventEmitter<Expense>();
    @Output() expenseAmountChanged = new EventEmitter<ExpenseAmountChangedEvent>();
    @ViewChild("expenseAmount") expenseAmountTextBox: ElementRef;

    approve() {
        this.expenseApproved.emit(this.expense);
    }

    save() {
        this.expenseAmountChanged.emit({
            amount: parseFloat(this.expenseAmountTextBox.nativeElement.value),
            expense: this.expense
        });
    }
}

export interface ExpenseAmountChangedEvent {
    expense: Expense;
    amount: number;
}