> Calendar类中默认第一天为周日
>以下是我获取某个星期所在周的天数

```java
public static int getDayOfWeek(Date date) {
    Calendar calendar = Calendar.getInstance();
    calendar.setTime(date);
    int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK) - 1;
    if (dayOfWeek == 0) {
        dayOfWeek = 7;
    }
    return dayOfWeek;
}
```
### 踩坑记录：关于setFirstDayOfWeek`失效`的3个误区
> 导致这玩意失效的主要原因如下：
#### 1.Calendar类中的常量
- `Calendar`中的星期一、二、三、四、五、六、日、`DAY_OF_WEEK`等都是以一个常量的形式存在的。
- `setFirstDayOfWeek（）`并不能改变这些常量的值，因此`get(Calendar.DAY_OF_WEEK)`的值不变。
#### 2.那是否这玩意没用
- 当然不是
- 这玩意一直都是有效的。它作用于`Calendar`类中所有的 非常量。比如所：`getFirstDayOfWeek()`等。
#### 3.它真正"失效"的可能之一
> 那就是因为在错误的地方用对了人（233）。
> 比如：
> 在设置时间之后 `calendar.setTime(date)`才`setFirstDayOfWeek()`
> 

