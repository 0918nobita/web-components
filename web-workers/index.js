import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const worker = new Worker('worker.js');

interval(1000).pipe(take(5)).subscribe(num => {
  worker.postMessage(num);
});
