// 纯数据展现情况列表
import React from 'react';

import FeatureSetConfig from '../components/FeatureSetConfig';

import Immutable from 'immutable';
import Reqwest from 'reqwest';

import testData from '../common/test-data';

const graph_conf = {
    
    type: 'graphList', // tableList graphList simpleObject complexObject 
    EchartStyle: {
        width: '100%',
        height: '450px'
    },

    // 初始化展现的数据，使用callback 回传列表数据
    // 需要手动添加唯一id key
    // callback 组件数据的回调函数(接受列表数据参数)
    initData: function(callback){
       
       // 模拟数据
       setTimeout(function(){
            let series = testData.graphList;
            series.forEach(function(item) {
                item.type = 'line';
                item.stack = '总量'
            });

            callback(series);
       }, 1000)
    },
        
    // 参考echarts 参数
    option : {
        title: {
            text: '堆叠区域图'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
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
        ]
    }

};

const graph_conf2 = {
    
    type: 'graphList', // tableList graphList simpleObject complexObject 
    EchartStyle: {
        width: '100%',
        height: '450px'
    },

    // 初始化展现的数据，使用callback 回传列表数据
    // 需要手动添加唯一id key
    // callback 组件数据的回调函数(接受列表数据参数)
    initData: function(callback){
       
        // 模拟数据
        setTimeout(function(){
            let series = [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]

            callback(series);
       }, 1000)
    },
        
    // 参考echarts 参数
    option : {
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        }
    }

};

const table_conf = {
    
    type: 'tableList', // tableList graphList simpleObject complexObject 

    // 初始化展现的数据，使用callback 回传列表数据
    // 需要手动添加唯一id key
    // callback 组件数据的回调函数(接受列表数据参数)
    initData: function(callback){
       
       // 模拟数据
       setTimeout(function(){
            let list = testData.tableList;
            list.forEach(function(ele) {
                ele.key = ele.docid;
            });
            callback(list);
       }, 1000)
    },
        
    columns: [
        {
            title: 'DOCID',     // table header 文案
            dataIndex: 'docid', // 数据对象内的属性，也做react vdom 的key
            type: 'string',     // table 内显示的类型
            sort: true,         // 是否需要排序
            width:200
        }, {
            title: '标题',
            dataIndex: 'title',
            type: 'string'
        }, {
            title: '链接',
            dataIndex: 'link',
            type: 'link',
            render: (text) => ( <span>
                                    <a href={text}>链接</a>
                                </span>),
            width: 50
        },{
            title: '日期',
            dataIndex: 'date',
            type: 'string',
            width: 150
        },{
            title: '图片',
            dataIndex: 'img',
            type: 'image'
        }
    ]

};

const Feature1 = FeatureSetConfig(graph_conf2);
const Feature2 = FeatureSetConfig(graph_conf);
const Feature3 = FeatureSetConfig(table_conf);

const Feature = React.createClass({

        render: function() {
            return  <div>
                        <Feature1 />
                        <Feature2 />
                        <Feature3 />
                    </div>
        }
    });

export default Feature;
