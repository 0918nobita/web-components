import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const worker = new Worker('worker.js');

interval(1000).pipe(take(5)).subscribe(num => {
  worker.postMessage(num);
});

// Uint8Array: 数値しか記録できず、値が 0　から 255 までで、初期化時に長さが決まる配列
// 負数なし (unsigned) の整数で、要素 1 つあたり 1 バイトの配列
// 直接値の読み書きが可能

// ArrayBuffer: 実際にメモリ上に確保されているバッファを示す
// 直接値を読み書きすることができない
// Uint8Array のインスタンス化などに用いられる
// ArrayBuffer からデータを読み出すだけでいいなら、DataView を使えばいい
