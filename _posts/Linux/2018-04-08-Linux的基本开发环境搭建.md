## 0.安装命令小技巧
```
1、DEB软件安装 安装命令
sudo dpkg -i xxx.deb

2、安装过程中可能会报缺少依赖的错，执行下面命令自动安装依赖
sudo apt-get install -f

3、再次执行安装命令
sudo dpkg -i xxx.deb

4、卸载不再依赖的包命令
sudo apt-get autoremove
```
## 1.Java环境安装
```
sudo add-apt-repository ppa:webupd8team/java    
sudo apt-get update    
sudo apt-get install oracle-java8-installer
```
有的系统自带jdk，会导致运行`java -version`的时候查看版本号的时候提示
```
Picked up JAVA_TOOL_OPTIONS: -javaagent:/usr/share/java/jayatanaag.jar
```
这时需要手动删除旧的配置文件：`/usr/share/upstart/sessions/jayatana.conf`
```
sudo rm /usr/share/upstart/sessions/jayatana.conf
```
重启
## 2.Node.js环境安装
Node.js 被包含在 Ubuntu（13.04 及更高版本）。因此，安装非常简单。以下方式将安装 Node.js 和 npm。
```
$ sudo apt-get install npm
$ sudo ln-s /usr/bin/nodejs /usr/bin/node
```
而 Ubuntu 中的 Node.js 可能版本比较老，可以从 其 PPA 中安装最新的版本。
```
$ sudo apt-get install python-software-properties python g++make
$ sudo add-apt-repository -y ppa:chris-lea/node.js
$ sudo apt-get update
$ sudo apt-get install npm
```
检查 Node.js 的版本 一旦你已经安装了 Node.js，你可以使用如下所示的方法检查 Node.js 的版本。
```
$ node --version
```
## 3.python2.7环境安装
##### 3.0.介绍3种安装方式
参考：[64位的ubuntu14.10系统下安装python2.7.9](https://blog.csdn.net/cryhelyxx/article/details/42343041)
- 1.通过ubuntu官方的apt工具包安装
- 2.通过PPA(Personal Package Archive)　的apt工具包安装
- 3.通过编译python源代码安装
##### 3.1.通过ubuntu官方的apt工具包安装
```
sudo apt-get install python2.7  
sudo apt-get install python3.4
```
确认命令
```
~$ python2.7 --version  
Python 2.7.8  
~$ python3.4 --version  
Python 3.4.2  
```
##### 3.2.从PPA 安装apt工具包
```
$ sudo apt-get install python-software-properties  
$ sudo add-apt-repository ppa:fkrull/deadsnakes  
$ sudo apt-get update  
$ sudo apt-get install python2.7
```
##### 3.3.从源代码编译安装python
源码安装的优点是，上面2个方法不一定能够安装到最新的版本。
```
$ wget -c https://www.python.org/ftp/python/2.7.9/Python-2.7.9.tgz  
$ tar -xzvf Python-2.7.9.tgz  
$ cd Python-2.7.9/  
$ LDFLAGS="-L/usr/lib/x86_64-linux-gnu" ./configure  
$ make  
$ sudo make install
```
确认命令
```
~$ python --version  
Python 2.7.9  
~$ which python  
/usr/local/bin/python  
```
