import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {Injectable} from "@angular/core";
import {Expense} from "../../expenses/expense";
import {Http} from "@angular/http";

@Injectable()
export class ExpenseService {
    constructor(private http: Http) {}

    getExpenses() : Observable<Expense[]> {
        
    }
}