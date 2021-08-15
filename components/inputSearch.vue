<template>
	<!--
	<inputSearch :dataSource="dataSource" @select="handleChange" placeholder="请输入商品名称" />
	//数据源
	dataSource: [{
			id: 1,
			name: '耐克1'
		},
		{
			id: 2,
			name: '耐克2'
		}
	],
	 
	 //用户点击获取的数据
	 handleChange(data) {
	 	console.log(data)
	 }
	 
	 -->
	<view class="input-group">
		<input type="number" :placeholder="placeholder" @input="search" @blur="hideList" v-model="code" />
		<view class="ul">
			<view class="li" v-for="(item,index) in list" v-if="list.length<=10"  :key="index" @tap.native="select(item)" @longtap="select(item)">{{item.code}}</view>
			<view class="li" v-for="(item,index) in list2" v-if="list.length > 10"  :key="index" @tap.native="select(item)" @longtap="select(item)">{{item.code}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: String, //默认提示
			searchKey: String, //模糊搜索的key值
			dataSource: {
				type: Array,
				default: function() { //数据源
					return [];
				}
			}
		},
		data() {
			return {
				list: [],
				list2: [],
				code: '',
				backName: ''
			};
		},
		destroyed() {
			clearTimeout(this.t);
		},
		methods: {
			search(e) {
				let val = e.detail.value;
				let {
					dataSource
				} = this;
				let arr = [];
				let arr2 = [];
				for (let i = 0; i < dataSource.length; i++) {
					if (dataSource[i].code.indexOf(val) == 0) {
						arr.push(dataSource[i]);
					}
				}
				for (let i = 0; i < dataSource.length; i++) {
					if (dataSource[i].code.indexOf(val) == 0 && arr2.length <= 10) {
						arr2.push(dataSource[i]);
					}
				}
				// console.log(arr)
				if (!val) {
					this.list = [];
					this.list2 = [];
				} else {
					this.list = arr;
					this.list2 = arr2;
				}

			},
			select(item) {
				console.log(1)
				this.backName = item.code;
				this.list = [];
				this.list2 = [];
				this.$emit('select', item);
				this.inputValue ="";
			},
			hideList() {
				
				this.list = [];
				this.list2 = [];
				this.t = setTimeout(() => {
					this.code = this.backName;
				}, 0);
				this.inputValue ="";
			}
		}
	}
</script>


<style lang="scss">
	.input-group {
		position: relative;
	

		input {
			border: 1upx solid gray;
			height: 90upx;
			padding-left: 10upx;
			font-size: 30upx;
			box-sizing: border-box;
		}

		.ul {
			position: absolute;
			left: 0;
			top: 100%;
			width: 100%;
			background: #000000;
			z-index : 999;
			
			.li {
				border-bottom: 1upx solid gray;
				line-height: 60upx;
				height: 60upx;
				width: 100%;
			}
		}
	}
</style>
