```
{
  "pages": [
    "pages/index/index",
    "pages/logs/logs"
  ],
  //用于设置小程序的状态栏、导航条、标题、窗口背景色。
  "window": {
    "navigationBarTitleText": "荧光猫",//导航栏标题文字内容
    "navigationBarBackgroundColor": "#848484",//导航栏背景颜色，如"#000000"
    "navigationBarTextStyle": "black",//导航栏标题颜色，仅支持 black/white
    "backgroundTextStyle": "light",//下拉背景字体、loading 图的样式，仅支持 dark/light
    "navigationStyle":"default",//导航栏样式，仅支持 default/custom。custom 模式可自定义导航栏，只保留右上角胶囊状的按钮
    "backgroundColor": "#ffffff",//窗口的背景色
    "enablePullDownRefresh": true,//是否开启下拉刷新，详见页面相关事件处理函数
    "onReachBottomDistance": 50//页面上拉触底事件触发时距页面底部距离，单位为px
  },
  
  
//Tip：页卡
//当设置 position 为 top 时，将不会显示 icon
//tabBar 中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。
  "tabBar": {
    "color": "#ffffff",//tab 上的文字默认颜色
    "selectedColor": "#EE8E13",//tab 上的文字选中时的颜色
    "backgroundColor": "#848484",//tab 的背景色
    "position": "bottom",//可选值 bottom、top
    "borderStyle": "white",//tabbar上边框的颜色， 仅支持 black/white
    "list": [//最少2个、最多5个 tab
      {
        "pagePath": "pages/index/index",//页面路径，必须在 pages 中先定义
        "iconPath": "pages/image/dz.png",//tab 上按钮文字
        //图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片
        "selectedIconPath": "pages/image/lw.png",//同上
        "text": "首页"
      },
      {
        "pagePath": "pages/logs/logs",
        "iconPath": "pages/image/dz.png",
        "selectedIconPath": "pages/image/lw.png",
        "text": "日志"
      }
    ]
  },
  
  ///可以设置各种网络请求的超时时间。
  "networkTimeout": {
    "request": 10000,//wx.request的超时时间，单位毫秒，默认为：60000
    "connectSocket": 1000,//wx.connectSocket的超时时间，单位毫秒，默认为：60000
    "uploadFile": 1000,//	wx.uploadFile的超时时间，单位毫秒，默认为：60000
    "downloadFile": 10000//wx.downloadFile的超时时间，单位毫秒，默认为：60000
  },
  
  //可以在开发者工具中开启 debug 模式，
  //在开发者工具的控制台面板，调试信息以 info 的形式给出，
  //其信息有Page的注册，页面路由，数据更新，事件触发 。
  //可以帮助开发者快速定位一些常见的问题。
  "debug": true
}
```
