var _0x1ffd=['round','chapter-type','\x22\x20href=\x22javascript:;\x22\x20onclick=\x22vg_pjax($(this));\x22\x20class=\x22btn\x20btn-primary\x20mb-1\x20ppre\x20pre\x20','chapter_num','本章已完，前往下一章！','<option\x20value=\x22','keydown','/uploads/','.pagination','parent','.sort','data','.loading','\x0a\x09\x09</select>\x0a\x09\x09</div>\x0a\x09\x09<a\x20data-p=\x22','.pre','没有了','0000','code','next','push','lazyload','.relation-cc\x20img','\x0a\x09\x09<nav\x20aria-label=\x22Page\x20navigation\x22>\x0a\x09\x09<div\x20class=\x22form-inline\x22>\x0a\x09\x09<a\x20href=\x22javascript:goNumPage(\x27pre\x27);\x22\x20class=\x22btn\x20btn-primary\x20mb-1\x20mr-1\x22\x20title=\x22上集\x22>上集</a>\x0a\x09\x09<a\x20data-p=\x22','/chapter_num?chapter_id=','asc','length','.pjax-container','?_MD=','split','location','which','chapter-domain','&_TM=','html','&ctype=','get','md5','\x22\x20title=\x22上一页\x22>上页</a>\x0a\x09\x09<div\x20class=\x22mx-1\x20mb-1\x22>\x0a\x09\x09<label\x20for=\x22page-selector\x22\x20class=\x22sr-only\x22>翻页</label>\x0a\x09\x09<select\x20class=\x22form-control\x20vg-page-selector\x22\x20id=\x22page-selector\x22\x20onchange=\x22vg_pjax($(this),\x201);\x22>\x0a\x09','desc','页</option>','\x22\x20href=\x22javascript:;\x22\x20onclick=\x22vg_pjax($(this));\x22\x20class=\x22btn\x20btn-primary\x20mb-1\x20pnext\x20next\x22\x20title=\x22下一页\x22>下页</a>\x0a\x09\x09<a\x20href=\x22javascript:goNumPage(\x27next\x27);\x22\x20class=\x22btn\x20btn-primary\x20mb-1\x20ml-1\x22\x20title=\x22下集\x22>下集</a>\x0a\x09\x09</div>\x0a\x09\x09</nav>\x0a\x09','click','fadeIn','url','replace','disabled','.num_div','pre','selected','&type=','decompressFromBase64'];(function(_0x36576d,_0x1ffd37){var _0x39c81a=function(_0x303ea2){while(--_0x303ea2){_0x36576d['push'](_0x36576d['shift']());}};_0x39c81a(++_0x1ffd37);}(_0x1ffd,0x148));var _0x39c8=function(_0x36576d,_0x1ffd37){_0x36576d=_0x36576d-0x0;var _0x39c81a=_0x1ffd[_0x36576d];return _0x39c81a;};var ck_num=0x0,vg_r_data=$('.vg-r-data');let img_data_arr=LZString[_0x39c8('0x1c')](img_data)[_0x39c8('0x6')](','),total_page=img_data_arr[_0x39c8('0x3')];var asset_domain=vg_r_data[_0x39c8('0x28')](_0x39c8('0x9')),asset_key=vg_r_data[_0x39c8('0x28')]('chapter-key'),img_pre=_0x39c8('0x24'),chapter_num=vg_r_data[_0x39c8('0x28')](_0x39c8('0x20')),chapter_type=vg_r_data[_0x39c8('0x28')](_0x39c8('0x1e'));$(function(){vg_pagination(page,total_page),$('.show-pic')['attr']('src',cdnImage(img_pre+img_data_arr[parseInt(page)-0x1],asset_domain,asset_key)),preload(),$(_0x39c8('0x32'))[_0x39c8('0x31')]({'effect':_0x39c8('0x14')});page>0x1&&scroll_top();var _0x28fe8c=$(_0x39c8('0x27')),_0x2cd53a=0x0;_0x28fe8c[_0x39c8('0x13')](function(){var _0x1fec59=$(this)[_0x39c8('0x26')]()[_0x39c8('0x26')]()[_0x39c8('0x26')]()['find'](_0x39c8('0x18'));_0x2cd53a==0x0?(sortNum(_0x1fec59,_0x39c8('0x10')),_0x2cd53a=0x1):(sortNum(_0x1fec59,_0x39c8('0x2')),_0x2cd53a=0x0);}),$(document)[_0x39c8('0x23')](function(_0x4da5a2){if(_0x4da5a2[_0x39c8('0x8')]==0x25)vg_pjax($(_0x39c8('0x2b'))['data']('p'),0x2);if(_0x4da5a2['which']==0x27)vg_pjax($('.next')[_0x39c8('0x28')]('p'),0x2);});});function cdnImage(_0x3c4b3a,_0x2449ed,_0x11d851){return time_exp=Math[_0x39c8('0x1d')](new Date()/0x3e8),ks_md5_path=_0x3c4b3a+_0x11d851+time_exp,ks_md5=$[_0x39c8('0xe')](ks_md5_path),_0x2449ed+_0x3c4b3a+_0x39c8('0x5')+ks_md5+_0x39c8('0xa')+time_exp;}var preload=()=>{var _0x1c4841=[],_0x23f2a9=parseInt(page);for(let _0x22fbd1 in img_data_arr){(_0x22fbd1==_0x23f2a9||_0x22fbd1==_0x23f2a9+0x1)&&_0x1c4841[_0x39c8('0x30')](img_pre+img_data_arr[_0x22fbd1]);}_0x1c4841[_0x39c8('0x3')]>0x0&&$['preload'](_0x1c4841);},vg_pagination=(_0x1e1f00,_0x27e1f9)=>{let _0x2a67d8=parseInt(_0x1e1f00)-0x1,_0x5d32c4=parseInt(_0x1e1f00)+0x1,_0x20db2d=!_0x2a67d8?_0x39c8('0x17'):'';_0x2a67d8<=0x1&&(_0x2a67d8=0x1);let _0xe51a33=_0x39c8('0x0')+_0x2a67d8+_0x39c8('0x1f')+_0x20db2d+_0x39c8('0xf');for(var _0x4f1734=0x1;_0x4f1734<=_0x27e1f9;_0x4f1734++){let _0xd56214=_0x4f1734==_0x1e1f00?_0x39c8('0x1a'):'';_0xe51a33+=_0x39c8('0x22')+_0x4f1734+'\x22\x20'+_0xd56214+'>第'+_0x4f1734+_0x39c8('0x11');}_0xe51a33+=_0x39c8('0x2a')+_0x5d32c4+_0x39c8('0x12'),$(_0x39c8('0x25'))[_0x39c8('0xb')](_0xe51a33);};function goNumPage(_0x16ec0d){let _0x134b64;if(_0x16ec0d==_0x39c8('0x19'))_0x134b64=0x2;else _0x16ec0d==_0x39c8('0x2f')&&(_0x134b64=0x1);$['ajax']({'type':_0x39c8('0xd'),'url':_0x39c8('0x1')+chapter_num+_0x39c8('0xc')+_0x134b64+_0x39c8('0x1b')+chapter_type,'dataType':'json','success':function(_0x286c9a){if(_0x286c9a[_0x39c8('0x2e')]!=_0x39c8('0x2d'))alert(_0x39c8('0x2c'));else{let _0x167779=_0x286c9a[_0x39c8('0x15')];window[_0x39c8('0x7')]['href']=_0x167779;}}});}var vg_pjax=(_0x3bbe86,_0x49d1ab=0x0,_0x26e229=_0x39c8('0x4'))=>{let _0x480deb=_0x26e229,_0xa0773a;scroll_top();if(_0x49d1ab==0x1)_0xa0773a=parseInt(_0x3bbe86['val']());else _0x49d1ab==0x2?_0xa0773a=_0x3bbe86:_0xa0773a=parseInt(_0x3bbe86[_0x39c8('0x28')]('p'));var _0x1f0492=new Image();$(_0x39c8('0x29'))['show']();var _0x584654=_0xa0773a-0x1,_0x1ab5ab=img_data_arr[_0x584654]?img_pre+img_data_arr[_0x584654]:'';if(_0xa0773a<=0x0){goNumPage('pre');return;}else{if(_0xa0773a>total_page){alert(_0x39c8('0x21')),goNumPage(_0x39c8('0x2f'));return;}}let _0x3d2ee3=cur_url;_0x3d2ee3=_0x3d2ee3[_0x39c8('0x16')]('.html','_'+_0xa0773a+'.html'),window[_0x39c8('0x7')]['href']=_0x3d2ee3;};