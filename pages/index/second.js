Page({
  data:{
      //动态设置text的内容
    aaa:"我是text",
    bt1:"按钮1",
    bt2:"点击获取图片",
    isShow:true,
    news:["hello","world","weixin"]

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
   var id = options.id
   console.log("ididididi======="+id);
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
        
        var show = this.data.isShow;
        
        console.log("show======"+show);
        //动态改变news数据
        var newsData = this.data.news;
        newsData.shift();//删除第一条数据

        this.setData({isShow:!show,news:newsData})
     
    },

    bt2Click : function(){
         wx.showToast({
            title: '按钮2',
            icon: 'success',
            duration: 2000
        })
    }

})