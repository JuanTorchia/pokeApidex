(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{39:function(e,a,t){},41:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var A=t(0),n=t.n(A),s=t(15),r=t.n(s),c=(t(39),t(3)),l=t(4),o=t(6),i=t(5),m=t(66),h=t(68),d=t(67),p=(t(40),t(41),t.p+"static/media/pokemon_back.8b6f45e2.png"),u=t(11),E=t(12),g=t.p+"static/media/pokemon-logo.17b2d8c1.svg";function v(){var e=Object(u.a)(["\n  height: 50px;\n  width: auto;\n  margin-top: 0px;\n  style:\n"]);return v=function(){return e},e}function k(){var e=Object(u.a)(["\n  -moz-user-select: none;\n  -website-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -o-user-select: none;\n"]);return k=function(){return e},e}var b=E.a.a(k()),C=E.a.img(v()),B=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var A=arguments.length,n=new Array(A),s=0;s<A;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={hoverNavBar:!1},e}return Object(l.a)(t,[{key:"hoverNavBar",value:function(){window.scrollY<=0?this.setState({hoverNavBar:!1}):this.setState({hoverNavBar:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.hoverNavBar.bind(this),!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.hoverNavBar.bind(this),!0)}},{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top",style:this.state.hoverNavBar?{boxShadow:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",transition:"all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",backgroundColor:"#ef5350 !important"}:{backgroundColor:"transparent !important"}},n.a.createElement(b,{href:"#",className:"navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"},n.a.createElement(C,{src:g})))}}]),t}(A.Component),N=t(10),f=t.n(N),I=t(13),w=t(65);function x(){var e=Object(u.a)(["\n  text-decoration: none;\n  color: black;\n\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]);return x=function(){return e},e}function y(){var e=Object(u.a)(["\n  opacity: 0.95;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n  -moz-user-select: none;\n  -website-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -o-user-select: none;\n  margin-top: 25px\n"]);return y=function(){return e},e}function Q(){var e=Object(u.a)(["\n  width: 5em;\n  height: 5em;\n  display: none;\n"]);return Q=function(){return e},e}var R=E.a.img(Q()),M=E.a.div(y()),j=Object(E.a)(w.a)(x()),J=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var A=arguments.length,n=new Array(A),s=0;s<A;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={name:"",imageUrl:"",pokemonIndex:"",imageLoading:!0,toManyRequests:!1},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.name,t=e.url,A=t.split("/")[t.split("/").length-2],n="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/dream-world/".concat(A,".svg?raw=true");this.setState({name:a,imageUrl:n,pokemonIndex:A})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"col-md-3 col-sm-6 mb-5 pokemon__card"},n.a.createElement(j,{to:"pokemon/".concat(this.state.pokemonIndex)},n.a.createElement(M,{className:"card"},n.a.createElement("h5",{className:"card-header"},n.a.createElement("b",null,this.state.pokemonIndex," - ",this.state.name)),this.state.imageLoading?n.a.createElement("img",{src:"data:image/gif;base64,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",style:{width:"5em",height:"5em"},className:"card-img-top rounded mx-auto d-block mt-2",alt:this.state.name}):null,n.a.createElement(R,{className:"card-img-top rounded mx-auto mt-2",src:this.state.imageUrl,onLoad:function(){return e.setState({imageLoading:!1})},onError:function(){return e.setState({toManyRequests:!0})},style:this.state.toManyRequests?{display:"none"}:this.state.imageLoading?null:{display:"block"}}),this.state.toManyRequests?n.a.createElement("h6",{className:"mx-auto"},n.a.createElement("span",{className:"badge badge-danger mt-2"},"To Many Requests")):null,n.a.createElement("div",{className:"card-body mx-auto"},n.a.createElement("h6",{className:"card-title"},this.state.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))))))}}]),t}(A.Component),S=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h5",null,"Getting Pokemon..."))}}]),t}(A.Component),O=t(14),U=t.n(O),G=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var A=arguments.length,n=new Array(A),s=0;s<A;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={loading:!0,url:"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",pokemon:null,nextPage:20},e.fetchCharacters=Object(I.a)(f.a.mark((function a(){var t;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.setState({loading:!0,error:null}),a.prev=1,a.next=4,U.a.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=".concat(e.state.nextPage));case 4:t=a.sent,e.setState({loading:!1,pokemon:t.data.results,nextPage:e.state.nextPage+20}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e.setState({loading:!1,error:a.t0});case 11:case"end":return a.stop()}}),a,null,[[1,8]])}))),e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(I.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchCharacters();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.error?"Error!":n.a.createElement("div",null,this.state.pokemon?n.a.createElement("div",{className:"row"},this.state.pokemon.map((function(e){return n.a.createElement(J,{key:e.name,name:e.name,url:e.url})}))):n.a.createElement(S,null),n.a.createElement("div",{className:"footer_button"},!this.state.loading&&n.a.createElement("span",{className:"button_cont"},n.a.createElement("button",{className:"button__load",onClick:function(){return e.fetchCharacters()}},"More Pokemons +"))))}}]),t}(A.Component),Y=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement(G,null)))}}]),t}(A.Component),F=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"search"},n.a.createElement("form",null,n.a.createElement("input",{placeholder:"Pokemon",className:"form-control mx-auto",style:{backgroundColor:"white transparent",height:"1.75em",width:"95%",borderRadius:"15px",opacity:"0.8",fontSize:"1.75em"}})))}}]),t}(A.Component),T={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},D=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var A=arguments.length,n=new Array(A),s=0;s<A;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={name:"",pokemonIndex:"",imageUrl:"",types:[],description:"",statTitleWidth:3,statBarWidth:9,stats:{hp:"",attack:"",defense:"",speed:"",specialAttack:"",specialDefense:""},height:"",weight:"",eggGroups:"",catchRate:"",abilities:"",genderRatioMale:"",genderRatioFemale:"",evs:"",hatchSteps:"",themeColor:"#EF5350"},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(I.a)(f.a.mark((function e(){var a,t,A,n,s,r,c,l,o,i,m,h,d,p,u,E,g,v,k,b=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.pokemonIndex,t="https://pokeapi.co/api/v2/pokemon/".concat(a,"/"),A="https://pokeapi.co/api/v2/pokemon-species/".concat(a,"/"),n="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/".concat(a,".png?raw=true"),e.next=6,U.a.get(t);case 6:return s=e.sent,r=s.data.name,l=(c="").hp,o=c.attack,i=c.defense,m=c.speed,h=c.specialAttack,d=c.specialDefense,s.data.stats.forEach((function(e){switch(e.stat.name){case"hp":l=e.base_stat;break;case"attack":o=e.base_stat;break;case"defense":i=e.base_stat;break;case"speed":m=e.base_stat;break;case"special-attack":h=e.base_stat;break;case"special-defense":d=e.base_stat}})),p=Math.round(100*(.328084*s.data.height+1e-5))/100,u=Math.round(100*(.220462*s.data.weight+1e-5))/100,E=s.data.types.map((function(e){return e.type.name})),g="".concat(T[E[E.length-1]]),v=s.data.abilities.map((function(e){return e.ability.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),k=s.data.stats.filter((function(e){return e.effort>0})).map((function(e){return"".concat(e.effort," ").concat(e.stat.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))})).join(", "),e.next=18,U.a.get(A).then((function(e){var a="";e.data.flavor_text_entries.forEach((function(e){"en"!==e.language.name||(a=e.flavor_text)}));var t=e.data.gender_rate,A=12.5*t,n=12.5*(8-t),s=Math.round(100/255*e.data.capture_rate),r=e.data.egg_groups.map((function(e){return e.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),c=255*(e.data.hatch_counter+1);b.setState({description:a,genderRatioFemale:A,genderRatioMale:n,catchRate:s,eggGroups:r,hatchSteps:c})}));case 18:this.setState({imageUrl:n,pokemonIndex:a,name:r,types:E,stats:{hp:l,attack:o,defense:i,speed:m,specialAttack:h,specialDefense:d},themeColor:g,height:p,weight:u,abilities:v,evs:k});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5"},n.a.createElement("h5",null,this.state.pokemonIndex," ",this.state.name)),n.a.createElement("div",{className:"col-7"},n.a.createElement("div",{className:"float-right"},this.state.types.map((function(e){return n.a.createElement("span",{key:e,className:"badge badge-pill mr-1",style:{backgroundColor:"#".concat(T[e]),color:"white"}},e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))})))))),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:" col-md-3 "},n.a.createElement("img",{src:this.state.imageUrl,className:"card-img-top rounded mx-auto mt-2",alt:this.state.name})),n.a.createElement("div",{className:"col-md-9"},n.a.createElement("h4",{className:"mx-auto"},this.state.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},"HP"),n.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statBarWidth)},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar ",role:"progressbar",style:{width:"".concat(this.state.stats.hp,"%"),backgroundColor:"#".concat(this.state.themeColor)},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.stats.hp))))),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},"Attack"),n.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statBarWidth)},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.stats.attack,"%"),backgroundColor:"#".concat(this.state.themeColor)},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.stats.attack))))),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},"Defense"),n.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statBarWidth)},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar ",role:"progressbar",style:{width:"".concat(this.state.stats.defense,"%"),backgroundColor:"#".concat(this.state.themeColor)},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.stats.defense))))),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},"Speed"),n.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statBarWidth)},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.stats.speed,"%"),backgroundColor:"#".concat(this.state.themeColor)},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.stats.speed))))),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},"Sp Atk"),n.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statBarWidth)},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar ",role:"progressbar",style:{width:"".concat(this.state.stats.specialAttack,"%"),backgroundColor:"#".concat(this.state.themeColor)},"aria-valuenow":this.state.stats.specialAttack,"aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.stats.specialAttack))))),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},"Sp Def"),n.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statBarWidth)},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar ",role:"progressbar",style:{width:"".concat(this.state.stats.specialDefense,"%"),backgroundColor:"#".concat(this.state.themeColor)},"aria-valuenow":this.state.stats.specialDefense,"aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.stats.specialDefense))))))),n.a.createElement("div",{className:"row mt-1"},n.a.createElement("div",{className:"col"},n.a.createElement("h5",null,"Description: "),n.a.createElement("p",{className:"text-left"},this.state.description)))),n.a.createElement("hr",null),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{class:"card-title text-center"},"Profile"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-right"},"Height:")),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-left"},this.state.height," ft.")),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-right"},"Weight:")),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-left"},this.state.weight," lbs")),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-right"},"Catch Rate:")),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-left"},this.state.catchRate,"%")),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-right"},"Gender Ratio:")),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{class:"progress"},n.a.createElement("div",{class:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.genderRatioFemale,"%"),backgroundColor:"#c2185b"},"aria-valuenow":"15","aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.genderRatioFemale)),n.a.createElement("div",{class:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.genderRatioMale,"%"),backgroundColor:"#1976d2"},"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("small",null,this.state.genderRatioMale)))))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-right"},"Egg Groups:")),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-left"},this.state.eggGroups," ")),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-right"},"Hatch Steps:")),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-left"},this.state.hatchSteps)),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-right"},"Abilities:")),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-left"},this.state.abilities)),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-right"},"EVs:")),n.a.createElement("div",{className:"col-6"},n.a.createElement("h6",{className:"float-left"},this.state.evs)))))),n.a.createElement("div",{class:"card-footer text-muted"},"Data From"," ",n.a.createElement("a",{href:"https://pokeapi.co/",target:"_blank",rel:"noreferrer",className:"card-link"},"PokeAPI.co"))))}}]),t}(A.Component),L=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(m.a,null,n.a.createElement("div",{className:"App",style:{background:"url(".concat(p,")")}},n.a.createElement(B,null),n.a.createElement("div",{className:"container"},n.a.createElement(F,null),n.a.createElement(h.a,null,n.a.createElement(d.a,{exact:!0,path:"/",component:Y}),n.a.createElement(d.a,{exact:!0,path:"/pokemon/:pokemonIndex",component:D})))))}}]),t}(A.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.b43be9a0.chunk.js.map