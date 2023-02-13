import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit, OnDestroy {
  obj = {
    name: 'jojo',
    age: 12,
    company: 'jump',
  };

  todos: any;
  subscription!: Subscription;
  todos$: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.subscription = this.getTodos().subscribe(data => {
    //   this.todos = data;
    // })
    this.todos$ = this.getTodos();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  sorting() {
    return 0;
  }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

}
