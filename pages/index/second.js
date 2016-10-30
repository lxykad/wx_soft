Page({
  data:{
      //动态设置text的内容
    aaa:"我是text",
    bt1:"按钮1"
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      title: options.title
    })
  },
  onReady:function(){
    // 页面渲染完成
    
   
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
   
  },
  onUnload:function(){
    // 页面关闭
    
  },

//bt1 点击
btClick : function(){
     //给bt1 设置新的数据
     this.setData({bt1:"按钮点击了"})
     
    }

})