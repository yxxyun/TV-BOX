var rule = {
    title: '腾云驾雾',
    host: 'https://v.%71%71.com',
    // homeUrl:'/channel/choice?listpage=1&channel=choice&sort=18&_all=1',
    homeUrl: '/x/bu/pagesheet/list?_all=1&append=1&channel=choice&listpage=1&offset=0&pagesize=21&iarea=-1&sort=18',
    detailUrl: 'https://node.video.%71%71.com/x/api/float_vinfo2?cid=fyid',
    // searchUrl:'https://node.video.%71%71.com/x/api/msearch?keyWord=**',
    searchUrl: 'https://pbaccess.video.%71%71.com/trpc.videosearch.smartboxServer.HttpRountRecall/Smartbox?query=**&appID=3172&appKey=lGhFIPeD3HsO9xEp&pageNum=(fypage-1)&pageSize=10',
    // searchUrl:'http://s.video.qq.com/smartbox?plat=2&ver=0&num=29&otype=json&query=**',
    searchable: 2,
    filterable: 1,
    multi: 1,
    // url:'/channel/fyclass?listpage=fypage&channel=fyclass&sort=18&_all=1',
    url: '/x/bu/pagesheet/list?_all=1&append=1&channel=fyclass&listpage=1&offset=((fypage-1)*21)&pagesize=21&iarea=-1',
    filter_url: 'sort={{fl.sort or 18}}&year={{fl.year}}&pay={{fl.pay}}',
    filter: {
        'choice': [{
            'key': 'sort',
            'name': '排序',
            'value': [{'n': '最热', 'v': '18'}, {'n': '最新', 'v': '19'}, {'n': '好评', 'v': '16'}, {
                'n': '高分好评',
                'v': '21'
            }]
        }, {
            'key': 'pay',
            'name': '资费',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '免费', 'v': '867'}, {'n': '会员', 'v': '6'}]
        }, {
            'key': 'year',
            'name': '年代',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {
                'n': '2021',
                'v': '2021'
            }, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {
                'n': '2017',
                'v': '2017'
            }, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}]
        }],
        'tv': [{
            'key': 'sort',
            'name': '排序',
            'value': [{'n': '最热', 'v': '18'}, {'n': '最新', 'v': '19'}, {'n': '好评', 'v': '16'}, {
                'n': '高分好评',
                'v': '21'
            }]
        }, {
            'key': 'pay',
            'name': '资费',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '免费', 'v': '867'}, {'n': '会员', 'v': '6'}]
        }, {
            'key': 'year',
            'name': '年代',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {
                'n': '2021',
                'v': '2021'
            }, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {
                'n': '2017',
                'v': '2017'
            }, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}]
        }],
        'movie': [{
            'key': 'sort',
            'name': '排序',
            'value': [{'n': '最热', 'v': '18'}, {'n': '最新', 'v': '19'}, {'n': '好评', 'v': '16'}, {
                'n': '高分好评',
                'v': '21'
            }]
        }, {
            'key': 'pay',
            'name': '资费',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '免费', 'v': '867'}, {'n': '会员', 'v': '6'}]
        }, {
            'key': 'year',
            'name': '年代',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {
                'n': '2021',
                'v': '2021'
            }, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {
                'n': '2017',
                'v': '2017'
            }, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}]
        }],
        'variety': [{
            'key': 'sort',
            'name': '排序',
            'value': [{'n': '最热', 'v': '18'}, {'n': '最新', 'v': '19'}, {'n': '好评', 'v': '16'}, {
                'n': '高分好评',
                'v': '21'
            }]
        }, {
            'key': 'pay',
            'name': '资费',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '免费', 'v': '867'}, {'n': '会员', 'v': '6'}]
        }, {
            'key': 'year',
            'name': '年代',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {
                'n': '2021',
                'v': '2021'
            }, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {
                'n': '2017',
                'v': '2017'
            }, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}]
        }],
        'cartoon': [{
            'key': 'sort',
            'name': '排序',
            'value': [{'n': '最热', 'v': '18'}, {'n': '最新', 'v': '19'}, {'n': '好评', 'v': '16'}, {
                'n': '高分好评',
                'v': '21'
            }]
        }, {
            'key': 'pay',
            'name': '资费',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '免费', 'v': '867'}, {'n': '会员', 'v': '6'}]
        }, {
            'key': 'year',
            'name': '年代',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {
                'n': '2021',
                'v': '2021'
            }, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {
                'n': '2017',
                'v': '2017'
            }, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}]
        }],
        'child': [{
            'key': 'sort',
            'name': '排序',
            'value': [{'n': '最热', 'v': '18'}, {'n': '最新', 'v': '19'}, {'n': '好评', 'v': '16'}, {
                'n': '高分好评',
                'v': '21'
            }]
        }, {
            'key': 'pay',
            'name': '资费',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '免费', 'v': '867'}, {'n': '会员', 'v': '6'}]
        }, {
            'key': 'year',
            'name': '年代',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {
                'n': '2021',
                'v': '2021'
            }, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {
                'n': '2017',
                'v': '2017'
            }, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}]
        }],
        'doco': [{
            'key': 'sort',
            'name': '排序',
            'value': [{'n': '最热', 'v': '18'}, {'n': '最新', 'v': '19'}, {'n': '好评', 'v': '16'}, {
                'n': '高分好评',
                'v': '21'
            }]
        }, {
            'key': 'pay',
            'name': '资费',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '免费', 'v': '867'}, {'n': '会员', 'v': '6'}]
        }, {
            'key': 'year',
            'name': '年代',
            'value': [{'n': '全部', 'v': '-1'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {
                'n': '2021',
                'v': '2021'
            }, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {
                'n': '2017',
                'v': '2017'
            }, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}]
        }]
    },
    headers: {
        'User-Agent': 'PC_UA',
        'Referer': 'https://v.qq.com/',
        'Origin': 'https://v.qq.com/'
    },
    timeout: 5000,
    // class_parse:'.site_channel a;a&&Text;a&&href;channel/(.*)',
    cate_exclude: '会员|游戏|全部',
    class_name: '精选&电视剧&电影&综艺&动漫&少儿&纪录片',
    class_url: 'choice&tv&movie&variety&cartoon&child&doco',
    limit: 20,
    // play_parse:true,
    // 手动调用解析请求json的url,此lazy不方便
    lazy: 'js:input="https://cache.json.icu/home/api?type=ys&uid=292796&key=fnoryABDEFJNPQV269&url="+input.split("?")[0];log(input);let html=JSON.parse(request(input));log(html);input=html.url||input',
    推荐: '.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    一级: '.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    // 二级:{is_json:1,"title":"data.title;data.moviecategory[0]+data.moviecategory[1]","img":"data.cdncover","desc":"data.area[0];data.director[0]","content":"data.description","tabs":"data.playlink_sites;data.playlinksdetail.#idv.quality","lists":"data.playlinksdetail.#idv.default_url"},
    // 二级:{is_json:1,"title":"data.title;data.moviecategory[0]+data.moviecategory[1]","img":"data.cdncover","desc":"data.area[0];data.director[0]","content":"data.description","tabs":"data.playlink_sites","lists":"data.playlinksdetail.#idv.default_url"},
    二级: '',
    二级: 'js:VOD={};let d=[];let video_list=[];let video_lists=[];let list=[];let QZOutputJson;let html=fetch(input,fetch_params);let sourceId=/get_playsource/.test(input)?input.match(/id=(\\d*?)&/)[1]:input.split("cid=")[1];let cid=sourceId;let detailUrl="https://v.%71%71.com/detail/m/"+cid+".html";log("详情页:"+detailUrl);var pdfh=jsp.pdfh;var pd=jsp.pd;try{let json=JSON.parse(html);VOD={vod_url:input,vod_name:json.c.title,type_name:json.typ.join(","),vod_actor:json.nam.join(","),vod_year:json.c.year,vod_content:json.c.description,vod_remarks:json.rec,vod_pic:urljoin2(input,json.c.pic)}}catch(e){log("解析片名海报等基础信息发生错误:"+e.message)}if(/get_playsource/.test(input)){eval(html);let indexList=QZOutputJson.PlaylistItem.indexList;indexList.forEach(function(it){let dataUrl="https://s.video.qq.com/get_playsource?id="+sourceId+"&plat=2&type=4&data_type=3&range="+it+"&video_type=10&plname=qq&otype=json";eval(fetch(dataUrl,fetch_params));let vdata=QZOutputJson.PlaylistItem.videoPlayList;vdata.forEach(function(item){d.push({title:item.title,pic_url:item.pic,desc:item.episode_number+"\\t\\t\\t播放量："+item.thirdLine,url:item.playUrl})});video_lists=video_lists.concat(vdata)})}else{let json=JSON.parse(html);video_lists=json.c.video_ids;let url="https://v.qq.com/x/cover/"+sourceId+".html";if(video_lists.length===1){let vid=video_lists[0];url="https://v.qq.com/x/cover/"+cid+"/"+vid+".html";d.push({title:"在线播放",url:url})}else if(video_lists.length>1){for(let i=0;i<video_lists.length;i+=30){video_list.push(video_lists.slice(i,i+30))}video_list.forEach(function(it,idex){let o_url="https://union.video.qq.com/fcgi-bin/data?otype=json&tid=1804&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist="+it.join(",");let o_html=fetch(o_url,fetch_params);eval(o_html);QZOutputJson.results.forEach(function(it1){it1=it1.fields;let url="https://v.qq.com/x/cover/"+cid+"/"+it1.vid+".html";d.push({title:it1.title,pic_url:it1.pic160x90.replace("/160",""),desc:it1.video_checkup_time,url:url,type:it1.category_map&&it1.category_map.length>1?it1.category_map[1]:""})})})}}let yg=d.filter(function(it){return it.type&&it.type!=="正片"});let zp=d.filter(function(it){return!(it.type&&it.type!=="正片")});VOD.vod_play_from=yg.length<1?"qq":"qq$$$qq 预告及花絮";VOD.vod_play_url=yg.length<1?d.map(function(it){return it.title+"$"+it.url}).join("#"):[zp,yg].map(function(it){return it.map(function(its){return its.title+"$"+its.url}).join("#")}).join("$$$");',
    // 二级:'js:VOD={};let d=[];let video_list=[];let video_lists=[];let list=[];let QZOutputJson;let html=fetch(input,fetch_params);let sourceId=/get_playsource/.test(input)?input.match(/id=(\\d*?)&/)[1]:input.split("cid=")[1];let cid=sourceId;let detailUrl="https://v.%71%71.com/detail/m/"+cid+".html";log("详情页:"+detailUrl);var pdfh=jsp.pdfh;var pd=jsp.pd;try{let json=JSON.parse(html);VOD={vod_url:input,vod_name:json.c.title,type_name:json.typ.join(","),vod_actor:json.nam.join(","),vod_year:json.c.year,vod_content:json.c.description,vod_remarks:json.rec,vod_pic:urljoin2(input,json.c.pic)}}catch(e){log("解析片名海报等基础信息发生错误:"+e.message)}if(/get_playsource/.test(input)){eval(html);let indexList=QZOutputJson.PlaylistItem.indexList;indexList.forEach(function(it){let dataUrl="https://s.video.qq.com/get_playsource?id="+sourceId+"&plat=2&type=4&data_type=3&range="+it+"&video_type=10&plname=qq&otype=json";eval(fetch(dataUrl,fetch_params));let vdata=QZOutputJson.PlaylistItem.videoPlayList;vdata.forEach(function(item){d.push({title:item.title,pic_url:item.pic,desc:item.episode_number+"\\t\\t\\t播放量："+item.thirdLine,url:item.playUrl})});video_lists=video_lists.concat(vdata)})}else{let json=JSON.parse(html);video_lists=json.c.video_ids;let url="https://v.qq.com/x/cover/"+sourceId+".html";if(json.c.type===10){let dataUrl="https://s.video.qq.com/get_playsource?id="+json.c.column_id+"&plat=2&type=2&data_type=3&video_type=8&plname=qq&otype=json";let o_html=fetch(dataUrl,fetch_params);eval(o_html);video_lists=[];let indexList=QZOutputJson.PlaylistItem.indexList;indexList.forEach(function(it){let dataUrl="https://s.video.qq.com/get_playsource?id="+json.c.column_id+"&plat=2&type=4&data_type=3&range="+it+"&video_type=10&plname=qq&otype=json";eval(fetch(dataUrl,fetch_params));let vdata=QZOutputJson.PlaylistItem.videoPlayList;vdata.forEach(function(item){d.push({title:item.title,pic_url:item.pic,desc:item.episode_number+"\\t\\t\\t播放量："+item.thirdLine,url:item.playUrl})});video_lists=video_lists.concat(vdata)})}else if(video_lists.length===1){d.push({title:"在线播放",url:url})}else if(video_lists.length>1){for(let i=0;i<video_lists.length;i+=30){video_list.push(video_lists.slice(i,i+30))}video_list.forEach(function(it,idex){let o_url="https://union.video.qq.com/fcgi-bin/data?otype=json&tid=1804&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist="+it.join(",");let o_html=fetch(o_url,fetch_params);eval(o_html);QZOutputJson.results.forEach(function(it1){it1=it1.fields;let url="https://v.qq.com/x/cover/"+cid+"/"+it1.vid+".html";d.push({title:it1.title,pic_url:it1.pic160x90.replace("/160",""),desc:it1.video_checkup_time,url:url,type:it1.category_map&&it1.category_map.length>1?it1.category_map[1]:""})})})}}let yg=d.filter(function(it){return it.type&&it.type!=="正片"});let zp=d.filter(function(it){return!(it.type&&it.type!=="正片")});VOD.vod_play_from=yg.length<1?"qq":"qq$$$qq 预告及花絮";VOD.vod_play_url=yg.length<1?d.map(function(it){return it.title+"$"+it.url}).join("#"):[zp,yg].map(function(it){return it.map(function(its){return its.title+"$"+its.url}).join("#")}).join("$$$");',
    // 搜索:'json:uiData;data[0].title;data[0].posterPic;.titleMarkLabelList[1].primeText;data[0].id;data[0].publishDate',
    搜索: "js:var d=[];let html=request(input);let json=JSON.parse(html);if(json.data.smartboxItemList.length>0){for(let vod of json.data.smartboxItemList.filter(it=>it.basicDoc&&it.basicDoc.id)){let cid=vod.basicDoc.id;let title=vod.basicDoc.title;let url='https://node.video.qq.com/x/api/float_vinfo2?cid='+cid;if(vod.videoInfo&&vod.videoInfo.imgUrl){d.push({title:title,img:vod.videoInfo.imgUrl,url:url,content:'',desc:vod.videoInfo.typeName||''})}else{let html1=request(url);let data=JSON.parse(html1);d.push({title:data.c.title,img:data.c.pic,url:url,content:data.c.description,desc:data.rec})}}};setResult(d);",
    // 搜索:'json:item;word;dc;class;id;sn',
}