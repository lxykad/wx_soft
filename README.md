#### 微信小程序demo
#### 微信小程序目录结构

1、最外层 app.js  app.json app.wxss
 
  (1) app.json app.wxss 是配置信息(类似于android清单文件)，如果内层包里有配置，外层的会被覆盖。注意，默认启动页面为pages最上面那个。

  （2）app.js 一些配置信息，配置了程序的入口，分别调用了app和page方法。app.js 相当于android里的BaseApplication。


#### 组件、事件及数据绑定

1、 组件重新赋值，如button的点击事件  

	<button bindtap="btClick">{{bt1}}</button> 

	 this.setData({
      loading: !this.data.loading
    })
2、



3、模板的使用

4、微信小程序的配置

（1）最外层app.json那里 ,配置的为全局的属性，如果想对某个页面单独配置，可以在相应的包下创建一个同名的如index.json覆盖全局的配置（目前只能覆盖window部分的配置）。同理，css的配置一样。

（2）tabbar	

5、页面的生命周期和页面跳转的数据传递

（1）两种跳转方式 wx.redirectTo 和  wx.navigateTo

（2）可以通过点击事件bindtap和  navigator
	<navigator url = "second?id=navigation">
	来跳转。

		
  
 		
  


	



   
