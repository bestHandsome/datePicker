import {Component, OnInit} from '@angular/core';
import {FirstConst, SecondConst, ThreeConst} from './myJs' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  firstArray: FirstConst[];
  secondArray: SecondConst[];
  threeArray: ThreeConst;
  correct: number;
  moment: string;
  obj: object;
  arr: any;
  evaluate: any;

  ngOnInit() {
     this.correct = 444;
     this.firstArray = [];
     this.secondArray = [];
     const rate = 3
     this.evaluate = '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate)
     this.secondArray.push(new SecondConst());
     console.log(this.secondArray);
     this.obj = {1: true, 2: false};
     console.log(this.test());
     this.firstArray.push(new FirstConst('08:00', 100, true, 'xj'));
     console.log(this.firstArray)
     const arr1 = [1, 2, 3, 4, 2, 5, 4, 4];
     const arr2 = [2, 4, 5, 6];
     const arr4 = [2, 4, 9, 2, 3];
     const str = 'xingjinlovezsy';
     console.log(str.split('').reverse().join(''));
     console.log(['2', '2'].map(Number));
     console.log('get my name');
     const arrEvery = arr2.every(e => e > 0); // 通过指定函数的测试
     console.log(arrEvery, arr1.indexOf(1), arr1.findIndex( i => i === 2), arr1.join(' + '), arr1.lastIndexOf(4, 5));
     const fillArray = arr1.fill(1, 0, 4);
     console.log(fillArray, arr1); // 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素,会改变原数组
     console.log(arr1.filter(value => value > 0)); // 返回满足条件的数组,不改变数组
     console.log(arr4.findIndex(i => i >= 3))
     const arr3 = arr2.concat(arr1, [2, 3]); // 数组合并
     console.log(Array.from({length: 5}, (v, i) => i)) // 对伪数组或可迭代对象(包括arguments Array,Map,Set,String...)转换成数组对象
     const a = setInterval(() => {
        this.correct++;
        const content = this.correct >= 450 ? 1 : 2;
        if (this.correct >= 450) {clearInterval(a)};
     }, 1000);
  }

  onSubmit(date: boolean, id: 111) {
    this.moment = '20:08';
  }

  test() {
    const canEdit = [];
    for (const i in this.obj) {
       canEdit.push(this.obj[i])
    }
    return canEdit.indexOf(true) > 0;
  }
}
