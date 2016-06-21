import {Employee} from "./employee";

export interface Expense {
    ExpenseDate: Date;
    Amount: number;
    AmountReimbursable: number;
    Description: string;
    
    ApprovedBy?: Employee;
    ApprovalComment?: string; 
}