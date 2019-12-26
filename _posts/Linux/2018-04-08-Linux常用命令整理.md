## 0.链接服务器

```
ssh -l name 113.112.23.124
比如：ssh -l root 118.126.117.107
输入密码
```


## 1.获取root权限
```
sudo -i
sudo nautilus ###用root权限打开资源管理器

gnome-system-monitor ###资源管理器

```
## 3.添加快速启动（别名启动）
```
sudo gedit ~/.bashrc

打开文件.bashrc，在最后添加：
#android studio alias config
alias as=/opt/ide/android-studio/bin/studio.sh
保存并使配置生效
在终端输入:as    
即可打开Android studio
```

## 4.关机

```
1. shutdown now    ### 立刻关机
2. # poweroff  ### 马上关机 
3. # reboot    ### '$' 和 '#' 的区别在于 '$' 普通用户即可执行
               ### 而 '#' 为 root 用户才可执行，或普通用户使用 'sudo'
               
4. shutdown -r now  ###马上重启
```
## 5.Tab 补全

- 未输入状态下连按两次 Tab 列出所有可用命令
- 已输入部分命令名或文件名，按 Tab 进行自动补全，多用你就肯定会喜欢的了。

## 6.路径

```
$ cd path      ### path 为你要打开的路径。
$ cd ..      ### 返回上级目录
```

## 7.文件

###### 1.创建：
```
$ mkdir xxx   ###创建文件夹
$ mkdir -p xxx/yyy    ### -p 参数为当父目录存在时忽略，若不存在则建立，用此参数可建立多级文件夹
```
###### 2.删除：

```
$ rm filename      ### 删除 filename
$ rm -i filename   ### 删除 filename 前提示，若多个文件则每次提示
$ rm -rf folder/subfolder/  ### 递归删除 subfolder 下所有文件及文件夹，包括 subfolder 自身
$ rm -d folder     ###  删除空文件夹
```

###### 3.复制：

```
$ cp source dest            ### 将 source 复制到 dest
$ cp folder/*  dest         ### 将 folder 下所有文件(不含子文件夹中的文件)复制到 dest
$ cp -r folder  dest        ### 将 folder 下所有文件（包含子文件夹中的所有文件）复制到 dest
```

###### 4.移动：

```
$ mv source  folder        ### 将 source 移动到 folder 下，完成后则为  folder/source
$ mv -i source folder      ### 在移动时，若文件已存在则提示 **是否覆盖** 
$ mv source dest           ### 在 dest 不为目录的前提下，重命名 source 为 dest
```
###### 4.1.重命名

```
mv abc.txt 1234.txt //将一个名为abc.txt的文件重命名为1234.txt
```

###### 5.压缩

tar 主要用于创建归档文件，和解压归档文件，其本身是没有压缩功能的，但可以调用 gzip 、 bzip2 进行压缩处理。

###### 5.1.参数解释：
- -c 创建归档
- -x 解压归档
- -v 显示处理过程
- -f 目标文件，其后必须紧跟 目标文件
- -j 调用 bzip2 进行解压缩
- -z 调用 gzip 进行解压缩
- -t 列出归档中的文件

```
$ tar -cvf filename.tar .       ### 将当前目录所有文件归档，但不压缩，注意后面有个 ’.‘ ，不可省略，代表当前目录的意思 
$ tar -xvf filename.tar         ### 解压 filename.tar 到当前文件夹
$ tar -cvjf filename.tar.bz2 .  ### 使用 bzip2 压缩
$ tar -xvjf  filename.tar.bz2   ### 解压 filename.tar.bz2 到当前文件夹
$ tar -cvzf filename.tar.gz     ### 使用 gzip  压缩
$ tar -xvzf filename.tar.gz     ### 解压 filename.tar.gz 到当前文件夹
$ tar -tf   filename            ### 只查看 filename 归档中的文件，不解压
```
## 5.网络
ping 主要用于测试网络连通，通过对目标机器发送数据包来测试两台主机是否连通，及延时情况。


```
$ ping locez.com    ### 通过域名 ping，若 DNS 未设置好，可能无法 ping 通
$ ping linux.cn
PING linux.cn (211.157.2.94) 56(84) bytes of data.
64 bytes from 211.157.2.94.static.in-addr.arpa (211.157.2.94): icmp_seq=1 ttl=53 time=41.5 ms
64 bytes from 211.157.2.94.static.in-addr.arpa (211.157.2.94): icmp_seq=2 ttl=53 time=40.4 ms
64 bytes from 211.157.2.94.static.in-addr.arpa (211.157.2.94): icmp_seq=3 ttl=53 time=41.9 ms
^C
--- linux.cn ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2002ms
rtt min/avg/max/mdev = 40.406/41.287/41.931/0.644 ms

$ ping 211.157.2.94   ### 通过 IP 地址 ping ，若无法 ping 通可能是网络连接出现问题
```
