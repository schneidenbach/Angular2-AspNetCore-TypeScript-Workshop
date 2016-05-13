export interface Expense {
    ExpenseDate: Date;
    Amount: number;
    AmountReimbursable: number;
    ApprovedBy: Employee;
    Description: string;
}

export interface Employee {
    FirstName: string;
    LastName: string;
}