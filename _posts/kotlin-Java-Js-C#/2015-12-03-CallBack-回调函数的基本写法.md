> 比如说这是一个用于监听Duang的监听器，
			当Duang时，会回调Duang的duang方法
#### 1：先写一个接口
里面包含duang改变的抽象方法 


```
    public interface OnDuangDuangListener{
    	void duang(int duang);
    }
```
#### 2.	创建一个该接口的成员对象
（因为该对象可能会在这个类的不同方法内部调用，所以创建成员的）

```
    private OnDuangDuangListener listener;
```

#### 3.	对外提供一个public方法
> 因为此时，listener还是一个空对象，对外提供一个public方法，对该对象进行赋值

```
    public void setOnDuangListener(OnDuangDuangListener listener){
    	this.listener = listener;
    }
```
#### 4.举个栗子
> **监听触摸事件（onTouchEvent）的回调**
> - 1.会先判断`OnDuangDuangListener`对象是否为空，
> - 2.不为空时，调用listener对象的duang方法
> - 3.在duang方法内部传入想要duang的参数
				
	
```
    @Override
	public boolean onTouchEvent(MotionEvent event) {
		if(listener != null){
			//回调
			listener.duang(...);
		}
		return true;
	}
```
> 于是：在其他地放调用该监听器
 
```
    .setOnDuangListener(new OnDuangDuangListener() {
        @Override
        public void duang(int duang) {
            //好的，这样我就拿到了duang
        }
    });
```
