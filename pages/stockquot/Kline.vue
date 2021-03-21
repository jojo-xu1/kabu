<template>
	<view>
		<view class="search-block">
			<input id="IDsearch" type="text" value="" placeholder="kabu code..." class="search-text" @input="onKeyInput"
			 @confirm="kabuSearch" maxlength="6" focus />
		</view>
		<view style="flex: 1; ">
			{{chartData1.series[0].name}} {{chartData1.series[0].ID}}
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
				<!--					<view class="qiun-columns">
						<view class="qiun-charts">
							<canvas canvas-id="canvasCandle" id="canvasCandle" class="charts" disable-scroll=true @touchstart="touchCandle" @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
						</view>
						<view class="qiun-padding qiun-bg-white ">
							<slider :value="itemCount" min="5" :max="sliderMax" block-color="#f8f8f8" block-size="18" @changing="sliderMove" @change="sliderMove"/>
						</view>
					</view> -->
			</view>
			<view v-show="current === 2">
				<!-- 					<view class="qiun-columns">
						<view class="qiun-charts">
							<canvas canvas-id="canvasCandle" id="canvasCandle" class="charts" disable-scroll=true @touchstart="touchCandle" @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
						</view>
						<view class="qiun-padding qiun-bg-white ">
							<slider :value="itemCount" min="5" :max="sliderMax" block-color="#f8f8f8" block-size="18" @changing="sliderMove" @change="sliderMove"/>
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
				items: ['1日', '1週', '1か月'],
				current: 0,
				pixelRatio: 1,
				serverData: '',
				itemCount: 20, //x轴单屏数据密度
				sliderMax: 50,
				IDsearch: "",
				chartData: {},
				categories: [],
				series: [{
					name: "",
					ID: "",
					data: []
				}],
				chartData1: { //后台调取数据需清空
					categories: ['20190501', '2019/5/2', '2019/5/3', '2019/5/4', '2019/5/5', '2019/5/6',
						'2019/5/7', '2019/5/8', '2019/5/9', '2019/5/10', '2019/5/11', '2019/5/12', '2019/5/13', '2019/5/14',
						'2019/5/15', '2019/5/16', '2019/5/17', '2019/5/18', '2019/5/19', '2019/5/20', '2019/5/21', '2019/5/22',
						'2019/5/23', '2019/5/24', '2019/5/25', '2019/5/26', '2019/5/27', '2019/5/2', '2019/5/29', '2019/5/30',
						'2019/5/31', '2019/6/1'
					],
					series: [{
						name: '日清食品ホールディングス(株)',
						ID: "2897",
						data: [ //开盘，收盘，最低，最高
							[2320.26, 2302.6, 2287.3, 2362.94],
							[2300, 2291.3, 2288.26, 2308.38],
							[2376.35, 2336.5, 2335.35, 2426.92],
							[2347.22, 2358.98, 2337.35, 2363.8],
							[2370.75, 2382.48, 2347.89, 2383.76],
							[2363.43, 2385.42, 2360.23, 2386.82],
							[2277.41, 2419.02, 2369.57, 2421.15],
							[2483.43, 2385.42, 2371.23, 2379.82],
							[2277.41, 2419.02, 2369.57, 2421.15],
							[2380, 2391.3, 2288.26, 2308.38],
							[2365.35, 2346.5, 2395.35, 2346.92],
							[2447.22, 2358.98, 2337.35, 2363.8],
							[2330.75, 2382.48, 2347.89, 2383.76],
							[2383.43, 2385.42, 2371.23, 2391.82],
							[2377.41, 2419.02, 2369.57, 2421.15],
							[2373.43, 2385.42, 2371.23, 2391.82],
							[2375.41, 2359.02, 2369.57, 2421.15],
							[2343.43, 2385.42, 2371.23, 2391.82],
							[2407.41, 2411.02, 2369.57, 2421.15],
							[2303.43, 2407.42, 2371.23, 2391.82],
							[2287.41, 2401.02, 2369.57, 2421.15],
							[2303.43, 2396.42, 2371.23, 2391.82],
							[2397.41, 2399.02, 2369.57, 2421.15],
							[2413.43, 2390.42, 2371.23, 2391.82],
							[2357.41, 2394.02, 2369.57, 2421.15],
							[2333.43, 2397.42, 2371.23, 2391.82],
							[2339.41, 2407.02, 2369.57, 2421.15],
							[2343.43, 2396.42, 2371.23, 2391.82],
							[2345.41, 2401.02, 2369.57, 2421.15],
							[2349.43, 2408.42, 2371.23, 2391.82],
							[2346.41, 2419.02, 2369.57, 2421.15],
							[2348, 2291.3, 2288.26, 2308.38],
						]
					}]
				},
				chartData2: { //后台调取数据需清空
					categories: ['2019/5/1', '2019/5/2', '2019/5/3', '2019/5/4', '2019/5/5', '2019/5/6',
						'2019/5/7', '2019/5/8', '2019/5/9', '2019/5/10'
					],
					series: [{
						name: 'J T ',
						ID: "2914",
						data: [ //开盘，收盘，最低，最高
							[2320.26, 2302.6, 2287.3, 2362.94],
							[2300, 2291.3, 2288.26, 2308.38],
							[2376.35, 2336.5, 2335.35, 2426.92],
							[2347.22, 2358.98, 2337.35, 2363.8],
							[2370.75, 2382.48, 2347.89, 2383.76],
							[2363.43, 2385.42, 2360.23, 2386.82],
							[2277.41, 2419.02, 2369.57, 2421.15],
							[2483.43, 2385.42, 2371.23, 2379.82],
							[2277.41, 2419.02, 2369.57, 2421.15],
							[2380, 2391.3, 2288.26, 2308.38],
						]
					}]
				},
				Candle: {
					"categories": [
						"2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
						"2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6",
						"2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20",
						"2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27",
						"2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6",
						"2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13",
						"2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20",
						"2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27",
						"2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3",
						"2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12",
						"2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19",
						"2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26",
						"2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8",
						"2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15",
						"2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22",
						"2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29",
						"2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5",
						"2013/6/6", "2013/6/7", "2013/6/13"
					],
					"series": [{
						"name": "上证指数",
						"data": [
							[2320.26, 2302.6, 2287.3, 2362.94],
							[2300, 2291.3, 2288.26, 2308.38],
							[2295.35, 2346.5, 2295.35, 2346.92],
							[2347.22, 2358.98, 2337.35, 2363.8],
							[2360.75, 2382.48, 2347.89, 2383.76],
							[2383.43, 2385.42, 2371.23, 2391.82],
							[2377.41, 2419.02, 2369.57, 2421.15],
							[2425.92, 2428.15, 2417.58, 2440.38],
							[2411, 2433.13, 2403.3, 2437.42],
							[2432.68, 2434.48, 2427.7, 2441.73],
							[2430.69, 2418.53, 2394.22, 2433.89],
							[2416.62, 2432.4, 2414.4, 2443.03],
							[2441.91, 2421.56, 2415.43, 2444.8],
							[2420.26, 2382.91, 2373.53, 2427.07],
							[2383.49, 2397.18, 2370.61, 2397.94],
							[2378.82, 2325.95, 2309.17, 2378.82],
							[2322.94, 2314.16, 2308.76, 2330.88],
							[2320.62, 2325.82, 2315.01, 2338.78],
							[2313.74, 2293.34, 2289.89, 2340.71],
							[2297.77, 2313.22, 2292.03, 2324.63],
							[2322.32, 2365.59, 2308.92, 2366.16],
							[2364.54, 2359.51, 2330.86, 2369.65],
							[2332.08, 2273.4, 2259.25, 2333.54],
							[2274.81, 2326.31, 2270.1, 2328.14],
							[2333.61, 2347.18, 2321.6, 2351.44],
							[2340.44, 2324.29, 2304.27, 2352.02],
							[2326.42, 2318.61, 2314.59, 2333.67],
							[2314.68, 2310.59, 2296.58, 2320.96],
							[2309.16, 2286.6, 2264.83, 2333.29],
							[2282.17, 2263.97, 2253.25, 2286.33],
							[2255.77, 2270.28, 2253.31, 2276.22],
							[2269.31, 2278.4, 2250, 2312.08],
							[2267.29, 2240.02, 2239.21, 2276.05],
							[2244.26, 2257.43, 2232.02, 2261.31],
							[2257.74, 2317.37, 2257.42, 2317.86],
							[2318.21, 2324.24, 2311.6, 2330.81],
							[2321.4, 2328.28, 2314.97, 2332],
							[2334.74, 2326.72, 2319.91, 2344.89],
							[2318.58, 2297.67, 2281.12, 2319.99],
							[2299.38, 2301.26, 2289, 2323.48],
							[2273.55, 2236.3, 2232.91, 2273.55],
							[2238.49, 2236.62, 2228.81, 2246.87],
							[2229.46, 2234.4, 2227.31, 2243.95],
							[2234.9, 2227.74, 2220.44, 2253.42],
							[2232.69, 2225.29, 2217.25, 2241.34],
							[2196.24, 2211.59, 2180.67, 2212.59],
							[2215.47, 2225.77, 2215.47, 2234.73],
							[2224.93, 2226.13, 2212.56, 2233.04],
							[2236.98, 2219.55, 2217.26, 2242.48],
							[2218.09, 2206.78, 2204.44, 2226.26],
							[2199.91, 2181.94, 2177.39, 2204.99],
							[2169.63, 2194.85, 2165.78, 2196.43],
							[2195.03, 2193.8, 2178.47, 2197.51],
							[2181.82, 2197.6, 2175.44, 2206.03],
							[2201.12, 2244.64, 2200.58, 2250.11],
							[2236.4, 2242.17, 2232.26, 2245.12],
							[2242.62, 2184.54, 2182.81, 2242.62],
							[2187.35, 2218.32, 2184.11, 2226.12],
							[2213.19, 2199.31, 2191.85, 2224.63],
							[2203.89, 2177.91, 2173.86, 2210.58],
							[2170.78, 2174.12, 2161.14, 2179.65],
							[2179.05, 2205.5, 2179.05, 2222.81],
							[2212.5, 2231.17, 2212.5, 2236.07],
							[2227.86, 2235.57, 2219.44, 2240.26],
							[2242.39, 2246.3, 2235.42, 2255.21],
							[2246.96, 2232.97, 2221.38, 2247.86],
							[2228.82, 2246.83, 2225.81, 2247.67],
							[2247.68, 2241.92, 2231.36, 2250.85],
							[2238.9, 2217.01, 2205.87, 2239.93],
							[2217.09, 2224.8, 2213.58, 2225.19],
							[2221.34, 2251.81, 2210.77, 2252.87],
							[2249.81, 2282.87, 2248.41, 2288.09],
							[2286.33, 2299.99, 2281.9, 2309.39],
							[2297.11, 2305.11, 2290.12, 2305.3],
							[2303.75, 2302.4, 2292.43, 2314.18],
							[2293.81, 2275.67, 2274.1, 2304.95],
							[2281.45, 2288.53, 2270.25, 2292.59],
							[2286.66, 2293.08, 2283.94, 2301.7],
							[2293.4, 2321.32, 2281.47, 2322.1],
							[2323.54, 2324.02, 2321.17, 2334.33],
							[2316.25, 2317.75, 2310.49, 2325.72],
							[2320.74, 2300.59, 2299.37, 2325.53],
							[2300.21, 2299.25, 2294.11, 2313.43],
							[2297.1, 2272.42, 2264.76, 2297.1],
							[2270.71, 2270.93, 2260.87, 2276.86],
							[2264.43, 2242.11, 2240.07, 2266.69],
							[2242.26, 2210.9, 2205.07, 2250.63],
							[2190.1, 2148.35, 2126.22, 2190.1]
						]
					}]
				},
				CandleColumn: {
					"categories": [
						"2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
						"2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6",
						"2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20",
						"2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27",
						"2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6",
						"2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13",
						"2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20",
						"2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27",
						"2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3",
						"2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12",
						"2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19",
						"2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26",
						"2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8",
						"2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15",
						"2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22",
						"2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29",
						"2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5",
						"2013/6/6", "2013/6/7", "2013/6/13"
					],
					"series": [{
						"name": "成交量1",
						"data": [15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20,
							45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20,
							45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20,
							45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20,
							45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45
						]
					}]
				}
			}
		},
		onLoad() {
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
			// this.getServerData();
			_self.showCandle("canvasCandle", this.Candle);
			_self.showColumn("canvasColumn", this.CandleColumn);
		},
		methods: {
			// getServerData() {
			// 	uni.request({
			// 		url: 'https://www.ucharts.cn/data.json',
			// 		data: {},
			// 		success: function(res) {
			// 			console.log(res.data.data)
			// 			let Candle = {
			// 				categories: [],
			// 				series: []
			// 			};
			// 			//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
			// 			Candle.categories = res.data.data.Candle.categories;
			// 			Candle.series = res.data.data.Candle.series;
			// 			_self.showCandle("canvasCandle", Candle);
			// 		},
			// 		fail: () => {
			// 			_self.tips = "网络错误，小程序端请检查合法域名";
			// 		},
			// 	});
			// },
			showCandle(canvasId, chartData) {
				console.log("kabu name:", this.chartData1.series[0].name);
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
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
					if (this.current === 0) {
						this.chartData = this.chartData1
						console.log("data1:", this.chartData)
						this.showCandle("canvasCandle", this.chartData)
					} else if (this.current === 1) {
						this.chartData = this.chartData2
						console.log("data2:", this.chartData)
						this.showCandle("canvasCandle", this.chartData)
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
				if (searchid === '2897') {
					this.ChartData1 = this.Candle;
					console.log("chartdata:", this.ChartData)
					this.showCandle("canvasCandle", this.chartData)
					this.chartData1.series[0].name = "日清食品ホールディングス(株)"
					this.chartData1.series[0].ID = "2897"
				} else if (searchid === '2914') {
					this.ChartData = this.chartData2;
					console.log("chartdata:", this.ChartData)
					this.showCandle("canvasCandle", this.chartData2)
					this.chartData1.series[0].name = "ＪＴ"
					this.chartData1.series[0].ID = "2914"
				}
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
