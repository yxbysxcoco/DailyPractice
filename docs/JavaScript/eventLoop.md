> 这里的返回值为什么是先打印 foo 的返回值？
> 函数调用形成了一个栈帧。
>
> ```js
> function foo(b) {
>     var a = 10;
>     return a + b + 11;
> }
> function bar(x) {
>     var y = 3;
>     return foo(x * y);
> }
> console.log(bar(7)); // 返回 42
> ```
>
> 当调用 bar 时,创建了第一个帧 ,帧中包含了 bar 的参数和局部变量。当 bar 调用 foo 时,第二个帧就被创建,并被压到第一个帧之上,帧中包含了 foo 的参数> 和局部变量。当 foo 返回时,最上层的帧就被弹出栈（剩下 bar 函数的调用帧 ）。当 bar 返回的时候,栈就空了。
