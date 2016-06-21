using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2.Models;

namespace Angular2.Controllers
{
    [Route("api/[controller]")]
    public class ExpensesController
    {
        public Expense[] Get()
        {
            return new[] {
               new Expense {
                    Amount = 100.43M,
                    AmountReimbursable = 100.43M,
                    Description = "Laptop adapter",
                    ExpenseDate = new DateTime(2016, 4, 23)
                },
                new Expense {
                    Amount = 77.41M,
                    AmountReimbursable = 77.41M,
                    ApprovedBy = new Employee {FirstName = "Gary", LastName = "Sandberg"},
                    Description = "Lunch w/ client",
                    ExpenseDate = new DateTime(2016, 4, 26),
                    ApprovalComment = "Client had chicken salad sandwich"
                },
                new Expense {
                    Amount = 35.71M,
                    AmountReimbursable = 22.45M,
                    ApprovedBy = new Employee {FirstName = "John", LastName = "Lackey"},
                    Description = "Gas",
                    ExpenseDate = new DateTime(2016, 4, 24),
                    ApprovalComment = "Dump truck"
                },
                new Expense {
                    Amount = 11.23M,
                    AmountReimbursable = 11.23M,
                    ApprovedBy = new Employee {FirstName = "Jeff", LastName = "Grauss"},
                    Description = "Chipotle",
                    ExpenseDate = new DateTime(2016, 4, 29),
                    ApprovalComment = "Chipotle is typically delicious"
                },
                new Expense {
                    Amount = -11.23M,
                    AmountReimbursable = 0M,
                    ApprovedBy = new Employee {FirstName = "Jeff", LastName = "Grauss"},
                    Description = "Refund for double charge",
                    ExpenseDate = new DateTime(2016, 4, 29),
                    ApprovalComment = "They charged me twice!"
                },
                new Expense {
                    Amount = 246.75M,
                    AmountReimbursable = 150.75M,
                    ApprovedBy = new Employee {FirstName = "Morgan", LastName = "Trellman"},
                    Description = "Development software",
                    ExpenseDate = new DateTime(2016, 4, 21),
                    ApprovalComment = "MSDN license"
                },
                new Expense {
                    Amount = 327.55M,
                    AmountReimbursable = 327.55M,
                    Description = "Monitors",
                    ExpenseDate = new DateTime(2016, 4, 22)
                },
                new Expense {
                    Amount = -114.33M,
                    AmountReimbursable = 0M,
                    Description = "Refund from Amazon",
                    ExpenseDate = new DateTime(2016, 4, 22)
                }
            };
        }
    }
}
