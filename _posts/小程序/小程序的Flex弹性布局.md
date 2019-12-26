参考：
 [微信小程序页面布局](https://blog.csdn.net/yongshuai185/article/details/54572466)
 [微信小程序开发详解（九）---微信小程序布局基础](https://blog.csdn.net/aoaoxiexie/article/details/53991432)

---

---

## 1.Flex布局的特点
- 1.任意方向的伸缩，向左，向右，向下，向上
- 2.在样式层可以调换和重排顺序
- 3.主轴和侧轴方便配置
- 4.子元素的空间拉伸和填充
- 5.沿着容器对齐

## 2.Flex布局的两个基本属性
**1.Flex容器属性**
>**flex-flow**：是flex-direction和flex-warp的简写

- 1.flex-direction：元素排列方向
- 2.flex-warp：元素如何换行（排列不下时）
nowrap(不换行),wrap(换行),wrap-reverse(换行第一行在下面)
- 3.justify-conent：元素在主轴上对齐方式
- 4.align-items：元素在侧轴的对齐方式

**2.内部元素属性**
>**flex**:是flex-grow、flex-shrink、flex-basis的简写

- 1.flex-grow：元素放大比率（有多余空间）
- 2.flex-shrink：元素缩小比率（空间不足）
- 3.flex-basis：元素在主轴上占据的空间
- 4.order：元素排列顺序
- 5.align-self：元素自身的对齐方式

## 2.常识：
> 伸缩容器（flex container）
>设有display:flex或者display:block的元素就是一个**伸缩容器**，
>伸缩项目（flex item）
>里面的子元素称为**伸缩项目**，伸缩容器中子元素都是使用Flex布局排版。


**1.display:block**
指定为`块内容器模式`，总是使用**新行开始显示**，
微信小程序的视图容器(view,scroll-view和swiper)默认都是dispaly:block。

**2.display:flex**
指定为`行内容器模式`，在**一行内显示子元素**，
可以使用flex-wrap属性指定其是否换行，
flex-wrap有三个值:nowrap(不换行),wrap(换行),wrap-reverse(换行第一行在下面)

## 3.主轴和侧轴
![引用一下来自《微信小程序页面布局》里面的一张图](http://upload-images.jianshu.io/upload_images/4279409-32dfada72811d79a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**1.Flex-direction**
> 控制主轴和侧轴的方向:如果水平方向为主轴，那个垂直方向就是侧轴

- 1.row :左-->右 为主轴
- 2.row-reverse：右-->左 为主轴 
- 3.column:上-->下 为主轴
- 4.column-reverse:下-->上 为主轴

**2.对齐方式**
`justify-conent`: 子元素在主轴上面的对齐方式

- 1.flex-start： 起点对齐(默认值)
- 2.flex-end： 结束点对齐
- 3.center： 居中对齐
- 4.space-between： 两端对齐，除了两端的子元素分别靠向两端的容器之外，其他子元素之间的间隔都相等
- 5.space-around： 子元素之距离相等，两端的子元素距离容器的距离也和其它子元素之间的距离相同。


`align-items`: 子元素在侧轴上对齐的方式

- 1.stretch： 填充整个容器(默认值)
- 2.flex-start： 起点对齐
- 3.flex-end： 终点对齐
- 4.center： 中居中对齐
- 5.baseline： 以子元素的第一行文字对齐
