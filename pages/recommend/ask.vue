<template>
  <view class="content">
    <view class="headtitle">
      <text>あなたの投資志向を教えてください</text>
    </view>
	<view class="headtitle">
	  <text></text>
	</view>
	    <view class="list">
			<view class="headtitle">
			  <text>1.投資の金額を教えてください</text>
			</view>
			<view class="list-call">
	        <input class="sl-input" v-model="investmentFunds" type="text" maxlength="20" /> <text>万円</text>
			</view>
		</view>
		<view class="list">
			<view class="headtitle">
			  <text>2.年間利益率希望</text>
			</view>				  
				  <view class="headrideo">
				  				<radio-group class="radiolist" @change='radioChange'>
				  					<view v-for="(item,index) in radiodata" :key="index">
				  						<radio :value="item.id"   color="#ff5500" :checked="item.isChecked" :style="item.radio">
				  							<view class="imageAndText">
				  								<label class="label" >{{item.text}}</label>
				  							</view>
				  						</radio>
				  					</view>
				  				</radio-group>
				  			</view>
				  
	    </view>
		<view class="list">
			<view class="headtitle">
			  <text>3.売買頻度</text>
			</view>
	     <view class="headrideo">
	     				<radio-group class="radiolist" @change='radioChangesecond'>
	     					<view v-for="(item2,index2) in radiosecond" :key="index2">
	     						<radio :value="item2.id"   color="#ff5500" :checked="item2.isChecked" :style="item2.radio">
	     							<view class="imageAndText">
	     								<label class="label" >{{item2.text}}</label>
	     							</view>
	     						</radio>
	     					</view>
	     				</radio-group>
	     			</view>
	    </view>
		<view class="headtitle">
		  <text></text>
		</view>
    <view class="agreenment">
		  <button type="default" @click="setUserrecommned">次へ</button>						
    </view>
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
        password: '',
		investmentFunds: '',
		rate: '',
		radiodata:[
						{
							id:'1',
							text:'５％前後',
							isChecked:false,
						},
						{
							id:'2',
							text:'２０％前後',
							isChecked:false,
							radio:'margin-top: 20upx;'
						},
						{
							id:'3',
							text:'３０％以上',
							isChecked:false,
							radio:'margin-top: 20upx;',
							yinlianlabel:'margin-left: 35upx;line-height: 2em;'
						}
					],
		 radiosecond:[
		 				{
		 					id:'1',
		 					text:'頻繫に取引しても問題ない',
		 					isChecked:false,
		 				},
		 				{
		 					id:'2',
		 					text:'週ベースで取引したい',
		 					isChecked:false,
		 					radio:'margin-top: 20upx;'
		 				},
		 				{
		 					id:'3',
		 					text:'月ベースで取引したい',
		 					isChecked:false,
		 					radio:'margin-top: 20upx;',
		 					yinlianlabel:'margin-left: 35upx;line-height: 2em;'
		 				}
		 			],
					eXptRate: 0,
					frequency: 0
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
		setUserrecommned: function(){
			uni.setStorageSync('investmentFunds',this.investmentFunds*10000)
			uni.setStorageSync('eXptRate',this.eXptRate)
			uni.setStorageSync('frequency',this.frequency)
			console.log("come setUserrecommned");	
			uni.reLaunch({
				url: '/pages/recommend/recommend' 
			})
			//uni.reLaunch({
			// url: '/pages/recommend/recommend'
			//});
		},
		radioChange: function(evt) {
		  //   for (let i = 0; i < this.radiodata.length; i++) {
				// console.log(evt.detail.value)
		  //       if (this.radiodata[i].value === evt.detail.value) {
		  //           this.eXptRate = i;
		  //           break;
		  //       }
		  //   }
		  this.eXptRate = evt.detail.value
		},
		radioChangesecond: function(evt) {
		    // for (let i = 0; i < this.radiosecond.length; i++) {
		    //     if (this.radiosecond[i].value === evt.detail.value) {
		    //         this.frequency = i;
		    //         break;
		    //     }
		    // }
			this.frequency = evt.detail.value
		},
		bindLogin() {
		  if (this.password.length < 2) {
		    uni.showToast({
		      icon: 'none',
		      title: 'パスワードが短すぎる'
		    });
		    return;
		  }
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
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header {
    background: rgba(63, 205, 235, 1);
    width: 221rpx;
    height: 161rpx;
    margin-top: 20rpx;
    margin-left: auto;
    margin-right: auto;
  }

  .list-title{
    width: 40rpx;
    height: 40rpx;
  }
  .list {
    display: flex;
    flex-direction: column;
    padding-top: 10rpx;
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
    margin-top: 10rpx;
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
    margin-top: 20rpx;
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
  
  .headtitle {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    font-size: 40rpx;
    color: #000000;
    text-align: left;
	margin-top: 20rpx;
	margin-left: 20rpx;
    height: 40rpx;
    line-height: 40rpx;
  }
  .headrideo {
	  margin-top: 20rpx;
  	margin-left: 30rpx;
  }
  
  .headtitle text {
    font-size: 32rpx;
    margin-left: 15rpx;
    margin-right: 15rpx;
  }
</style>
