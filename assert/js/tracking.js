
/**************************雷达图**************************/
radar = document.getElementById('radar-map');

optionRadar = {
    title: {
        text: '雷达图'
    },
    tooltip: {},
    legend: {
        data: ['各项总任务', '各项已完成']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '很重要\n很紧急', max: 10},
           { name: '很重要\n不紧急', max: 10},
           { name: '不重要\n不紧急', max: 10},
           { name: '不重要\n很紧急', max: 10}
        ]
    },
    series: [{
        name: '各项总任务 vs 各项已完成',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [8, 3, 5, 4],
                name : '各项总任务'
            },
             {
                value : [5, 1, 5, 0],
                name : '各项已完成'
            }
        ]
    }]
    // media: [ // 这里定义了 media query 的逐条规则。
    //     {
    //         query: {maxWidth: 500 },   // 这里写规则。
    //         option: {       // 这里写此规则满足下的option。
    //             legend: {
    //                 right: 'center',
    //                 bottom: 0,
    //                 orient: 'horizontal'    // legend 横向布局。
    //             },
    //             series: [                  
    //                 {
    //                     radius: [20, '50%'],
    //                     center: ['50%', '30%']
    //                 }
    //             ]
    //         }
    //     }
    // ]
};



$(document).ready(function(){
    radar.style.height = radar.clientWidth * 1 + "px";
    myRadar = echarts.init(radar);
    myRadar.setOption(optionRadar);
    $("#radar-map div").css({"overflow":"scroll"});
});

window.addEventListener("resize", function () {
    radar.style.height = radar.clientWidth * 1 + "px";
    myRadar.resize();
});



/**************************燃尽图**************************/
burnout = document.getElementById('burnout-map');

optionBurnout = {
    title: {
        text: '燃尽图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['理想燃尽','实际工作量']
    },
    toolbox: {
        feature: {
            // saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '8%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'理想燃尽',
            type:'line',
            // stack: '总量',
            areaStyle: {normal: {}},
            data:[100, 83 , 66, 49, 32, 15, 0]
        },
        {
            name:'实际工作量',
            type:'line',
            // stack: '总量',
            areaStyle: {normal: {}},
            data:[100, 96, 80, 70, 50, 40,0]
        }
        // {
        //     name:'视频广告',
        //     type:'line',
        //     stack: '总量',
        //     areaStyle: {normal: {}},
        //     data:[150, 232, 201, 154, 190, 330, 410]
        // },
        // {
        //     name:'直接访问',
        //     type:'line',
        //     stack: '总量',
        //     areaStyle: {normal: {}},
        //     data:[320, 332, 301, 334, 390, 330, 320]
        // },
        // {
        //     name:'搜索引擎',
        //     type:'line',
        //     stack: '总量',
        //     label: {
        //         normal: {
        //             show: true,
        //             position: 'top'
        //         }
        //     },
        //     areaStyle: {normal: {}},
        //     data:[820, 932, 901, 934, 1290, 1330, 1320]
        // }
    ]
};

$(document).ready(function(){
    burnout.style.height = burnout.clientWidth * 1 + "px";
    myBurnout = echarts.init(burnout);
    myBurnout.setOption(optionBurnout);
    $("#burnout-map div").css({"overflow":"scroll"});
});

window.addEventListener("resize", function () {
    burnout.style.height = burnout.clientWidth * 1 + "px";
    myBurnout.resize();
});


/********************甘特图***************** */
gantt = document.getElementById('gantt-map');

optionGantt = {
    title: {
        text: '甘特图',
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '8%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        type : 'value',
    },{
        type : 'category',
        splitLine: {show:false},
        data : ['周一','周二','周三','周四','周五','周六','周日']
    }],
    yAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['任务一','任务二','任务三','任务四','任务五']
  
    },
    series: [
        {
            name: '开始',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [1700, 1400, 1200, 300, 0]
        },
        {
            name: '结束',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[1200, 300, 200, 900, 300]
        }
    ]
};

$(document).ready(function(){
    gantt.style.height = gantt.clientWidth * 1 + "px";
    myGantt = echarts.init(gantt);
    myGantt.setOption(optionGantt);
    $("#gantt-map div").css({"overflow":"scroll"});
});

window.addEventListener("resize", function () {
    gantt.style.height = gantt.clientWidth * 1 + "px";
    myGantt.resize();
});
