- [自定义`SeekBar`](https://blog.csdn.net/zull_kos_mos/article/details/82933169)
- **Android利用 canvas和Shader阴影绘制**
- **源码下载：[Github](https://github.com/KosmoSakura/BubbleSeekBar) ，[码云](https://gitee.com/KosmoSakura/KBubbleSeekBar)**
- **Github太慢，所以只在码云上持续更新**
---
效果图：
![在这里插入图片描述](http://upload-images.jianshu.io/upload_images/4279409-5c5834fee9e8b868?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 1.关于Thumb的阴影效果的关键的代码

```java
mPaint.setColor(mThumbColor);
if (isThumbOnDragging) {
    //绘制拖动中的Thumb
    //绘制拖动中的阴影：阴影半径，阴影x坐标偏移，阴影y坐标偏移，阴影颜色
    mPaint.setShadowLayer(5f, 0, 3, Color.GRAY);
    canvas.drawCircle(mThumbCenterX, yTop, mThumbRadiusOnDragging, mPaint);
} else {
     //绘制静止状态Thumb
     //绘制静止状态阴影：阴影半径，阴影x坐标偏移，阴影y坐标偏移，阴影颜色
     mPaint.setShadowLayer(5f, 0, 1, Color.GRAY);
     canvas.drawCircle(mThumbCenterX, yTop, mThumbRadius, mPaint);
}
mPaint.setShadowLayer(0, 0, 0, Color.GRAY);//关闭阴影
```
> 我尝试过用，paint.setShader(mShader);的方式，但已经过时，谷狗不推荐

####  2.setShadowLayer的注意事项
> 1.用完之后记得关掉阴影效果，因为这是作为一个参数，传入Paint里面，最简单的做法就是直接把`阴影半径`设为0，即可

####  3.这里我踩了一个坑，记录下，以免再犯
> 开始我一切写好后，却一直没有阴影效果，折腾了好久，才发现是`硬件加速`的问题。
> `setShadowLayer`只有`文字绘制`才支持硬件加速，其他都不支持
> 因此，要为此控件单独关闭硬件加速：`setLayerType(LAYER_TYPE_SOFTWARE, null)`;

```java
 @Override
protected void onDraw(Canvas canvas) {
  super.onDraw(canvas);
  //对单独的View在运行时阶段禁用硬件加速
  setLayerType(LAYER_TYPE_SOFTWARE, null); 
  //...........其他省略..............
}
```

