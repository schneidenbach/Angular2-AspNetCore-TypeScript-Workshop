
using System;

namespace Angular2.Models
{
    public class Expense
    {
        public decimal Amount { get; set; }
        public decimal AmountReimbursable { get; set; }
        public Employee ApprovedBy { get; set; }
        public string Description { get; set; }
        public DateTime ExpenseDate { get; set; }
        public string ApprovalComment { get; set; }
    }
}