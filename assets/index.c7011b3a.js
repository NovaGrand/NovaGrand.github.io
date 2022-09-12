import{_ as M,o as l,c as i,a as t,n as r,t as u,p as L,d as x,r as C,b as n,w as f,F as b,f as Z,g as $,h as w,i as p,j as V,e as m,k as B,l as F}from"./index.4b4af11f.js";const E={name:"headbar",props:["stat"]},k=a=>(L("data-v-0223a336"),a=a(),x(),a),N={class:"leftBox"},I={class:"logoBox"},A=k(()=>t("h2",{class:"titlefda",black:"",lighten:""},"Mew cc",-1)),S=k(()=>t("a",{class:"logo",href:"/"},null,-1)),P={class:"rightBox"},j={class:"brief"},G=k(()=>t("i",{class:"text"},"Frontend Multi-Element Widgets Community Collection",-1)),T={class:"widget v"},z=k(()=>t("i",{class:"widget frameWork",title:"Integrates with Vue 3 only"},"VUE 3 ONLY",-1)),W=k(()=>t("div",{class:"by"},[t("i",{class:"text"},"Provided by"),t("a",{class:"novagrand"}),t("i",{class:"text_mobile"},"Provided by NovaGrand")],-1));function O(a,o,e,H,d,s){return l(),i("div",{id:"headbar",class:r({border:e.stat.drawer,dark:a.$color.theme==="dark"}),bg:"",noselect:""},[t("div",N,[t("div",I,[t("div",{class:r(["menuBtn",{close:e.stat.drawer}]),onClick:o[0]||(o[0]=h=>e.stat.drawer=!e.stat.drawer)},null,2),A,S])]),t("div",P,[t("div",j,[G,t("i",T,"VER. "+u(a.$store.state.version),1),z]),W])],2)}var R=M(E,[["render",O],["__scopeId","data-v-0223a336"]]);const U={name:"sidebar",created(){},data(){return{current:""}},props:["stat"],computed:{itemList(){return this.$store.state.doc},routeName(){return this.$route.name}},methods:{Chars(a){let o=[];for(let e=0;e<a.length;e++)o.push(a[e]);return o}}},y=a=>(L("data-v-0640137c"),a=a(),x(),a),Y={class:"content"},q={class:"group homePage"},J={grey:"",style:{"padding-top":"4px"}},K=y(()=>t("div",{class:"prefix"},"\u9996\u9875",-1)),Q=y(()=>t("div",{class:"suffix"}," Home ",-1)),X={class:"title",black:"",darken:"","alpha-10":""},t2={class:"suffix",black:"",darken:"","alpha-10":""};function a2(a,o,e,H,d,s){const h=C("router-link");return l(),i("div",{id:"sidebar",class:r({show:e.stat.drawer}),noselect:"",black:"","br-xs":"","alpha-3":""},[t("div",Y,[t("div",q,[t("ul",null,[t("li",J,[n(h,{to:"/"},{default:f(()=>[K,Q]),_:1})])])]),(l(!0),i(b,null,Z(s.itemList,(c,_,D)=>(l(),i("div",{class:r(["group",{noPaddingTop:D===0}])},[t("div",X,u(_),1),t("ul",null,[(l(!0),i(b,null,Z(c,v=>(l(),i("li",null,[n(h,{to:"/doc/"+v.path,draggable:"false",class:r({activated:s.routeName===v.name,dark:a.$color.theme==="dark"}),onClick:o[0]||(o[0]=g=>e.stat.drawer=!1)},{default:f(()=>[t("div",{class:"prefix",style:$("width:"+v.width),black:"",darken:"","alpha-13":""},[(l(!0),i(b,null,Z(s.Chars(v.prefix),g=>(l(),i("i",null,u(g),1))),256))],4),t("div",t2,u(v.suffix),1)]),_:2},1032,["to","class"])]))),256))])],2))),256))])],2)}var e2=M(U,[["render",a2],["__scopeId","data-v-0640137c"]]);const s2={name:"wrapper",mounted(){},watch:{$route(a,o){this.$el.scrollTop=0}},computed:{dark(){return this.$color.theme==="dark"},paths(){let a=[];for(let o in w)for(let e of w[o])a.push({name:e.name,path:e.path});return a},names(){let a=this.$route.name,o=null;for(let e=0;e<this.paths.length;e++)if(this.paths[e].name===a){let H=e===0?null:this.paths[e-1],d=e===this.paths.length-1?null:this.paths[e+1];o=[H,d]}return o}}},l2={class:"wrapper"},o2={class:"constraint"},i2={style:{width:"28px",height:"28px",margin:"0 3px 0 -5px"}},d2={width:"48",height:"48",viewBox:"0 0 48 48",fill:"none"},n2=["fill","stroke"],h2=t("path",{d:"M27.0514 24C27.0514 25.6852 25.6852 27.0514 24 27.0514C22.3148 27.0514 20.9486 25.6852 20.9486 24C20.9486 22.3148 22.3148 20.9486 24 20.9486C25.6852 20.9486 27.0514 22.3148 27.0514 24Z",fill:"#FFB800"},null,-1),r2=t("path",{d:"M27.0513 32.9958C27.0513 34.681 25.6852 36.0471 24 36.0471C22.3147 36.0471 20.9486 34.681 20.9486 32.9958C20.9486 31.3105 22.3147 29.9444 24 29.9444C25.6852 29.9444 27.0513 31.3105 27.0513 32.9958Z",fill:"#00DE4C"},null,-1),C2=t("path",{d:"M27.0514 15.0044C27.0514 16.6896 25.6852 18.0558 24 18.0558C22.3148 18.0558 20.9486 16.6896 20.9486 15.0044C20.9486 13.3192 22.3148 11.953 24 11.953C25.6852 11.953 27.0514 13.3192 27.0514 15.0044Z",fill:"#FD0000"},null,-1),c2=["fill","stroke"],_2=t("i",{"ac-20":""},"\u5BFC\u822A\u5927\u7EB2",-1),p2={jsb:"",class:"entries"},f2={class:"entry","ba-xs":"",black:"","alpha-7":""},u2={class:"icon attrs"},H2=["stroke"],v2=B('<g opacity="0.5"><path d="M74.5707 19.0476H79.3326C80.6659 19.0476 81.7135 20.0952 81.7135 21.4286C81.7135 22.7619 80.6659 23.8095 79.3326 23.8095H74.5707C73.2373 23.8095 72.1897 22.7619 72.1897 21.4286C72.1897 20.0952 73.2373 19.0476 74.5707 19.0476Z" fill="blue"></path><path d="M3.14206 95.2382H26.9516C28.2849 95.2382 29.3325 96.2858 29.3325 97.6191C29.3325 98.9525 28.2849 100 26.9516 100H3.14206C1.80873 100 0.761108 98.9525 0.761108 97.6191C0.761108 96.2858 1.80873 95.2382 3.14206 95.2382Z" fill="red"></path><path d="M60.285 57.1429H74.5706C75.9039 57.1429 76.9515 58.1905 76.9515 59.5238C76.9515 60.8571 75.9039 61.9046 74.5706 61.9046H60.285C58.9517 61.9046 57.9041 60.8571 57.9041 59.5238C57.9041 58.1905 58.9517 57.1429 60.285 57.1429Z" fill="#BF85BF"></path><path d="M31.7135 57.1429H50.7612C52.0945 57.1429 53.1422 58.1905 53.1422 59.5238C53.1422 60.8571 52.0945 61.9046 50.7612 61.9046H31.7135C30.3802 61.9046 29.3326 60.8571 29.3326 59.5238C29.3326 58.1905 30.3802 57.1429 31.7135 57.1429Z" fill="red"></path><path d="M3.14206 57.1429H22.1897C23.523 57.1429 24.5707 58.1905 24.5707 59.5238C24.5707 60.8571 23.523 61.9046 22.1897 61.9046H3.14206C1.80873 61.9046 0.761108 60.8571 0.761108 59.5238C0.761108 58.1905 1.80873 57.1429 3.14206 57.1429Z" fill="#0091c1"></path><path d="M3.14206 76.1904H26.9516C28.2849 76.1904 29.3325 77.2381 29.3325 78.5714C29.3325 79.9047 28.2849 80.9524 26.9516 80.9524H3.14206C1.80873 80.9524 0.761108 79.9047 0.761108 78.5714C0.761108 77.2381 1.80873 76.1904 3.14206 76.1904Z" fill="#BF85BF"></path><path d="M3.14206 38.0952H26.9516C28.2849 38.0952 29.3325 39.1429 29.3325 40.4762C29.3325 41.8096 28.2849 42.8572 26.9516 42.8572H3.14206C1.80873 42.8572 0.761108 41.8096 0.761108 40.4762C0.761108 39.1429 1.80873 38.0952 3.14206 38.0952Z" fill="#BF85BF"></path><path d="M26.9516 9.5238H74.5706C75.9039 9.5238 76.9515 10.5714 76.9515 11.9048C76.9515 13.2381 75.9039 14.2857 74.5706 14.2857H26.9516C25.6182 14.2857 24.5706 13.2381 24.5706 11.9048C24.5706 10.5714 25.6182 9.5238 26.9516 9.5238Z" fill="#F7BA3E"></path><path d="M3.14206 9.5238H17.4278C18.7611 9.5238 19.8087 10.5714 19.8087 11.9048C19.8087 13.2381 18.7611 14.2857 17.4278 14.2857H3.14206C1.80873 14.2857 0.761108 13.2381 0.761108 11.9048C0.761108 10.5714 1.80873 9.5238 3.14206 9.5238Z" fill="red"></path><path d="M22.1897 85.7142H26.9516C28.285 85.7142 29.3326 86.7619 29.3326 88.0952C29.3326 89.4285 28.285 90.4762 26.9516 90.4762H22.1897C20.8563 90.4762 19.8087 89.4285 19.8087 88.0952C19.8087 86.7619 20.8563 85.7142 22.1897 85.7142Z" fill="#F7BA3E"></path><path d="M22.1897 28.5715H26.9516C28.285 28.5715 29.3326 29.6191 29.3326 30.9524C29.3326 32.2857 28.285 33.3333 26.9516 33.3333H22.1897C20.8563 33.3333 19.8087 32.2857 19.8087 30.9524C19.8087 29.6191 20.8563 28.5715 22.1897 28.5715Z" fill="#0091c1"></path><path d="M3.14206 85.7142H12.6659C13.9992 85.7142 15.0468 86.7619 15.0468 88.0952C15.0468 89.4285 13.9992 90.4762 12.6659 90.4762H3.14206C1.80873 90.4762 0.761108 89.4285 0.761108 88.0952C0.761108 86.7619 1.80873 85.7142 3.14206 85.7142Z" fill="#0091c1"></path><path d="M3.14206 28.5715H12.6659C13.9992 28.5715 15.0468 29.6191 15.0468 30.9524C15.0468 32.2857 13.9992 33.3333 12.6659 33.3333H3.14206C1.80873 33.3333 0.761108 32.2857 0.761108 30.9524C0.761108 29.6191 1.80873 28.5715 3.14206 28.5715Z" fill="#F7BA3E"></path><path d="M65.0469 85.7142H69.8087C71.142 85.7142 72.1896 86.7619 72.1896 88.0952C72.1896 89.4285 71.142 90.4762 69.8087 90.4762H65.0469C63.7136 90.4762 62.666 89.4285 62.666 88.0952C62.666 86.7619 63.7136 85.7142 65.0469 85.7142Z" fill="#D0D4D8"></path><path d="M36.4754 85.7142H55.5231C56.8564 85.7142 57.9041 86.7619 57.9041 88.0952C57.9041 89.4285 56.8564 90.4762 55.5231 90.4762H36.4754C35.142 90.4762 34.0944 89.4285 34.0944 88.0952C34.0944 86.7619 35.142 85.7142 36.4754 85.7142Z" fill="#D0D4D8"></path><path d="M79.3326 85.7142H98.3802C99.7136 85.7142 100.761 86.7619 100.761 88.0952C100.761 89.4285 99.7136 90.4762 98.3802 90.4762H79.3326C77.9992 90.4762 76.9516 89.4285 76.9516 88.0952C76.9516 86.7619 77.9992 85.7142 79.3326 85.7142Z" fill="#D0D4D8"></path><path d="M41.2373 47.619H79.3325C80.6658 47.619 81.7134 48.6666 81.7134 49.9999C81.7134 51.3332 80.6658 52.3808 79.3325 52.3808H41.2373C39.9039 52.3808 38.8563 51.3332 38.8563 49.9999C38.8563 48.6666 39.9039 47.619 41.2373 47.619Z" fill="#0091c1"></path><path d="M17.4278 47.619H31.7135C33.0468 47.619 34.0944 48.6666 34.0944 49.9999C34.0944 51.3332 33.0468 52.3808 31.7135 52.3808H17.4278C16.0944 52.3808 15.0468 51.3332 15.0468 49.9999C15.0468 48.6666 16.0944 47.619 17.4278 47.619Z" fill="#F7BA3E"></path><path d="M3.14206 47.619H7.90397C9.23731 47.619 10.2849 48.6666 10.2849 49.9999C10.2849 51.3332 9.23731 52.3808 7.90397 52.3808H3.14206C1.80873 52.3808 0.761108 51.3332 0.761108 49.9999C0.761108 48.6666 1.80873 47.619 3.14206 47.619Z" fill="red"></path><path d="M45.9992 19.0476H65.0468C66.3801 19.0476 67.4277 20.0952 67.4277 21.4286C67.4277 22.7619 66.3801 23.8095 65.0468 23.8095H45.9992C44.6659 23.8095 43.6183 22.7619 43.6183 21.4286C43.6183 20.0952 44.6659 19.0476 45.9992 19.0476Z" fill="#BF85BF"></path><path d="M3.14206 19.0476H36.4754C37.8087 19.0476 38.8563 20.0952 38.8563 21.4286C38.8563 22.7619 37.8087 23.8095 36.4754 23.8095H3.14206C1.80873 23.8095 0.761108 22.7619 0.761108 21.4286C0.761108 20.0952 1.80873 19.0476 3.14206 19.0476Z" fill="#0091c1"></path><path d="M17.4278 66.6666H60.285C61.6184 66.6666 62.666 67.7142 62.666 69.0476C62.666 70.3809 61.6184 71.4285 60.285 71.4285H17.4278C16.0944 71.4285 15.0468 70.3809 15.0468 69.0476C15.0468 67.7142 16.0944 66.6666 17.4278 66.6666Z" fill="#F7BA3E"></path><path d="M3.14206 66.6666H7.90397C9.23731 66.6666 10.2849 67.7142 10.2849 69.0476C10.2849 70.3809 9.23731 71.4285 7.90397 71.4285H3.14206C1.80873 71.4285 0.761108 70.3809 0.761108 69.0476C0.761108 67.7142 1.80873 66.6666 3.14206 66.6666Z" fill="#BF85BF"></path><path d="M60.285 28.5715H84.0944C85.4277 28.5715 86.4754 29.6191 86.4754 30.9524C86.4754 32.2857 85.4277 33.3333 84.0944 33.3333H60.285C58.9517 33.3333 57.9041 32.2857 57.9041 30.9524C57.9041 29.6191 58.9517 28.5715 60.285 28.5715Z" fill="red"></path><path d="M60.285 38.0952H84.0944C85.4277 38.0952 86.4754 39.1429 86.4754 40.4762C86.4754 41.8096 85.4277 42.8572 84.0944 42.8572H60.285C58.9517 42.8572 57.9041 41.8096 57.9041 40.4762C57.9041 39.1429 58.9517 38.0952 60.285 38.0952Z" fill="#F7BA3E"></path><path d="M3.14206 0H60.2849C61.6183 0 62.6659 1.04762 62.6659 2.38095C62.6659 3.71429 61.6183 4.7619 60.2849 4.7619H3.14206C1.80873 4.7619 0.761108 3.71429 0.761108 2.38095C0.761108 1.04762 1.80873 0 3.14206 0Z" fill="#0091c1"></path><path d="M69.8087 0H98.3802C99.7135 0 100.761 1.04762 100.761 2.38095C100.761 3.71429 99.7135 4.7619 98.3802 4.7619H69.8087C68.4754 4.7619 67.4278 3.71429 67.4278 2.38095C67.4278 1.04762 68.4754 0 69.8087 0Z" fill="#D0D4D8"></path><path d="M69.8087 66.6666H79.3325C80.6658 66.6666 81.7135 67.7142 81.7135 69.0476C81.7135 70.3809 80.6658 71.4285 79.3325 71.4285H69.8087C68.4754 71.4285 67.4278 70.3809 67.4278 69.0476C67.4278 67.7142 68.4754 66.6666 69.8087 66.6666Z" fill="#D0D4D8"></path><path d="M88.8564 66.6666H98.3802C99.7136 66.6666 100.761 67.7142 100.761 69.0476C100.761 70.3809 99.7136 71.4285 98.3802 71.4285H88.8564C87.523 71.4285 86.4754 70.3809 86.4754 69.0476C86.4754 67.7142 87.523 66.6666 88.8564 66.6666Z" fill="#D0D4D8"></path><path d="M84.0945 57.1429H98.3802C99.7136 57.1429 100.761 58.1905 100.761 59.5238C100.761 60.8571 99.7136 61.9046 98.3802 61.9046H84.0945C82.7611 61.9046 81.7135 60.8571 81.7135 59.5238C81.7135 58.1905 82.7611 57.1429 84.0945 57.1429Z" fill="#D0D4D8"></path><path d="M84.0945 9.5238H98.3802C99.7136 9.5238 100.761 10.5714 100.761 11.9048C100.761 13.2381 99.7136 14.2857 98.3802 14.2857H84.0945C82.7611 14.2857 81.7135 13.2381 81.7135 11.9048C81.7135 10.5714 82.7611 9.5238 84.0945 9.5238Z" fill="#D0D4D8"></path><path d="M88.8564 47.619H98.3802C99.7136 47.619 100.761 48.6666 100.761 49.9999C100.761 51.3332 99.7136 52.3808 98.3802 52.3808H88.8564C87.523 52.3808 86.4754 51.3332 86.4754 49.9999C86.4754 48.6666 87.523 47.619 88.8564 47.619Z" fill="#D0D4D8"></path><path d="M88.8564 19.0476H98.3802C99.7136 19.0476 100.761 20.0952 100.761 21.4286C100.761 22.7619 99.7136 23.8095 98.3802 23.8095H88.8564C87.523 23.8095 86.4754 22.7619 86.4754 21.4286C86.4754 20.0952 87.523 19.0476 88.8564 19.0476Z" fill="#D0D4D8"></path><path d="M93.6183 28.5715H98.3802C99.7135 28.5715 100.761 29.6191 100.761 30.9524C100.761 32.2857 99.7135 33.3333 98.3802 33.3333H93.6183C92.2849 33.3333 91.2373 32.2857 91.2373 30.9524C91.2373 29.6191 92.2849 28.5715 93.6183 28.5715Z" fill="#D0D4D8"></path><path d="M93.6183 38.0952H98.3802C99.7135 38.0952 100.761 39.1429 100.761 40.4762C100.761 41.8096 99.7135 42.8572 98.3802 42.8572H93.6183C92.2849 42.8572 91.2373 41.8096 91.2373 40.4762C91.2373 39.1429 92.2849 38.0952 93.6183 38.0952Z" fill="#D0D4D8"></path><path d="M55.5232 76.1904H98.3802C99.7135 76.1904 100.761 77.2381 100.761 78.5714C100.761 79.9047 99.7135 80.9524 98.3802 80.9524H55.5232C54.1898 80.9524 53.1422 79.9047 53.1422 78.5714C53.1422 77.2381 54.1898 76.1904 55.5232 76.1904Z" fill="#D0D4D8"></path><path d="M36.4754 76.1904H45.9992C47.3325 76.1904 48.3801 77.2381 48.3801 78.5714C48.3801 79.9047 47.3325 80.9524 45.9992 80.9524H36.4754C35.142 80.9524 34.0944 79.9047 34.0944 78.5714C34.0944 77.2381 35.142 76.1904 36.4754 76.1904Z" fill="#D0D4D8"></path><path d="M74.5707 95.2382H98.3803C99.7136 95.2382 100.761 96.2858 100.761 97.6191C100.761 98.9525 99.7136 100 98.3803 100H74.5707C73.2373 100 72.1897 98.9525 72.1897 97.6191C72.1897 96.2858 73.2373 95.2382 74.5707 95.2382Z" fill="#D0D4D8"></path><path d="M36.4754 95.2382H65.0468C66.3801 95.2382 67.4277 96.2858 67.4277 97.6191C67.4277 98.9525 66.3801 100 65.0468 100H36.4754C35.142 100 34.0944 98.9525 34.0944 97.6191C34.0944 96.2858 35.142 95.2382 36.4754 95.2382Z" fill="#D0D4D8"></path><path d="M36.4754 28.5715H50.7612C52.0945 28.5715 53.1422 29.6191 53.1422 30.9524C53.1422 32.2857 52.0945 33.3333 50.7612 33.3333H36.4754C35.142 33.3333 34.0944 32.2857 34.0944 30.9524C34.0944 29.6191 35.142 28.5715 36.4754 28.5715Z" fill="#D0D4D8"></path><path d="M36.4754 38.0952H50.7612C52.0945 38.0952 53.1422 39.1429 53.1422 40.4762C53.1422 41.8096 52.0945 42.8572 50.7612 42.8572H36.4754C35.142 42.8572 34.0944 41.8096 34.0944 40.4762C34.0944 39.1429 35.142 38.0952 36.4754 38.0952Z" fill="#D0D4D8"></path></g>',1),m2=[v2],k2={class:"info"},M2=t("h2",{black:"",darken:"","alpha-18":""},"\u5C5E\u6027\u5217\u8868",-1),b2={black:"",darken:"","alpha-15":""},Z2={key:0},D2=m("\u67E5\u770B\u5168\u90E8\u5C5E\u6027"),g2={class:"entry","ba-xs":"",black:"","alpha-7":""},w2={class:"icon api"},V2={width:"101",height:"80",viewBox:"0 0 101 80",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L2=["fill"],x2={class:"info"},y2=t("h2",{black:"",darken:"","alpha-18":""},"\u7EC4\u4EF6 API",-1),$2={black:"",darken:"","alpha-15":""},B2={key:0},F2=m("\u67E5\u770B\u5168\u90E8\u7EC4\u4EF6"),E2={class:"entry",href:"https://github.com/NovaGrand/MewCC","ba-xs":"",black:"","alpha-7":"",target:"_blank"},N2={class:"icon git"},I2={width:"101",height:"98",viewBox:"0 0 101 98",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A2=["fill"],S2={class:"info"},P2=t("h2",{black:"",darken:"","alpha-18":""},"Git \u4ED3\u5E93",-1),j2={black:"",darken:"","alpha-15":""},G2={key:0},T2=m("\u63D0\u4EA4\u95EE\u9898"),z2=t("div",{black:"","bb-xs":"","alpha-3":"",style:{margin:"30px 0 15px 0"}},null,-1),W2={clss:"prev"},O2=m("arrow-thick"),R2={sm:"",class:"name"},U2={class:"next"},Y2={sm:"",class:"name"},q2=m("arrow-thick");function J2(a,o,e,H,d,s){const h=C("router-view"),c=C("ico"),_=C("router-link");return l(),i("div",l2,[t("div",o2,[n(h),t("footer",{class:r(["outline",{mobile:a.$global.mobile}])},[t("h3",null,[t("i",i2,[(l(),i("svg",d2,[t("path",{d:"M40 20H34V17.72C37.44 16.82 40 13.72 40 10H34V8C34 6.9 33.1 6 32 6H16C14.9 6 14 6.9 14 8V10H8C8 13.72 10.56 16.82 14 17.72V20H8C8 23.72 10.56 26.82 14 27.72V30H8C8 33.72 10.56 36.82 14 37.72V40C14 41.1 14.9 42 16 42H32C33.1 42 34 41.1 34 40V37.72C37.44 36.82 40 33.72 40 30H34V27.72C37.44 26.82 40 23.72 40 20ZM30 38H18V10H30V38Z",fill:s.dark?"#828282":"#5b5b5b",stroke:s.dark?"black":"none"},null,8,n2),h2,r2,C2,t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30 38H18V10H30V38ZM24 27.0514C25.6852 27.0514 27.0514 25.6852 27.0514 24C27.0514 22.3148 25.6852 20.9486 24 20.9486C22.3148 20.9486 20.9486 22.3148 20.9486 24C20.9486 25.6852 22.3148 27.0514 24 27.0514ZM24 36.0471C25.6852 36.0471 27.0513 34.681 27.0513 32.9958C27.0513 31.3105 25.6852 29.9444 24 29.9444C22.3147 29.9444 20.9486 31.3105 20.9486 32.9958C20.9486 34.681 22.3147 36.0471 24 36.0471ZM24 18.0558C25.6852 18.0558 27.0514 16.6896 27.0514 15.0044C27.0514 13.3192 25.6852 11.953 24 11.953C22.3148 11.953 20.9486 13.3192 20.9486 15.0044C20.9486 16.6896 22.3148 18.0558 24 18.0558Z",fill:s.dark?"#545454":"#424242",stroke:s.dark?"black":"none"},null,8,c2)]))]),_2]),t("div",p2,[t("a",f2,[t("div",u2,[(l(),i("svg",{width:"101",height:"100",viewBox:"0 0 101 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:s.dark?"white":"black"},m2,8,H2))]),t("div",k2,[M2,t("small",b2,[a.$global.mobile?p("",!0):(l(),i("i",Z2,"\u5728\u4E00\u4E2A\u9875\u9762")),D2])])]),t("a",g2,[t("div",w2,[(l(),i("svg",V2,[t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M27.7948 79.0472L15.3585 74.5842V56.3562L27.7948 60.5935V79.0472ZM30.0761 79.0472L42.5124 74.585V56.3562L30.0761 60.5935V79.0472ZM16.6365 54.9928L29.223 51.4493L40.8942 55.2127L29.223 59.1753L16.6365 54.9928V54.9928ZM12.9884 53.5812L0.552124 49.1198V30.8903L12.9884 35.1275V53.5812ZM15.2697 53.5812L27.7069 49.1198V30.8903L15.2697 35.1275V53.5812V53.5812ZM1.83011 29.526L14.4175 25.9833L26.0886 29.7467L14.4175 33.7093L1.83011 29.5268V29.526ZM42.0079 53.5812L29.5707 49.1198V30.8903L42.0079 35.1275V53.5812ZM44.2892 53.5812L56.7263 49.1198V30.8903L44.2892 35.1275V53.5812V53.5812ZM30.8504 29.526L43.4369 25.9833L55.1072 29.7467L43.4369 33.7093L30.8504 29.5268V29.526ZM56.8143 28.1136L44.3771 23.6539V5.42431L56.8143 9.66075V28.1136ZM59.0955 28.1136L71.5319 23.6539V5.42431L59.0947 9.66075V28.1136H59.0955ZM45.6559 4.06084L58.2433 0.517334L69.9136 4.27993L58.2433 8.24335L45.6559 4.06084ZM85.8345 28.1136L73.3974 23.6539V5.42431L85.8345 9.66075V28.1136ZM88.115 28.1136L100.552 23.6539V5.42431L88.115 9.66075V28.1136ZM74.6754 4.06084L87.2627 0.517334L98.9331 4.27993L87.2627 8.24252L74.6754 4.06001",fill:s.dark?"#7192c4":"#6888B8"},null,8,L2)]))]),t("div",x2,[y2,t("small",$2,[a.$global.mobile?p("",!0):(l(),i("i",B2,"\u5728\u4E00\u4E2A\u9875\u9762")),F2])])]),t("a",E2,[t("div",N2,[(l(),i("svg",I2,[t("path",{d:"M50.2763 0.422363C22.6655 0.422363 0.276123 22.8078 0.276123 50.4226C0.276123 72.5143 14.6027 91.2564 34.4694 97.8679C36.9682 98.3307 37.8858 96.7833 37.8858 95.4625C37.8858 94.2704 37.8391 90.3313 37.8179 86.1534C23.9074 89.178 20.9723 80.2541 20.9723 80.2541C18.6978 74.4746 15.4207 72.9382 15.4207 72.9382C10.8844 69.8348 15.7626 69.8983 15.7626 69.8983C20.7836 70.2513 23.4275 75.0511 23.4275 75.0511C27.8869 82.6951 35.1243 80.485 37.9775 79.2078C38.4261 75.9758 39.7222 73.7704 41.1519 72.5218C30.0464 71.2571 18.3716 66.9698 18.3716 47.8113C18.3716 42.3526 20.3248 37.892 23.5235 34.3906C23.0043 33.131 21.293 28.0457 24.0078 21.1585C24.0078 21.1585 28.2065 19.8146 37.7615 26.2838C41.7496 25.1756 46.0271 24.6203 50.2763 24.6015C54.5256 24.6203 58.8062 25.1756 62.8022 26.2838C72.3457 19.8146 76.5385 21.1585 76.5385 21.1585C79.26 28.0457 77.5479 33.131 77.0287 34.3906C80.2345 37.892 82.1744 42.3523 82.1744 47.8113C82.1744 67.0153 70.4776 71.2442 59.3438 72.4818C61.1371 74.0335 62.7351 77.0765 62.7351 81.7411C62.7351 88.431 62.6771 93.8155 62.6771 95.4625C62.6771 96.7931 63.577 98.3522 66.1118 97.8613C85.9676 91.2423 100.276 72.5069 100.276 50.4226C100.276 22.8078 77.8899 0.422363 50.2763 0.422363Z",fill:s.dark?"#bcbcbc":"#161614"},null,8,A2)]))]),t("div",S2,[P2,t("small",j2,[a.$global.mobile?p("",!0):(l(),i("i",G2,"\u83B7\u53D6\u6E90\u7801\u6216")),T2])])])]),z2,t("div",{class:r(["nav",{dark:s.dark}]),jsb:"",black:"",darken:"","alpha-10":""},[t("div",W2,[s.names[0]?(l(),V(_,{key:0,to:s.names[0].path},{default:f(()=>[n(c,{class:"ico"},{default:f(()=>[O2]),_:1}),t("i",R2,u(s.names[0].name),1)]),_:1},8,["to"])):p("",!0)]),t("div",U2,[s.names[1]?(l(),V(_,{key:0,to:s.names[1].path},{default:f(()=>[t("i",Y2,u(s.names[1].name),1),n(c,{class:"ico",flip:"",black:"",darken:"","alpha-10":""},{default:f(()=>[q2]),_:1})]),_:1},8,["to"])):p("",!0)])],2)],2)])])}var K2=M(s2,[["render",J2]]);const Q2={name:"documentation",components:{headbar:R,sidebar:e2,wrapper:K2},data(){return{stat:{drawer:!1}}}},X2={class:"documentation",flex:""};function t1(a,o,e,H,d,s){const h=C("headbar"),c=C("sidebar"),_=C("wrapper");return l(),i("div",X2,[n(h,{stat:d.stat},null,8,["stat"]),n(c,{stat:d.stat},null,8,["stat"]),n(_),d.stat.drawer&&a.$global.mobile?(l(),i("div",{key:0,class:"eventMask",onClick:o[0]||(o[0]=F(D=>d.stat.drawer=!1,["self"]))})):p("",!0)])}var e1=M(Q2,[["render",t1]]);export{e1 as default};
