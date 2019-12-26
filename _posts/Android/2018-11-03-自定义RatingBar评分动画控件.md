# KRatingBar
先说说，这个控件存在的意义（和原生RatingBar相比）：

* 1.自动排列：指定星星数量后，星星自动均等排列
 * 2.星星点击动画：算是满足一丢丢少女心吧
 * 3.星星数量脱离了RatingBar宽度的控制
 * 4.避免星星出现拖影和“流泪”现象![在这里插入图片描述](http://upload-images.jianshu.io/upload_images/4279409-ed51915b1d6180fb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
 * 5.星星的样式直接调用res的drawable，不用再单独去定义个layer-list
 ---
[Github](https://github.com/KosmoSakura/KRatingBar)、[码云](https://gitee.com/KosmoSakura/KRatingBar)

---
总之就是使用更方便一点吧。请看效果：

![在这里插入图片描述](http://upload-images.jianshu.io/upload_images/4279409-f9b04241a0893e97.gif?imageMogr2/auto-orient/strip)

---

> 为啥要写这个控件呢？我就略过了，因为无关信息只会干扰你阅读。下面说说这个控件的使用

## 1.参数

我添加了这几个参数，分别是：

- star_width、star_height:星星宽高
- starMax、rating：星星的总数和点亮的数量
- starEmpty、starFill：星星两种状态的图标

```xml
 <declare-styleable name="KRatingBar">
        <attr name="star_width" format="dimension"/>
        <attr name="star_height" format="dimension"/>
        <attr name="starMax" format="integer"/>
        <attr name="rating" format="integer"/>
        <attr name="starEmpty" format="reference"/>
        <attr name="starFill" format="reference"/>
 </declare-styleable>
```

## 2.布局

这个没什么说的，布局写完基本就可以使用了。逻辑都在控件内做了处理。

```xml
  <cos.mos.bar.KRatingBar
        android:id="@+id/rating_bar"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginLeft="20dp"
        android:layout_marginRight="20dp"
        kosmos:starEmpty="@drawable/ic_stars_off"
        kosmos:starFill="@drawable/ic_stars"
        kosmos:starMax="5"
        kosmos:star_height="32dp"
        kosmos:star_width="32dp"/>
```

## 3.代码控制

当然，也可以在代码中对KRatingBar动态的控制

```java
bar.setStarEmpty(R.drawable.ic_stars_off)
    .setStarFill(R.drawable.ic_stars)
    .setStarMax(5)
    .setRating(3)
    .setRatingChangeListener(new KRatingBar.RatingChangeListener() {
        @Override
        public void onRatingChange(int rating) {
            Toast.show( "感谢您的" + rating + "个星星");
        }
    }).runAnim();
```

## 4.效果

#### 4.1：显示动画：

![在这里插入图片描述](http://upload-images.jianshu.io/upload_images/4279409-eb477f445f4ecacb.gif?imageMogr2/auto-orient/strip)

#### 4.2：点击动画

![在这里插入图片描述](http://upload-images.jianshu.io/upload_images/4279409-5b57f7c4fc586c02.gif?imageMogr2/auto-orient/strip)

#### 4.3：代码控制的效果

![在这里插入图片描述](http://upload-images.jianshu.io/upload_images/4279409-e1a7f3386c57a1b1.gif?imageMogr2/auto-orient/strip)
