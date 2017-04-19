import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter';
import { Observable } from 'rxjs/Rx';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-counter',
  template: `
   <button (click)="increment()">Increment</button>
   <div>Current Count: {{ counter | async }}</div>
   <button (click)="decrement()">Decrement</button>
   <button (click)="reset()">Reset Counter</button>
 `
})
export class CounterComponent {

  counter: Observable<number>;

  	constructor(private store: Store<AppState>){
  		this.counter = store.select('counter');
  	}

  	increment(){
  		this.store.dispatch({ type: INCREMENT });
  	}

  	decrement(){
  		this.store.dispatch({ type: DECREMENT });
  	}

  	reset(){
  		this.store.dispatch({ type: RESET });
  	}
}
