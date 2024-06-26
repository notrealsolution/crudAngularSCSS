import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit{
  expenses: Expense[] = [];
  total:number = 0;
  constructor(
    private expenseService: ExpenseService
  ){}
  ngOnInit(): void {
    this.loadDataIntoTable();
  }
  loadDataIntoTable():void {
    this.expenseService.getExpenses().subscribe( expenses => {
      this.expenses = expenses;
      this.calculateTotal();
    })
  }
  calculateTotal(): void {
    this.total = this.expenses.reduce((accumulated, currentValue) => {
      return accumulated + Number(currentValue.amount);
    }, 0)
  }
}
