- **自定义`SeekBar`，**
- **进度变化由可视化气泡样式呈现，定制化程度较高**  
- **实现带刻度的进度条实现颜色渐变效果**
- **源码下载：[Github](https://github.com/KosmoSakura/BubbleSeekBar) ，[码云](https://gitee.com/KosmoSakura/KBubbleSeekBar)**
- **Github太慢，所以只在码云上持续更新**
## 整体效果如下：
![在这里插入图片描述](http://upload-images.jianshu.io/upload_images/4279409-045d85fd762b30be?imageMogr2/auto-orient/strip)
---

基于[woxingxiao的BubbleSeekBar](https://github.com/woxingxiao/BubbleSeekBar)修改

---

### 主要代码
#### 1.attr中新增属性：

```xml
<!--渐变色号，用_分割-->
<attr name="bsb_colors" format="string"/>
<!--是否显示刻度，默认：true-->
<attr name="bsb_marks" format="boolean"/>
```

#### 2.布局示例

```xml
<cos.mos.sb.widget.KBubbleSeekBar
        android:id="@+id/sb2"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="24dp"
        kosmos:bsb_bubble_text_color="#24d1b4"
        kosmos:bsb_colors="#ffffffff_#ff24d1b4_#ff000000"
        kosmos:bsb_marks="false"
        kosmos:bsb_max="100"
        kosmos:bsb_min="0"
        kosmos:bsb_progress="20"
        kosmos:bsb_second_track_color="#15398e"
        kosmos:bsb_section_count="5"
        kosmos:bsb_section_text_position="below_section_mark"
        kosmos:bsb_show_progress_in_float="true"
        kosmos:bsb_show_section_mark="false"
        kosmos:bsb_show_section_text="true"
        kosmos:bsb_show_thumb_text="true"
        kosmos:bsb_thumb_color="#ffffff"
        kosmos:bsb_thumb_text_color="#cabf18"
        kosmos:bsb_touch_to_seek="true"
        kosmos:bsb_track_color="#d1cccc"
        kosmos:bsb_track_size="14dp"/>
```

#### 3.KBubbleSeekBar 关键代码

```java
public void sweepGradientInit() {
        //渐变颜色.colors和pos的个数一定要相等
        float[] pos = {0f, 0.5f, 1.0f};
        linearGradient = new LinearGradient(0, 0, lySpace / 2, lySpace / 2, colors, pos, Shader.TileMode.REPEAT);
        Matrix matrix = new Matrix();
        linearGradient.setLocalMatrix(matrix);
}
```

##### 说明：

- 控件的绘制顺序为：`onMeasure`-->`onLayout`-->`onDraw`

- 这里用到`android` `api`提供的线性渐变工具：`LinearGradient`

- - 这里，LinearGradient的构造函数内传入的几个参数
  - `(x0,y0)`: 起始渐变点坐标
  - `(x1,y1)`: 结束渐变点坐标
  - `colors[]`: 用于指定渐变的颜色值数组 
  - `positions[]`: 与渐变的颜色相对应，取值是0-1的float类型
  - `TileMode tile`：指定控件区域大于指定的渐变区域时，空白区域颜色填充方法

##### 关于渐变色的注意事项：
![在这里插入图片描述](http://upload-images.jianshu.io/upload_images/4279409-89c73f885c93b4ef?imageMogr2/auto-orient/strip)
- 1.`colors[]`与`positions[]`的长度要一一对应
- 2.`bsb_colors="#ffffffff_#ff24d1b4_#ff000000"`内的色值必须带alpha通道
