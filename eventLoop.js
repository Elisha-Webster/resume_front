/**
 * 预备知识
 * 1、JS单线程。任务分为同步任务和异步任务。
 * 同步任务进执行栈，但异步任务交给其它线程去执行，当执行完毕，会在一个恰当的时间将任务包装成callback任务放入到任务队列中;
    2、异步任务进的是quene（队列），只要执行栈一清空，主线程就会去扫描任务队列。任务队列不只有一个队列，有微任务队列、定时任务、用户交互任务。
        3、event loop：先执行同步任务，如果此时执行栈（call stack）清空了。然后从上到下依次扫描(任务队列)，有微任务执行微任务，没有微任务就执行宏任务。
        如果微任务当中产生了宏任务，那么执行这个微任务并把宏任务加入到宏任务队列 
        如果宏任务中产生了微任务，就把当前执行的宏任务执行完，然后去执行微任务。
        要确保的一点是，执行宏任务的时候，微任务队列是清空的
 */
// 练习一
console.log(1); //同步
setTimeout(()=>{
    console.log(2); //宏任务
},0);
Promise.resolve().then(()=>{
    console.log(3);     //微任务，等待promise变成fullfilled
    setTimeout(()=>{console.log(4);},0)     //宏任务，等待promise变成fullfilled
})
Promise.resolve().then(()=>{    //微任务，等待promise变成fullfilled
    console.log(5);
})
console.log(typeof {});     //同步
// 输出：1 Object 3 5 2 4

//练习二
