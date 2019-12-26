> 虚拟内存，在本地装linux系统的时候，我们一般会提前划分出单独的swap分区。
> 但是通常，云服务器在你重装系统的时候并没有给你分虚拟内存。
> 而且云服务器的物理内存又死贵。没有虚拟内存可以说几乎不能活。
> 我前几天就遇到了这个问题，下面是我通过命令安装虚拟内存的方法


## 1.先看看系统中的虚拟内存情况
```
> 用命令free查看系统内 Swap 分区大小。
> ~$ free -m
```
![查看系统内 Swap 分区大小](https://upload-images.jianshu.io/upload_images/4279409-02b5143298725bea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

上图，我的虚拟内存为1999M。如果没有安装虚拟内存，则显示的0。如图：
 ![查看系统内 Swap 分区大小](https://upload-images.jianshu.io/upload_images/4279409-c20a4a379d592b03.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

 
##  2.创建Swap 虚拟内存目录
```
> mkdir swap
> 进入该目录执行下面的命令
> sudo dd if=/dev/zero of=swapfile bs=1024 count=2048000
> 该命令中 count 即代表swap文件大小，我这里设置的是2Gb，你可以换成自己想设置的大小
```

 ![创建Swap ](https://upload-images.jianshu.io/upload_images/4279409-167061389a789a7c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
> 出现以上提示，则说明创建成果。大意为：
> 2018000+0 in 的读入
> 2018000+0 out 的读入
> 2097152000字节（2Gb）内容已复制，耗时16.1049喵，速度为130Mb/s
```

 
## 3.把生成的文件转换成虚拟内存
```
> sudo mkswap swapfile
```

 ![转换虚拟内存](https://upload-images.jianshu.io/upload_images/4279409-42fb545d732b0719.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## 4.激活虚拟内存
```
> sudo swapon swapfile
```
 

## 5.再次查看 
 ![查看系统内 Swap 分区大小](https://upload-images.jianshu.io/upload_images/4279409-3062633143e1d2de.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 >至此，虚拟内存已经生效，但是这个虚拟内存只针对本次启动，重启之后虚拟内存任然会失效。
 >不过内存文件还在，你只需手动挂载即可。
 >如果你不想每次重启后都手动挂载虚拟内存，我们继续...

## 6.内存永久化
如果希望这个虚拟内存（swap）一直生效，我们可以把它添加到启动配置里面。

- 1.拿到root权限：sudo -i
- 2.把它写入 /etc/fstab 配置文件

这里，我通过的vi编辑器来完成的
![vi编辑器](https://upload-images.jianshu.io/upload_images/4279409-659914500497ee4c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如图，把下面的命令添加最后面，保存退出即可：
```
> swapfilepath swap swap defaults 0 0
```

#### 6.2这里简单说下vi编辑器的用法
```
1--->  sudo vi /etc/fstab
2--->  输入i，进入Insert模式
3--->  /swap/swapfile swap swap defaults 0 0
4--->  按Esc回到命令模式
5--->  输入：进入底行模时
5--->  :wq  保存文件并退出vi 
```
> okk，现在，虚拟内存就会在每次系统重启后自动挂载了
 ## 7.卸载
 如果你不想用了，把虚拟内存抹掉的方法如下：
 ```
 1.cd进入你虚拟内存的生成目录
 2.sudo swapoff swapfile
 ```
