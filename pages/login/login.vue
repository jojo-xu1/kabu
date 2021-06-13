<template>
  <view class="content">
<!--    <view class="header">
      <image src="../../static/shilu-login/logo.png"></image>
    </view> -->

    <view class="list">
      <view class="list-call">
        <image class="img" src="/static/shilu-login/1.png"></image>
		<!-- style="text-color:#FFA800" -->
        <input class="sl-input" v-model="mailuser" type="text" maxlength="30" 
		placeholder="メール"/>
      </view>
      <view class="list-call">
        <image class="img" src="/static/shilu-login/2.png"></image>
        <input class="sl-input" v-model="password" type="text" maxlength="32" placeholder="パスワード" password="true" />
      </view>

    </view>

    <view class="button-login" hover-class="button-hover" @tap="bindLogin()">
      <text>ログイン</text>
    </view>
	

    <view class="agreenment">
      <navigator url="forget" open-type="navigate">パスワードを探す</navigator>
      <text>|</text>
      <navigator url="reg" open-type="navigate">新規</navigator>
    </view>

	<text>
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	</text>

  </view>
</template>

<script>
  export default {
	  props: {
	  	nid: {
	  		type: [String, String],
	  		default: ''
	  	}
	  },
    data() {
      return {
        mailuser: '',
        password: ''
      };
    },
	created() {
		this.pullTimer = null;
		this.requestParams = {
			//先写死
			user_id: 'sos@gmail.com',
			// user_id: this.mailuser,
		};
	},
    methods: {
		// http://13.112.112.160:8090/kabu-user/get
		bindLogin() {

		  if (this.password.length < 2) {
		    uni.showToast({
		      icon: 'none',
		      title: 'パスワードが短すぎる'
		    });
		    return;
		  }

		 //  uni.request({
			
		 //    url: 'http://13.112.112.160:8090/kabu-user/get',
		 //    data: {
		 //      user_id: this.mailuser
		 //    },
		 //    method: 'POST',
		 //    dataType: 'String',
		 //    success: (res) => {
		 //      // if (res.data.code != 200) {
		 //        uni.showToast({
		 //          title: res.data.msg,
		 //          icon: 'none'
		 //        })
			// 	// ;
		 //      // } else {
		 //      //   //成功后的逻辑
		 //      //   uni.navigateBack();
		 //      // }
		 //    }
		 //  });
		 //--------------------------------------------------------------------------------------
		// var url = 'http://127.0.0.1:8090/kabu-user/login'
		 var url = this.$baseUrl + '/kabu-user/login'
		 var mailaddress = this.mailuser
		 var passwordMessage = this.password
		 var usersParam = '?user_id=' + mailaddress + '&password=' + passwordMessage
		 
		 uni.request({
		 	// url: 'http://139.224.56.43:8090/kabu-user/get',
			url: url + usersParam ,
		 	// data: this.mailuser,
			data: {},
			// data: this.requestParams,
		 	// success: (result) => {
			success: (result) => {
				var jumpUrl =  '../ucenter/ucenter?mailaddress=' + mailaddress
				if (result.data.code == 200) {
					
					//uni.setStorage({key: 'userId',data: result.data.data.userID})
					uni.setStorageSync('userId',result.data.data.userID)
					uni.reLaunch({
					    // url: '../ucenter/ucenter?id=mailaddress'
						url: jumpUrl
					});
				}
				else{

					uni.showToast({
					  icon: 'none',
					  title: 'password is wrong'
					});
					uni.navigateBack();
					
				}
				// uni.reLaunch({
				//     // url: '../ucenter/ucenter?id=mailaddress'
				// 	url: jumpUrl
				// });
	
			},
		 	fail: (err) => {
		 		// console.log(err);
		 		// if (this.dataList.length == 0) {
		 		// 	this.isNoData = true;
		 		// }
		 	},
		 	complete: (e) => {
		 		// this.isLoading = false;
		 		// if (refresh) {
		 		// 	this.refreshing = false;
		 		// 	this.refreshFlag = false;
		 		// 	this.refreshText = "リフレッシュ完了";
		 		// 	if (this.pullTimer) {
		 		// 		clearTimeout(this.pullTimer);
		 		// 	}
		 		// 	this.pullTimer = setTimeout(() => {
		 		// 		this.pulling = false;
		 		// 	}, 1000);
		 		// }
		 	}
		 });
		 
		}
		// ,
		// createUser() {
		// 	// var url = 'http://139.224.56.43:8090/kabu-user/logout'
		// 	//------------------------
		// 	uni.request({
		// 	    url: 'http://139.224.56.43:8090/kabu-user/createUser', 
		// 	    method: 'POST',
		// 	    data: {
		// 	        user_id: this.mailuser,
		// 			password: this.password
		// 	    },
		// 	    dataType:'json',
		// 	    success: (res) => {
		// 	    var result = JSON.parse(res.data.projectList);
			                    					       		
		// 	    } 
		// 	}); 
		// }
    }
  }
</script>

<style>
  .content {
    display: flex;
     flex-direction: column; 
    /* justify-content: center; */
	background: #000000;
	height: 10000rpx;
	
  }

  .header {
    width: 161rpx;
    height: 161rpx;
    /* background: rgba(63, 205, 235, 1); */
	background: #000000;
    box-shadow: 0rpx 12rpx 13rpx 0rpx rgba(63, 205, 235, 0.47);
    border-radius: 50%;
    margin-top: 30rpx;
    margin-left: auto;
    margin-right: auto;
  }

  .header image {
    width: 161rpx;
    height: 161rpx;
    border-radius: 50%;
  }

  .list {
    display: flex;
    flex-direction: column;
    padding-top: 50rpx;
    padding-left: 70rpx;
    padding-right: 70rpx;
  }

  .list-call {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100rpx;
    color: #333333;
    border-bottom: 0.5px solid #e2e2e2;
  }

  .list-call .img {
    width: 40rpx;
    height: 40rpx;
  }

  .list-call .sl-input {
    flex: 1;
    text-align: left;
    font-size: 32rpx;
    margin-left: 16rpx;
  }

  .button-login {
   color: #FFFFFF;
	
    font-size: 34rpx;
    width: 470rpx;
    height: 100rpx;
    background: linear-gradient(-90deg, rgba(63, 205, 235, 1), rgba(188, 226, 158, 1));
    box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(164, 217, 228, 0.2);
    border-radius: 50rpx;
    line-height: 100rpx;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100rpx;
  }

  .button-hover {
    background: linear-gradient(-90deg, rgba(63, 205, 235, 0.8), rgba(188, 226, 158, 0.8));
  }

  .agreenment {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 30rpx;
    margin-top: 80rpx;
    color: #FFA800;
    text-align: center;
    height: 40rpx;
    line-height: 40rpx;
  }

  .agreenment text {
    font-size: 24rpx;
    margin-left: 15rpx;
    margin-right: 15rpx;
  }
</style>
