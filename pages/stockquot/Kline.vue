<template>
	<view class="page">
		<view class="search-block">
			<input id="IDsearch" type="text" value="" placeholder="kabu code..." class="search-text" confirm-type="search"
			 @input="onKeyInput" @confirm="kabuSearch" maxlength="6" focus="false" />
		</view>
		<view style="flex: 1; color: #FFFFFF">
			{{Candle.series[0].name}} {{Candle.series[0].ID}}
		</view>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button" activeColor="#d9ce2c"
		 style="padding: 10px;"></uni-segmented-control>
		<view class="content" >
			<view v-show="current === 0" class="chart123">
				<view class="qiun-columns" >
					<view class="qiun-charts">
						<canvas canvas-id="canvasCandle" id="canvasCandle" class="charts" disable-scroll=true @touchstart="touchCandle"
						 @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
					</view>
					<view class="qiun-charts2">
						<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts2"></canvas>
					</view>
					<view class="qiun-padding qiun-bg-black ">
						<slider :value="itemCount" min="5" :max="sliderMax" block-color="#f8f8f8" block-size="18" @changing="sliderMove"
						 @change="sliderMove" />
					</view>
				</view>
			</view>
			<view v-show="current === 1" class="chart123">
				<view class="qiun-charts">
					<canvas canvas-id="canvasCandle1" id="canvasCandle1" class="charts" disable-scroll=true @touchstart="touchCandle"
					 @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
				</view>
				<view class="qiun-charts2">
					<canvas canvas-id="canvasColumn1" id="canvasColumn1" class="charts2"></canvas>
				</view>
				<view class="qiun-padding qiun-bg-white ">
					<slider :value="itemCount" min="5" :max="sliderMax" block-color="#f8f8f8" block-size="18" @changing="sliderMove"
					 @change="sliderMove" />
				</view>
			</view>
		</view>
		<view v-show="current === 2" class="chart123" @click="sliderChange">
			<view class="qiun-columns">
				<view class="qiun-charts">
					<canvas canvas-id="canvasCandle2" id="canvasCandle2" class="charts" disable-scroll=true @touchstart="touchCandle"
					 @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
				</view>
				<view class="qiun-charts2">
					<canvas canvas-id="canvasColumn2" id="canvasColumn2" class="charts2"></canvas>
				</view>
				<view class="qiun-padding qiun-bg-white ">
					<slider :value="itemCount" min="5" :max="sliderMax" block-color="#f8f8f8" block-size="18" @changing="sliderMove"
					 @change="sliderMove" />
				</view>
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
				start: 0,
				end: 0,
				weekArr: [
					[]
				],
				monthArr: [
					[]
				],
				date: '20210418',
				SQLdata: {}, //后台获取
				// SQLdata: {//测试用
				// 	"code": "200",
				// 	"message": "success!",
				// 	"data": {
				// 		"stockId": "5013",
				// 		"stockName": "ユシロ化学工業(株)",
				// 		"kLineDailyOutDto": [{
				// 				"dayId": "20210325",
				// 				"startPrice": 1189,
				// 				"endPrice": 1194,
				// 				"highPrice": 1167,
				// 				"lowPrice": 1192,
				// 				"vol": 20200
				// 			},
				// 			{
				// 				"dayId": "20210324",
				// 				"startPrice": 1183,
				// 				"endPrice": 1183,
				// 				"highPrice": 1158,
				// 				"lowPrice": 1165,
				// 				"vol": 28900
				// 			},
				// 			{
				// 				"dayId": "20210323",
				// 				"startPrice": 1231,
				// 				"endPrice": 1237,
				// 				"highPrice": 1188,
				// 				"lowPrice": 1192,
				// 				"vol": 38600
				// 			},
				// 			{
				// 				"dayId": "20210322",
				// 				"startPrice": 1178,
				// 				"endPrice": 1215,
				// 				"highPrice": 1167,
				// 				"lowPrice": 1209,
				// 				"vol": 71500
				// 			},
				// 			{
				// 				"dayId": "20210319",
				// 				"startPrice": 1189,
				// 				"endPrice": 1195,
				// 				"highPrice": 1152,
				// 				"lowPrice": 1152,
				// 				"vol": 361000
				// 			},
				// 			{
				// 				"dayId": "20210318",
				// 				"startPrice": 1183,
				// 				"endPrice": 1194,
				// 				"highPrice": 1154,
				// 				"lowPrice": 1191,
				// 				"vol": 46200
				// 			},
				// 			{
				// 				"dayId": "20210317",
				// 				"startPrice": 1181,
				// 				"endPrice": 1183,
				// 				"highPrice": 1166,
				// 				"lowPrice": 1183,
				// 				"vol": 35400
				// 			},
				// 			{
				// 				"dayId": "20210316",
				// 				"startPrice": 1198,
				// 				"endPrice": 1203,
				// 				"highPrice": 1167,
				// 				"lowPrice": 1181,
				// 				"vol": 38000
				// 			},
				// 			{
				// 				"dayId": "20210315",
				// 				"startPrice": 1178,
				// 				"endPrice": 1212,
				// 				"highPrice": 1176,
				// 				"lowPrice": 1202,
				// 				"vol": 47300
				// 			},
				// 			{
				// 				"dayId": "20210312",
				// 				"startPrice": 1166,
				// 				"endPrice": 1178,
				// 				"highPrice": 1152,
				// 				"lowPrice": 1168,
				// 				"vol": 36000
				// 			},
				// 			{
				// 				"dayId": "20210311",
				// 				"startPrice": 1170,
				// 				"endPrice": 1176,
				// 				"highPrice": 1150,
				// 				"lowPrice": 1169,
				// 				"vol": 22800
				// 			},
				// 			{
				// 				"dayId": "20210310",
				// 				"startPrice": 1163,
				// 				"endPrice": 1170,
				// 				"highPrice": 1141,
				// 				"lowPrice": 1170,
				// 				"vol": 30800
				// 			},
				// 			{
				// 				"dayId": "20210309",
				// 				"startPrice": 1137,
				// 				"endPrice": 1185,
				// 				"highPrice": 1120,
				// 				"lowPrice": 1183,
				// 				"vol": 33100
				// 			},
				// 			{
				// 				"dayId": "20210308",
				// 				"startPrice": 1132,
				// 				"endPrice": 1138,
				// 				"highPrice": 1105,
				// 				"lowPrice": 1120,
				// 				"vol": 23500
				// 			},
				// 			{
				// 				"dayId": "20210305",
				// 				"startPrice": 1105,
				// 				"endPrice": 1133,
				// 				"highPrice": 1100,
				// 				"lowPrice": 1133,
				// 				"vol": 20200
				// 			}
				// 		]
				// 	}
				// },
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
			console.log("跳转接参", option.stockId)
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
		methods: {
			getServerData() {
				var that = this;
				console.log("替换URL", this.$baseUrl)
				uni.request({
					url: `${this.$baseUrl}/daily/kline?stockId=5013&day=180`,
					data: {},
					success: function(res) {
						// console.log("-----服务器获取数据：", res.data.data)
						// console.log("数据长度：", res.data.data.kLineDailyOutDto.length)
						// console.log("获取数据详情：", res.data.data.kLineDailyOutDto[0].dayId)
						let tempdata = res.data.data;
						that.SQLdata = res.data.data;
						// console.log("保存获取数据：", tempdata)
						// console.log("股票名称:", tempdata.stockName);
						that.dayLine();
					},
					fail: () => {
						_self.tips = "Error!";
						console.log("获取失败")
					},
				});
			},
			getWeek(dateString) {
				var dateArray = dateString.split("-");
				// console.log("日期分割：", dateArray)
				var day = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
				// return "周" + "日一二三四五六".charAt(day.getDay());
				var arr = [6, 0, 1, 2, 3, 4, 5]
				var res = arr[day.getDay()]
				// console.log("判断同一周：", this.compareDate())
				return res
			},
			getDateString(str) {
				//年
				var year = str.substr(0, 4); //第一位表示起始位，第二位表示个数
				var month = str.substr(4, 2)
				var day = str.substr(6, 2)
				var dateString = year + "-" + month + "-" + day
				return dateString;
			},
			//算前一天的方法 dataStr日期字符串 dayCount 要减的天数 return 减n天后的日期字符串
			preDate(dataStr, dayCount) {
				var dataStr = "2021-04-25";
				var dayCount = 1;
				var strdate = dataStr; //日期字符串
				var isdate = new Date(strdate.replace(/-/g, "/")); //把日期字符串转换成日期格式
				isdate = new Date((isdate / 1000 - (86400 * dayCount)) * 1000); //日期减1天
				var pdate = isdate.getFullYear() + "-" + (isdate.getMonth() + 1) + "-" + (isdate.getDate()); //把日期格式转换成字符串
				return pdate;
			},
			/**通过时间参数 判断是否在范围内 在范围内返回false  不在范围内更改范围并返回true
			 * @param {Object} dayId 时间参数
			 */
			newWeek(dayId) {
				var day1 = this.getDateString(dayId);
				var time1 = Date.parse(day1 + " 00:00:00");
				// console.log("时间戳::::", time1);
				// console.log("范围：",this.start,this.end);
				if (this.start == 0 || this.end == 0 || this.start > time1) {
					var daymark = this.getWeek(day1)
					// console.log("周几：：", daymark)
					this.start = time1 - (daymark - 0) * 24 * 60 * 60 * 1000;
					this.end = time1 + (6 - daymark) * 24 * 60 * 60 * 1000;
					return true;
				} else {
					return false;
				}
			},
			newMonth(dayId) {
				var day1 = this.getDateString(dayId);
				var time1 = Date.parse(day1 + " 00:00:00");
				// console.log("时间戳::::", time1);
				var year = dayId.substr(0, 4); //第一位表示起始位，第二位表示个数
				var month = dayId.substr(4, 2);
				var day0 = year + "-" + month + "-" + "01";
				// console.log("本月一号：：", day0)
				var time0 = Date.parse(day0 + " 00:00:00");
				// console.log("月初时间戳::::", time1);
				var day31 = this.getDateString(dayId);
				var time31 = Date.parse(day1 + " 23:59:59");
				// console.log("月末时间戳：：：", time31);
				if (this.start == 0 || this.end == 0 || this.start > time1) {
					this.start = time0;
					this.end = time31;
					return true;
				} else {
					return false;
				}
			},
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
				// console.log("kabu name:", this.Candle.series[0].name);
				canvaCandle = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'candle',
					reshow:true,
					fontSize: 11,
					padding: [10, 15, 0, 15],
					legend: {
						show: true,
						fontColor: '#ffffff',
					},
					background: '#000000',
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
								name: ['MA10', 'MA20'],
								day: [10, 20],
								color: ['#1890ff', '#2fc25b']
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
			},
			showCandleW(canvasId, chartData) {
				// console.log("kabu name:", this.Candle.series[0].name);
				canvaCandle = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'candle',
					reshow:true,
					fontSize: 11,
					padding: [10, 15, 0, 15],
					legend: {
						show: true,
						fontColor: '#ffffff',
					},
					background: '#000000',
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
								name: ['MA60', 'MA80'],
								day: [12, 16],
								color: ['#2fc25b', '#facc14']
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
			},
			showCandleM(canvasId, chartData) {
				// console.log("kabu name:", this.Candle.series[0].name);
				canvaCandle = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'candle',
					reshow:true,
					fontSize: 11,
					padding: [10, 15, 0, 15],
					legend: {
						show: true,
						fontColor: '#ffffff',
					},
					background: '#000000',
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
								name: ['MA60', 'MA80'],
								day: [3, 4],
								color: ['#2fc25b', '#facc14']
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
						this.dayLine();    //均线10，20
					} else if (this.current === 1) {
						this.weekLine();   //均线60,80
						setTimeout(function() {
							_self.showCandleW("canvasCandle1", _self.Candle);
							_self.showColumn("canvasColumn1", _self.CandleColumn);
						     }, 300)
					} else {
						this.monthLine();  //均线60,80
						setTimeout(function() {
							_self.showCandleM("canvasCandle2", _self.Candle);
							_self.showColumn("canvasColumn2", _self.CandleColumn);
						     }, 300)
					}
				}
			},
			sliderChange(){
				this.itemCount = this.itemCount +1;

			},
			onKeyInput: function(event) {
				this.inputValue = event.target.value
				console.log("id:", this.inputValue)
			},
			kabuSearch() {
				console.log("kabu  Search")
				var that = this;
				this.Candle = {
					categories: [],
					series: [{
						name: "",
						data: []
					}]
				};
				this.CandleColumn = {
					"categories": [],
					"series": [{
						"data": []
					}]
				};
				var searchid = this.inputValue;
				console.log('ID :', this.inputValue);
				var that = this;
				uni.request({
					url: this.$baseUrl + '/daily/kline?stockId=' + searchid + '&day=180',
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
						// console.log("-----服务器获取数据：", res.data.data)
						// console.log("数据长度：", res.data.data.kLineDailyOutDto.length)
						// console.log("获取数据详情：", res.data.data.kLineDailyOutDto[0].dayId)
						let searchTemp = res.data.data;
						that.SQLdata = res.data.data;
						// console.log("保存获取数据：", searchTemp)
						// console.log("股票名称:", searchTemp.stockName);
						that.dayLine();
					},
					fail: () => {
						_self.tips = "Error!";
						console.log("获取失败")
					},
				});

			},
			dayLine() {
				console.log("日K")
				this.Candle = {
					categories: [],
					series: [{
						name: "",
						data: []
					}]
				};
				this.CandleColumn = {
					"categories": [],
					"series": [{
						"data": []
					}]
				};
				var res = this.SQLdata; //使用模拟数据
				let tempdata = res;
				// console.log("保存服务器数据：：：：：：", this.SQLdata);
				// console.log("保存获取数据：", tempdata)
				// console.log("股票名称:", tempdata.stockName);
				let Ktemp = [];
				//获取股票名称，股票代码
				this.Candle.series[0].name = tempdata.stockName;
				this.Candle.series[0].ID = tempdata.stockId;
				console.log("股票名称:", this.Candle.series[0].name);
				console.log("股票代码:", this.Candle.series[0].ID);
				//处理Candle数据
				for (var i = 0; i < tempdata.kLineDailyOutDto.length; i++) {
					this.Candle.categories.push(tempdata.kLineDailyOutDto[i].dayId);
					var arr = [];
					arr.push(tempdata.kLineDailyOutDto[i].startPrice);
					arr.push(tempdata.kLineDailyOutDto[i].endPrice);
					arr.push(tempdata.kLineDailyOutDto[i].lowPrice);
					arr.push(tempdata.kLineDailyOutDto[i].highPrice);
					// console.log("arr:", arr)
					this.Candle.series[0].data.push(arr);
					// console.log("candle", this.Candle);
				};
				this.Candle.categories.sort();
				this.CandleColumn.categories = this.Candle.categories;
				this.Candle.series[0].data.reverse();
				console.log("Candle PUSH：", this.Candle);
				//处理Colunm数据
				for (var i = 0; i < tempdata.kLineDailyOutDto.length; i++) {
					// console.log("cloumn日期", this.CandleColumn.categories)
					var arr = [];
					this.CandleColumn.series[0].data.push(tempdata.kLineDailyOutDto[i].vol);
					// console.log("CandleColumn", this.CandleColumn);
				};
				this.CandleColumn.series[0].data.reverse();
				console.log("column PUSH：", this.CandleColumn);
				_self.showCandle("canvasCandle", this.Candle);
				_self.showColumn("canvasColumn", this.CandleColumn);
			},
			weekLine() { //周线
				console.log("周K")
				this.Candle = {
					categories: [],
					series: [{
						name: "",
						data: []
					}]
				};
				this.CandleColumn = {
					"categories": [],
					"series": [{
						"data": []
					}]
				};
				var res = this.SQLdata; //使用模拟数据
				let tempdata = res;
				// console.log("保存服务器数据：：：：：：", this.SQLdata);
				// console.log("保存获取数据：", tempdata)
				// console.log("股票名称:", tempdata.stockName);
				let Ktemp = [];
				//获取股票名称，股票代码
				this.Candle.series[0].name = tempdata.stockName;
				this.Candle.series[0].ID = tempdata.stockId;
				console.log("股票名称:", this.Candle.series[0].name);
				console.log("股票代码:", this.Candle.series[0].ID);
				this.getDateString(tempdata.kLineDailyOutDto[0].dayId);
				//原数据处理为周数据；
				var week = []
				//归零范围
				this.start = 0;
				this.end = 0;
				var weekMark = -1
				for (var i = 0; i < tempdata.kLineDailyOutDto.length; i++) {
					var isNewWeek = this.newWeek(tempdata.kLineDailyOutDto[i].dayId);
					// console.log(i, tempdata.kLineDailyOutDto[i].dayId, isNewWeek);
					if (isNewWeek && i != 0) {
						weekMark++;
						this.weekArr[weekMark] = week;
						week = [];
					}
					week.push(tempdata.kLineDailyOutDto[i]);
					// console.log("week", week);
					if (i == tempdata.kLineDailyOutDto.length - 1) {
						weekMark++;
						this.weekArr[weekMark] = week;
					}
				}
				// console.log("weekArr", this.weekArr);
				//按周处理
				for (i = 0; i < this.weekArr.length; i++) {
					this.Candle.categories.push(this.weekArr[i][this.weekArr[i].length - 1].dayId);
					// console.log('每周第一天：：：', this.weekArr[i][this.weekArr[i].length - 1].dayId)
					var arr = [];
					arr.push(this.weekArr[i][this.weekArr[i].length - 1].startPrice);
					arr.push(this.weekArr[i][0].endPrice);
					var lowPrice = 99999;
					var highPrice = 0;
					var vol = 0
					for (var j = 0; j < this.weekArr[i].length; j++) {
						if (this.weekArr[i][j].lowPrice < lowPrice) {
							lowPrice = this.weekArr[i][j].lowPrice
						}
						vol = vol + this.weekArr[i][j].vol
						if (this.weekArr[i][j].highPrice > highPrice) {
							highPrice = this.weekArr[i][j].highPrice
						}
					}
					arr.push(lowPrice);
					arr.push(highPrice);
					// console.log("单次数据：：：：", arr);
					this.Candle.series[0].data.push(arr);
					arr = [];
					this.CandleColumn.series[0].data.push(vol);
				}
				//调整数据顺序
				this.CandleColumn.series[0].data.reverse();
				this.Candle.categories.sort();
				this.CandleColumn.categories = this.Candle.categories;
				this.Candle.series[0].data.reverse();
				console.log("Candle PUSH：", this.Candle);
				console.log("column PUSH：", this.CandleColumn);
				// _self.showCandle("canvasCandle1", this.Candle);
				// _self.showColumn("canvasColumn1", this.CandleColumn);
			},
			monthLine() { //月线
				console.log("月K")
				var that = this;
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
				// console.log("-----服务器获取数据：", res.data.data)
				// console.log("数据长度：", res.data.data.kLineDailyOutDto.length)
				// console.log("获取数据详情：", res.data.data.kLineDailyOutDto[0].dayId)
				// let tempdata = res.data.data;
				var res = that.SQLdata; //使用模拟数据
				let tempdata = res;
				// console.log("保存获取数据：", tempdata)
				// console.log("股票名称:", tempdata.stockName);
				let Ktemp = [];
				//获取股票名称，股票代码
				that.Candle.series[0].name = tempdata.stockName;
				that.Candle.series[0].ID = tempdata.stockId;
				console.log("股票名称:", that.Candle.series[0].name);
				console.log("股票代码:", that.Candle.series[0].ID);
				that.getDateString(tempdata.kLineDailyOutDto[0].dayId);
				//原数据处理为月数据；
				var month = [];
				//归零范围
				this.start = 0;
				this.end = 0;
				var monthMark = -1
				for (var i = 0; i < tempdata.kLineDailyOutDto.length; i++) {
					var isNewMonth = this.newMonth(tempdata.kLineDailyOutDto[i].dayId);
					// console.log(i, tempdata.kLineDailyOutDto[i].dayId, isNewMonth);
					if (isNewMonth && i != 0) {
						monthMark++;
						this.monthArr[monthMark] = month;
						month = [];
					}
					month.push(tempdata.kLineDailyOutDto[i]);
					// console.log("循环判断push:", tempdata.kLineDailyOutDto[i])
					// console.log("month", month);
					if (i == tempdata.kLineDailyOutDto.length - 1) {
						monthMark++;
						this.monthArr[monthMark] = month;
					}
				}
				// console.log("monthArr", this.monthArr);
				//按周处理
				for (i = 0; i < this.monthArr.length; i++) {
					this.Candle.categories.push(this.monthArr[i][this.monthArr[i].length - 1].dayId);
					// console.log('每月第一天：：：', this.monthArr[i][this.monthArr[i].length - 1].dayId)
					var arr = [];
					arr.push(this.monthArr[i][this.monthArr[i].length - 1].startPrice);
					arr.push(this.monthArr[i][0].endPrice);
					var lowPrice = 99999;
					var highPrice = 0;
					var vol = 0
					for (var j = 0; j < this.monthArr[i].length; j++) {
						if (this.monthArr[i][j].lowPrice < lowPrice) {
							lowPrice = this.monthArr[i][j].lowPrice
						}
						vol = vol + this.monthArr[i][j].vol
						if (this.monthArr[i][j].highPrice > highPrice) {
							highPrice = this.monthArr[i][j].highPrice
						}
					}
					arr.push(lowPrice);
					arr.push(highPrice);
					// console.log("单次数据：：：：", arr);
					this.Candle.series[0].data.push(arr);
					arr = [];
					this.CandleColumn.series[0].data.push(vol);
				}
				this.CandleColumn.series[0].data.reverse();
				this.Candle.categories.sort();
				this.CandleColumn.categories = this.Candle.categories;
				this.Candle.series[0].data.reverse();
				console.log("Candle PUSH：", this.Candle);
				console.log("column PUSH：", this.CandleColumn);
				// _self.showCandle("canvasCandle2", this.Candle);
				// _self.showColumn("canvasColumn2", this.CandleColumn);
			},
			gotoSearch(stockId) {
				console.log("kabu  Search")
				var that = this;
				var searchid = stockId;
				console.log('跳转搜索ID :', stockId);
				var that = this;
				uni.request({
					url: this.$baseUrl + '/daily/kline?stockId=' + stockId + '&day=130',
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
						// console.log("-----服务器获取数据：", res.data.data)
						// console.log("数据长度：", res.data.data.kLineDailyOutDto.length)
						// console.log("获取数据详情：", res.data.data.kLineDailyOutDto[0].dayId)
						let searchTemp = res.data.data;
						that.SQLdata = res.data.data;
						// console.log("保存获取数据：", searchTemp)
						// console.log("股票名称:", searchTemp.stockName);
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
							// console.log("arr:", arr)
							that.Candle.series[0].data.push(arr);
							// console.log("candle", that.Candle);
						};
						that.Candle.categories.sort();
						that.CandleColumn.categories = that.Candle.categories;
						that.Candle.series[0].data.reverse();
						console.log("Candle PUSH：", that.Candle);
						//处理Colunm数据
						for (var i = 0; i < searchTemp.kLineDailyOutDto.length; i++) {
							// console.log("cloumn日期", that.CandleColumn.categories)
							var arr = [];
							that.CandleColumn.series[0].data.push(searchTemp.kLineDailyOutDto[i].vol);
							// console.log("CandleColumn", that.CandleColumn);
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
				// console.log("cahrtdata:", chartData)
				// console.log("canvasId:", canvasId)
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					reshow:true,
					padding: [10, 15, 0, 15],
					legend: {
						show: false,
					},
					fontSize: 11,
					background: '#000000',
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
	.page{
		height:100vh;
		background-color: #000000;
	}
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #000000;
	}
	.chart123{
		width: 800upx;
		height: 550upx;
	}
	.search-text {
		font-size: 14px;
		
		height: 60upx;
		width: 480upx;
	}

	.search-block {
		/* display: flex; */
		background-color: #000000;
		flex-direction: row;
		padding-top: 20px;
		padding-left: 60upx;
		position: relative;
		top: -32upx;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #000000;
		
	}

	.qiun-textarea {
		height: 300upx;
		background-color: #000000;
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
		background-color: #000000;
	}

	.charts2 {
		width: 750upx;
		height: 200upx;
		background-color: #000000;
	}
</style>
