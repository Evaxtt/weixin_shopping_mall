// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    birthDate: '',
    birthPlace: '',
    region: ['广东省', '广州市', '海珠区'],
    gender: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },





  changeGender: function (e) {
    console.log(e.detail.value);
  },


  changeHobby: function (e) {
    console.log(e);
    var hobbyArray = e.detail.value;
    for (var i = 0; i < hobbyArray.length; i++) {
      console.log(hobbyArray[i]);
    }
  },

  selectBirthDate: function (e) {
    this.setData({
      birthDate: e.detail.value
    });
  },

  selectBirthPlace: function (e) {

    var address = '';
    var placeArray = e.detail.value;
    for (var i = 0; i < placeArray.length; i++) {
      address += placeArray[i] + ' ';
    }

    this.setData({
      birthPlace: address
    });
  },

  submitData: function (e) {
    console.log(e);
    console.log(e.detail.value);

    wx.request({
      url: 'https://ssss/action',
      data: e.detail.value,
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })


  },

  resetData: function (e) {
    console.log('form发生了reset事件');
    this.setData({
      gender: true
    });
  }
})