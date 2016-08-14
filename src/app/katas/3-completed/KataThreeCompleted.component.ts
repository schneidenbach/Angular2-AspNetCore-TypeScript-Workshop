import {Component} from '@angular/core';
import {Expense} from '../expenses/expense';
import {Employee} from '../expenses/employee';
import {ExpenseAmountChangedEvent, ExpenseDetailComponent} from "./expense-detail.component";

@Component({
    templateUrl: 'KataThreeCompleted.component.html',
    moduleId: module.id,
    styles: [
        `
        .negative-amount {
            color: red;
        }
        `
    ],
    directives: [ExpenseDetailComponent]
})
export class KataThreeCompletedComponent {
    firstName: string;
    lastName: string;
    selectedExpense: Expense;

    expenses: Array<Expense> = [
        {
            Amount: 100.43,
            AmountReimbursable: 100.43,
            Description: "Laptop adapter",
            ExpenseDate: new Date(2016, 4, 23)
        },
        {
            Amount: 77.41,
            AmountReimbursable: 77.41,
            ApprovedBy: {FirstName: "Gary", LastName: "Sandberg"},
            Description: "Lunch w/ client",
            ExpenseDate: new Date(2016, 4, 26),
            ApprovalComment: "Client had chicken salad sandwich"
        },
        {
            Amount: 35.71,
            AmountReimbursable: 22.45,
            ApprovedBy: {FirstName: "John", LastName: "Lackey"},
            Description: "Gas",
            ExpenseDate: new Date(2016, 4, 24),
            ApprovalComment: "Dump truck"
        },
        {
            Amount: 11.23,
            AmountReimbursable: 11.23,
            ApprovedBy: {FirstName: "Jeff", LastName: "Grauss"},
            Description: "Chipotle",
            ExpenseDate: new Date(2016, 4, 29),
            ApprovalComment: "Chipotle is typically delicious"
        },
        {
            Amount: -11.23,
            AmountReimbursable: 0,
            ApprovedBy: {FirstName: "Jeff", LastName: "Grauss"},
            Description: "Refund for double charge",
            ExpenseDate: new Date(2016, 4, 29),
            ApprovalComment: "They charged me twice!"
        },
        {
            Amount: 246.75,
            AmountReimbursable: 150.75,
            ApprovedBy: {FirstName: "Morgan", LastName: "Trellman"},
            Description: "Development software",
            ExpenseDate: new Date(2016, 4, 21),
            ApprovalComment: "MSDN license"
        },
        {
            Amount: 327.55,
            AmountReimbursable: 327.55,
            Description: "Monitors",
            ExpenseDate: new Date(2016, 4, 22)
        },
        {
            Amount: -114.33,
            AmountReimbursable: 0,
            Description: "Refund from Amazon",
            ExpenseDate: new Date(2016, 4, 22)
        },
    ];
    
    getTotal() {
        return this.expenses.reduce((prev, current) => prev + current.Amount, 0);
    }
    
    getReimbursableTotal() {
        return this.expenses.reduce((prev, current) => prev + current.AmountReimbursable, 0);
    }
    
    getTotalReimbursablePercent() {
        return (this.getReimbursableTotal()) / (this.getTotal() || 0);
    }

    expenseApproved(expense: Expense) {
        let firstName = this.firstName;
        let lastName = this.lastName;

        if (!firstName) {
            alert("Please enter your first name.");
            return;
        }
        if (!lastName) {
            alert("Please enter your last name.");
            return;
        }

        for (let exp of this.expenses) {
            if (exp === expense && !exp.ApprovedBy)
                exp.ApprovedBy = {FirstName: this.firstName, LastName: this.lastName};
        }
    }

    expenseAmountChanged(args: ExpenseAmountChangedEvent) {
        let expense = args.expense;
        let newAmount = args.amount;

        for (let exp of this.expenses) {
            if (exp === expense)
                exp.Amount = newAmount;
        }
    }
}


