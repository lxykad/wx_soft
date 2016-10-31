
Page({
  data:{

    name:null
   
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
   
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
  nameInput:function(event){
    //console.log(event.detail.value);
    
    this.setData({name:event.detail.value});
    console.log(name);
  },

  clickLogin : function(){

    //  wx.showToast({
    //         title: name,
    //         icon: 'success',
    //         duration: 2000
    //     })
    //console.log("login====name==="+name+"=====password===="+222);
  }




})