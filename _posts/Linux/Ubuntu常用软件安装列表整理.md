
#### 0.安装Vim
```
sudo apt-get install vim  
```
#### 1.安装Sublime Text 3

```
sudo add-apt-repository ppa:webupd8team/sublime-text-3    
sudo apt-get update    
sudo apt-get install sublime-text   
```

#### 2.安装Chrome
```
$ wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
$ sudo apt-get install libappindicator1 libindicator7
$ sudo dpkg -i google-chrome-stable_current_amd64.deb 
$ sudo apt-get -f install
```
#### 3.安装搜狗输入法
```
$ echo deb http://archive.ubuntukylin.com:10006/ubuntukylin trusty main | sudo tee /etc/apt/sources.list.d/ubuntukylin.list
$ sudo apt-get update   
$ sudo apt-get install sogoupinyin
```
注  :  如果提示没有公钥,无法验证下列数字签名 xxx

```
$ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-　keys xxxx
$ sudo apt-get update
```


　如果重启后只有搜狗输入法,则在命令行使用fcitx-configtool命令,添加系统输入法
#### 4.安装WPS Office

```
 $ sudo apt-get install wps-office
```

#### 5.安装git和vpnc
```
$ sudo apt-get install git vpnc
```
#### 6.安装openssh-server
```
$ sudo apt-get install openssh-server
```

#### 7. 安装解压unrar
系统默认不带解压缩rar文件的功能，手动安装unrar程序
```
 $ sudo apt-get install unrar
 
 命令解压缩:unrar x test.rar  
```
#### 8.安装经典菜单指示器
```
sudo add-apt-repository ppa:diesch/testing  
sudo apt-get update  
sudo apt-get install classicmenu-indicator  
```

#### 9.安装系统指示器SysPeek
```
sudo add-apt-repository ppa:nilarimogard/webupd8    
sudo apt-get update    
sudo apt-get install syspeek    
```

#### 10.安装axel
axel是Linux命令行界面的多线程下载工具，比wget的好处就是可以指定多个线程同时在命令行终端里下载文件。
安装之后，就可以代替wget用多线程下载了。
```
sudo apt-get install axel  
```

#### 11.ExFat文件系统驱动
Ubuntu默认不支持exFat文件系统的挂载，需要手动安装exfat的支持<br/>
装上exfat-fuse之后就可以挂载exfat分区的磁盘了。
```
sudo apt-get install exfat-fuse  
```

#### 19.安装lnav
lnav工具是在终端界面看日志的神器，
装上之后在终端里就可以用lnav彩色显示日志了。
```
sudo apt-get install lnav  
```

#### 20.网易云音乐
登陆官网下载Linux版本中的Ubuntu 16.04 64bit的deb包

```
http://music.163.com/#/download
```
然后输入命令安装

```
sudo apt-get install -f
sudo dpkj -i netease-cloud-music_1.0.0_i386_ubuntu14.04.deb
```

#### 21.VLC视频播放器
```
sudo apt-get install vlc
```

#### 22.wiznote(为知笔记)

```
sudo add-apt-repository ppa:wiznote-team 
sudo apt-get update 
sudo apt-get install wiznote
```

#### 23.shutter（截图

```
sudo apt-get install shutter

设置快捷键： 
打开系统设置 -> 键盘 -> 快捷键 -> 自定义快捷键 -> 点击" + " 
名字随便起，命令：shutter -s 
点击确定，再点禁用，键盘按下ctrl+alt+a，完成设置
```
#### 24.BleachBit（系统清理软件

```
sudo add-apt-repository ppa:n-muench/programs-ppa
sudo apt-get update 
sudo apt-get install bleachbit 
```

#### 25.一个没什么用的东东

```
sudo apt-get install cmatrix
cmatrix -b
```
![image](http://upload-images.jianshu.io/upload_images/4279409-d8ad35e002384f60..png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
