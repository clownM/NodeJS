/**
 * buffer 类
 * 用于操作二进制数据流
 */

 //new Buffer(size); 创建一个Buffer对象，并为这个对象分配一个大小
//当为一个Buffer对象分配好空间大小以后，其长度是固定的，不可再更改

 /* var bf = new Buffer(4);
 console.log(bf);
 bf[1] = 2;
 console.log(bf); */


 //new Buffer(array);

/* var bf = new Buffer([1,2,3]);
console.log(bf);
bf[3] = 4;
console.log(bf); */

//new Buffer(string,[encoding编码]);

/* var bf = new Buffer("hello","utf-8");
console.log(bf);
for(var i = 0;i < bf.length;i++){
    console.log(bf[i].toString(16));
    console.log(String.fromCharCode(bf[i]));
} */

/* var str1 = "hello";
var bf1 = new Buffer(str1);
console.log(str1.length);  //5
console.log(bf1.length);   //5
var str2 = "你好";
var bf2 = new Buffer(str2);
console.log(str2.length);  //2
console.log(bf2.length);   //6 */


//方法
//bf.write(a,b,c,d);其中a是必须的，代表要写入的字符串;b代表从buffer对象下标为b的地方开始写;c代表写入的位数；d代表编码；
var str = "hello world";
var bf = new Buffer(11);
//bf.write(str);
//bf.write(str,2); 
bf.write(str,2,3);
console.log(bf);