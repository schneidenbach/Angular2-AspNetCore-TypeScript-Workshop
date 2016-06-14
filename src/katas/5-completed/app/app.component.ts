import {Component, OnInit} from '@angular/core';
import {Expense} from './expense';
import {Employee} from './employee';
import {ExpenseService} from "./expense.service";

@Component({
    selector: 'expense-app',
    templateUrl: './app/app.component.html',
    styles: [
        `
        .negative-amount {
            color: red;
        }
        `
    ],
    providers: [ExpenseService]
})
export class AppComponent implements OnInit {
    userName: string;
    expenses: Array<Expense>;
    
    constructor(private expenseService: ExpenseService) { }
    
    ngOnInit() {
        this.expenses = this.expenseService.getExpenses();
    }
    
    getTotal() {
        return this.expenses.reduce((prev, current) => prev + current.Amount, 0);
    }
    
    getReimbursableTotal() {
        return this.expenses.reduce((prev, current) => prev + current.AmountReimbursable, 0);
    }
    
    getTotalReimbursablePercent() {
        return (this.getReimbursableTotal()) / (this.getTotal() || 0);
    }
}
