muban.vfed.二级.title = 'h1&&Text;.fed-col-md3--span:eq(0)&&Text';
muban.vfed.二级.desc = '.fed-col-md3:eq(3)&&Text;;;.fed-col-md6:eq(0)&&Text;.fed-col-md6--span:eq(1)&&Text';
var rule = {
    title: '去看吧',
    模板: 'vfed',
    host: 'https://www.k9dm.com',
    // url: '/index.php/vod/show/id/fyclass/page/fypage.html',
    url: '/index.php/vod/show/id/fyclassfyfilter.html',
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.area}}{{fl.by}}{{fl.class}}/page/fypage{{fl.year}}',
    filter: {
        "33": [{
            "key": "class",
            "name": "类型",
            "value": [{"n": "全部", "v": ""}, {"n": "搞笑", "v": "/class/搞笑"}, {
                "n": "经典",
                "v": "/class/经典"
            }, {"n": "热血", "v": "/class/热血"}, {"n": "催泪", "v": "/class/催泪"}, {
                "n": "治愈",
                "v": "/class/治愈"
            }, {"n": "猎奇", "v": "/class/猎奇"}, {"n": "励志", "v": "/class/励志"}, {
                "n": "战斗",
                "v": "/class/战斗"
            }, {"n": "后宫", "v": "/class/后宫"}, {"n": "机战", "v": "/class/机战"}, {
                "n": "恋爱",
                "v": "/class/恋爱"
            }, {"n": "百合", "v": "/class/百合"}, {"n": "科幻", "v": "/class/科幻"}, {
                "n": "奇幻",
                "v": "/class/奇幻"
            }, {"n": "推理", "v": "/class/推理"}, {"n": "校园", "v": "/class/校园"}, {
                "n": "运动",
                "v": "/class/运动"
            }, {"n": "魔法", "v": "/class/魔法"}, {"n": "历史", "v": "/class/历史"}, {
                "n": "伪娘",
                "v": "/class/伪娘"
            }, {"n": "美少女", "v": "/class/美少女"}, {"n": "萝莉", "v": "/class/萝莉"}, {
                "n": "亲子",
                "v": "/class/亲子"
            }, {"n": "青春", "v": "/class/青春"}, {"n": "冒险", "v": "/class/冒险"}, {"n": "竞技", "v": "/class/竞技"}]
        }, {
            "key": "year",
            "name": "年代",
            "value": [{"n": "全部", "v": ""}, {"n": "2024", "v": "/year/2024"}, {
                "n": "2023",
                "v": "/year/2023"
            }, {"n": "2022", "v": "/year/2022"}, {"n": "2021", "v": "/year/2021"}, {
                "n": "2020",
                "v": "/year/2020"
            }, {"n": "2019", "v": "/year/2019"}, {"n": "2018", "v": "/year/2018"}, {
                "n": "2017",
                "v": "/year/2017"
            }, {"n": "2016", "v": "/year/2016"}, {"n": "2015", "v": "/year/2015"}, {
                "n": "2014",
                "v": "/year/2014"
            }, {"n": "2013", "v": "/year/2013"}, {"n": "2012", "v": "/year/2012"}, {
                "n": "2011",
                "v": "/year/2011"
            }, {"n": "2010", "v": "/year/2010"}, {"n": "2009", "v": "/year/2009"}, {
                "n": "2008",
                "v": "/year/2008"
            }, {"n": "2007", "v": "/year/2007"}, {"n": "2006", "v": "/year/2006"}, {
                "n": "2005",
                "v": "/year/2005"
            }, {"n": "2004", "v": "/year/2004"}, {"n": "2003", "v": "/year/2003"}, {
                "n": "2002",
                "v": "/year/2002"
            }, {"n": "2001", "v": "/year/2001"}, {"n": "2000", "v": "/year/2000"}, {
                "n": "1999",
                "v": "/year/1999"
            }, {"n": "1998", "v": "/year/1998"}]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{"n": "时间", "v": "/by/time"}, {"n": "人气", "v": "/by/hits"}, {"n": "评分", "v": "/by/score"}]
        }],
        "21": [{
            "key": "class",
            "name": "类型",
            "value": [{"n": "全部", "v": ""}, {"n": "搞笑", "v": "/class/搞笑"}, {
                "n": "经典",
                "v": "/class/经典"
            }, {"n": "热血", "v": "/class/热血"}, {"n": "催泪", "v": "/class/催泪"}, {
                "n": "治愈",
                "v": "/class/治愈"
            }, {"n": "猎奇", "v": "/class/猎奇"}, {"n": "励志", "v": "/class/励志"}, {
                "n": "战斗",
                "v": "/class/战斗"
            }, {"n": "后宫", "v": "/class/后宫"}, {"n": "机战", "v": "/class/机战"}, {
                "n": "恋爱",
                "v": "/class/恋爱"
            }, {"n": "百合", "v": "/class/百合"}, {"n": "科幻", "v": "/class/科幻"}, {
                "n": "奇幻",
                "v": "/class/奇幻"
            }, {"n": "推理", "v": "/class/推理"}, {"n": "校园", "v": "/class/校园"}, {
                "n": "运动",
                "v": "/class/运动"
            }, {"n": "魔法", "v": "/class/魔法"}, {"n": "历史", "v": "/class/历史"}, {
                "n": "伪娘",
                "v": "/class/伪娘"
            }, {"n": "美少女", "v": "/class/美少女"}, {"n": "萝莉", "v": "/class/萝莉"}, {
                "n": "亲子",
                "v": "/class/亲子"
            }, {"n": "青春", "v": "/class/青春"}, {"n": "冒险", "v": "/class/冒险"}, {"n": "竞技", "v": "/class/竞技"}]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{"n": "全部", "v": ""}, {"n": "大陆", "v": "/area/大陆"}, {
                "n": "美国",
                "v": "/area/美国"
            }, {"n": "韩国", "v": "/area/韩国"}, {"n": "日本", "v": "/area/日本"}, {
                "n": "泰国",
                "v": "/area/泰国"
            }, {"n": "新加坡", "v": "/area/新加坡"}, {"n": "马来西亚", "v": "/area/马来西亚"}, {
                "n": "印度",
                "v": "/area/印度"
            }, {"n": "英国", "v": "/area/英国"}, {"n": "法国", "v": "/area/法国"}, {
                "n": "加拿大",
                "v": "/area/加拿大"
            }, {"n": "西班牙", "v": "/area/西班牙"}, {"n": "俄罗斯", "v": "/area/俄罗斯"}, {
                "n": "其它",
                "v": "/area/其它"
            }]
        }, {
            "key": "year",
            "name": "年代",
            "value": [{"n": "全部", "v": ""}, {"n": "2024", "v": "/year/2024"}, {
                "n": "2023",
                "v": "/year/2023"
            }, {"n": "2022", "v": "/year/2022"}, {"n": "2021", "v": "/year/2021"}, {
                "n": "2020",
                "v": "/year/2020"
            }, {"n": "2019", "v": "/year/2019"}, {"n": "2018", "v": "/year/2018"}, {
                "n": "2017",
                "v": "/year/2017"
            }, {"n": "2016", "v": "/year/2016"}, {"n": "2015", "v": "/year/2015"}, {
                "n": "2014",
                "v": "/year/2014"
            }, {"n": "2013", "v": "/year/2013"}, {"n": "2012", "v": "/year/2012"}, {
                "n": "2011",
                "v": "/year/2011"
            }, {"n": "2010", "v": "/year/2010"}, {"n": "2009", "v": "/year/2009"}, {
                "n": "2008",
                "v": "/year/2008"
            }, {"n": "2007", "v": "/year/2007"}, {"n": "2006", "v": "/year/2006"}, {
                "n": "2005",
                "v": "/year/2005"
            }, {"n": "2004", "v": "/year/2004"}, {"n": "2003", "v": "/year/2003"}, {
                "n": "2002",
                "v": "/year/2002"
            }, {"n": "2001", "v": "/year/2001"}, {"n": "2000", "v": "/year/2000"}, {
                "n": "1999",
                "v": "/year/1999"
            }, {"n": "1998", "v": "/year/1998"}]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{"n": "时间", "v": "/by/time"}, {"n": "人气", "v": "/by/hits"}, {"n": "评分", "v": "/by/score"}]
        }],
        "50": [{
            "key": "class",
            "name": "类型",
            "value": [{"n": "全部", "v": ""}, {"n": "搞笑", "v": "/class/搞笑"}, {
                "n": "经典",
                "v": "/class/经典"
            }, {"n": "热血", "v": "/class/热血"}, {"n": "催泪", "v": "/class/催泪"}, {
                "n": "治愈",
                "v": "/class/治愈"
            }, {"n": "猎奇", "v": "/class/猎奇"}, {"n": "励志", "v": "/class/励志"}, {
                "n": "战斗",
                "v": "/class/战斗"
            }, {"n": "后宫", "v": "/class/后宫"}, {"n": "机战", "v": "/class/机战"}, {
                "n": "恋爱",
                "v": "/class/恋爱"
            }, {"n": "百合", "v": "/class/百合"}, {"n": "科幻", "v": "/class/科幻"}, {
                "n": "奇幻",
                "v": "/class/奇幻"
            }, {"n": "推理", "v": "/class/推理"}, {"n": "校园", "v": "/class/校园"}, {
                "n": "运动",
                "v": "/class/运动"
            }, {"n": "魔法", "v": "/class/魔法"}, {"n": "历史", "v": "/class/历史"}, {
                "n": "伪娘",
                "v": "/class/伪娘"
            }, {"n": "美少女", "v": "/class/美少女"}, {"n": "萝莉", "v": "/class/萝莉"}, {
                "n": "亲子",
                "v": "/class/亲子"
            }, {"n": "青春", "v": "/class/青春"}, {"n": "冒险", "v": "/class/冒险"}, {"n": "竞技", "v": "/class/竞技"}]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{"n": "全部", "v": ""}, {"n": "大陆", "v": "/area/大陆"}, {
                "n": "美国",
                "v": "/area/美国"
            }, {"n": "韩国", "v": "/area/韩国"}, {"n": "日本", "v": "/area/日本"}, {
                "n": "泰国",
                "v": "/area/泰国"
            }, {"n": "新加坡", "v": "/area/新加坡"}, {"n": "马来西亚", "v": "/area/马来西亚"}, {
                "n": "印度",
                "v": "/area/印度"
            }, {"n": "英国", "v": "/area/英国"}, {"n": "法国", "v": "/area/法国"}, {
                "n": "加拿大",
                "v": "/area/加拿大"
            }, {"n": "西班牙", "v": "/area/西班牙"}, {"n": "俄罗斯", "v": "/area/俄罗斯"}, {
                "n": "其它",
                "v": "/area/其它"
            }]
        }, {
            "key": "year",
            "name": "年代",
            "value": [{"n": "全部", "v": ""}, {"n": "2024", "v": "/year/2024"}, {
                "n": "2023",
                "v": "/year/2023"
            }, {"n": "2022", "v": "/year/2022"}, {"n": "2021", "v": "/year/2021"}, {
                "n": "2020",
                "v": "/year/2020"
            }, {"n": "2019", "v": "/year/2019"}, {"n": "2018", "v": "/year/2018"}, {
                "n": "2017",
                "v": "/year/2017"
            }, {"n": "2016", "v": "/year/2016"}, {"n": "2015", "v": "/year/2015"}, {
                "n": "2014",
                "v": "/year/2014"
            }, {"n": "2013", "v": "/year/2013"}, {"n": "2012", "v": "/year/2012"}, {
                "n": "2011",
                "v": "/year/2011"
            }, {"n": "2010", "v": "/year/2010"}, {"n": "2009", "v": "/year/2009"}, {
                "n": "2008",
                "v": "/year/2008"
            }, {"n": "2007", "v": "/year/2007"}, {"n": "2006", "v": "/year/2006"}, {
                "n": "2005",
                "v": "/year/2005"
            }, {"n": "2004", "v": "/year/2004"}, {"n": "2003", "v": "/year/2003"}, {
                "n": "2002",
                "v": "/year/2002"
            }, {"n": "2001", "v": "/year/2001"}, {"n": "2000", "v": "/year/2000"}, {
                "n": "1999",
                "v": "/year/1999"
            }, {"n": "1998", "v": "/year/1998"}]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{"n": "时间", "v": "/by/time"}, {"n": "人气", "v": "/by/hits"}, {"n": "评分", "v": "/by/score"}]
        }],
        "24": [{
            "key": "class",
            "name": "类型",
            "value": [{"n": "全部", "v": ""}, {"n": "搞笑", "v": "/class/搞笑"}, {
                "n": "经典",
                "v": "/class/经典"
            }, {"n": "热血", "v": "/class/热血"}, {"n": "催泪", "v": "/class/催泪"}, {
                "n": "治愈",
                "v": "/class/治愈"
            }, {"n": "猎奇", "v": "/class/猎奇"}, {"n": "励志", "v": "/class/励志"}, {
                "n": "战斗",
                "v": "/class/战斗"
            }, {"n": "后宫", "v": "/class/后宫"}, {"n": "机战", "v": "/class/机战"}, {
                "n": "恋爱",
                "v": "/class/恋爱"
            }, {"n": "百合", "v": "/class/百合"}, {"n": "科幻", "v": "/class/科幻"}, {
                "n": "奇幻",
                "v": "/class/奇幻"
            }, {"n": "推理", "v": "/class/推理"}, {"n": "校园", "v": "/class/校园"}, {
                "n": "运动",
                "v": "/class/运动"
            }, {"n": "魔法", "v": "/class/魔法"}, {"n": "历史", "v": "/class/历史"}, {
                "n": "伪娘",
                "v": "/class/伪娘"
            }, {"n": "美少女", "v": "/class/美少女"}, {"n": "萝莉", "v": "/class/萝莉"}, {
                "n": "亲子",
                "v": "/class/亲子"
            }, {"n": "青春", "v": "/class/青春"}, {"n": "冒险", "v": "/class/冒险"}, {"n": "竞技", "v": "/class/竞技"}]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{"n": "全部", "v": ""}, {"n": "大陆", "v": "/area/大陆"}, {
                "n": "美国",
                "v": "/area/美国"
            }, {"n": "韩国", "v": "/area/韩国"}, {"n": "日本", "v": "/area/日本"}, {
                "n": "泰国",
                "v": "/area/泰国"
            }, {"n": "新加坡", "v": "/area/新加坡"}, {"n": "马来西亚", "v": "/area/马来西亚"}, {
                "n": "印度",
                "v": "/area/印度"
            }, {"n": "英国", "v": "/area/英国"}, {"n": "法国", "v": "/area/法国"}, {
                "n": "加拿大",
                "v": "/area/加拿大"
            }, {"n": "西班牙", "v": "/area/西班牙"}, {"n": "俄罗斯", "v": "/area/俄罗斯"}, {
                "n": "其它",
                "v": "/area/其它"
            }]
        }, {
            "key": "year",
            "name": "年代",
            "value": [{"n": "全部", "v": ""}, {"n": "2024", "v": "/year/2024"}, {
                "n": "2023",
                "v": "/year/2023"
            }, {"n": "2022", "v": "/year/2022"}, {"n": "2021", "v": "/year/2021"}, {
                "n": "2020",
                "v": "/year/2020"
            }, {"n": "2019", "v": "/year/2019"}, {"n": "2018", "v": "/year/2018"}, {
                "n": "2017",
                "v": "/year/2017"
            }, {"n": "2016", "v": "/year/2016"}, {"n": "2015", "v": "/year/2015"}, {
                "n": "2014",
                "v": "/year/2014"
            }, {"n": "2013", "v": "/year/2013"}, {"n": "2012", "v": "/year/2012"}, {
                "n": "2011",
                "v": "/year/2011"
            }, {"n": "2010", "v": "/year/2010"}, {"n": "2009", "v": "/year/2009"}, {
                "n": "2008",
                "v": "/year/2008"
            }, {"n": "2007", "v": "/year/2007"}, {"n": "2006", "v": "/year/2006"}, {
                "n": "2005",
                "v": "/year/2005"
            }, {"n": "2004", "v": "/year/2004"}, {"n": "2003", "v": "/year/2003"}, {
                "n": "2002",
                "v": "/year/2002"
            }, {"n": "2001", "v": "/year/2001"}, {"n": "2000", "v": "/year/2000"}, {
                "n": "1999",
                "v": "/year/1999"
            }, {"n": "1998", "v": "/year/1998"}]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{"n": "时间", "v": "/by/time"}, {"n": "人气", "v": "/by/hits"}, {"n": "评分", "v": "/by/score"}]
        }],
        "22": [{
            "key": "class",
            "name": "类型",
            "value": [{"n": "全部", "v": ""}, {"n": "搞笑", "v": "/class/搞笑"}, {
                "n": "经典",
                "v": "/class/经典"
            }, {"n": "热血", "v": "/class/热血"}, {"n": "催泪", "v": "/class/催泪"}, {
                "n": "治愈",
                "v": "/class/治愈"
            }, {"n": "猎奇", "v": "/class/猎奇"}, {"n": "励志", "v": "/class/励志"}, {
                "n": "战斗",
                "v": "/class/战斗"
            }, {"n": "后宫", "v": "/class/后宫"}, {"n": "机战", "v": "/class/机战"}, {
                "n": "恋爱",
                "v": "/class/恋爱"
            }, {"n": "百合", "v": "/class/百合"}, {"n": "科幻", "v": "/class/科幻"}, {
                "n": "奇幻",
                "v": "/class/奇幻"
            }, {"n": "推理", "v": "/class/推理"}, {"n": "校园", "v": "/class/校园"}, {
                "n": "运动",
                "v": "/class/运动"
            }, {"n": "魔法", "v": "/class/魔法"}, {"n": "历史", "v": "/class/历史"}, {
                "n": "伪娘",
                "v": "/class/伪娘"
            }, {"n": "美少女", "v": "/class/美少女"}, {"n": "萝莉", "v": "/class/萝莉"}, {
                "n": "亲子",
                "v": "/class/亲子"
            }, {"n": "青春", "v": "/class/青春"}, {"n": "冒险", "v": "/class/冒险"}, {"n": "竞技", "v": "/class/竞技"}]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{"n": "全部", "v": ""}, {"n": "日本", "v": "/area/日本"}, {
                "n": "欧美",
                "v": "/area/欧美"
            }, {"n": "其他", "v": "/area/其他"}]
        }, {
            "key": "year",
            "name": "年代",
            "value": [{"n": "全部", "v": ""}, {"n": "2024", "v": "/year/2024"}, {
                "n": "2023",
                "v": "/year/2023"
            }, {"n": "2022", "v": "/year/2022"}, {"n": "2021", "v": "/year/2021"}, {
                "n": "2020",
                "v": "/year/2020"
            }, {"n": "2019", "v": "/year/2019"}, {"n": "2018", "v": "/year/2018"}, {
                "n": "2017",
                "v": "/year/2017"
            }, {"n": "2016", "v": "/year/2016"}, {"n": "2015", "v": "/year/2015"}, {
                "n": "2014",
                "v": "/year/2014"
            }, {"n": "2013", "v": "/year/2013"}, {"n": "2012", "v": "/year/2012"}, {
                "n": "2011",
                "v": "/year/2011"
            }, {"n": "2010", "v": "/year/2010"}, {"n": "2009", "v": "/year/2009"}, {
                "n": "2008",
                "v": "/year/2008"
            }, {"n": "2007", "v": "/year/2007"}, {"n": "2006", "v": "/year/2006"}, {
                "n": "2005",
                "v": "/year/2005"
            }, {"n": "2004", "v": "/year/2004"}, {"n": "2003", "v": "/year/2003"}, {
                "n": "2002",
                "v": "/year/2002"
            }, {"n": "2001", "v": "/year/2001"}, {"n": "2000", "v": "/year/2000"}, {
                "n": "1999",
                "v": "/year/1999"
            }, {"n": "1998", "v": "/year/1998"}]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{"n": "时间", "v": "/by/time"}, {"n": "人气", "v": "/by/hits"}, {"n": "评分", "v": "/by/score"}]
        }]
    },
    class_parse: '.fed-pops-list:eq(0)&&li:gt(0):lt(6);a&&Text;a&&href;.*/(.*?).html',
}