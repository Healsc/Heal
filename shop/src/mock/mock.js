import Mock from 'mockjs'
import data from './data.json'
Mock.mock('http://www.baidu.com/getList',{data:data.list});
/* Mock.mock('http://www.baidu.com/getInfo',{
    'name|2':"zhangsam",
    'age|18-23':20
}) */