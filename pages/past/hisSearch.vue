<template>
  <view class="content">
    <view class="headtitle">
      <text>投資履歴</text>
    </view>
	<view class="headtitle">
	  <text></text>
	</view>
	    <view class="list">
			<view class="headtitle">
			  <text>コード：</text>
			</view>
			<view class="list-call">
	        <input class="sl-input" style="width: 100px;"　v-model="kabuCode" type="text" maxlength="20" /> 
			</view>
		</view>
		<view class="interline">
		  <text></text>
		</view>
		<view class="list">
			<view class="headtitle">
			  <text>周期：</text>
			</view>				  
			<view class="headrideo">
				<radio-group class="radiolist" @change='radioChange' >
					<view v-for="(item,index) in radiodata" :key="index">
						<radio :value="item.id"   color="#ff5500" :checked="item.isChecked"  :style="item.radio">
							<view class="imageAndText">
								<label class="label" >{{item.text}}</label>
							</view>
						</radio>
					</view>
				</radio-group>
			</view>
	    </view>
		<view class="interline">
		  <text></text>
		</view>
    <view class="agreenment">
		  <button style="margin-right:50px;color:#ff5500;"　type="default" class="next" @click="gotoPast()">次へ</button>						
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
		update:true,
		mailuser: '',
        password: '',
		investmentFunds: '',
		rate: '',
		radiodata:[
						{
							id:'1',
							text:'過去一ヶ月間',
							isChecked:false,
						},
						{
							id:'2',
							text:'過去三ヶ月間',
							isChecked:false,
							radio:'margin-top: 20upx;'
						},
						{
							id:'3',
							text:'過去1年間',
							isChecked:false,
							radio:'margin-top: 20upx;',
							yinlianlabel:'margin-left: 35upx;line-height: 2em;'
						},
						{
							id:'4',
							text:'過去2年間',
							isChecked:false,
							radio:'margin-top: 20upx;',
							yinlianlabel:'margin-left: 35upx;line-height: 2em;'
						}
					],
					durationCode: 0,
					userId:"",
					kabuCode:""
      };
    },
	created() {
		this.pullTimer = null;
	},
	onReady() {
		this.durationCode = uni.getStorageSync('durationCode');
		// for(var i=0;i<this.radiodata.length;i++){
		// 	if(this.radiodata[i].id ==this.eXptRate){
		// 		this.radiodata[i].isChecked = true
		// 	}
		// }
		this.userId = uni.getStorageSync('userId');
	},
    methods: {
		gotoPast:function(){
			var that = this;
			if(this.durationCode != 0){
				uni.setStorageSync('durationCode',this.durationCode)
				//Luke Zhou
				uni.setStorageSync('kabuCode',this.kabuCode)
				var baseUrl = uni.getStorageSync('baseUrl')
				var url =baseUrl+"/daily/hisUserColltInsert"
				console.log("URL::",url)				uni.request({					url: url,					data: {						userId: that.userId,						stockId: that.kabuCode,					}
				})
				uni.reLaunch({
					url: '/pages/past/tradeDetails' 
				})
			}else{
				  uni.showModal({
				      title: '必須項目を入力してください',
				  });
			}
		},
		radioChange: function(evt) {
		 this.durationCode = evt.detail.value
		 console.log("x选项：",this.durationCode)
		},
		// radioChangesecond: function(evt) {
		//    	this.frequency = evt.detail.value
		// },
    }
  }
</script>

<style>
  .content {
	width: 750upx;
	height: 1280upx;
    display: flex;
    flex-direction: column;
    justify-content: center;
	background-color: #000000;
  }

  .header {
    background: rgba(63, 205, 235, 1);
    width: 221rpx;
    height: 161rpx;
    margin-top: 20rpx;
    margin-left: auto;
    margin-right: auto;
	color: #FFFFFF;
  }

  .list-title{
    width: 40rpx;
    height: 40rpx;
	color: #FFFFFF;
  }
  .list {
    display: flex;
    flex-direction: column;
    padding-top: 10rpx;
    padding-left: 70rpx;
    padding-right: 70rpx;
	color: #FFFFFF;
  }

  .list-call {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
	flex: 1;
	text-align: right;
	font-size: 32rpx;
	margin-left: 16rpx;
    height: 100rpx;
	width: 150px;
    /* color: #333333; */
	color: #FFFFFF;
    border-bottom: 0.5px solid #e2e2e2;
  }

  .list-call .img {
    width: 40rpx;
    height: 40rpx;
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
   .interline {
     display: flex;
     flex-direction: row;
     justify-content: left;
     align-items: center;
     font-size: 40rpx;
     color: #FFFFFF;
     text-align: left;
   	margin-top: 10rpx;
   	margin-left: 20rpx;
     height: 20rpx;
     line-height: 20rpx;
   }
  .headtitle {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    font-size: 40rpx;
    color: #FFFFFF;
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
