- 1.display：设置对象是否显示。
- 2.float：指出对象是否及如何浮动。
- 3.clear：指出了不允许有浮动对象的边。
- 4.visibility：是否隐藏，与display隐藏不同，visibility隐藏的时候保留元素占据的位置。
- 5.overflow：设置对象处理溢出内容的方式。
- 6.overflow-x：设置在横向溢出内容的方式。
- 7.overflow-y：设置在纵向溢出内容的方式。

#### 1.display取值

```
1.block：指定对象为块元素。
2.flex：将对象作为弹性伸缩盒显示。（小程序推荐使用伸缩盒子）
3.inline：指定对象为内联元素。
4.inline-block：指定对象为内联块元素。
5.inline-flex：将对象作为内联块级弹性伸缩盒显示。
6.inline-table：指定对象作为内联元素级的表格。
7.list-item：指定对象为列表项目。
8.none：隐藏对象。不占物理位置。
9.table：指定对象最为块元素级的表格。
```
#### 2.float(取值：left，right，none，inherit。)
> 定义了元素在那个方向浮动，浮动元素会生成一个块级框，而不论它本身是何种元素。
>`float 在绝对定位中不起作用。大多数企业网站布局都是以float来定位。`

#### 3.clear：该属性指出不允许有浮动对象的边。（取值：left，right，both，none.）
> none:允许两边可以浮动。 
> left：不允许左边有浮动对象。 
> right：不允许右边有浮动对像。
> both：两边都不允许浮动。

#### 4.visibility：是否显示对象(取值：visible，hidden，collapse。)

- visible：设置可见。
- hidden：设置隐藏（隐藏了也占位置）。
- collapse：隐藏表格的行或者列。

#### 5.overflow：处理溢出内容的方式。(取值：visible，hidden，scroll，auto。)
-  visible：对溢出内容不做处理，内容可能会超出容器。
-  hidden：隐藏溢出容器的内容且不会出现滚动条。
-  scroll：隐藏溢出容器的内容，溢出的内容将以卷动滚动条的方式呈现。
-  auto：当内容没有溢出容器的时候不出现滚动条，当内容溢出容器的时候出现滚动条。按需出现。

> overflow-x：横向处理溢出内容的方式(取值：visible，hidden，scroll，auto。)
>overflow-y：纵向处理溢出内容的方式(取值：visible，hidden，scroll，auto。)
