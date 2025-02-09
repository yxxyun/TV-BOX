var rule = {
    title: '花子动漫[漫]',
    host: 'https://www.huazidm.com',
    class_name: 'TV动漫&剧场&特摄',
    class_url: '1&2&3',
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**&limit=50',
    searchUrl: '/vodsearch/**----------fypage---.html',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    url: '/index.php/api/vod#type=fyclassfyfilter&page=fypage',
    filterable: 0,
    filter_url: '&class={{fl.class}}&year={{fl.year}}&letter={{fl.letter}}&by={{fl.by}}',
    filter: {
        "1": [{
            "key": "class",
            "name": "类型",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "异世界",
                "v": "异世界"
            }, {
                "n": "百合",
                "v": "百合"
            }, {
                "n": "后宫",
                "v": "后宫"
            }, {
                "n": "热血",
                "v": "热血"
            }, {
                "n": "纯爱",
                "v": "纯爱"
            }, {
                "n": "穿越",
                "v": "穿越"
            }, {
                "n": "奇幻",
                "v": "奇幻"
            }, {
                "n": "战斗",
                "v": "战斗"
            }, {
                "n": "后宫",
                "v": "后宫"
            }, {
                "n": "搞笑",
                "v": "搞笑"
            }, {
                "n": "日常",
                "v": "日常"
            }, {
                "n": "科幻",
                "v": "科幻"
            }, {
                "n": "治愈",
                "v": "治愈"
            }, {
                "n": "校园",
                "v": "校园"
            }, {
                "n": "恋爱",
                "v": "恋爱"
            }, {
                "n": "冒险",
                "v": "冒险"
            }, {
                "n": "推理",
                "v": "推理"
            }, {
                "n": "机战",
                "v": "机战"
            }, {
                "n": "音乐",
                "v": "音乐"
            }, {
                "n": "萝莉",
                "v": "萝莉"
            }, {
                "n": "恐怖",
                "v": "恐怖"
            }, {
                "n": "惊悚",
                "v": "惊悚"
            }, {
                "n": "泡面番",
                "v": "泡面番"
            }, {
                "n": "游戏改",
                "v": "游戏改"
            }, {
                "n": "小说改",
                "v": "小说改"
            }, {
                "n": "漫画改",
                "v": "漫画改"
            }, {
                "n": "腐",
                "v": "腐"
            }]
        }, {
            "key": "year",
            "name": "年份",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }, {
                "n": "2003",
                "v": "2003"
            }, {
                "n": "2002",
                "v": "2002"
            }, {
                "n": "2001",
                "v": "2001"
            }, {
                "n": "2000",
                "v": "2000"
            }, {
                "n": "1999",
                "v": "1999"
            }, {
                "n": "1998",
                "v": "1998"
            }, {
                "n": "1997",
                "v": "1997"
            }, {
                "n": "1996",
                "v": "1996"
            }, {
                "n": "1995",
                "v": "1995"
            }, {
                "n": "1994",
                "v": "1994"
            }, {
                "n": "1993",
                "v": "1993"
            }, {
                "n": "1992",
                "v": "1992"
            }, {
                "n": "1991",
                "v": "1991"
            }, {
                "n": "1990",
                "v": "1990"
            }, {
                "n": "1989",
                "v": "1989"
            }, {
                "n": "1988",
                "v": "1988"
            }, {
                "n": "1987",
                "v": "1987"
            }, {
                "n": "1986",
                "v": "1986"
            }, {
                "n": "1985",
                "v": "1985"
            }, {
                "n": "1984",
                "v": "1984"
            }, {
                "n": "1983",
                "v": "1983"
            }, {
                "n": "1982",
                "v": "1982"
            }, {
                "n": "1981",
                "v": "1981"
            }, {
                "n": "1980",
                "v": "1980"
            }]
        }, {
            "key": "letter",
            "name": "字母",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "A",
                "v": "A"
            }, {
                "n": "B",
                "v": "B"
            }, {
                "n": "C",
                "v": "C"
            }, {
                "n": "D",
                "v": "D"
            }, {
                "n": "E",
                "v": "E"
            }, {
                "n": "F",
                "v": "F"
            }, {
                "n": "G",
                "v": "G"
            }, {
                "n": "H",
                "v": "H"
            }, {
                "n": "I",
                "v": "I"
            }, {
                "n": "J",
                "v": "J"
            }, {
                "n": "K",
                "v": "K"
            }, {
                "n": "L",
                "v": "L"
            }, {
                "n": "M",
                "v": "M"
            }, {
                "n": "N",
                "v": "N"
            }, {
                "n": "O",
                "v": "O"
            }, {
                "n": "P",
                "v": "P"
            }, {
                "n": "Q",
                "v": "Q"
            }, {
                "n": "R",
                "v": "R"
            }, {
                "n": "S",
                "v": "S"
            }, {
                "n": "T",
                "v": "T"
            }, {
                "n": "U",
                "v": "U"
            }, {
                "n": "V",
                "v": "V"
            }, {
                "n": "W",
                "v": "W"
            }, {
                "n": "X",
                "v": "X"
            }, {
                "n": "Y",
                "v": "Y"
            }, {
                "n": "Z",
                "v": "Z"
            }, {
                "n": "0-9",
                "v": "0-9"
            }]
        }, {
            "key": "by",
            "name": "时间",
            "value": [{
                "n": "按最新",
                "v": "time"
            }, {
                "n": "按最热",
                "v": "hits"
            }, {
                "n": "按评分",
                "v": "score"
            }]
        }],
        "2": [{
            "key": "class",
            "name": "类型",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "异世界",
                "v": "异世界"
            }, {
                "n": "百合",
                "v": "百合"
            }, {
                "n": "热血",
                "v": "热血"
            }, {
                "n": "穿越",
                "v": "穿越"
            }, {
                "n": "奇幻",
                "v": "奇幻"
            }, {
                "n": "战斗",
                "v": "战斗"
            }, {
                "n": "搞笑",
                "v": "搞笑"
            }, {
                "n": "日常",
                "v": "日常"
            }, {
                "n": "科幻",
                "v": "科幻"
            }, {
                "n": "治愈",
                "v": "治愈"
            }, {
                "n": "校园",
                "v": "校园"
            }, {
                "n": "恋爱",
                "v": "恋爱"
            }, {
                "n": "冒险",
                "v": "冒险"
            }, {
                "n": "机战",
                "v": "机战"
            }, {
                "n": "音乐",
                "v": "音乐"
            }]
        }, {
            "key": "year",
            "name": "年份",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }, {
                "n": "2003",
                "v": "2003"
            }, {
                "n": "2002",
                "v": "2002"
            }, {
                "n": "2001",
                "v": "2001"
            }, {
                "n": "2000",
                "v": "2000"
            }, {
                "n": "1999",
                "v": "1999"
            }, {
                "n": "1998",
                "v": "1998"
            }, {
                "n": "1997",
                "v": "1997"
            }, {
                "n": "1996",
                "v": "1996"
            }, {
                "n": "1995",
                "v": "1995"
            }, {
                "n": "1994",
                "v": "1994"
            }, {
                "n": "1993",
                "v": "1993"
            }, {
                "n": "1992",
                "v": "1992"
            }, {
                "n": "1991",
                "v": "1991"
            }, {
                "n": "1990",
                "v": "1990"
            }, {
                "n": "1989",
                "v": "1989"
            }, {
                "n": "1988",
                "v": "1988"
            }, {
                "n": "1987",
                "v": "1987"
            }, {
                "n": "1986",
                "v": "1986"
            }, {
                "n": "1985",
                "v": "1985"
            }, {
                "n": "1984",
                "v": "1984"
            }, {
                "n": "1983",
                "v": "1983"
            }, {
                "n": "1982",
                "v": "1982"
            }, {
                "n": "1981",
                "v": "1981"
            }, {
                "n": "1980",
                "v": "1980"
            }]
        }, {
            "key": "letter",
            "name": "字母",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "A",
                "v": "A"
            }, {
                "n": "B",
                "v": "B"
            }, {
                "n": "C",
                "v": "C"
            }, {
                "n": "D",
                "v": "D"
            }, {
                "n": "E",
                "v": "E"
            }, {
                "n": "F",
                "v": "F"
            }, {
                "n": "G",
                "v": "G"
            }, {
                "n": "H",
                "v": "H"
            }, {
                "n": "I",
                "v": "I"
            }, {
                "n": "J",
                "v": "J"
            }, {
                "n": "K",
                "v": "K"
            }, {
                "n": "L",
                "v": "L"
            }, {
                "n": "M",
                "v": "M"
            }, {
                "n": "N",
                "v": "N"
            }, {
                "n": "O",
                "v": "O"
            }, {
                "n": "P",
                "v": "P"
            }, {
                "n": "Q",
                "v": "Q"
            }, {
                "n": "R",
                "v": "R"
            }, {
                "n": "S",
                "v": "S"
            }, {
                "n": "T",
                "v": "T"
            }, {
                "n": "U",
                "v": "U"
            }, {
                "n": "V",
                "v": "V"
            }, {
                "n": "W",
                "v": "W"
            }, {
                "n": "X",
                "v": "X"
            }, {
                "n": "Y",
                "v": "Y"
            }, {
                "n": "Z",
                "v": "Z"
            }, {
                "n": "0-9",
                "v": "0-9"
            }]
        }, {
            "key": "by",
            "name": "时间",
            "value": [{
                "n": "按最新",
                "v": "time"
            }, {
                "n": "按最热",
                "v": "hits"
            }, {
                "n": "按评分",
                "v": "score"
            }]
        }],
        "3": [{
            "key": "class",
            "name": "类型",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "动作",
                "v": "动作"
            }, {
                "n": "奇幻",
                "v": "奇幻"
            }, {
                "n": "科幻",
                "v": "科幻"
            }]
        }, {
            "key": "year",
            "name": "年份",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }, {
                "n": "2014",
                "v": "2014"
            }, {
                "n": "2013",
                "v": "2013"
            }, {
                "n": "2012",
                "v": "2012"
            }, {
                "n": "2011",
                "v": "2011"
            }, {
                "n": "2010",
                "v": "2010"
            }, {
                "n": "2009",
                "v": "2009"
            }, {
                "n": "2008",
                "v": "2008"
            }, {
                "n": "2007",
                "v": "2007"
            }, {
                "n": "2006",
                "v": "2006"
            }, {
                "n": "2005",
                "v": "2005"
            }, {
                "n": "2004",
                "v": "2004"
            }, {
                "n": "2003",
                "v": "2003"
            }, {
                "n": "2002",
                "v": "2002"
            }, {
                "n": "2001",
                "v": "2001"
            }, {
                "n": "2000",
                "v": "2000"
            }, {
                "n": "1999",
                "v": "1999"
            }, {
                "n": "1998",
                "v": "1998"
            }, {
                "n": "1997",
                "v": "1997"
            }, {
                "n": "1996",
                "v": "1996"
            }, {
                "n": "1995",
                "v": "1995"
            }, {
                "n": "1994",
                "v": "1994"
            }, {
                "n": "1993",
                "v": "1993"
            }, {
                "n": "1992",
                "v": "1992"
            }, {
                "n": "1991",
                "v": "1991"
            }, {
                "n": "1990",
                "v": "1990"
            }, {
                "n": "1989",
                "v": "1989"
            }, {
                "n": "1988",
                "v": "1988"
            }, {
                "n": "1987",
                "v": "1987"
            }, {
                "n": "1986",
                "v": "1986"
            }, {
                "n": "1985",
                "v": "1985"
            }, {
                "n": "1984",
                "v": "1984"
            }, {
                "n": "1983",
                "v": "1983"
            }, {
                "n": "1982",
                "v": "1982"
            }, {
                "n": "1981",
                "v": "1981"
            }, {
                "n": "1980",
                "v": "1980"
            }]
        }, {
            "key": "letter",
            "name": "字母",
            "value": [{
                "n": "全部",
                "v": ""
            }, {
                "n": "A",
                "v": "A"
            }, {
                "n": "B",
                "v": "B"
            }, {
                "n": "C",
                "v": "C"
            }, {
                "n": "D",
                "v": "D"
            }, {
                "n": "E",
                "v": "E"
            }, {
                "n": "F",
                "v": "F"
            }, {
                "n": "G",
                "v": "G"
            }, {
                "n": "H",
                "v": "H"
            }, {
                "n": "I",
                "v": "I"
            }, {
                "n": "J",
                "v": "J"
            }, {
                "n": "K",
                "v": "K"
            }, {
                "n": "L",
                "v": "L"
            }, {
                "n": "M",
                "v": "M"
            }, {
                "n": "N",
                "v": "N"
            }, {
                "n": "O",
                "v": "O"
            }, {
                "n": "P",
                "v": "P"
            }, {
                "n": "Q",
                "v": "Q"
            }, {
                "n": "R",
                "v": "R"
            }, {
                "n": "S",
                "v": "S"
            }, {
                "n": "T",
                "v": "T"
            }, {
                "n": "U",
                "v": "U"
            }, {
                "n": "V",
                "v": "V"
            }, {
                "n": "W",
                "v": "W"
            }, {
                "n": "X",
                "v": "X"
            }, {
                "n": "Y",
                "v": "Y"
            }, {
                "n": "Z",
                "v": "Z"
            }, {
                "n": "0-9",
                "v": "0-9"
            }]
        }, {
            "key": "by",
            "name": "时间",
            "value": [{
                "n": "按最新",
                "v": "time"
            }, {
                "n": "按最热",
                "v": "hits"
            }, {
                "n": "按评分",
                "v": "score"
            }]
        }]
    },
    filter_def: {},
    detailUrl: '/voddetail/fyid.html',
    play_parse: true,
    sniffer: 1,
    is_video: 'obj/tos|bd.xhscdn|/ugc/',
    lazy: $js.toString(() => {
        input = {
            parse: 1,
            url: input,
            //js:'try{let urls=Array.from(document.querySelectorAll("iframe")).filter(x=>x.src.includes("?url="));if(urls){location.href=urls[0].src}}catch{}document.querySelector("button").click()',
            js: 'try{location.href=document.querySelector("#playleft iframe").src}catch{}document.querySelector("button.swal-button--confirm").click()',
            parse_extra: '&is_pc=1&custom_regex=' + rule.is_video,
        }
    }),
    limit: 6,
    推荐: '.list-vod.flex .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    一级: $js.toString(() => {
        let body = input.split("#")[1];
        let t = Math.round(new Date / 1e3).toString();
        let key = md5("DS" + t + "DCC147D11943AF75");
        let url = input.split("#")[0];
        body = body + "&time=" + t + "&key=" + key;
        print(body);
        fetch_params.body = body;
        let html = post(url, fetch_params);
        let data = JSON.parse(html);
        VODS = data.list.map(function (it) {
            it.vod_pic = urljoin2(input.split("/i")[0], it.vod_pic);
            return it
        });
    }),
    二级: {
        title: '.slide-info-title&&Text;.slide-info:eq(3)--strong&&Text',
        img: '.detail-pic&&data-original',
        desc: '.fraction&&Text;.slide-info-remarks:eq(1)&&Text;.slide-info-remarks:eq(2)&&Text;.slide-info:eq(2)--strong&&Text;.slide-info:eq(1)--strong&&Text',
        content: '#height_limit&&Text',
        tabs: '.anthology.wow.fadeInUp.animated&&.swiper-wrapper&&a',
        tab_text: '.swiper-slide&&Text',
        lists: '.anthology-list-box:eq(#id) li',
    },
    搜索: 'json:list;name;pic;;id',
    搜索: $js.toString(() => {
        let html = fetch(input);
        let list = pdfa(html, ".public-list-box");
        VODS = list.map(x => {
            return {
                vod_name: pdfh(x, ".thumb-txt&&Text"),
                vod_pic: pdfh(x, ".lazy&&data-src"),
                vod_remarks: pdfh(x, ".public-list-prb&&Text"),
                vod_content: pdfh(x, ".thumb-blurb&&Text"),
                vod_id: pdfh(x, "a&&href")
            }
        });
    }),
    图片替换: '&amp;=>&'
}