"use strict";(self.webpackChunkbestshop=self.webpackChunkbestshop||[]).push([[812],{6812:(t,r,o)=>{o.r(r),o.d(r,{default:()=>y});var e=o(8920),n=o(1504),i=o(4596),a=o.n(i),l=o(6520),A=o.n(l),c=o(6176),C=o.n(c),s=o(5120),u=o.n(s),m=o(6808),d=o.n(m),k=o(1936),p=o.n(k),B=o(5092),x={};x.styleTagTransform=p(),x.setAttributes=u(),x.insert=C().bind(null,"head"),x.domAPI=A(),x.insertStyleElement=d(),a()(B.c,x),B.c&&B.c.locals&&B.c.locals;var g=o(6542),D=o(5896),h=o(1968),I=o(7624);function f(t){var r=t.data,o=r.index,e=r.name,n=r.price,i=r.stars,a=Number(o)+1;return(0,I.jsxs)("div",{className:"tourBlockDetailItemContainer",children:[(0,I.jsxs)("div",{className:"tourBlockDetailItemTitle",children:[(0,I.jsxs)("span",{className:"tourBlockDetailItemText",children:[a,"."]}),(0,I.jsx)("span",{className:"tourBlockDetailItemText",children:e}),(0,I.jsx)("div",{className:"tourBlockDetailStarContainer",children:[1,2,3,4,5].map((function(t){return(0,I.jsx)(g.u,{icon:t<=i?D.y0l:h.y0l,className:"navIcons"})}))})]}),(0,I.jsxs)("div",{className:"tourBlockDetailItemPrice",children:["$",n]})]})}var w=o(1620),b={};b.styleTagTransform=p(),b.setAttributes=u(),b.insert=C().bind(null,"head"),b.domAPI=A(),b.insertStyleElement=d(),a()(w.c,b),w.c&&w.c.locals&&w.c.locals;var v=o(648),T=o(2328),j=o(9792);function y(t){var r=t.data,o=t.likeHeartCount,i=t.setLikeHeartCount,a=r.file,l=r.id,A=r.name,c=r.content,C=r.address,s=r.type,u=r.visitTime,m=Array.isArray(a),d=(0,n.useState)(!1),k=(0,e.c)(d,2),p=k[0],B=k[1],x=(0,n.useState)([]),w=(0,e.c)(x,2),b=w[0],y=w[1],N=(0,n.useState)(""),S=(0,e.c)(N,2),M=S[0],z=S[1],E=(0,T.OY)();(0,n.useEffect)((function(){G(),z(m?a[0]:a),localStorage.getItem(l+"_like")&&B(!0)}),[]);var G=function(){if(r._subtable_1000139){var t=Object.values(r._subtable_1000139),o=[];t.forEach((function(t){o[t.index]=t})),y(o)}},Y=function(t){t.stopPropagation();var r=o;p?(localStorage.removeItem(l+"_like"),i((function(t){return t-1})),r--):(localStorage.setItem(l+"_like",1),i((function(t){return t+1})),r++),B((function(t){return!t}));var e=new FormData;e.append("1000140",r);try{(0,v.qo)("post",(0,v.YZ)(l),e)}catch(t){console.log("error "+t)}};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{className:"tourBlockDetailContainer",children:(0,I.jsxs)("div",{className:"tourBlockDetail",children:[(0,I.jsx)("div",{className:"tourBlockDetailTitle flexCenter",children:(0,I.jsx)("h3",{children:A})}),(0,I.jsx)("div",{className:"tourBlockDetailMainImgContainer",children:M?(0,I.jsx)("img",{className:"tourBlockDetailMainImgItem",src:"https://ap9.ragic.com/sims/file.jsp?a=js1031222&f="+M,alt:"Tour Photo"}):""}),(0,I.jsx)("div",{className:"tourBlockDetailMoreImgContainer",children:Array.isArray(a)?a.map((function(t){return(0,I.jsx)("img",{className:"tourBlockDetailMoreImgItem",onClick:function(){z(t)},src:"https://ap9.ragic.com/sims/file.jsp?a=js1031222&f="+t,alt:"Tour Photo"})})):(0,I.jsx)("img",{className:"tourBlockDetailMoreImgItem",src:"https://ap9.ragic.com/sims/file.jsp?a=js1031222&f="+a,alt:"Tour Photo"})}),(0,I.jsxs)("div",{className:"tourBlockDetailContentContainer",children:[(0,I.jsxs)("div",{className:"tourBlockDetailAddressAndType",children:[(0,I.jsx)("div",{className:"tourBlockDetailSmallItem",children:C}),(0,I.jsx)("div",{className:"tourBlockDetailSmallItem",children:s}),(0,I.jsxs)("div",{className:"tourBlockDetailSmallItem",children:[u,"造訪"]})]}),(0,I.jsx)("div",{className:"tourBlockDetailContent",children:c})]}),(0,I.jsxs)("div",{className:"tourBlockDetailTimeTitle flexBetween",children:[(0,I.jsx)("span",{children:"品項"}),p?(0,I.jsx)(g.u,{onClick:Y,icon:D.oNn,className:"navIcons"}):(0,I.jsx)(g.u,{onClick:Y,icon:h.oNn,className:"navIcons"})]}),b.map((function(t){return(0,I.jsx)(f,{data:t},t._ragicId)}))]})}),(0,I.jsx)("div",{className:"darkBackground flexCenter",onClick:function(){return E((0,j._f)({id:l,ifShow:!1}))},children:(0,I.jsx)("div",{className:"xmarkContainer",children:(0,I.jsx)(g.u,{icon:D.gxQ,className:"navIcons"})})})]})}},1620:(t,r,o)=>{o.d(r,{c:()=>l});var e=o(5648),n=o.n(e),i=o(2312),a=o.n(i)()(n());a.push([t.id,'.tourBlockDetailContainer{width:550px;position:fixed;top:50%;left:50%;max-height:600px;transform:translate(-50%, -50%);background-color:#fff;z-index:100;border-radius:8px;overflow-y:auto}.tourBlockDetailContainer .tourBlockDetail{border-bottom:2px solid #9c9c9c;padding-bottom:30px;width:80%;margin:0 auto 10px auto;font-weight:bold}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailTitle{margin:15px 0}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailMainImgContainer{width:100%;height:290px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailMainImgContainer .tourBlockDetailMainImgItem{width:100%;height:100%}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailMoreImgContainer{margin:15px 0;width:100%;display:flex;align-items:center;flex-wrap:wrap}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailMoreImgContainer .tourBlockDetailMoreImgItem{margin:4px;cursor:pointer;width:18%;height:50px;object-fit:cover;border:1px solid #9c9c9c}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContentContainer{font-size:15px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContentContainer .tourBlockDetailAddressAndType{display:flex;align-items:center;margin-bottom:12px;font-size:12px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContentContainer .tourBlockDetailAddressAndType .tourBlockDetailSmallItem{padding:3px 7px;border-radius:8px;background-color:#9c9c9c;margin-right:8px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContentContainer .tourBlockDetailContent{white-space:"pre-wrap"}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailTimeTitle{margin-top:20px;font-size:18px}.darkBackground{position:fixed;width:100%;height:100%;top:0;left:0;z-index:99;background-color:#616161;opacity:.8}.darkBackground .xmarkContainer{cursor:pointer;position:absolute;top:20px;right:20px}.darkBackground .xmarkContainer .navIcons{font-size:28px;color:#fff}@media(max-width: 900px){.tourBlockDetailContainer{top:53%;width:320px;max-height:500px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailMainImgContainer{height:160px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContentContainer{font-size:12px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailTimeTitle{font-size:15px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailMoreImgContainer .tourBlockDetailMoreImgItem{width:20%;height:32px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContainer{width:90%}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContainer .imgContainer{height:192px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContainer .moreImgContainer img{height:40px}}',"",{version:3,sources:["webpack://./src/Style/TourBlock/TourBlockDetail.scss"],names:[],mappings:"AAMA,0BACI,WAAA,CACA,cAAA,CACA,OAAA,CACA,QAAA,CACA,gBAAA,CACA,+BAAA,CACA,qBAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,2CACI,+BAAA,CACA,mBAAA,CACA,SAAA,CACA,uBAAA,CACA,gBAAA,CAEA,iEACI,aAAA,CAEJ,4EACI,UAAA,CACA,YAAA,CACA,wGACI,UAAA,CACA,WAAA,CAGR,4EACI,aAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,cAAA,CACA,wGACI,UAAA,CACA,cAAA,CACA,SAAA,CACA,WAAA,CACA,gBAAA,CACA,wBAAA,CAIR,4EACI,cAAA,CACA,2GACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,cAAA,CACA,qIACI,eAAA,CACA,iBAAA,CACA,wBA5DA,CA6DA,gBAAA,CAGR,oGACI,sBAAA,CAGR,qEACI,eAAA,CACA,cAAA,CAKZ,gBACI,cAAA,CACA,UAAA,CACA,WAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,wBAjFc,CAkFd,UAAA,CACA,gCACI,cAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,0CACI,cAAA,CACA,UAAA,CAMZ,yBACI,0BACI,OAAA,CACA,WAAA,CACA,gBAAA,CAEI,4EACI,YAAA,CAEJ,4EACI,cAAA,CAEJ,qEACI,cAAA,CAGA,wGACI,SAAA,CACA,WAAA,CAIR,qEACI,SAAA,CACA,mFACI,YAAA,CAGA,2FACI,WAAA,CAAA",sourcesContent:["$color-light-gray: rgb(209, 209, 209);\r\n$color-medium-gray: rgb(156, 156, 156);\r\n$color-dark-gray: rgb(97,97,97);\r\n\r\n\r\n\r\n.tourBlockDetailContainer{\r\n    width: 550px;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    max-height: 600px;\r\n    transform: translate(-50%, -50%);\r\n    background-color: white;\r\n    z-index: 100;\r\n    border-radius: 8px;\r\n    overflow-y: auto;\r\n    .tourBlockDetail{\r\n        border-bottom: 2px solid $color-medium-gray;\r\n        padding-bottom: 30px;\r\n        width: 80%;\r\n        margin: 0 auto 10px auto;\r\n        font-weight: bold;\r\n\r\n        .tourBlockDetailTitle{\r\n            margin: 15px 0;\r\n        }\r\n        .tourBlockDetailMainImgContainer{\r\n            width: 100%;\r\n            height: 290px;\r\n            .tourBlockDetailMainImgItem{\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n        }\r\n        .tourBlockDetailMoreImgContainer{\r\n            margin: 15px 0;\r\n            width: 100%;\r\n            display: flex;\r\n            align-items: center;\r\n            flex-wrap: wrap;\r\n            .tourBlockDetailMoreImgItem{\r\n                margin: 4px;\r\n                cursor: pointer;\r\n                width: 18%;\r\n                height: 50px;\r\n                object-fit: cover;\r\n                border: 1px solid $color-medium-gray;\r\n            }\r\n\r\n        }\r\n        .tourBlockDetailContentContainer{\r\n            font-size: 15px;\r\n            .tourBlockDetailAddressAndType{\r\n                display: flex;\r\n                align-items: center;\r\n                margin-bottom: 12px;\r\n                font-size: 12px;\r\n                .tourBlockDetailSmallItem{\r\n                    padding: 3px 7px;\r\n                    border-radius: 8px;\r\n                    background-color: $color-medium-gray;\r\n                    margin-right: 8px;\r\n                }\r\n            }\r\n            .tourBlockDetailContent{\r\n                white-space: 'pre-wrap';\r\n            }\r\n        }\r\n        .tourBlockDetailTimeTitle{\r\n            margin-top: 20px;\r\n            font-size: 18px;\r\n        }\r\n    }\r\n}\r\n\r\n.darkBackground{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 99;\r\n    background-color: $color-dark-gray;\r\n    opacity: 0.8;\r\n    .xmarkContainer{\r\n        cursor: pointer;\r\n        position: absolute;\r\n        top: 20px;\r\n        right: 20px;\r\n        .navIcons{\r\n            font-size: 28px;\r\n            color: white;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@media(max-width: 900px) {\r\n    .tourBlockDetailContainer{\r\n        top: 53%;\r\n        width: 320px;\r\n        max-height: 500px;\r\n        .tourBlockDetail{\r\n            .tourBlockDetailMainImgContainer{\r\n                height: 160px;\r\n            }\r\n            .tourBlockDetailContentContainer{\r\n                font-size: 12px;\r\n            }\r\n            .tourBlockDetailTimeTitle{\r\n                font-size: 15px;\r\n            }\r\n            .tourBlockDetailMoreImgContainer{\r\n                .tourBlockDetailMoreImgItem{\r\n                    width: 20%;\r\n                    height: 32px;\r\n                }\r\n\r\n            }\r\n            .tourBlockDetailContainer{            \r\n                width: 90%;\r\n                .imgContainer{\r\n                    height: 192px;\r\n                }\r\n                .moreImgContainer{\r\n                    img{\r\n                        height: 40px;\r\n                    }\r\n        \r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],sourceRoot:""}]);const l=a},5092:(t,r,o)=>{o.d(r,{c:()=>l});var e=o(5648),n=o.n(e),i=o(2312),a=o.n(i)()(n());a.push([t.id,".tourBlockDetailItemContainer{margin-top:8px}.tourBlockDetailItemContainer .tourBlockDetailItemTitle{display:flex;align-items:center}.tourBlockDetailItemContainer .tourBlockDetailItemTitle .tourBlockDetailItemText{font-weight:bold;font-size:15px;margin-left:10px}.tourBlockDetailItemContainer .tourBlockDetailItemTitle .tourBlockDetailStarContainer{display:flex;align-items:center;color:#e62300;font-size:15px;margin-left:auto}.tourBlockDetailItemContainer .tourBlockDetailItemTitle .tourBlockDetailStarContainer .navIcons{margin:0 2px}.tourBlockDetailItemContainer .tourBlockDetailItemPrice{border-left:2px solid #000;font-weight:bold;margin-top:5px;margin-left:14px;padding-left:18px}@media(max-width: 900px){.tourBlockDetailItemContainer .tourBlockDetailItemTitle .tourBlockDetailItemText{font-size:13px}.tourBlockDetailItemContainer .tourBlockDetailItemTitle .tourBlockDetailStarContainer{font-size:11px}}","",{version:3,sources:["webpack://./src/Style/TourBlock/TourBlockDetailItem.scss"],names:[],mappings:"AAAA,8BACI,cAAA,CACA,wDACI,YAAA,CACA,kBAAA,CACA,iFACI,gBAAA,CACA,cAAA,CACA,gBAAA,CAEJ,sFACI,YAAA,CACA,kBAAA,CACA,aAAA,CACA,cAAA,CACA,gBAAA,CACA,gGACI,YAAA,CAIZ,wDACI,0BAAA,CACA,gBAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CAMR,yBAGY,iFACI,cAAA,CAEJ,sFACI,cAAA,CAAA",sourcesContent:[".tourBlockDetailItemContainer{\r\n    margin-top: 8px;\r\n    .tourBlockDetailItemTitle{\r\n        display: flex;\r\n        align-items: center;\r\n        .tourBlockDetailItemText{\r\n            font-weight: bold;\r\n            font-size: 15px;\r\n            margin-left: 10px;\r\n        }\r\n        .tourBlockDetailStarContainer{\r\n            display: flex;\r\n            align-items: center;\r\n            color: #e62300;\r\n            font-size: 15px;\r\n            margin-left: auto;\r\n            .navIcons{\r\n                margin: 0 2px;\r\n            }\r\n        }\r\n    }\r\n    .tourBlockDetailItemPrice{\r\n        border-left: 2px solid #000;\r\n        font-weight: bold;\r\n        margin-top: 5px;\r\n        margin-left: 14px;\r\n        padding-left: 18px;\r\n\r\n    }\r\n}\r\n\r\n\r\n@media(max-width: 900px) {\r\n    .tourBlockDetailItemContainer{\r\n        .tourBlockDetailItemTitle{\r\n            .tourBlockDetailItemText{\r\n                font-size: 13px;\r\n            }\r\n            .tourBlockDetailStarContainer{\r\n                font-size: 11px;\r\n            }\r\n        }\r\n    }\r\n}"],sourceRoot:""}]);const l=a}}]);
//# sourceMappingURL=812.bundle.js.map