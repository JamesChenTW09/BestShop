"use strict";(self.webpackChunkbestshop=self.webpackChunkbestshop||[]).push([[812],{6812:(t,o,e)=>{e.r(o),e.d(o,{default:()=>y});var n=e(8920),i=e(1504),a=e(4596),r=e.n(a),l=e(6520),A=e.n(l),c=e(6176),C=e.n(c),s=e(5120),u=e.n(s),m=e(6808),d=e.n(m),k=e(1936),p=e.n(k),B=e(5092),x={};x.styleTagTransform=p(),x.setAttributes=u(),x.insert=C().bind(null,"head"),x.domAPI=A(),x.insertStyleElement=d(),r()(B.c,x),B.c&&B.c.locals&&B.c.locals;var g=e(6542),D=e(5896),h=e(1968),I=e(7624);function f(t){var o=t.data,e=o.index,n=o.name,i=o.price,a=o.stars,r=Number(e)+1;return(0,I.jsxs)("div",{className:"tourBlockDetailItemContainer",children:[(0,I.jsxs)("div",{className:"tourBlockDetailItemTitle",children:[(0,I.jsxs)("span",{className:"tourBlockDetailItemText",children:[r,"."]}),(0,I.jsx)("span",{className:"tourBlockDetailItemText",children:n}),(0,I.jsx)("div",{className:"tourBlockDetailStarContainer",children:[1,2,3,4,5].map((function(t){return(0,I.jsx)(g.u,{icon:t<=a?D.y0l:h.y0l,className:"navIcons"})}))})]}),(0,I.jsxs)("div",{className:"tourBlockDetailItemPrice",children:["$",i]})]})}var w=e(1620),b={};b.styleTagTransform=p(),b.setAttributes=u(),b.insert=C().bind(null,"head"),b.domAPI=A(),b.insertStyleElement=d(),r()(w.c,b),w.c&&w.c.locals&&w.c.locals;var v=e(6160),T=e(2328),j=e(9792);function y(t){var o=t.data,e=t.likeHeartCount,a=t.setLikeHeartCount,r=o.file,l=o.id,A=o.name,c=o.content,C=o.address,s=o.type,u=o.visitTime,m=Array.isArray(r),d=(0,i.useState)(!1),k=(0,n.c)(d,2),p=k[0],B=k[1],x=(0,i.useState)([]),w=(0,n.c)(x,2),b=w[0],y=w[1],N=(0,i.useState)(""),S=(0,n.c)(N,2),M=S[0],z=S[1],E=(0,T.OY)();(0,i.useEffect)((function(){G(),z(m?r[0]:r),localStorage.getItem(l+"_like")&&B(!0)}),[]);var G=function(){if(o._subtable_1000139){var t=Object.values(o._subtable_1000139),e=[];t.forEach((function(t){e[t.index]=t})),y(e)}},Y=function(t){t.stopPropagation();var o=e;p?(localStorage.removeItem(l+"_like"),a((function(t){return t-1})),o--):(localStorage.setItem(l+"_like",1),a((function(t){return t+1})),o++),B((function(t){return!t}));var n=new FormData;n.append("1000140",o);try{(0,v.qo)("post",(0,v.YZ)(l),n)}catch(t){console.log("error "+t)}};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{className:"tourBlockDetailContainer",children:(0,I.jsxs)("div",{className:"tourBlockDetail",children:[(0,I.jsx)("div",{className:"tourBlockDetailTitle flexCenter",children:(0,I.jsx)("h3",{children:A})}),(0,I.jsx)("div",{className:"tourBlockDetailMainImgContainer",children:M?(0,I.jsx)("img",{className:"tourBlockDetailMainImgItem",src:"https://ap9.ragic.com/sims/file.jsp?a=js1031222&f="+M,alt:"Tour Photo"}):""}),(0,I.jsx)("div",{className:"tourBlockDetailMoreImgContainer",children:Array.isArray(r)?r.map((function(t){return(0,I.jsx)("img",{className:"tourBlockDetailMoreImgItem",onClick:function(){z(t)},src:"https://ap9.ragic.com/sims/file.jsp?a=js1031222&f="+t,alt:"Tour Photo"})})):(0,I.jsx)("img",{className:"tourBlockDetailMoreImgItem",src:"https://ap9.ragic.com/sims/file.jsp?a=js1031222&f="+r,alt:"Tour Photo"})}),(0,I.jsxs)("div",{className:"tourBlockDetailContentContainer",children:[(0,I.jsxs)("div",{className:"tourBlockDetailAddressAndType",children:[(0,I.jsx)("div",{className:"tourBlockDetailSmallItem",children:C}),(0,I.jsx)("div",{className:"tourBlockDetailSmallItem",children:s}),(0,I.jsxs)("div",{className:"tourBlockDetailSmallItem",children:[u,"造訪"]})]}),(0,I.jsx)("div",{className:"tourBlockDetailContent",children:c})]}),(0,I.jsxs)("div",{className:"tourBlockDetailTimeTitle flexBetween",children:[(0,I.jsx)("span",{children:"品項"}),p?(0,I.jsx)(g.u,{onClick:Y,icon:D.oNn,className:"navIcons"}):(0,I.jsx)(g.u,{onClick:Y,icon:h.oNn,className:"navIcons"})]}),b.map((function(t){return(0,I.jsx)(f,{data:t},t._ragicId)}))]})}),(0,I.jsx)("div",{className:"darkBackground flexCenter",onClick:function(){return E((0,j._f)({id:l,ifShow:!1}))},children:(0,I.jsx)("div",{className:"xmarkContainer",children:(0,I.jsx)(g.u,{icon:D.gxQ,className:"navIcons"})})})]})}},1620:(t,o,e)=>{e.d(o,{c:()=>l});var n=e(5648),i=e.n(n),a=e(2312),r=e.n(a)()(i());r.push([t.id,'.tourBlockDetailContainer{width:550px;position:fixed;top:50%;left:50%;max-height:600px;transform:translate(-50%, -50%);background-color:#fff;z-index:100;border-radius:8px;overflow-y:auto}.tourBlockDetailContainer .tourBlockDetail{border-bottom:2px solid #9c9c9c;padding-bottom:30px;width:80%;margin:0 auto 10px auto;font-weight:bold}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailTitle{margin:15px 0}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailMainImgContainer{width:100%;height:290px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailMainImgContainer .tourBlockDetailMainImgItem{width:100%;height:100%}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailMoreImgContainer{margin:15px 0;width:100%;display:flex;align-items:center;flex-wrap:wrap}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailMoreImgContainer .tourBlockDetailMoreImgItem{margin:4px;cursor:pointer;width:18%;height:50px;object-fit:cover;border:1px solid #9c9c9c}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContentContainer{font-size:15px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContentContainer .tourBlockDetailAddressAndType{display:flex;align-items:center;margin-bottom:12px;font-size:12px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContentContainer .tourBlockDetailAddressAndType .tourBlockDetailSmallItem{padding:3px 7px;border-radius:8px;background-color:#d1d1d1;margin-right:8px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContentContainer .tourBlockDetailContent{white-space:"pre-wrap"}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailTimeTitle{margin-top:20px;font-size:18px}.darkBackground{position:fixed;width:100%;height:100%;top:0;left:0;z-index:99;background-color:#616161;opacity:.8}.darkBackground .xmarkContainer{cursor:pointer;position:absolute;top:20px;right:20px}.darkBackground .xmarkContainer .navIcons{font-size:28px;color:#fff}@media(max-width: 900px){.tourBlockDetailContainer{top:53%;width:320px;max-height:500px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailMainImgContainer{height:160px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContentContainer{font-size:12px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailTimeTitle{font-size:15px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailMoreImgContainer .tourBlockDetailMoreImgItem{width:20%;height:32px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContainer{width:90%}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContainer .imgContainer{height:192px}.tourBlockDetailContainer .tourBlockDetail .tourBlockDetailContainer .moreImgContainer img{height:40px}}',"",{version:3,sources:["webpack://./src/Style/TourBlock/TourBlockDetail.scss"],names:[],mappings:"AAMA,0BACI,WAAA,CACA,cAAA,CACA,OAAA,CACA,QAAA,CACA,gBAAA,CACA,+BAAA,CACA,qBAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,2CACI,+BAAA,CACA,mBAAA,CACA,SAAA,CACA,uBAAA,CACA,gBAAA,CAEA,iEACI,aAAA,CAEJ,4EACI,UAAA,CACA,YAAA,CACA,wGACI,UAAA,CACA,WAAA,CAGR,4EACI,aAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,cAAA,CACA,wGACI,UAAA,CACA,cAAA,CACA,SAAA,CACA,WAAA,CACA,gBAAA,CACA,wBAAA,CAIR,4EACI,cAAA,CACA,2GACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,cAAA,CACA,qIACI,eAAA,CACA,iBAAA,CACA,wBA7DD,CA8DC,gBAAA,CAGR,oGACI,sBAAA,CAGR,qEACI,eAAA,CACA,cAAA,CAKZ,gBACI,cAAA,CACA,UAAA,CACA,WAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,wBAjFc,CAkFd,UAAA,CACA,gCACI,cAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,0CACI,cAAA,CACA,UAAA,CAMZ,yBACI,0BACI,OAAA,CACA,WAAA,CACA,gBAAA,CAEI,4EACI,YAAA,CAEJ,4EACI,cAAA,CAEJ,qEACI,cAAA,CAGA,wGACI,SAAA,CACA,WAAA,CAIR,qEACI,SAAA,CACA,mFACI,YAAA,CAGA,2FACI,WAAA,CAAA",sourcesContent:["$color-light-gray: rgb(209, 209, 209);\n$color-medium-gray: rgb(156, 156, 156);\n$color-dark-gray: rgb(97,97,97);\n\n\n\n.tourBlockDetailContainer{\n    width: 550px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    max-height: 600px;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    z-index: 100;\n    border-radius: 8px;\n    overflow-y: auto;\n    .tourBlockDetail{\n        border-bottom: 2px solid $color-medium-gray;\n        padding-bottom: 30px;\n        width: 80%;\n        margin: 0 auto 10px auto;\n        font-weight: bold;\n\n        .tourBlockDetailTitle{\n            margin: 15px 0;\n        }\n        .tourBlockDetailMainImgContainer{\n            width: 100%;\n            height: 290px;\n            .tourBlockDetailMainImgItem{\n                width: 100%;\n                height: 100%;\n            }\n        }\n        .tourBlockDetailMoreImgContainer{\n            margin: 15px 0;\n            width: 100%;\n            display: flex;\n            align-items: center;\n            flex-wrap: wrap;\n            .tourBlockDetailMoreImgItem{\n                margin: 4px;\n                cursor: pointer;\n                width: 18%;\n                height: 50px;\n                object-fit: cover;\n                border: 1px solid $color-medium-gray;\n            }\n\n        }\n        .tourBlockDetailContentContainer{\n            font-size: 15px;\n            .tourBlockDetailAddressAndType{\n                display: flex;\n                align-items: center;\n                margin-bottom: 12px;\n                font-size: 12px;\n                .tourBlockDetailSmallItem{\n                    padding: 3px 7px;\n                    border-radius: 8px;\n                    background-color: $color-light-gray;\n                    margin-right: 8px;\n                }\n            }\n            .tourBlockDetailContent{\n                white-space: 'pre-wrap';\n            }\n        }\n        .tourBlockDetailTimeTitle{\n            margin-top: 20px;\n            font-size: 18px;\n        }\n    }\n}\n\n.darkBackground{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 99;\n    background-color: $color-dark-gray;\n    opacity: 0.8;\n    .xmarkContainer{\n        cursor: pointer;\n        position: absolute;\n        top: 20px;\n        right: 20px;\n        .navIcons{\n            font-size: 28px;\n            color: white;\n        }\n    }\n}\n\n\n@media(max-width: 900px) {\n    .tourBlockDetailContainer{\n        top: 53%;\n        width: 320px;\n        max-height: 500px;\n        .tourBlockDetail{\n            .tourBlockDetailMainImgContainer{\n                height: 160px;\n            }\n            .tourBlockDetailContentContainer{\n                font-size: 12px;\n            }\n            .tourBlockDetailTimeTitle{\n                font-size: 15px;\n            }\n            .tourBlockDetailMoreImgContainer{\n                .tourBlockDetailMoreImgItem{\n                    width: 20%;\n                    height: 32px;\n                }\n\n            }\n            .tourBlockDetailContainer{            \n                width: 90%;\n                .imgContainer{\n                    height: 192px;\n                }\n                .moreImgContainer{\n                    img{\n                        height: 40px;\n                    }\n        \n                }\n            }\n        }\n    }\n}"],sourceRoot:""}]);const l=r},5092:(t,o,e)=>{e.d(o,{c:()=>l});var n=e(5648),i=e.n(n),a=e(2312),r=e.n(a)()(i());r.push([t.id,".tourBlockDetailItemContainer{margin-top:8px}.tourBlockDetailItemContainer .tourBlockDetailItemTitle{display:flex;align-items:center}.tourBlockDetailItemContainer .tourBlockDetailItemTitle .tourBlockDetailItemText{font-weight:bold;font-size:15px;margin-left:10px}.tourBlockDetailItemContainer .tourBlockDetailItemTitle .tourBlockDetailStarContainer{display:flex;align-items:center;color:#e62300;font-size:15px;margin-left:auto}.tourBlockDetailItemContainer .tourBlockDetailItemTitle .tourBlockDetailStarContainer .navIcons{margin:0 2px}.tourBlockDetailItemContainer .tourBlockDetailItemPrice{border-left:2px solid #000;font-weight:bold;margin-top:5px;margin-left:14px;padding-left:18px}@media(max-width: 900px){.tourBlockDetailItemContainer .tourBlockDetailItemTitle .tourBlockDetailItemText{font-size:13px}.tourBlockDetailItemContainer .tourBlockDetailItemTitle .tourBlockDetailStarContainer{font-size:11px}}","",{version:3,sources:["webpack://./src/Style/TourBlock/TourBlockDetailItem.scss"],names:[],mappings:"AAAA,8BACI,cAAA,CACA,wDACI,YAAA,CACA,kBAAA,CACA,iFACI,gBAAA,CACA,cAAA,CACA,gBAAA,CAEJ,sFACI,YAAA,CACA,kBAAA,CACA,aAAA,CACA,cAAA,CACA,gBAAA,CACA,gGACI,YAAA,CAIZ,wDACI,0BAAA,CACA,gBAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CAMR,yBAGY,iFACI,cAAA,CAEJ,sFACI,cAAA,CAAA",sourcesContent:[".tourBlockDetailItemContainer{\n    margin-top: 8px;\n    .tourBlockDetailItemTitle{\n        display: flex;\n        align-items: center;\n        .tourBlockDetailItemText{\n            font-weight: bold;\n            font-size: 15px;\n            margin-left: 10px;\n        }\n        .tourBlockDetailStarContainer{\n            display: flex;\n            align-items: center;\n            color: #e62300;\n            font-size: 15px;\n            margin-left: auto;\n            .navIcons{\n                margin: 0 2px;\n            }\n        }\n    }\n    .tourBlockDetailItemPrice{\n        border-left: 2px solid #000;\n        font-weight: bold;\n        margin-top: 5px;\n        margin-left: 14px;\n        padding-left: 18px;\n\n    }\n}\n\n\n@media(max-width: 900px) {\n    .tourBlockDetailItemContainer{\n        .tourBlockDetailItemTitle{\n            .tourBlockDetailItemText{\n                font-size: 13px;\n            }\n            .tourBlockDetailStarContainer{\n                font-size: 11px;\n            }\n        }\n    }\n}"],sourceRoot:""}]);const l=r}}]);
//# sourceMappingURL=812.bundle.js.map