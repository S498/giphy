(this.webpackJsonpgiphy=this.webpackJsonpgiphy||[]).push([[0],{214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),i=a.n(l),c=a(20),o=a.n(c),s=a(37),u=a(8),m=a(6),f=a(12),h=a(11),p=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onFromSubmitted=function(e){e.preventDefault(),n.props.fun(n.state.term,n.state.limit)},n.state={term:"",limit:18},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFromSubmitted},r.a.createElement("div",{className:"field",style:{alignItems:"center"}},r.a.createElement("label",null,"Gif search"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({term:t.target.value})},style:{margin:"10px"},value:this.state.term}),r.a.createElement("button",{variant:"primary",onSubmit:this.onFromSubmitted,style:{margin:"10px"}},"Search"),r.a.createElement("span",null,"Number of Results: "),r.a.createElement("select",{id:"number",name:"Number of Results",onChange:function(t){return e.setState({limit:t.target.value})}},r.a.createElement("option",{value:"18"},"18"),r.a.createElement("option",{value:"36"},"36"),r.a.createElement("option",{value:"72"},"72")))))}}]),a}(n.Component),d=a(78),g=a.n(d).a.create({baseURL:"http://api.giphy.com/v1"}),v=(a(56),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).correctRowHeights=function(){if(null!=e.imageRef.current.clientHeight){console.log(e.imageRef.current.clientHeight);var t=e.imageRef.current.clientHeight,a=Math.ceil(t/10);e.setState({noOfSpans:a})}else{var n=Math.ceil(20);e.setState({noOfSpans:n})}},e.imageRef=r.a.createRef(),e.state={noOfSpans:0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.correctRowHeights)}},{key:"render",value:function(){var e=this.props.image.url;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.noOfSpans)}},r.a.createElement("img",{ref:this.imageRef,src:e,className:"image-list",alt:"Gif"}))}}]),a}(n.Component)),E=function(e){console.log(e.gifs);var t=e.gifs.map((function(e){return r.a.createElement(v,{key:e.id,image:e.images.original})}));return r.a.createElement("div",{className:"image-list"},t)},b=a(22),O=a.n(b),y=(a(213),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).printTheResultForApp=function(){var t=Object(s.a)(o.a.mark((function t(a,n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a,n),t.next=3,g.get("/gifs/search",{params:{q:a,api_key:"f2HFAPLB9mqdgpVHFo7mfiGnQwVBiNiD",limit:n}});case 3:r=t.sent,e.setState({GifList:r.data.data});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.state={GifList:[],modalShow:!1},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,{fun:this.printTheResultForApp}),r.a.createElement("div",null,this.state.GifList.length>0?r.a.createElement("p",null,"Showing ",this.state.GifList.length," GIF's"):null,r.a.createElement(E,{gifs:this.state.GifList})))}}]),a}(r.a.Component)),S=a(216),j=a(217),w=function(){return r.a.createElement("span",null,"G")};function N(e){return r.a.createElement(S.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,scrollable:!0}),r.a.createElement(S.a.Header,{closeButton:!0},r.a.createElement(S.a.Title,{id:"contained-modal-title-vcenter"},"Modal heading")),r.a.createElement(S.a.Body,null,r.a.createElement(y,null)),r.a.createElement(S.a.Footer,null,r.a.createElement(j.a,{onClick:e.onHide},"Close")))}var R=function(){return r.a.createElement("div",{id:"toolbar"},r.a.createElement("select",{className:"ql-font",defaultValue:"arial"},r.a.createElement("option",{value:"arial",selected:!0},"Arial"),r.a.createElement("option",{value:"courier-new"},"Courier New")),r.a.createElement("select",{className:"ql-size",defaultValue:"small"},r.a.createElement("option",{value:"small"},"Size 2"),r.a.createElement("option",{value:"medium",selected:!0},"Size 3"),r.a.createElement("option",{value:"large"},"Size 4")),r.a.createElement("select",{className:"ql-align"}),r.a.createElement("select",{className:"ql-color"}),r.a.createElement("button",{className:"ql-customButton"},r.a.createElement(w,null)))},k=b.Quill.import("formats/size");k.whitelist=["small","medium","large"],b.Quill.register(k,!0);var H=b.Quill.import("formats/font");H.whitelist=["arial","comic-sans"],b.Quill.register(H,!0);var G=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={editorHtml:"",showModal:!1},n.handleChange=function(e){n.setState({editorHtml:e})},n}return Object(m.a)(a,[{key:"customButton",value:function(e){console.log("g")}}]),Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-editor"},r.a.createElement(R,null),r.a.createElement(O.a,{value:this.state.editorHtml,onChange:this.handleChange,modules:a.modules}),r.a.createElement(N,{show:this.state.showModal,onHide:function(){return e.setState({showModal:!1})}}))}}]),a}(r.a.Component);G.modules={toolbar:{container:"#toolbar",handlers:{customButton:function(){console.log("g pressed")}}}};var C=G;var F=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).printTheResultForApp=function(){var t=Object(s.a)(o.a.mark((function t(a,n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a,n),t.next=3,g.get("/gifs/search",{params:{q:a,api_key:"f2HFAPLB9mqdgpVHFo7mfiGnQwVBiNiD",limit:n}});case 3:r=t.sent,e.setState({GifList:r.data.data});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.state={GifList:[],modalShow:!1},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement("h1",null,"Quill Text Editor"),r.a.createElement(C,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,"Giphy Search"),r.a.createElement(y,null))}}]),a}(n.Component);i.a.render(r.a.createElement(F,null),document.querySelector("#root"))},56:function(e,t,a){},85:function(e,t,a){e.exports=a(214)}},[[85,1,2]]]);
//# sourceMappingURL=main.7587a0d5.chunk.js.map