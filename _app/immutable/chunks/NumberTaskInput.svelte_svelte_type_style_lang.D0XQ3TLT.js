class r{constructor(t,n=new i(t,this)){this.n=t,this.inverse=n}apply(t){return t+this.n}correct(){return!0}toString(){return`+${this.n}`}}class i{constructor(t,n=new r(t,this)){this.n=t,this.inverse=n}apply(t){return t-this.n}correct(){return!0}toString(){return`-${this.n}`}}class h{constructor(t,n=new e(t,this)){this.n=t,this.inverse=n}apply(t){return t*this.n}correct(){return!0}toString(){return`*${this.n}`}}class e{constructor(t,n=new h(t,this)){this.n=t,this.inverse=n}apply(t){return t/this.n}correct(t){return t%this.n===0}toString(){return`/${this.n}`}}var a=(s=>(s[s.BFS=0]="BFS",s[s.BFS_LIST=1]="BFS_LIST",s))(a||{}),c=(s=>(s[s.OBJECT=0]="OBJECT",s[s.TREE=1]="TREE",s[s.HASH=2]="HASH",s))(c||{});new h(2);new r(3);new i(2);const l=[{start:1,finish:100,length:7},{start:2,finish:55,length:6},{start:2,finish:100,length:7},{start:1,finish:97,length:8},{start:2,finish:1e3,length:12},{start:2,finish:8e5,length:24},{start:2,finish:10000001,length:30}],u=[{start:1,finish:100,length:7},{start:2,finish:3,length:2},{start:2,finish:55,length:6},{start:2,finish:100,length:7},{start:1,finish:97,length:8},{start:2,finish:1e3,length:11},{start:3,finish:1001,length:13},{start:3,finish:3001,length:14},{start:2,finish:8e5,length:23},{start:2,finish:10000001,length:30}];export{a as S,c as a,u as b,l as c};
