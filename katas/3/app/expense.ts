import {Employee} from "./employee";

export interface Expense {
    ExpenseDate: Date;
    Amount: number;
    AmountReimbursable: number;
    ApprovedBy: Employee;
    Description: string;
}