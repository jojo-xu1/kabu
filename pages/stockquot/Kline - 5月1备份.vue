<template>
	<view>
		<view class="search-block">
			<input id="IDsearch" type="text" value="" placeholder="kabu code..." class="search-text" confirm-type="search"
			 @input="onKeyInput" @confirm="kabuSearch" maxlength="6" focus="false" />
		</view>
		<view style="flex: 1; ">
			{{Candle.series[0].name}} {{Candle.series[0].ID}}
		</view>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button" activeColor="#d9ce2c"
		 style="padding: 10px;"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<view class="qiun-columns">
					<view class="qiun-charts">
						<canvas canvas-id="canvasCandle" id="canvasCandle" class="charts" disable-scroll=true @touchstart="touchCandle"
						 @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
					</view>
					<view class="qiun-charts2">
						<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts2"></canvas>
					</view>
					<view class="qiun-padding qiun-bg-white ">
						<slider :value="itemCount" min="5" :max="sliderMax" block-color="#f8f8f8" block-size="18" @changing="sliderMove"
						 @change="sliderMove" />
					</view>
				</view>
			</view>
			<view v-show="current === 1">
				<view class="qiun-charts">
						<canvas canvas-id="canvasCandle" id="canvasCandle" class="charts" disable-scroll=true @touchstart="touchCandle"
						 @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
					</view>
					<view class="qiun-charts2">
						<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts2"></canvas>
					</view>
					<view class="qiun-padding qiun-bg-white ">
						<slider :value="itemCount" min="5" :max="sliderMax" block-color="#f8f8f8" block-size="18" @changing="sliderMove"
						 @change="sliderMove" />
					</view>
				</view>
			</view>
			<view v-show="current === 2">
				<!-- 				<view class="qiun-columns">
					<view class="qiun-charts">
						<canvas canvas-id="canvasCandle" id="canvasCandle" class="charts" disable-scroll=true @touchstart="touchCandle"
						 @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
					</view>
					<view class="qiun-padding qiun-bg-white ">
						<slider :value="itemCount" min="5" :max="sliderMax" block-color="#f8f8f8" block-size="18" @changing="sliderMove"
						 @change="sliderMove" />
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts/u-charts.js';
	import uniSegmentedControl from '@/components/uni-segmented-control.vue'
	var _self;
	var canvaCandle = null;
	var canvaColumn = null;

	export default {
		components: {
			uniSegmentedControl
		},
		data() {
			return {
				cWidth: '',
				cHeight: '',
				cHeight2: '',
				items: ['日足', '週足', '月足'],
				current: 0,
				pixelRatio: 1,
				serverData: '',
				itemCount: 20, //x轴单屏数据密度
				sliderMax: 50,
				IDsearch: "",
				Ktemp: [],
				temp: [],
				date: '20210418',
				Candle: {
					categories: [],
					series: [{
						name: "",
						data: [] //
					}]
				},
				CandleColumn: {
					"categories": [],
					"series": [{
						"data": []
					}]
				}
			}
		},
		onLoad: function(option) {
			console.log("xxxxxxxxxxxxxx", option.stockId)
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.cHeight2 = uni.upx2px(200);
			if (option.stockId === undefined) {
				this.getServerData();
			} else {
				this.gotoSearch(option.stockId)
			}
		},
		// onLoad() {
		// 	_self = this;
		// 	//#ifdef MP-ALIPAY
		// 	uni.getSystemInfo({
		// 		success: function(res) {
		// 			if (res.pixelRatio > 1) {
		// 				//正常这里给2就行，如果pixelRatio=3性能会降低一点
		// 				//_self.pixelRatio =res.pixelRatio;
		// 				_self.pixelRatio = 2;
		// 			}
		// 		}
		// 	});
		// 	//#endif
		// 	this.cWidth = uni.upx2px(750);
		// 	this.cHeight = uni.upx2px(500);
		// 	this.cHeight2 = uni.upx2px(200);
		// 	// if (this.$route.params.stock_id === undefined) {
		// 	      this.getServerData();
		// 	   //  } else {
		// 	   //    // this.kabuSearch()
		// 		  // console.log("get STOCK ID::::::::")
		// 	   //  }
		// 	// this.getServerData();
		// 	// _self.showCandle("canvasCandle", this.Candle);
		// 	// _self.showColumn("canvasColumn", this.CandleColumn);
		// },
		methods: {
			getServerData() {
				var that = this;
				uni.request({
					url: 'http://13.112.112.160:8090/daily/kline?stockId=5013&day=130',
					data: {},
					success: function(res) {
						console.log("-----服务器获取数据：", res.data.data)
						console.log("数据长度：", res.data.data.kLineDailyOutDto.length)
						console.log("获取数据详情：", res.data.data.kLineDailyOutDto[0].dayId)
						let tempdata = res.data.data;
						console.log("保存获取数据：", tempdata)
						console.log("股票名称:", tempdata.stockName);
						let Ktemp = [];
						//获取股票名称，股票代码
						that.Candle.series[0].name = tempdata.stockName;
						that.Candle.series[0].ID = tempdata.stockId;
						console.log("股票名称:", that.Candle.series[0].name);
						console.log("股票代码:", that.Candle.series[0].ID);
						//处理Candle数据
						for (var i = 0; i < tempdata.kLineDailyOutDto.length; i++) {
							that.Candle.categories.push(tempdata.kLineDailyOutDto[i].dayId);
							var arr = [];
							arr.push(tempdata.kLineDailyOutDto[i].startPrice);
							arr.push(tempdata.kLineDailyOutDto[i].endPrice);
							arr.push(tempdata.kLineDailyOutDto[i].lowPrice);
							arr.push(tempdata.kLineDailyOutDto[i].highPrice);
							console.log("arr:", arr)
							that.Candle.series[0].data.push(arr);
							console.log("candle", that.Candle);
						};
						that.Candle.categories.sort();
						that.CandleColumn.categories = that.Candle.categories;
						that.Candle.series[0].data.reverse();
						console.log("Candle PUSH：", that.Candle);
						//处理Colunm数据
						for (var i = 0; i < tempdata.kLineDailyOutDto.length; i++) {
							console.log("cloumn日期", that.CandleColumn.categories)
							var arr = [];
							that.CandleColumn.series[0].data.push(tempdata.kLineDailyOutDto[i].vol);
							console.log("CandleColumn", that.CandleColumn);
						};
						that.CandleColumn.series[0].data.reverse();
						console.log("column PUSH：", that.CandleColumn);
						_self.showCandle("canvasCandle", that.Candle);
						_self.showColumn("canvasColumn", that.CandleColumn);
						// //修改日期格式
						// //年
						// var year = that.date.substr(0, 4); //第一位表示起始位，第二位表示个数
						// var month = that.date.substr(4, 2)
						// var day = that.date.substr(6, 2)
						// var datestr = year + "-" + month + "-" + day
						// console.log("日期测试：：：：", datestr)
						// that.getWeek(datestr)
						// console.log("周几：：", that.getWeek(datestr))
					},
					fail: () => {
						_self.tips = "Error!";
						console.log("获取失败")
					},
				});
			},
			getWeek(dateString) {
				var dateArray = dateString.split("-");
				console.log("日期分割：", dateArray)
				var day = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
				// return "周" + "日一二三四五六".charAt(day.getDay());
				var arr = [0, 0, 1, 2, 3, 4]
				var res = arr[day.getDay()]
				console.log("判断同一周：", this.compareDate())
				return res
			},
			getDateString(str){
				//年
				var year = str.substr(0, 4); //第一位表示起始位，第二位表示个数
				var month = str.substr(4, 2)
				var day = str.substr(6, 2)
				var dateString = year + "-" + month + "-" + day
				return dateString;
			},
			//算前一天的方法
			//dataStr日期字符串
			//dayCount 要减的天数
			//return 减n天后的日期字符串
			preDate(dataStr,dayCount) {
				var dataStr = "2021-04-25";
				var dayCount = 1;
				var strdate=dataStr; //日期字符串
				var isdate = new Date(strdate.replace(/-/g,"/"));  //把日期字符串转换成日期格式
				isdate = new Date((isdate/1000-(86400*dayCount))*1000);  //日期减1天
				var pdate = isdate.getFullYear()+"-"+(isdate.getMonth()+1)+"-"+(isdate.getDate());   //把日期格式转换成字符串
				return pdate;
			},
			//判断同一天
			// isSameWeek(old, now) {
			// 	var old = "2021-04-24";
			// 	var now = "2021-04-22";
			// 	var oneDayTime = 1000 * 60 * 60 * 24;
			// 	var old_count = parseInt(+old / oneDayTime);
			// 	var now_other = parseInt(+now / oneDayTime);
			// 	return parseInt((old_count + 4) / 7) == parseInt((now_other + 4) / 7);
			// } ,
			compareDate(date1, date2) {
			    var oDate1 = new Date("2021-04-25");
			    var oDate2 = new Date("2021-04-24");
			    if (oDate1.getTime() >= oDate2.getTime()) {
			        return true;
			    } else {
			        return false;
			    }
			},
			showCandle(canvasId, chartData) {
				console.log("kabu name:", this.Candle.series[0].name);
				canvaCandle = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'candle',
					fontSize: 11,
					padding: [10, 15, 0, 15],
					legend: {
						show: true,
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					enableScroll: true,
					xAxis: {
						disableGrid: true,
						labelCount: 4,
						//type:'grid',
						//gridType:'dash',
						itemCount: _self.itemCount,
						scrollShow: true,
						scrollAlign: 'right',
					},
					yAxis: {
						//disabled:true
						gridType: 'dash',
						splitNumber: 5,
						format: (val) => {
							return val.toFixed(0)
						}
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: false,
					dataPointShape: true,
					extra: {
						candle: {
							color: {
								upLine: '#f04864',
								upFill: '#f04864',
								downLine: '#2fc25b',
								downFill: '#2fc25b'
							},
							average: {
								show: true,
								name: ['MA5', 'MA10', 'MA30'],
								day: [5, 10, 20],
								color: ['#1890ff', '#2fc25b', '#facc14']
							}
						},
						tooltip: {
							bgColor: '#000000',
							bgOpacity: 0.7,
							gridType: 'dash',
							dashLength: 5,
							gridColor: '#1890ff',
							fontColor: '#FFFFFF',
							horizentalLine: true,
							xAxisLabel: true,
							yAxisLabel: true,
							labelBgColor: '#DFE8FF',
							labelBgOpacity: 0.95,
							labelAlign: 'left',
							labelFontColor: '#666666'
						}
					},
				});
				console.log("NEW：：：", canvaCandle)

			},
			touchCandle(e) {
				canvaCandle.scrollStart(e);
			},
			moveCandle(e) {
				let distance = canvaCandle.scroll(e);
				if (distance !== undefined) {
					canvaColumn.translate(distance);
				}
			},
			touchEndCandle(e) {
				canvaCandle.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaCandle.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			tapButton(type) {
				let step = 5;
				if (type == 'in') {
					_self.itemCount -= step;
					if (_self.itemCount <= 5) {
						_self.itemCount = 5;
					}
				} else {
					_self.itemCount += step;
					if (_self.itemCount >= _self.sliderMax) {
						_self.itemCount = _self.sliderMax;
					}
				}
				_self.zoomCandle(_self.itemCount);
			},
			sliderMove(e) {
				_self.itemCount = e.detail.value;
				_self.zoomCandle(e.detail.value);
			},
			zoomCandle(val) {
				canvaCandle.zoom({
					itemCount: val
				});
				canvaColumn.zoom({
					itemCount: val
				});
			},
			onClickItem(e) {
				//  切换日，周，月K线图
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
					if (this.current === 0) {
						this.getServerData();
					} else if (this.current === 1) {
						this.weekLine();
					} else {
						this.chartData = this.chartData3;
						this.showCandle("canvasCandle", this.chartData);
					}
				}
			},
			onKeyInput: function(event) {
				this.inputValue = event.target.value
				console.log("id:", this.inputValue)
			},
			kabuSearch() {
				console.log("kabu  Search")
				var that = this;
				var searchid = this.inputValue;
				console.log('ID :', this.inputValue);
				var that = this;
				uni.request({
					url: 'http://13.112.112.160:8090/daily/kline?stockId=' + this.searchid + '&day=130',
					data: {},
					success: function(res) {
						that.Candle = {
							categories: [],
							series: [{
								name: "",
								data: []
							}]
						};
						that.CandleColumn = {
							"categories": [],
							"series": [{
								"data": []
							}]
						};
						console.log("-----服务器获取数据：", res.data.data)
						console.log("数据长度：", res.data.data.kLineDailyOutDto.length)
						console.log("获取数据详情：", res.data.data.kLineDailyOutDto[0].dayId)
						let searchTemp = res.data.data;
						console.log("保存获取数据：", searchTemp)
						console.log("股票名称:", searchTemp.stockName);
						let Ktemp = [];
						//获取股票名称，股票代码
						that.Candle.series[0].name = searchTemp.stockName;
						that.Candle.series[0].ID = searchTemp.stockId;
						console.log("股票名称:", that.Candle.series[0].name);
						console.log("股票代码:", that.Candle.series[0].ID);
						//处理Candle数据
						for (var i = 0; i < searchTemp.kLineDailyOutDto.length; i++) {
							that.Candle.categories.push(searchTemp.kLineDailyOutDto[i].dayId);
							var arr = [];
							arr.push(searchTemp.kLineDailyOutDto[i].startPrice);
							arr.push(searchTemp.kLineDailyOutDto[i].endPrice);
							arr.push(searchTemp.kLineDailyOutDto[i].lowPrice);
							arr.push(searchTemp.kLineDailyOutDto[i].highPrice);
							console.log("arr:", arr)
							that.Candle.series[0].data.push(arr);
							console.log("candle", that.Candle);
						};
						that.Candle.categories.sort();
						that.CandleColumn.categories = that.Candle.categories;
						that.Candle.series[0].data.reverse();
						console.log("Candle PUSH：", that.Candle);
						//处理Colunm数据
						for (var i = 0; i < searchTemp.kLineDailyOutDto.length; i++) {
							console.log("cloumn日期", that.CandleColumn.categories)
							var arr = [];
							that.CandleColumn.series[0].data.push(searchTemp.kLineDailyOutDto[i].vol);
							console.log("CandleColumn", that.CandleColumn);
						};
						that.CandleColumn.series[0].data.reverse();
						console.log("column PUSH：", that.CandleColumn);
						_self.showCandle("canvasCandle", that.Candle);
						_self.showColumn("canvasColumn", that.CandleColumn);
					},
					fail: () => {
						_self.tips = "Error!";
						console.log("获取失败")
					},
				});

			},
			weekLine() {
				console.log("周K")
				var that = this;
				uni.request({
					url: 'http://13.112.112.160:8090/daily/kline?stockId=5013&day=130',
					data: {},
					success: function(res) {
						that.Candle = {
							categories: [],
							series: [{
								name: "",
								data: []
							}]
						};
						that.CandleColumn = {
							"categories": [],
							"series": [{
								"data": []
							}]
						};
						console.log("-----服务器获取数据：", res.data.data)
						console.log("数据长度：", res.data.data.kLineDailyOutDto.length)
						console.log("获取数据详情：", res.data.data.kLineDailyOutDto[0].dayId)
						let tempdata = res.data.data;
						console.log("保存获取数据：", tempdata)
						console.log("股票名称:", tempdata.stockName);
						let Ktemp = [];
						//获取股票名称，股票代码
						that.Candle.series[0].name = tempdata.stockName;
						that.Candle.series[0].ID = tempdata.stockId;
						console.log("股票名称:", that.Candle.series[0].name);
						console.log("股票代码:", that.Candle.series[0].ID);
						that.getDateString(tempdata.kLineDailyOutDto[0].dayId);
						// //年
						// var year = tempdata.kLineDailyOutDto[0].dayId.substr(0, 4); //第一位表示起始位，第二位表示个数
						// var month = tempdata.kLineDailyOutDto[0].dayId.substr(4, 2)
						// var day = tempdata.kLineDailyOutDto[0].dayId.substr(6, 2)
						// var datestr = year + "-" + month + "-" + day
						console.log("日期测试：：：：", that.getDateString(tempdata.kLineDailyOutDto[0].dayId))
						var daymark = that.getWeek(that.getDateString(tempdata.kLineDailyOutDto[0].dayId))
						console.log("周几：：", that.getWeek(that.getDateString(tempdata.kLineDailyOutDto[0].dayId)))
						//处理Candle数据
						//第一周 数据特殊处理   2021.03.25  周四 daymark=3
						that.Candle.categories.push(tempdata.kLineDailyOutDto[daymark].dayId);
						var arr = [];
						arr.push(tempdata.kLineDailyOutDto[daymark].startPrice);
						arr.push(tempdata.kLineDailyOutDto[0].endPrice);
						var lowPrice = tempdata.kLineDailyOutDto[0].lowPrice;
						var highPrice = 0;
						var vol = 0;
						for (let j = 0; j < daymark + 1; j++) {
							if (tempdata.kLineDailyOutDto[j].lowPrice < lowPrice) {
								lowPrice = tempdata.kLineDailyOutDto[j].lowPrice
								
							}
							vol = vol + tempdata.kLineDailyOutDto[j].vol
							console.log("本周vol：：：：：", vol)
							if (tempdata.kLineDailyOutDto[j].highPrice > highPrice) {
								highPrice = tempdata.kLineDailyOutDto[j].highPrice
							}
						}
						arr.push(lowPrice);
						arr.push(highPrice);
						console.log("VOL合：：", vol)
						that.Candle.series[0].data.push(arr);
						that.CandleColumn.series[0].data.push(vol);
						// 正常5天处理
						var sign = 0
						for (var i = daymark + 1; i < tempdata.kLineDailyOutDto.length;) {
							if (i + 5 >= tempdata.kLineDailyOutDto.length) {
								sign = i;
								console.log("进break")
								break;
							}else{
								console.log("进正常循环")
							that.Candle.categories.push(tempdata.kLineDailyOutDto[i + 4].dayId);
							var arr = [];
							arr.push(tempdata.kLineDailyOutDto[i + 4].startPrice);
							arr.push(tempdata.kLineDailyOutDto[i].endPrice);
							var lowPrice = 99999;
							var highPrice = 0;
							var vol = 0
							//判断是否满足5天
							for (let j = 0; j < 5; j++) {
								if (tempdata.kLineDailyOutDto[i + j].lowPrice < lowPrice) {
									lowPrice = tempdata.kLineDailyOutDto[i + j].lowPrice
								}
								vol = vol + tempdata.kLineDailyOutDto[i + j].vol
								if (tempdata.kLineDailyOutDto[i + j].highPrice > highPrice) {
									highPrice = tempdata.kLineDailyOutDto[i + j].highPrice
								}
							}
							arr.push(tempdata.kLineDailyOutDto[i].lowPrice);
							arr.push(tempdata.kLineDailyOutDto[i].highPrice);
							console.log("单次数据：：：：", arr)
							that.Candle.series[0].data.push(arr);
							that.CandleColumn.series[0].data.push(vol);
							i = i + 5;
							}
						}
						//最后一周处理
						if (sign != 0) {
							that.Candle.categories.push(tempdata.kLineDailyOutDto[tempdata.kLineDailyOutDto.length - 1].dayId);
							console.log("最后一周日期:::", tempdata.kLineDailyOutDto[tempdata.kLineDailyOutDto.length - 1].dayId)
							var arr = [];
							arr.push(tempdata.kLineDailyOutDto[tempdata.kLineDailyOutDto.length - 1].startPrice);
							arr.push(tempdata.kLineDailyOutDto[sign].endPrice);
							tempdata.kLineDailyOutDto[sign].endPrice;
							var lowPrice = 99999;
							var highPrice = 0;
							var vol = 0;
							for (let j = 0; j < tempdata.kLineDailyOutDto.length - 1 - sign; j++) {
								if (tempdata.kLineDailyOutDto[j].lowPrice < lowPrice) {
									lowPrice = tempdata.kLineDailyOutDto[j].lowPrice
								}
								vol = vol + tempdata.kLineDailyOutDto[i + j].vol
								if (tempdata.kLineDailyOutDto[j].highPrice > highPrice) {
									highPrice = tempdata.kLineDailyOutDto[j].highPrice
								}
							}
							arr.push(lowPrice);
							arr.push(highPrice);
							that.CandleColumn.series[0].data.push(vol);
						}
						that.CandleColumn.series[0].data.reverse();
						that.Candle.categories.sort();
						that.CandleColumn.categories = that.Candle.categories;
						that.Candle.series[0].data.reverse();
						console.log("column PUSH：", that.CandleColumn);
						_self.showCandle("canvasCandle", that.Candle);
						_self.showColumn("canvasColumn", that.CandleColumn);
						console.log("加一天：", that.preDate())
					},
					fail: () => {
						_self.tips = "Error!";
						console.log("获取失败")
					},
				});

			},
			gotoSearch(stockId) {
				console.log("kabu  Search")
				var that = this;
				var searchid = stockId;
				console.log('跳转搜索ID :', stockId);
				var that = this;
				uni.request({
					url: 'http://13.112.112.160:8090/daily/kline?stockId=' + stockId + '&day=130',
					data: {},
					success: function(res) {
						that.Candle = {
							categories: [],
							series: [{
								name: "",
								data: []
							}]
						};
						that.CandleColumn = {
							"categories": [],
							"series": [{
								"data": []
							}]
						};
						console.log("-----服务器获取数据：", res.data.data)
						console.log("数据长度：", res.data.data.kLineDailyOutDto.length)
						console.log("获取数据详情：", res.data.data.kLineDailyOutDto[0].dayId)
						let searchTemp = res.data.data;
						console.log("保存获取数据：", searchTemp)
						console.log("股票名称:", searchTemp.stockName);
						let Ktemp = [];
						//获取股票名称，股票代码
						that.Candle.series[0].name = searchTemp.stockName;
						that.Candle.series[0].ID = searchTemp.stockId;
						console.log("股票名称:", that.Candle.series[0].name);
						console.log("股票代码:", that.Candle.series[0].ID);
						//处理Candle数据
						for (var i = 0; i < searchTemp.kLineDailyOutDto.length; i++) {
							that.Candle.categories.push(searchTemp.kLineDailyOutDto[i].dayId);

							var arr = [];
							arr.push(searchTemp.kLineDailyOutDto[i].startPrice);
							arr.push(searchTemp.kLineDailyOutDto[i].endPrice);
							arr.push(searchTemp.kLineDailyOutDto[i].lowPrice);
							arr.push(searchTemp.kLineDailyOutDto[i].highPrice);
							console.log("arr:", arr)
							that.Candle.series[0].data.push(arr);
							console.log("candle", that.Candle);
						};
						that.Candle.categories.sort();
						that.CandleColumn.categories = that.Candle.categories;
						that.Candle.series[0].data.reverse();
						console.log("Candle PUSH：", that.Candle);
						//处理Colunm数据
						for (var i = 0; i < searchTemp.kLineDailyOutDto.length; i++) {
							console.log("cloumn日期", that.CandleColumn.categories)
							var arr = [];
							that.CandleColumn.series[0].data.push(searchTemp.kLineDailyOutDto[i].vol);
							console.log("CandleColumn", that.CandleColumn);
						};
						that.CandleColumn.series[0].data.reverse();
						console.log("column PUSH：", that.CandleColumn);
						_self.showCandle("canvasCandle", that.Candle);
						_self.showColumn("canvasColumn", that.CandleColumn);
					},
					fail: () => {
						_self.tips = "Error!";
						console.log("获取失败")
					},
				});

			},
			showColumn(canvasId, chartData) {
				console.log("cahrtdata:", chartData)
				console.log("canvasId:", canvasId)
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					padding: [10, 15, 0, 15],
					legend: {
						show: false,
					},
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: false,
					enableScroll: true,
					dataLabel: false,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disabled: true,
						disableGrid: true,
						labelCount: 4,
						itemCount: _self.itemCount,
						scrollAlign: 'right',
					},
					yAxis: {
						disableGrid: true,
						splitNumber: 3,
						min: 0,
						format: (val) => {
							return val.toFixed(0)
						}
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight2 * _self.pixelRatio,
					extra: {
						column: {
							type: 'group',
						}
					}
				});

			},
			touchColumn(e) {
				canvaColumn.showToolTip(e, {
					format: function(item, category) {
						if (typeof item.data === 'object') {
							return category + ' ' + item.name + ':' + item.data.value
						} else {
							return category + ' ' + item.name + ':' + item.data
						}
					}
				});
			},
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.search-text {
		font-size: 14px;
		background-color: #FFFFFF;
		height: 60upx;
		width: 480upx;
	}

	.search-block {
		/* display: flex; */
		flex-direction: row;
		padding-top: 20px;
		padding-left: 60upx;
		position: relative;
		top: -32upx;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.qiun-textarea {
		height: 300upx;
	}

	.qiun-columns {
		/* display: flex; */
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10upx;
	}

	.qiun-charts2 {
		width: 750upx;
		height: 200upx;
		background-color: #FFFFFF;
	}

	.charts2 {
		width: 750upx;
		height: 200upx;
		background-color: #FFFFFF;
	}
</style>
