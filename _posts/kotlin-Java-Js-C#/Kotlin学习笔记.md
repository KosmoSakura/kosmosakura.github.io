
# 1.常识 

> * private >>> 只在该类(以及它的成员)中可见
>
> * protected >>> 类和它的子类可见
>
> * internal >>>  所在的整个 module  可见。
>
> * public >>> 任何地方可见 
>
>   (一个定义为 public  的成员被包含在一个 private  修饰的类中，这个成员在这个类以外也是不可见的。)

```kotlin

/**
 * 1.包名：
 */
//不必和文件夹路径一致：源文件可以放在任意位置。
package grammar

fun main(args: Array<String>) {
    println("2.1-->" + sum(4, 6))   //2.定义函数
    println("2.2-->" + sum(3, 4, 5))
    printSum(-1, 8)
}
/**
 * 2.定义函数
 * */
//2.1定义一个函数接受两个 int 型参数，返回值为 int ：
fun sum(a: Int, b: Int): Int {
    return a + b
}

//2.2该函数只有一个表达式函数体以及一个自推导型的返回值：
fun sum(a: Int, b: Int, c: Int) = a + b + c

//2.3返回一个没有意义的值：
fun printSum(a: Int, b: Int): Unit {
    println("结果： $a + $b = ${a + b}")
}

//2.3-Unit 的返回类型可以省略：(此方法同上 ": Unit"可以省略
fun printSumCopy(a: Int, b: Int) {
    println("sum of $a and $b is ${a + b}")
}
```

## 1.1 可以使用下划线增加数值常量的可读性

```kotlin
val oneMillion = 1_000_000
val creditCardNumber = 1234_5678_9012_3456L
val socialSecurityNumber = 999_99_9999L
val hexBytes = 0xFF_EC_DE_5E
val bytes = 0b11010010_01101001_10010100_10010010
```

## 1.2 相等

=== 	完全相等（包括物理地址

== 值相等

## 1.3  三引号："""

```kotlin
//多行string是由三个引号包裹的("""),不可以包含分割符但可以包含其它字符,可以通过trim-margin()函数移除空格
val text = """
    |Tell me and I forget.
    |Teach me and I remember.
    |Involve me and I learn.
    |(Benjamin Franklin)
    """.trimMargin()
```



# 2.变量

```kotlin
package grammar

/*
Kotlin 字符串中，$符号后面可以跟变量和函数
var a = 55
var b = 88
println("a+b=${a+b}")*/

/*
多行输入符 三个双引号
三引号的形式用来输入多行文本，
也就是说在三引号之间输入的内容将被原样保留，
之中的单号和双引号不用转义，
其中的不可见字符比如/n和/t都会被保留
""" \n"""
*/

/**
 * 1.变量
 */
fun variab
le() {
    //
  al a: Int = 1  // 立即初始化
    val b = 2   // 推导出Int型
    val c: Int  // 当没有初始化值时必须声明类型
    c = 3       // 赋值
    println("a = $a, b = $b, c = $c")

    //----------------------------------------------------------
    //变量
    var y: Int = 5
    var x = 5 // 推导出Int类型
    x += 1
    var z: Int
    z = 9
    println("x = $x,y=$y,z=$z")
}

/**
 * 2.字符串模板
 * */
fun txt() {
    var a = 1
    // 使用变量名作为模板:
    val s1 = "a is $a"

    a = 2
    // 使用表达式作为模板:
    val s2 = "${s1.replace("is", "was")}, but now is $a"
    println(s2)
}

/**
 * 3.使用条件表达式
 * */
fun maxOf(a: Int, b: Int): Int {
    if (a > b) {
        return a
    } else {
        return b
    }
}

/**
 *4.使用可空变量以及空值检查
 * 当空值可能出现时应该明确指出该引用可空。
 * 下面的函数是当 str 中不包含整数时返回空:
 * */
fun printProduct(arg1: String, arg2: String) {
    val x = parseInt(arg1)
    val y = parseInt(arg2)
    // 直接使用 x*y 会产生错误因为它们中有可能会有空值
    if (x != null && y != null) {
        // x 和 y 将会在空值检测后自动转换为非空值
        println(x * y)
    } else {
        println("Error： '$arg1' 或者 '$arg2' 中间有的不是数字")
    }
}

fun parseInt(str: String): Int? {
    return str.toIntOrNull()
}

/**
 * 5.使用值检查并自动转换
 * */
//使用 is 操作符检查一个表达式是否是某个类型的实例。如果对不可变的局部变量或属性进行过了类型检查，就没有必要明确转换：
fun printLength(obj: Any) {
    println("'$obj' 字符串的长度是 ${getStringLength(obj) ?: "Error:不是字符串"} ")
}

fun getStringLength(obj: Any): Int? {
    if (obj is String) {
        // obj 将会在这个分支中自动转换为 String 类型
        return obj.length
    }

    // obj 在种类检查外仍然是 Any 类型
    return null
}
```

# 3.Kotlin使用习惯



##  3.1 关键字in

使用 in 操作符检查数值是否在某个范围内

```kotlin
fun inTxt(x: Int) {
    if (x in 1..10) {
        println("$x 在范围1-10之间")
    } else {
        println("$x 超出范围")
    }
}
```

## 3.2 Ranges(迭代和步进)

```kotlin
private fun diedai() {
    print("在范围内迭代:")
    for (u in 1..5) {
        print(u)
    }
}

//步进：循环中递增的倍数
private fun diedai2() {
    print("\n使用步进:")
    for (x in 1..10 step 2) {
        print(x)
    }
    for (x in 9 downTo 0 step 3) {
        print(x)
    }
}
//downTo()函数：倒序迭代//print(i)
private fun RangesTxt() {
    for (i in 1..10)  //相当于 of 1 <= i && i <= 10
    for (i in 1 until 10) // i in [1, 10), 不包含：10  
    for (i in 1..4) print(i) // prints "1234"
    for (i in 4..1) print(i) // prints nothing
    for (i in 4 downTo 1) print(i) // prints "4321"
    for (i in 1..4 step 2) print(i) // prints "13"
    for (i in 4 downTo 1 step 2) print(i) // prints "42"
    //step()--可以进行任意数量的迭代，而不是每次变化都是1
    for (i in 1..4 step 2) print(i) // prints "13"--遍历每次自增2
    for (i in 4 downTo 1 step 2) print(i) // prints "42
}
```

## 3.3 集合

```json
private fun ListTxt() {
    val list1 = listOf("vdf", "vdrf", "vsdf")
    val list2 = setOf("vdf", "vdrf", "vsdf")
    when {
    //使用 in 操作符检查集合中是否包含某个对象
        "vsd" in list1 -> print("cvds")
    }

    //使用lambda表达式过滤和映射集合：
    list1.filter { it.startsWith("a") }
            .sortedBy { it }
            .map { it.toUpperCase() }
            .forEach { print(it) }
}
```

### 3.3.1 只读集合

```kotlin
val list = listOf("a", "b", "c") //只读 list
val map = mapOf("a" to 1, "b" to 2, "c" to 3) //只读map
```



## 3.4 if带返回值的

```kotlin
fun foo(param: Int){
    val result = if (param == 1) {
        "one"	//结果：result="one"
    } else if (param == 2) {
        "two"	//结果：result="two"
    } else {
        "three"	//结果：result="three"
    }
}
```

##  3.5 函数的默认值

```kotlin
fun foo(a: Int = 0, b: String = "") {...}
//注：相当于java的重载
void foo(int a){}
void foo(int a,String b)
```

## 3.6 只有一个表达式的函数

```kotlin
fun theAnswer() = 42
//相当于下面的写法
fun theAnswer(): Int {
    return 42
}
//这个可以和其它习惯用语组合成高效简洁的代码。譬如说 when 表达式：
fun transform(color: String): Int = when (color) {
        "Red" -> 0
        "Green" -> 1
        "Blue" -> 2
        else -> throw IllegalArgumentException("Invalid color param value")
    }
```

##  3.7 产生一个可能为空的布尔值

```kotlin
val b: Boolean? = ...
if (b == true) {
  ...
} else {
  // `b` 是false或者null
}
```

## 3.8 一个函数返回俩个值

