> 在`Android`开发中主要有2种字符串的格式化
## 1.先贴代码
##### 1.String类:`String.format()`
这货有2种重载形式：
- format(String format, Object... args)
- - 新字符串使用本地语言环境，制定字符串格式和参数生成格式化的新字符串。
- format(Locale locale, String format, Object... args)
- - 使用指定的语言环境，制定字符串格式和参数生成格式化的字符串。
```java
String str="Duang%dDuang";
String result= String.format(str, 5);
```
##### 2.资源文件`string.xml`
`formatted="false"`这个是告诉编译器不要随便格式化我的字符串
```java
<string name="duang" formatted="false">人数：%1$d 人</string>
String result=getString(R.string.duang, 5)
```
其实这个底层也是一样：

```java
@NonNull
public String getString(@StringRes int id, Object... formatArgs) throws NotFoundException {
    final String raw = getString(id);
    return String.format(mResourcesImpl.getConfiguration()
    		.getLocales().get(0), raw,formatArgs);
}
```
---
## 2.规则
#####  `%n$ms` 、`%n$md` 、`%n$mf`
> 其中：
> - n代表是第几个参数
> - m代表空格
> - s：字符串，d：整数，f：浮点数
n代表是第几个参数，设置m的值可以在输出之前放置空格
#### 转换符明

说    明  | 示    例
-|-
%s 字符串类型 |"mingrisoft"
%c 字符类型 | 'm'
%b 布尔类型 | true
%d 整数类型（十进制）|99
%x 整数类型（十六进制）|FF
%o 整数类型（八进制）|77
%f 浮点类型|99.99
%a 十六进制浮点类型|FF.35AE
%e 指数类型|9.38e+5
%g 通用浮点类型（f和e类型中较短的）|
%h 散列码|
%% 百分比类型|%
%n 换行符|
%tx 日期与时间类型（x代表不同的日期与时间转换符|

#### 搭配转换符的标志

标    志 | 说    明 | 示    例 | 结    果
---|------|---|---
+ | 为正数或者负数添加符号 |` ("%+d",15)`|+15
−|左对齐|(`"%-5d",15)`|--表格不方便展示--  
0|数字前面补0|`("%04d", 99)`|0099
空格|在整数之前添加指定数量的空格|`("% 4d", 99)`|  --表格不方便展示--
,|以“,”对数字分组|`("%,f", 9999.99)`|9,999.990000
(|使用括号包含负数|`("%(f", -99.99)`|(99.990000)
#|如果是浮点数则包含小数点，如果是16进制或8进制则添加0x或0|`("%#x", 99)和("%#o", 99)`|0x63 和0143
< |格式化前一个转换符所描述的参数|`("%f和%<3.2f", 99.45)`|99.450000和99.45
$|被格式化的参数索引|`("%1$d,%2$s", 99,"abc")`|99,abc
