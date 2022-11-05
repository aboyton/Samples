import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, NgZone,  } from '@angular/core';
import { BehaviorSubject, combineLatest, concat, concatMap, finalize, forkJoin, map, merge, mergeAll, mergeMap, Observable, Subscriber, switchMap, tap, timer, toArray } from 'rxjs';
import { combinator } from './combinator';

@Component({
  selector: 'se-rxjstest',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Rxjs cleanup test</h1>
  <ng-container *ngIf="vm$ |async as vm">
    <button (click)="add()">Add</button> <span>Number of items :{{vm.comp?.length}}</span>
    <ul >
      <li *ngFor="let item of vm.comp; trackBy:identify">
        <button (click)="remove(item.value)">🗑️</button>
        {{item?.value}} - {{item?.iteration}}
      </li>
    </ul>
  </ng-container>
  `,
  styleUrls: ['./rxjstest.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjstestComponent {
  zone = inject(NgZone);
  cdr = inject(ChangeDetectorRef);
  result = new Map<number, Observable<{ value: number; iteration: number }>>();
  data$ = new BehaviorSubject<number[]>( Array.from({ length: 300 }, () => Math.floor(Math.random() * 100000)+1));
  enrich = (value: number) => this.zone.runOutsideAngular(() => {
    if (!this.result.has(value)) {
      this.result.set(
        value,
        timer(Math.floor(Math.random() * 10000), Math.floor(Math.random() * 500) + 500).pipe(
          map((iteration) => ({ value, iteration })),
          finalize(() => {
            this.result.delete(value)
            console.log(`deleted ${value}`)
          })
        )
      );
    }
    return this.result.get(value)
  });


  completed$ =  this.zone.runOutsideAngular(() => this.data$.pipe(
    // map((data) => data.map(this.enrich)),
    combinator((data) => data.map(this.enrich), 250),
    tap((data) => this.cdr.detectChanges()),
  ));


  vm$ = combineLatest({
    data: this.data$,
    comp: this.completed$
  }).pipe(
  )

  add(count = Math.floor(Math.random() * 150) + 50) {
    const newNum = Math.floor(Math.random() * 100000);
    if (this.result.has(newNum)) {
      /** don't add the same number twice */
      return this.add(count);
    }
    this.data$.next([...this.data$.value, newNum]);
    if (count > 1) {
      this.add(count - 1);
    }
  }

  remove = (val: number) => {
    const newData = this.data$.value.filter(item => item !== val)
    this.data$.next(newData);
  }

  identify(index, item) {
    return item?.value ?? index;
  }

}