* 要是一个函数想返回俩个值。比如，一个对象结果，一个是排序的状态。在 Kotlin 中的一个紧凑的方案是声明 [data](http://kotlinlang.org/docs/reference/data-classes.html) 类并返回实例：

  ```kotlin
  data class Result(val result: Int, val status: Status)

  fun function(...): Result {
      //...
      return Result(result, status)
  }

  val (result, status) = function(...)
  ```

## 3.9 等式

  * ### 参照相等

  参照相等是通过 `===` 操作符判断的(不等是`!==` ) a===b 只有 a b 指向同一个对象是判别才成立。

  另外，你可以使用内联函数 `identityEquals()` 判断参照相等：

  ```kotlin
  a.identityEquals(b)
  a identityEquals b
  ```

  ​

  * ### 结构相等

  结构相等是通过 `==` 判断的。像 `a == b` 将会翻译成：

  ```kotlin
  a?.equals(b) ?: b === null
  ```

  如果 a 不是 null 则调用 `equals(Any?)` 函数，否则检查 b 是否参照等于 null

  注意完全没有必要为优化你的代码而将 `a == null` 写成 `a === null` 编译器会自动帮你做的。

# 4.流程控制

## 4.1 循环

```kotlin
//for:  通过任何提供的迭代器进行迭代。语法是下面这样的：
fun loopFor() {
    val items = listOf("apple", "banana", "kiwi")
    for (str in items) {
    }
    for (index in items.indices) {
        println("第 $index 个是 ${items[index]}")
    }
    for (index in 0..viewGroup.getChildCount() - 1) {
  		val view = viewGroup.getChildAt(index)
  		view.visibility = View.VISIBLE
	}
}
//while
fun loopWhile() {
    val items = listOf("apple", "banana", "kiwi")
    var index = 0
    while (index < items.size) {
        println("第 $index 个是 ${items[index]}")
        index++
    }
  //do...while
  do {
      val y = retrieveData()
    } while (y != null){ // y 在这是可见的
	}

  //遍历 map/list
  for ((k, v) in map) {
      print("$k -> $v")
  }
```

### 4.4.1 循环与集合 

```kotlin
//使用 in 运算符来判断集合内是否包含某实例：
fun main(args: Array<String>) {
    val items = setOf("apple", "banana", "kiwi")
    when {
        "orange" in items -> println("juicy")
        "apple" in items -> println("apple is fine too")
    }
}
//使用 lambda 表达式来过滤（filter）和映射（map）集合：
fun main(args: Array<String>) {
    val fruits = listOf("banana", "avocado", "apple", "kiwi")
    fruits
        .filter { it.startsWith("a") }
        .sortedBy { it }
        .map { it.toUpperCase() }
        .forEach { println(it) }
}
```



## 4.2 when 表达式

* when会对所有的分支进行检查直到有一个条件满足。when 可以用做表达式或声明。如果用作表达式的话，那么满足条件的分支就是总表达式。如果用做声明，那么分支的值会被忽略。(像 if 表达式一样，每个分支是一个语句块，而且它的值就是最后一个表达式的值)

* 在其它分支都不匹配的时候默认匹配 else 分支。如果把 when 做为表达式的话 else 分支是强制的，除非编译器可以证明分支条件已经覆盖所有可能性。


```kotlin
//注意，由于 smart casts ，你可以不用另外的检查就可以使用相应的属性或方法。
fun WhenTxt(obj: Any): String {
    return when (obj) {
        1,0 		-> "One or Two"	//如果有分支可以用同样的方式处理的话，分支条件可以连在一起：
      	s.contains("hello") -> "it's a welcome!
     	parseInt(s) -> print("s encode x") //可以用任意表达式作为分支的条件
        in 1..10 	-> print("x is in the range")//甚至可以用 in 或者 !in 检查值是否值在一个范围或一个集合中：
        "Hello" 	-> "Greeting"
      	is TextView -> obj.setText("I'm a TextView")//后台自动转型
        is Long 	-> "Long"//也可以用 is 或者 !is 来判断值是否是某个类型。
        !is String 	-> "不是字符串"
        else 		-> "未知格式"//也可以用来代替 if-else if 。如果没有任何参数提供，那么分支的条件就是简单的布尔表达式，当条件为真时执行相应的分支：
    }
}
```
* 因为它是一个表达式，它也可以返回一个值。

```kotlin
/*
我们需要考虑什么时候作为一个表达式使用
--》它必须要覆盖所有分支的可能性
--》或者实现 else  分支。
否则它不会被编译成功
*/
val result = when (x) {
        0, 1 -> "binary"
        else -> "error"
    }
```

```

  

## 4.3 if 表达式

在 Kotlin 中，if 是表达式，它可以返回一个值。因此Kotlin没有三元运算符(condition ? then : else),因为if语句已经满足了效果。

​```kotlin
// 传统用法
var max = a
if (a < b)
    max = b

// 带 else
var max: Int
if (a > b)
    max = a
else
    max = b

// 作为表达式：相当于--》三目运算法
val max = if (a > b) a else b
```

  if分支可以作为块，最后一个表达式是该块的值：

```kotlin
val max = if (a > b){
    print("Choose a")
    a
}
else{
    print("Choose b")
    b
}
//如果使用If作为表达式而不是语句(例如，返回其值或将其赋值给一个变量)，则需要有一个else分支。
```

## 4.3 IO

读取操作



```kotlin
//逐行读取:
var source = File("coffeetime-kotlin/myfile.txt")
val lines = source.readLines("UTF-8")

for (l in lines) {
	println(l)
}
//读取到字符串中
val contents = source.readText("UTF-8")
```
## 4.4 返回&跳转

Kotlin 有三种结构化跳转表达式：

- **return** 默认从最直接包围它的函数或者[匿名函数](https://hltj.gitbooks.io/kotlin-reference-chinese/content/txt/lambdas.html#匿名函数)返回。
- **break** 终止最直接包围它的循环。
- **continue** 继续下一次最直接包围它的循环。

# 5. 操作符

## 5.1 一元运算符

| **表达式** | **转换**              |
| ------- | ------------------- |
| +a      | a.plus()            |
| -a      | a.minus()           |
| !a      | a.not()             |
| a++     | a.inc() + see below |
| a--     | a.dec() + see below |

## 5.2 二元操作符

| **表达式** | **转换**         |
| :------ | -------------- |
| a + b   | a.plus(b)      |
| a - b   | a.minus(b)     |
| a * b   | a.times(b)     |
| a / b   | a.div(b)       |
| a % b   | a.mod(b)       |
| a..b    | a.rangeTo(b)   |
| a in b  | b.contains(a)  |
| a !in b | !b.contains(a) |

## 5.3 数组操作符、等于操作符、函数调用

in 和 !in他们的产生步骤是一样的，但参数顺序是相反的。

| **数组操作符**             | **函数**                |
| :-------------------- | --------------------- |
| a[i]                  | a.get(i)              |
| a[i, j]               | a.get(i, j)           |
| a[i_1, ..., i_n]      | a.get(i_1, ... , i_n) |
| a[i] = b              | a.set(i, b)           |
| a[i,j] =b             | a.set(i, j, b)        |
| a[i_1, ... , i_n] = b | a.set(i_1,... ,o_n,b) |

| **等于操作符** | **函数**                        |
| :-------- | ----------------------------- |
| a == b    | a?.equals(b) ?: b === null    |
| a != b    | !(a?.equals(b) ?: b === null) |

| **函数方法**          | **函数调用**                |
| :---------------- | ----------------------- |
| a(i)              | a.invoke(i)             |
| a(i, j)           | a.invoke(i, j)          |
| a(i_1, ... , i_n) | a.invoke(i_1, ..., i_n) |

## 5.4 空安全

### 5.4.1 可空类型和非空类型



在 Kotlin 类型系统中可以为空和不可为空的引用是不同的。比如：

* 不能为空：

```kotlin
var a: String ="abc"
a = null //编译不通过
```

* 允许为空

```kotlin
var b: String? = "abc"
b = null
```

* 现在你可以调用 a 的方法，而不用担心 NPE 异常了：

```kotlin
val l = a.length()
```

* 但如果你想使用 b 调用同样的方法就有可能报错了：

```kotlin
val l = b.length() //错误：b 不可为空
```

* 但我们任然想要调用方法，有些办法可以解决。 

```kotlin
val l = b?.length() 
val l = b!!.length()  
```

  #### 5.4.1.1 Elvis 操作符

```kotlin
val l = b.length()?: -1
//结合return与throw
fun foo(node: Node): String? {
  val parent = node.getParent() ?: return null
  val name = node.getName() ?: throw IllegalArgumentException("name expected")

  //...
}
```



### 5.4.2 在条件中检查 null

首先，你可以检查 `b` 是否为空，并且分开处理下面选项：

```kotlin
val l = if (b != null) b.length() else -1
```

编译器会跟踪你检查的信息并允许在 if 中调用 length()。更复杂的条件也是可以的：

```kotlin
if (b != null && b.length() >0)
  print("Stirng of length ${b.length}")
else
  print("Empty string")
```

注意只有在 b 是不可变时才可以

### 5.4.3 安全调用

第二个选择就是使用安全操作符，`?.`:

```kotlin
b?.length()
//如果 b 不为空则返回长度，否则返回空。这个表达式的的类型是 Int?
```

安全调用在链式调用是是很有用的。比如，如果 Bob 是一个雇员可能分配部门(也可能不分配)，如果我们想获取 Bob 的部门名作为名字的前缀，就可以这样做：

```kotlin
bob?.department?.head?.name
```

这样的调用链在任何一个属性为空都会返回空。

### 5.5 !!操作符

第三个选择是 NPE-lovers。我们可以用 b!! ，这会返回一个非空的 b 或者抛出一个 b 为空的 NPE

```kotlin
val l = b !!.length()
```
### 5.6 安全转换

普通的转换可能产生 `ClassCastException` 异常。另一个选择就是使用安全转换，如果不成功就返回空：

```kotlin
val aInt: Int? = a as? Int
```
### 5.7 Kotlin中的null安全 

* 在Kotlin中一切都是对象（甚至是Java中原始数据类型），一切都是可null的。

```kotlin
//一个可null的integer：
	val a: Int? = null
//一个可nul类型，你在没有进行检查之前你是不能直接使用它。这个代码不能被编译：
  val a: Int? = null
  a.toString()
//前一行代码标记为可null，然后编译器就会知道它，所以在你null检查之前你不能去使用它。
//还有一个特性是当我们检查了一个对象的可null性，之后这个对象就会自动转型成不可null类型，这就是Kotlin编译器的智能转换：
  vala:Int?=null
  ...
  if(a!=null){
  	a.toString()
  }
//在 if 中，a 从Int?变成了Int，所以我们可以不需要再检查可null性而直接使用它。 
//if代码之外，当然我们又得检查处理。这仅仅在变量当前不能被改变的时候才有效，因为否则这个value可能被另外的线程修改，这时前面的检查会返回false。 
//val 属性或者本地（ val or var  ）变量。这听起来会让事情变得更多。难道我们不得不去编写大量代码去进行可null性的检查？当然不是，首先，因为大多数时候你不需要使用null类型。Null引用没有我们想象中的有用，当清除以为null时你就会发现这一点。但是Kotlin也有它自己的使处理更简洁的方案。

//举个例子，我们如下简化代码：
  val a: Int? = null
  ...
  a?.toString()
//这里我们使用了安全访问操作符( ?  )。
//只有这个变量不是null的时候才会去执行前面的那行代码。否则，它不会做任何事情。并且我们甚至可以使用Elvis
  operator( ?:  )：
  val a:Int? = null
  val myString = a?.toString() ?: ""
//因为在Kotlin中 throw 和 return  都是表达式，他们可以用在Elvis operator操作符的右边：
  val myString = a?.toString() ?: return false
  val myString = a?.toString() ?: throw IllegalStateException()
//-----------------------------------------------------------------------------------------------------------------------
//然后，我们可能会遇到这种情景，我们确定我们是在用一个非null变量，但是他的类型却是可null的。
//我们可以使用 !!  操作符来强制编译器执行可null类型时跳过限制检查：
  val a: Int? = null
  a!!.toString()
//上面的代码将会被编译，但是很显然会奔溃。所以我们要确保只能在特定的情况下使用。通常我们可以自己选择作为解决方案。
//如果一份代码满篇都是 !!  ，那就有股代码没有被正确处理的气味了。
```



# 6. Android使用

## 6.1 Get 和Set

在Kotlin中，只需要一个属性就可以了：

```kotlin
public class Person {
	var name: String = ""
}
...
val person = Person()
person.name = "name"
val name = person.name
```

如果没有任何指定，属性会默认使用getter和setter。当然它也可以修改为你自定义的代码，并且不修改存在的代码：
```kotlin
public classs Person {
  var name: String = ""
 		get() = field.toUpperCase()
      set(value){
      	field = "Name: $value"
    }
}
```
如果需要在getter和setter中访问这个属性自身的值，它需要创建一个 backing field  。可以使用 field  这个预留字段来访问，它会被编译器找到正在使用的并自动创建。需要注意的是，如果我们直接调用了属性，那我们会使用setter和getter，而不是直接访问这个属性。 backing field  只能在属性访问器内访问。

就如在前面章节提到的，当操作Java代码的时候，Kotlin将允许使用属性的语法去访问在Java文件中定义的getter/setter方法。编译器会直接链接到它原始的getter/setter方法。所以当我们直接访问属性的时候不会有性能开销。

## 6.2 Lambdas 

* 简化setOnClickListener()

```java
//首先要编写一个 OnClickListener  接口：
public interface OnClickListener {
	void onClick(View v);
}
```

```java
//编写一个匿名内部类去实现这个接口
view.setOnClickListener(new OnClickListener(){
    @Override
    public void onClick(View v) {
    	Toast.makeText(v.getContext(), "Click", Toast.LENGTH_SHORT).show();
    }
})
```

```kotlin
//把上面的代码转换成Kotlin（使用了Anko的toast函数）：
view.setOnClickListener(object : OnClickListener {
    override fun onClick(v: View) {
    	toast("Click")
    }
}
```

```kotlin
//Kotlin允许Java库的一些优化，Interface中包含单个函数可以被替代为一个函数。如果我们这么去定义了，它会正常执行：
fun setOnClickListener(listener: (View) -> Unit)
//一个lambda表达式通过参数的形式被定义在箭头的左边（被圆括号包围），然后在箭头的右边返回结果值。在这个例子中，我们接收一个View，然后返回一个Unit（没有东西）。所以根据这种思想，我们可以把前面的代码简化成这样：
view.setOnClickListener({
  	view -> toast("Click")
})
//当我们定义了一个方法，我们必须使用大括号包围，然后在箭头的左边指定参数，在箭头的右边返回函数执行的结果。如果左边的参数没有使用到，我们甚至可以省略左边的参数：
view.setOnClickListener({ 
  	toast("Click") 
})
//如果这个函数的最后一个参数是一个函数，我们可以把这个函数移动到圆括号外面：
view.setOnClickListener() { 
  toast("Click") 
}
//并且，最后，如果这个函数只有一个参数，我们可以省略这个圆括号：
view.setOnClickListener { toast("Click")}
//比原始的Java代码简短了5倍多。
```



## 6.3 标准委托 

在Kotlin的标准库中有一系列的标准委托。它们包括了大部分有用的委托，但是我们也可以创建我们自己的委托。

### 6.3.1 Lazy 

它包含一个lambda，当第一次执行 getValue  的时候这个lambda会被调用，所以这个属性可以被延迟初始化。之后的调用都只会返回同一个值。这是非常有趣特性， 当我们在它们第一次真正调用之前不是必须需要它们的时候。我们可以节省内存，在这些属性真正需要前不进行初始化。

```kotlin
class App : Application() {
  val database: SQLiteOpenHelper by lazy {
  		MyDatabaseHelper(applicationContext)
  }
  override fun onCreate() {
  		super.onCreate()
 		 val db = database.writableDatabase
  }
}
//在这个例子中，database并没有被真正初始化，直到第一次调用 onCreate 时。
//在那之后，我们才确保applicationContext存在，并且已经准备好可以被使用了。 
//lazy  操作符是线程安全的。如果你不担心多线程问题或者想提高更多的性能，你也可以使用 
lazy(LazyThreadSafeMode.NONE){ 
  ...
}  
```

### 6.3.2 Observable

这个委托会帮我们监测我们希望观察的属性的变化。当被观察属性的 set  方法被调用的时候，它就会自动执行我们指定的lambda表达式。所以一旦该属性被赋了新的值，我们就会接收到被委托的属性、旧值和新值。

```kotlin
//这个例子展示了，一些我们需要关心的ViewMode，每次值被修改了，就会保存它们到数据库。
class ViewModel(val db: MyDatabase) {
  var myProperty by Delegates.observable("") {
      d, old, new ->
      db.saveChanges(this, new)
  }
}
```

### 6.3.3 Vetoable

这是一个特殊的 observable  ，它让你决定是否这个值需要被保存。它可以被用于在真正保存之前进行一些条件判断。

```kotlin
//这个委托只允许在新的值是正数的时候执行保存。在lambda中，最后一行表示返回值。你不需要使用return关键字（实质上不能被编译）。
var positiveNumber = Delegates.vetoable(0) {
      d, old, new ->
      new >= 0
}
```

### 6.3.4 Not **Null**

有时候我们需要在某些地方初始化这个属性，但是我们不能在构造函数中确定，或者我们不能在构造函数中做任何事情。第二种情况在Android中很常见：在Activity、fragment、service、receivers……无论如何，一个非抽象的属性在构造函数执行完之前需要被赋值。为了给这些属性赋值，我们无法让它一直等待到我们希望给它赋值的时候。我们至少有两种选择方案。第一种就是使用可null类型并且赋值为null，直到我们有了真正想赋的值。但是我们就需要在每个地方不管是否是null都要去检查。如果我们确定这个属性在任何我们使用的时候都不会是null，这可能会使得我们要编写一些必要的代码了。第二种选择是使用 notNull  委托。它会含有一个可null的变量并会在我们设置这个属性的时候分配一个真实的值。如果这个值在被获取之前没有被分配，它就会抛出一个异常。
这个在单例App这个例子中很有用：

```kotlin
class App : Application() {
  	companion object {
    	var instance: App by Delegates.notNull()
    }
 	override fun onCreate() {
        super.onCreate()
        instance = this
    }
}
```

# 7 操作符
## 7.1 总数操作符
### 7.1.1 any

```kotlin
//如果至少有一个元素符合给出的判断条件，则返回true。
val list = listOf(1, 2, 3, 4, 5, 6)
assertTrue(list.any { it % 2 == 0 })
assertFalse(list.any { it > 10 })
```

### 7.1.2 all

```kotlin
//如果全部的元素符合给出的判断条件，则返回true。
assertTrue(list.all { it < 10 })
assertFalse(list.all { it % 2 == 0 })
```

### 7.1.3 count

```kotlin
//返回符合给出判断条件的元素总数。
assertEquals(3, list.count { it % 2 == 0 })
```
### 7.1.4 fold

```kotlin
//在一个初始值的基础上从第一项到最后一项通过一个函数累计所有的元素。
assertEquals(25, list.fold(4) { total, next -> total + next })
```

### 7.1.5 foldRight

```kotlin
//与 fold  一样，但是顺序是从最后一项到第一项。
assertEquals(25, list.foldRight(4) { total, next -> total + next
})
```

### 7.1.6 forEach

```kotlin
//遍历所有元素，并执行给定的操作。
list.forEach { println(it) }
```

### 7.1.7 forEachIndexed

```kotlin
//与 forEach  ，但是我们同时可以得到元素的index。
list.forEachIndexed { index, value
-> println("position index contains a value") }
```

### 7.1.8 max

```kotlin
//返回最大的一项，如果没有则返回null。
assertEquals(6, list.max())
```



### 7.1.9 maxBy

```kotlin
//根据给定的函数返回最大的一项，如果没有则返回null。
assertEquals(1, list.maxBy { -it })// The element whose negative is greater
```

### 7.1.10 min

```kotlin
//返回最小的一项，如果没有则返回null。
assertEquals(1, list.min())
```

### 7.1.11 minBy

```kotlin
//根据给定的函数返回最小的一项，如果没有则返回null。
assertEquals(6, list.minBy { -it })// The element whose negative is smaller
```

### 7.1.12 none

```kotlin
//如果没有任何元素与给定的函数匹配，则返回true。
assertTrue(list.none { it % 7 == 0 })// No elements are divisible by 7
```

### 7.1.13 reduce

```kotlin
//与 fold  一样，但是没有一个初始值。通过一个函数从第一项到最后一项进行累计。
assertEquals(21, list.reduce { total, next -> total + next })
```

### 7.1.14 reduceRight

```kotlin
//与 reduce  一样，但是顺序是从最后一项到第一项。
assertEquals(21, list.reduceRight { total, next -> total + next
})
```

### 7.1.14 sumBy

```kotlin
//返回所有每一项通过函数转换之后的数据的总和。
assertEquals(3, list.sumBy { it % 2 })
```

### 7.1.15 Example

```kotlin
val listIntTotal = listOf(1, 2, 3, 4, 5, 6)
val listStrTotal  = listOf("yes", "no", "sure")

fun main(args: Array<String>) {
    //1.any 如果至少有一个元素符合给出的判断条件，则返回true
    println(listIntTotal.any { it % 2 == 0 })//true
    println("--------------any1 -------------------------------")
    println(listIntTotal.any { it > 10 })//false
    println("--------------any2 -------------------------------")
    //2.all 如果全部的元素符合给出的判断条件，则返回true
    println(listIntTotal.all { it < 10 })//true
    println("--------------all1 -------------------------------")
    println(listIntTotal.all { it % 2 == 0 })//false
    println("--------------all2 -------------------------------")
    //3.count 返回符合给出判断条件的元素总数
    println(listIntTotal.count { it % 2 == 0 })//3
    println("--------------count-------------------------------")
    //4.fold 在一个初始值的基础上从第一项到最后一项通过一个函数累计所有的元素
    //其实fold 就是折叠的意思，把一个集合的元素折叠起来的并得到一个最终的结果
    //从4开始，1+4,2+5,3+7,4+10,5+14,6+19=25
    println(listIntTotal.fold(4) { total, next -> total + next })//25
    println("--------------fold1-------------------------------")
    //将int 转换为字符串
    val r1 = listIntTotal.fold(StringBuilder()) {
        strBuilder, it ->
        strBuilder.append(it).append(",")
    }
    println(r1.toString() is String)
    println("--------------fold2-------------------------------")
    //5.foldRight 与 fold 一样，但是顺序是从最后一项到第一项
    //从4开始，4+6,10+5,15+4，19+3,22+2，24+1=25
    println(listIntTotal.foldRight(4) { total, next -> total + next })//25
    println("--------------foldRight-------------------------------")
    //6.reduce 与 fold 一样，但是没有一个初始值。通过一个函数从第一项到最后一项进行累计
    println(factorial(5))//120
    println("--------------factorial-------------------------------")
    println(listIntTotal.reduce { total, next -> total + next })//21
    println("--------------reduce-------------------------------")
    println(listIntTotal.reduceRight { i, acc -> i + acc })//21
    println("--------------reduceRight-------------------------------")
    //7.forEach
    listStrTotal.forEach { println(it) }
    println("--------------forEach-------------------------------")
    //与forEach类似 但是我们同时可以得到元素的index
    listStrTotal.forEachIndexed { index, s -> println("$index $s") }
    println("--------------forEachIndexed-------------------------------")
    listStrTotal.forEachWithIndex { i, s -> println("$i $s") }
    println("--------------forEachWithIndex-------------------------------")
    listStrTotal.forEachReversedWithIndex { i, s -> println("$i $s") }
    println("--------------forEachReversedWithIndex-------------------------------")
    listStrTotal.forEachReversed { println(it) }
    println("--------------forEachReversed-------------------------------")
    listStrTotal.forEachByIndex { println(it) }
    println("--------------forEachByIndex-------------------------------")
    //8.max 返回最大的一项，如果没有则返回null
    println(listIntTotal.max())
    println("--------------max-------------------------------")
    println(listIntTotal.maxBy { -(4 - it * 8) })
    println("--------------maxBy-------------------------------")
    //9.min 返回最小的一项，如果没有则返回null
    println(listIntTotal.min())
    println("--------------min-------------------------------")
    println(listIntTotal.minBy { -(4 - it * 8) })
    println("--------------minBy-------------------------------")
    //10.none 如果没有任何元素与给定的函数匹配，则返回true。
    println(listIntTotal.none())//false
    println("--------------none-------------------------------")
    println(listIntTotal.none { it % 3 == 0 })//false
    println("--------------none-------------------------------")
    //11.sumBy 返回所有每一项通过函数转换之后的数据的总和
    println(listIntTotal.sumBy { it % 2 })//3
    println("--------------sumBy-------------------------------")
}
```



## 7.2 过滤操作符

### 7.2.1 drop

```kotlin
//返回包含去掉前n个元素的所有元素的列表。
assertEquals(listOf(5, 6), list.drop(4))
```

### 7.2.2 dropWhile

```kotlin
//返回根据给定函数从第一项开始去掉指定元素的列表。
assertEquals(listOf(3, 4, 5, 6), list.dropWhile { it < 3 })
```

### 7.2.3 dropLastWhile

```kotlin
//返回根据给定函数从最后一项开始去掉指定元素的列表。
assertEquals(listOf(1, 2, 3, 4), list.dropLastWhile { it > 4 })
```

### 7.2.4 filter

```kotlin
//过滤所有符合给定函数条件的元素。
assertEquals(listOf(2, 4, 6), list .ilter { it % 2 == 0 })
```

### 7.2.5 filterNot

```kotlin
//过滤所有不符合给定函数条件的元素。
assertEquals(listOf(1, 3, 5), list.filterNot { it % 2 == 0 })
```

### 7.2.6 filterNotNull

```kotlin
//过滤所有元素中不是null的元素。
assertEquals(listOf(1, 2, 3, 4), listWithNull.filterNotNull())
```

### 7.2.7 slice

```kotlin
//过滤一个list中指定index的元素。
assertEquals(listOf(2, 4, 5), list.slice(listOf(1, 3, 4)))
```

### 7.2.8 take

```kotlin
//返回从第一个开始的n个元素。
assertEquals(listOf(1, 2), list.take(2))
```

### 7.2.9 takeLast

```kotlin
//返回从最后一个开始的n个元素
assertEquals(listOf(5, 6), list.takeLast(2))
```

### 7.2.10 takeWhile

```kotlin
//返回从第一个开始符合给定函数条件的元素。//
assertEquals(listOf(1, 2), list.takeWhile { it < 3 })
```

### 7.2.11 Example

```kotlin
val listIntFilter = listOf(1, 2, 3, 4, 5, 6)

fun main(args: Array<String>) {
    //1.drop 返回包含去掉前n个元素的所有元素的列表
    (listIntFilter.drop(3)).forEach { println(it) }//4,5,6
    println("--------------drop -------------------------------")
    //2.filter 过滤所有符合给定函数条件的元素
    (listIntFilter.filter { it % 2 == 0 }).forEach { println(it) }//2,4,6
    println("--------------filter -------------------------------")
    //3.filterNot 过滤所有不符合给定函数条件的元素
    (listIntFilter.filterNot { it % 2 == 0 }).forEach { println(it) }//1,3,5
    println("--------------filterNot -------------------------------")
    //4.slice 过滤掉非指定下标的元素，即保留下标对应的元素过滤List中指定下标的元素（比如这里只保留下标为1，3，4的元素），当过滤list中有元素值大于目标List大小时会出现异常
    (listIntFilter.slice(listOf(1, 4)).forEach { println(it) })//2,5
    println("--------------slice -------------------------------")
    //5.take 返回从第一个开始的n个元素
    (listIntFilter.take(3)).forEach { println(it) }//1,2,3
    println("--------------take -------------------------------")
    //6.takeLast 返回从最后一个开始的n个元素
    (listIntFilter.takeLast(3)).forEach { println(it) }//4,5,6
    println("--------------takeLast -------------------------------")
    //7.takeWhile 返回从第一个开始符合给定函数条件的元素
    (listIntFilter.takeWhile { it < 3 }).forEach { println(it) }//1,2
    println("--------------takeWhile -------------------------------")
}
```



## 7.3 映射操作符

### 7.3.1 flatMap

```kotlin
//遍历所有的元素，为每一个创建一个集合，最后把所有的集合放在一个集合中。
assertEquals(listOf(1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7),
list.flatMap { listOf(it, it + 1) })
```

### 7.3.2 groupBy

```kotlin
//返回一个根据给定函数分组后的map。
assertEquals(mapOf("odd" to listOf(1, 3, 5), "even" to listOf(2,
4, 6)), list.groupBy { if (it % 2 == 0) "even" else "odd" })
```

### 7.3.3 map

```kotlin
//返回一个每一个元素根据给定的函数转换所组成的List。
assertEquals(listOf(2, 4, 6, 8, 10, 12), list.map { it * 2 })
```

### 7.3.4 mapIndexed

```kotlin
//返回一个每一个元素根据给定的包含元素index的函数转换所组成的List。
assertEquals(listOf (0, 2, 6, 12, 20, 30), list.mapIndexed { ind
ex, it -> index * it })
```

### 7.3.5 mapNotNull

```kotlin
//返回一个每一个非null元素根据给定的函数转换所组成的List。
assertEquals(listOf(2, 4, 6, 8), listWithNull.mapNotNull { it * 2
})
```

### 7.3.6 Example

```kotlin
val listIntMap = listOf(1, 2, 3, 4, 5, 6)
val listStrMap = listOf("y,s", "n,o", "su,e")

fun main(args: Array<String>) {
    //1.flatMap 遍历所有的元素，为每一个创建一个集合，最后把所有的集合放在一个集合中
    (listStrMap.flatMap { it.split(",") }).forEach { print(it) }
    (listStrMap.flatMap { it.split(",") }).map { println(it) }

    val list = listOf(
            1..20,
            2..5
    )
    (list.flatMap { it }).forEach { println(it) }
    (list.flatMap { it.map { it * 2 } }).forEach { println(it) }

    println("--------------flatMap -------------------------------")
    //2.groupBy 返回一个根据给定函数分组后的map
    (listIntMap.groupBy { if (it > 4) "大于4" else "小于4" }).forEach { t, u -> println("$t $u") }
    println("--------------groupBy -------------------------------")
    //3.map 返回一个每一个元素根据给定的函数转换所组成的List
    (listIntMap.map { it * 2 }).forEach { println(it) }
    println("--------------map -------------------------------")
    //4.mapIndexed 返回一个每一个元素根据给定的包含元素index的函数转换所组成的List
    listIntMap.mapIndexed { index, i -> println("$index $i") }
    println("--------------mapIndexed -------------------------------")
}
```



## 7.4 元素操作符

### 7.4.1 contains

```kotlin
//如果指定元素可以在集合中找到，则返回true。
assertTrue(list.contains(2))
```

### 7.4.2 elementAt

```kotlin
//返回给定index对应的元素，如果index数组越界则会抛出 IndexOutOfBoundsException  。
assertEquals(2, list.elementAt(1))
```

### 7.4.3 elementAtOrElse

```kotlin
//返回给定index对应的元素，如果index数组越界则会根据给定函数返回默认值。
assertEquals(20, list.elementAtOrElse(10, { 2 * it }))
```

### 7.4.4 elementAtOrNull

```kotlin
//返回给定index对应的元素，如果index数组越界则会返回null。
assertNull(list.elementAtOrNull(10))
```

### 7.4.5 first

```kotlin
//返回符合给定函数条件的第一个元素。
assertEquals(2, list.first { it % 2 == 0 })
```

### 7.4.6 firstOrNull

```kotlin
//返回符合给定函数条件的第一个元素，如果没有符合则返回null。
assertNull(list.firstOrNull { it % 7 == 0 })
```

### 7.4.7 indexOf

```kotlin
//返回指定元素的第一个index，如果不存在，则返回 -1  。
assertEquals(3, list.indexOf(4))
```

### 7.4.8 indexOfFirst

```kotlin
//返回第一个符合给定函数条件的元素的index，如果没有符合则返回 -1  。
assertEquals(1, list.indexOfFirst { it % 2 == 0 })
```

### 7.4.9 indexOfLast

```kotlin
//返回最后一个符合给定函数条件的元素的index，如果没有符合则返回 -1  。
assertEquals(5, list.indexOfLast { it % 2 == 0 })
```

### 7.4.10 last

```kotlin
//返回符合给定函数条件的最后一个元素。
assertEquals(6, list.last { it % 2 == 0 })
```

### 7.4.11 lastIndexOf

返回指定元素的最后一个index，如果不存在，则返回 -1  。

### 7.4.12 lastOrNull

```kotlin
//返回符合给定函数条件的最后一个元素，如果没有符合则返回null。
val list = listOf(1, 2, 3, 4, 5, 6)
assertNull(list.lastOrNull { it % 7 == 0 })
```

### 7.4.13 single

```kotlin
//返回符合给定函数的单个元素，如果没有符合或者超过一个，则抛出异常。
assertEquals(5, list.single { it % 5 == 0 })
```

### 7.4.14 singleOrNull

```kotlin
//返回符合给定函数的单个元素，如果没有符合或者超过一个，则返回null。
assertNull(list.singleOrNull { it % 7 == 0 })
```

### 7.4.15 Example

```kotlin
val listIntElement = listOf(1, 2, 3, 4, 5, 6)

fun main(args: Array<String>) {
    //1.contains 如果指定元素可以在集合中找到，则返回true
    println(listIntElement.contains(3))//true
    println("--------------contains -------------------------------")
    //2.elementAt 返回给定index对应的元素，如果index数组越界则会抛出 IndexOutOfBoundsException
    println(listIntElement.elementAt(2))//3
    println("--------------elementAt -------------------------------")
    //3.elementAtOrElse 返回给定index对应的元素，如果index数组越界则会根据给定函数返回默认值
    println(listIntElement.elementAtOrElse(3, { "没有哦" }))//4
    println(listIntElement.elementAtOrElse(8, { "没有哦" }))//没有哦
    println("--------------elementAtOrElse -------------------------------")
    //4.first 返回符合给定函数条件的第一个元素
    println(listIntElement.first())//1
    println(listIntElement.first{ it % 3 == 0 })//3
    println("--------------first -------------------------------")
    //5.indexOf 返回指定元素的第一个index，如果不存在，则返回 -1
    println(listIntElement.indexOf(3))//2
    println(listIntElement.indexOf(8))//-1
    println("--------------indexOf -------------------------------")
    //6.indexOfFirst 返回第一个符合给定函数条件的元素的index，如果没有符合则返回 -1
    println(listIntElement.indexOfFirst{ it % 3 == 0 })//2
    println("--------------indexOfFirst -------------------------------")
    //同理还有indexOfLast，表示返回最后一个符合给定函数条件的元素的index，如果没有符合则返回 -1
    println(listIntElement.indexOfLast{ it % 3 == 0 })//5
    println("--------------indexOfLast -------------------------------")
    //7.last 返回符合给定函数条件的最后一个元素
    println(listIntElement.last())//6
    println("--------------last -------------------------------")
    //8.lastIndexOf 返回指定元素的最后一个index，如果不存在，则返回 -1
    println(listIntElement.lastIndexOf(2))//1 如果list为(1, 2, 3, 4, 2, 5, 6)则结果为4
    println("--------------lastIndexOf -------------------------------")
}
```



## 7.5 生产操作符

### 7.5.1 merge

```kotlin
//把两个集合合并成一个新的，相同index的元素通过给定的函数进行合并成新的元素作为新的集合的一个元素，返回这个新的集合。
//新的集合的大小由最小的那个集合大小决定。
val list = listOf(1, 2, 3, 4, 5, 6)
val listRepeated = listOf(2, 2, 3, 4, 5, 5, 6)
assertEquals(listOf(3, 4, 6, 8, 10, 11), list.merge(listRepeated
) { it1, it2 -> it1 + it2 })
```

### 7.5.2 partition

```kotlin
//把一个给定的集合分割成两个，第一个集合是由原集合每一项元素匹配给定函数条件返回 true  的元素组成，
//第二个集合是由原集合每一项元素匹配给定函数条件返回 false  的元素组成。
assertEquals(
    Pair(listOf(2, 4, 6), listOf(1, 3, 5)) , list.partition { it % 2 == 0 }	
)
```

### 7.5.3 plus

```kotlin
//返回一个包含原集合和给定集合中所有元素的集合，因为函数的名字原因，我们可以使用 +  操作符。
assertEquals(
	listOf(1, 2, 3, 4, 5, 6, 7, 8) , list + listOf(7, 8)
)
```

### 7.5.4 zip

```kotlin
//返回由 pair  组成的List，每个 pair  由两个集合中相同index的元素组成。这个返
回的List的大小由最小的那个集合决定。
assertEquals(
	listOf(Pair(1, 7), Pair(2, 8)) , list.zip(listOf(7, 8))
)
```

### 7.5.5 unzip

```kotlin
//从包含pair的List中生成包含List的Pair。
assertEquals(
	Pair(listOf(5, 6), listOf(7, 8)) , listOf(Pair(5, 7), Pair(6, 8)).unzip()
)
```

### 7.5.6 Example

```kotlin
val listIntProduct1 = listOf(1, 2, 3, 4, 5, 6)
val listIntProduct2 = listOf(3, 5, 7, 9)

fun main(args: Array<String>) {
    //1.partition 把一个给定的集合分割成两个，第一个集合是由原集合每一项元素匹配给定函数条件返回 true 的元素组成，第二个集合是由原集合每一项元素匹配给定函数条件返回 false 的元素组成
    println(listIntProduct1.partition { it > 3 })//([4, 5, 6], [1, 2, 3])
    println("--------------partition -------------------------------")
    //2.plus 合并两个List，可以用”+”替代
    println(listIntProduct1.plus(listIntProduct2))//[1, 2, 3, 4, 5, 6, 3, 5, 7, 9]
    println("--------------plus -------------------------------")
    //3.zip 两个集合按照下标组合成一个个的Pair塞到集合中返回
    println(listIntProduct1.zip(listIntProduct2))//[1, 2, 3, 4, 5, 6, 3, 5, 7, 9]
    println("--------------zip -------------------------------")
    //merge的替代方法，把两个集合，按照相同下标，合成新的元素，合成的集合大小由最小的集合决定
    println(listIntProduct1.zip(listIntProduct2) { it1, it2 -> it1 + it2 })//[4, 7, 10, 13]
    println("--------------zip 替代 merge-------------------------------")
}
```



## 7.6 顺序操作符

### 7.6.1  reverse

```kotlin
//返回一个与指定list相反顺序的list。
val unsortedList = listOf(3, 2, 7, 5)
assertEquals(listOf(5, 7, 2, 3), unsortedList.reverse())
```

### 7.6.2 sort

```kotlin
//返回一个自然排序后的list。
assertEquals(listOf(2, 3, 5, 7), unsortedList.sort())
```

### 7.6.3 sortBy

```kotlin
//返回一个根据指定函数排序后的list。
assertEquals(listOf(3, 7, 2, 5), unsortedList.sortBy { it % 3 })
```

### 7.6.4 sortDescending

```kotlin
//返回一个降序排序后的List。
assertEquals(listOf(7, 5, 3, 2), unsortedList.sortDescending())
```

### 7.6.5 sortDescendingBy

```kotlin
//返回一个根据指定函数降序排序后的list。
assertEquals(
  listOf(2, 5, 7, 3),
  unsortedList.sortDescendingBy {
	it % 3 
})
```

### 7.6.6 Example

```kotlin
val listIntOrder1 = listOf(1, 2, 3, 4, 5, 6)
val listIntOrder2 = listOf(5, 2, 4, 8, 1, 6)

fun main(args: Array<String>) {
    //1.reverse  返回一个与指定list相反顺序的list
    println(listIntOrder1.reversed())//[6, 5, 4, 3, 2, 1]
    println("--------------reversed-------------------------------")
    //2.sorted 返回一个自然排序后的list
    println(listIntOrder2.sorted())//[1, 2, 4, 5, 6, 8]
    println("--------------sorted-------------------------------")
    //3.sortedBy 返回一个根据指定函数排序后的list
    println(listIntOrder1.sortedBy { it * 2 })//[1, 2, 4, 5, 6, 8]
    println("--------------sortedBy-------------------------------")
    //4.sortDescending  返回一个降序排序后的List
    println(listIntOrder1.sortedDescending())//[6, 5, 4, 3, 2, 1]
    println("--------------sortedDescending-------------------------------")
    //5.sortDescendingBy  返回一个根据指定函数降序排序后的list
    println(listIntOrder1.sortedByDescending { it % 2 })//[1, 3, 5, 2, 4, 6]
    println("--------------sortedByDescending-------------------------------")
}
```

***

***

# 8 其他

## 8.1 内部类&嵌套类

`嵌套类`

```kotlin
//在Java中，可以在类的里面再定义类。如果它是一个通常的类，它不能去访问外部类的成员（就如Java中的static）：
class Outer {
  private val bar: Int = 1
  class Nested {
  		fun foo() = bar//编译不通过
  }
}
```
`内部类`
```kotlin
//如果需要去访问外部类的成员，我们需要用 inner 声明这个类：
class Outer {
  private val bar: Int = 1
  inner class Inner{
  		fun foo() = bar//没问题
  }
}
val demo = Outer().Inner().foo() // == 1
```

## 8.2 枚举类

```kotlin
1.Kotlin提供了枚举（enums）的实现：
  enum class Day {
      SUNDAY, MONDAY, TUESDAY, WEDNESDAY,HURSDAY, FRIDAY, SATURDAY
  }

2.枚举可以带有参数：
  enum class Icon(val id: Int,var desc:String) {
      UO(1,"aa"), Search(2,"bb"), Cast(3,"cc")
  }
  val searchIconRes = Icon.Search.id//结果：2
  var a = Icon.Search.desc//结果："bb"

3.枚举可以通过 String  匹配名字来获取，我们也可以获取包含所有枚举的 Array  ，所以我们可以遍历它。
  val search: Icon = Icon.valueOf("Search")
  val iconList: Array<Icon> = Icon.values()
  iconList.forEach {print("$it")}//结果：UOSearchCast
4.每一个枚举都有一些函数来获取它的名字、声明的位置：
  val searchName: String = Icon.SEARCH.name()
  val searchPosition: Int = Icon.SEARCH.ordinal()
  println(Icon.Search.name+"---"+Icon.Search.ordinal)//结果：Search---1
//枚举根据它的顺序实现了Comparable接口，所以可以很方便地把它们进行排序。
```

---

## 8.3 密封类（Sealed）

* 密封类用来限制类的继承关系，这意味着密封类的子类数量是固定的。
* 看起来就像是枚举那样，当你想在一个密封类的子类中寻找一个指定的类的时候，你可以事先知道所有的子类。
* 不同之处在于枚举的实例是唯一的，而密封类可以有很多实例，它们可以有不同的状态。
* 我们可以实现，比如类似Scala中的 Option  类：这种类型可以防止null的使用，当对象包含一个值时返回 Some  类，当对象为空时则返回 None  ：

```kotlin
  sealed class Option<out T> {
    class Some<out T> : Option<T>()
    object None : Option<Nothing>()
  }
//有一件关于密封类很不错的事情是当我们使用 when  表达式时，我们可以匹配所有选项而不使用 else分支：
  val result = when (option) {
    is Option.Some<*> -> "Contains a value"
    is Option.None -> "Empty"
  }
```

## 8.4 异常（Exceptions）

* 在Kotlin中，所有的 Exception  都是实现了 Throwable  ，含有一个 message  且未经检查。
* 这表示我们不会强迫我们在任何地方使用 try/catch  。
* 这与Java中不太一样，比如在抛出 IOException  的方法，我们需要使用 try-catch  包围代码块。
* 通过检查exception来处理显示并不是一个好的方法。
* 像Bruce Eckel、RodWaldhoff或Anders Hejlsberg等人可以给你关于这个更好的观点。

```kotlin
1.抛出异常的方式与Java很类似：
	throw MyException("Exception message")
2.try  表达式也是相同的：
    try{
    	// 一些代码
    }catch (e: SomeException) {
    	// 处理
    }finally {
      // 可选的finally块
    }
3.在Kotlin中， throw  和 try  都是表达式，这意味着它们可以被赋值给一个变量。
	//这个在处理一些边界问题的时候确实非常有用：
    val s = when(x){
        is Int -> "Int instance"
        is String -> "String instance"
        else -> throw UnsupportedOperationException("Not valid type"
   	 )
	}

3.1.或者
    val s = try {
      x as String 
    } catch(e: ClassCastException) { 
      null
    }
```

---

## 8.5 泛型

```kotlin
1.写法  
class Box<T>(t: T){
      var value = t
  }
2.通常来说，创建一个这样类的实例，需要提供类型参数：
	val box: Box<Int> = Box<Int>(1)
3.但是如果泛型可以推断（比如：构造函数推断），则可以省略
	val box = Box(1)//1是 Int 型，因此编译器会推导出我们调用的是 Box<Int>
```

### 8.5.1 变形

* **java**

```java
  interface Collection<E> ... {
      	void addAll(Colletion<? extend E> items);
  }
  void copyAll(Collection<Object> to, Collection<String> from) {
    	to.addAll(from); // 警告：!!! Would not compile with the naive declaration of addAll:
        //Collection<String> 继承自 Collection<Object>
  }

2.假如有个范型接口Source<T>，没有任何接收 T 作为参数的方法，唯一的方法就是返回 T:
  interface Source<T> {
    T nextT();
  }
3.存储一个Source<String>的实例引用给一个类型为 Source<Object> 是安全的，但java并不知道
  void demo(Source<String> strs) {
    Source<Object> objects = strs; // !!! 编译不通过
  }
```

* **kotlin**  

* `声明处变型`

  1.通过注解**类型参数** `T` 的来源，来确保它仅从 `Source<T>` 成员中**返回**（生产），并从不被消费。 kotlin提供 **out** 修饰符：

  2.一般原则是：当一个类 `C` 的类型参数 `T` 被声明为 **out** 时，它就只能出现在 `C` 的成员的**输出位置**，结果是 `C<Base>` 可以安全地作为 `C<Derived>`的超类。

  3.`out` 修饰符被称之为**变型注解**，但由于**同处与类型参数声明处**，我们称之为`声明处变型`。*这与 Java 中的使用处变型相反。*

  ​

```kotlin
//声明处变型：out
  abstract class Source<out T> {
      abstract fun nextT(): T
  }
  fun demo(strs: Source<String>) {
      val objects: Source<Any> = strs
  }
```
4.in----out之外Kotlin 又补充了一个变型注释，它接受一个类型参数逆变
```kotlin
//声明处变型：in
  abstract class Comparable<in T> {

      abstract fun compareTo(other: T): Int
  }
  fun demo(x: Comparable<Number>) {
      x.compareTo(1.0) // 1.0 类型：Double, 属于Number的子类
      val y: Comparable<Double> = x 
  }
//消费者 in, 生产者 out! （in 和 out 的使用参照C#
```

* `使用处变型`

```kotlin
	//使用处变型：类型投影
1.声明类型参数 T 为 out 很方便，而且可以避免在使用出子类型的麻烦，但有些类 不能 限制它只返回 T
    class Array<T>(val size: Int) {
        fun get(index: Int): T { /* ... */ }
        fun set(index: Int, value: T) { /* ... */ }
    }
2.声明类型参数 T 为 out 很方便，而且可以避免在使用出子类型的麻烦，但有些类 不能 限制它只返回 T
    //该函数作用是复制 array 
    fun copy(from: Array<Any>, to: Array<Any>) {
        assert(from.size == to.size)
        for (i in from.indices)
            to[i] = from[i]
    }
3.遇到了同样的问题 Array<T> 中的T 是不可变型的，因此 Array<Int> 和 Array<Any> 互不为对方的子类，导致复制失败。
    val ints: Array<Int> = arrayOf(1, 2, 3)
    val any = Array<Any>(3) { "" } 
    copy(ints, any) // 抛异常：ClassCastException (Array<Any>, Array<Any>)
4.类型投影
    fun copy(from: Array<out Any>, to: Array<Any>) {
     // 这里的from不是一个简单的 array， 而是一个投影
     //只能调用那些返回类型参数 T 的方法，在这里意味着只能调用get()。类似 Java 中Array<? extends Object>
    }
5.用in做投影的写法
    fun fill(dest: Array<in String>, value: String) {
        // Array<in String> 对应 Java 中的 Array<? super String>
       //fill()函数可以接受任何CharSequence 类型或 Object类型的 array 。
    }
```

### 8.5.2 泛型函数

```kotlin
函数也可以像类一样有类型参数。类型参数在函数名之前：
fun <T> singletonList(item: T): List<T> {
    // ...
}

fun <T> T.basicToString() : String { 
  // extension function
}
```

### 8.5.3 上界(**upper bound**)

`最常用的类型约束是上界，在 Java 中对应 extends关键字：`

```kotlin
fun <T : Comparable<T>> sort(list: List<T>) {
    // 冒号后面指定的类型就是上界：只有 Comparable<T>的子类型才可以取代 T 比如：
}
```

---

## 8.6 代理

`代理模式`

```kotlin
1.代理模式 给实现继承提供了很好的代替方式， 所以并不需要什么样板代码
2.Derived 类可以继承 Base 接口并且指定一个对象代理它全部的公共方法：
  interface Base {
      fun print()
  }

  class BaseImpl(val x: Int) : Base {
      override fun print() { printz(x) }
  }

  class Derived(b: Base) : Base by b //关键字：by

  fun main() {
      val b = BaseImpl(10)
      Derived(b).print()
  }
3.在 Derived 的父类列表中的 by 从句会将 b 存储在 Derived 内部对象，并且编译器会生成 Base 的所有方法并转给 b。
```

`代理属性`

----

### 8.7 注解

```kotlin
1.注解声明：声明注解需要在类前面使用 annotation 关键字
	annotation class fancy
2.用法
  @fancy class Foo {
      @fancy fun baz(@fancy foo: Int): Int {
          return (@fancy 1)
      }
  }
2.1.在多数情形中 @ 标识是可选的。只有在注解表达式或本地声明中才必须：
  fancy class Foo {
      fancy fun baz(fancy foo: Int): Int {
          @fancy fun bar() { ... }
          return (@fancy 1)
      }
  }
2.2.如果要给构造函数注解，就需要在构造函数声明时添加 constructor 关键字，并且需要在前面添加注解：+
	class Foo @inject constructor (dependency: MyDependency)
2.3.也可以注解属性访问者：
	class Foo {
    var x: MyDependency?=null
        @inject set
	}
3.构造函数
	//注解可以有带参数的构造函数。
    annotation class special(val why: String)
    special("example") class Foo {}
4.Lambdas
  //注解也可以用在 Lambda 中。这将会应用到 lambda 生成的 invoke() 方法。这对 Quasar框架很有用，在这个框架中注解被用来并发控制
  annotation class Suspendable
  val f = @Suspendable { Fiber.sleep(10) }
5.java 注解在 kotlin 中是完全兼容的：
```

## 8.7 反射

```kotlin
1.最基本的反射特性就是得到运行时的类引用。要获取引用并使之成为静态类可以使用字面类语法：
	val c = MyClass::class
2.函数引用
	//当有一个像下面这样的函数声明时：
	fun isOdd(x: Int) =x % 2 !=0
	//可以通过 isOdd(5) 轻松调用，同样我们也可以把它作为一个值传递给其它函数，操作符：：
	val numbers = listOf(1, 2, 3)
	println(numbers.filter( ::isOdd) ) //prints [1, 3]
3.这里 ::isOdd 是是一个函数类型的值 (Int) -> Boolean

4.属性引用：访问顶级类的属性，也可以使用 :: 操作符
	var x = 1
    fun main(args: Array<String>) {
        println(::x.get())
        ::x.set(2)//::x 表达式评估为 KProperty<Int> 类型的属性
        println(x)
    }
5.访问一个类的属性成员
	  class A(val p: Int)
	  fun main(args: Array<String>) {
	      val prop = A::p
	      println(prop.get(A(1))) // prints "1"
	  }
6.与 java 反射调用
	  import kotlin.reflect.jvm.*
	
	  class A(val p: Int)
	  fun main(args: Array<String>) {
	      println(A::p.javaGetter) // 打印 "public final int A.getP()"
	      println(A::p.javaField)  // 打印 "private final int A.p"
	  }
7.构造函数引用
	  //构造函数可以像方法或属性那样引用。只需要使用 :: 操作符并加上类名。
	//下面的函数是一个没有参数并且返回类型是 Foo:
	  calss Foo
	  fun function(factory : () -> Foo) {
	      val x: Foo = factory()
	  }
	  //还可以像下面这样使用：
	  function(:: Foo)
```

**其他：略...**

---

## 8.8 动态类型`dynamic`

```kotlin
1.dynamic 类型关闭了 kotlin 的类型检查：
	val dyn: dynamic = ...
2.dynamic 最奇特的特性就是可以在 dynamic 变量上调用任何属性或任何方法
	dyn.whatever(1, "foo", dyn) 
	dyn.whatever(*array(1, 2, 3))
3.待续...
```



---

---



# 9 Demo

## 1.递归

    fun factorial(num: Int): BigInteger {
    if (num == 0) return BigInteger.valueOf(1L)
    return BigInteger.valueOf(num.toLong()).times(factorial(num - 1))
    }
    
    fun main(args: Array<String>) {
    println(factorial(50000))}
## 2.尾递归

```kotlin
//尾递归:实际上是把递归编译成了迭代
class Result(var value: BigInteger = BigInteger.valueOf(1))

tailrec fun factorialWei(num: Int, result: Result) {
    if (num == 0) {
        result.value = result.value.times(BigInteger.valueOf(1L))
    } else {
        result.value = result.value.times(BigInteger.valueOf(num.toLong()))
        factorialWei(num - 1, result)
    }
}

fun main(args: Array<String>) {
    val result = Result()
    factorialWei(50000,result)
    println(result.value)
}
```

## 3.单例

###  `1.线程安全，检查2次`

```kotlin
1.Java写法
class LazyDoubleCheckJava {
    /**
     * java-5之后新增的关键字volatile
     * 能够保证方法的调用有序进行
     * */
    private static volatile LazyDoubleCheckJava instance;
    private LazyDoubleCheckJava() {
    }
    public static LazyDoubleCheckJava getInstance() {
        if (instance == null) {
            synchronized (LazyDoubleCheckJava.class) {
                if (instance == null) {
                    //初始化时分为实例化，赋值2步，尽管我们把这一步写成下面的语句
                    //但java虚拟机并不保证其他线程【眼中】这两步的顺序究竟是怎么样的
                    //java5之后新增的关键字volatile
                    instance = new LazyDoubleCheckJava();
                }}}
        return instance;
    }}
2.kotlin写法
class LazyDoubleCheckKotlin private constructor() {
    companion object {
        val instance by lazy(mode = LazyThreadSafetyMode.SYNCHRONIZED) {
            LazyDoubleCheckKotlin()
        }
      -------------------------------------------------------------------------
        //另一种等价的写法
        private @Volatile var instance2: LazyDoubleCheckKotlin? = null
        fun getInstacne(): LazyDoubleCheckKotlin {
            if (instance2 == null) {
                synchronized(this) {
                    if (instance2 == null) {
                        instance2 = LazyDoubleCheckKotlin()
                    }}}
            return instance2!!
        }}}
```

### `2.静态内部类`

```kotlin
1.Java写法
class LazyStaticInnerJava {
    private LazyStaticInnerJava() {
    }
    private static class Holder {
        private static LazyStaticInnerJava instance = new LazyStaticInnerJava();
    }
    public static LazyStaticInnerJava getInstance() {
        return Holder.instance;
    }
}
2.kotlin写法
class LazyStaticInnerKotlin {
    companion object {
        fun getInstance() = Hoder.instance
    }
    private object Hoder {
        val instance = LazyStaticInnerKotlin()
    }
}
```

### `3.最常规写法`

```kotlin
1.Java写法
class PlainOldSingletonJava {
    private static PlainOldSingletonJava java;
    private PlainOldSingletonJava() {
    }
    public static PlainOldSingletonJava getInstance() {
        return java;
    }
}
2.kotlin写法
  object PlainOldSingletonKotlin {
}
```

### `4.懒加载-非线程安全`

```kotlin
1.Java写法
class LazyNoThreadSafeJava {
    private static LazyNoThreadSafeJava java;
    private LazyNoThreadSafeJava() {
    }
    public static LazyNoThreadSafeJava getInstance() {
        if (java == null) {
            java = new LazyNoThreadSafeJava();
        }
        return java;
    }
}
2.kotlin写法
class LazyNoThreadSafeKotlin {
    //使用kotlin封装方法
    companion object {
        val instance by lazy(LazyThreadSafetyMode.NONE) {
            LazyNoThreadSafeKotlin()
        }
    }
    //下面是另一种等价的写法，获取单例使用get方法
    private var instance2: LazyNoThreadSafeKotlin? = null
    fun getInstance(): LazyNoThreadSafeKotlin {
        if (instance2 == null) {
            instance2 = singleton.LazyNoThreadSafeKotlin()
        }
        return instance2!!
    }
}
```

### `5.懒加载-线程安全`

```kotlin
1.Java写法
class LazyThreadSafeJava {
    private static LazyThreadSafeJava java;
    private LazyThreadSafeJava() {
    }
    public static synchronized LazyThreadSafeJava getInstance() {
        if (java == null) {
            java = new LazyThreadSafeJava();
        }
        return java;
    }
}
2.kotlin写法
class LazyThreadSafeKotlin {
    //下面是另一种等价的写法，获取单例使用get方法
    private var instance2: LazyThreadSafeKotlin? = null

    @Synchronized
    fun getInstance(): LazyThreadSafeKotlin {
        if (instance2 == null) {
            instance2 = singleton.LazyThreadSafeKotlin()
        }
        return instance2!!
    }
}
```

