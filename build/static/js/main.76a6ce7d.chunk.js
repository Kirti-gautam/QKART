(this["webpackJsonpqkart-frontend-v2-hooks"]=this["webpackJsonpqkart-frontend-v2-hooks"]||[]).push([[0],{123:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},153:function(e,t,n){},155:function(e){e.exports=JSON.parse("{}")},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(38),s=n.n(c),i=(n(123),n(11)),o=n.n(i),u=n(5),d=n(16),l=n(15),j=n(13),h=n(202),b=n(211),p=n(216),f=n(221),x=n(26),O=n.n(x),m=n(37),v=n(199),g=(n(147),n(1)),w=function(){return Object(g.jsxs)(v.a,{className:"footer",children:[Object(g.jsx)(v.a,{children:Object(g.jsx)("img",{src:"logo_dark.svg",alt:"QKart-icon"})}),Object(g.jsx)("p",{className:"footer-text",children:"QKart is your one stop solution to the buy the latest trending items with India's Fastest Delivery to your doorstep"})]})},k=n(105),y=n.n(k),C=n(217),N=n(200),S=(n(148),n(21)),A=function(e){var t=Object(S.f)();return Object(g.jsxs)(N.a,{className:"header",children:[Object(g.jsx)(N.a,{className:"header-title",children:Object(g.jsx)("img",{src:"logo_light.svg",alt:"QKart-icon"})}),e.children,e.hasHiddenAuthButtons?Object(g.jsx)(p.a,{className:"explore-button",startIcon:Object(g.jsx)(y.a,{}),variant:"text",onClick:function(){t.push("/")},children:"Back to explore"}):Object(g.jsx)("div",{className:"header-action",children:localStorage.getItem("username")?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{src:"avatar.png",alt:"crio.do",className:"profile-image"}),Object(g.jsx)("div",{className:"header-info",children:localStorage.getItem("username")}),Object(g.jsx)(p.a,{variant:"text",onClick:function(){localStorage.removeItem("username"),localStorage.removeItem("token"),t.push("/"),window.location.reload()},children:"Logout"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p.a,{variant:"text",onClick:function(){t.push("/login")},children:"Login"}),Object(g.jsx)("div",{className:"header-link",children:Object(g.jsx)(p.a,{type:"primary",onClick:function(){t.push("/register")},children:"Register"})})]})})]})},I=(n(153),n(34)),P=function(e){var t=Object(m.b)().enqueueSnackbar,n=Object(S.f)(),r=Object(a.useState)({}),c=Object(j.a)(r,2),s=c[0],i=c[1],x=Object(a.useState)(!1),v=Object(j.a)(x,2),k=v[0],y=v[1],C=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i((function(){return Object(d.a)(Object(d.a)({},s),{},Object(u.a)({},t.target.name,t.target.value))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,y(!0),e.prev=2,e.next=5,O.a.post("".concat(ae.endpoint,"/auth/register"),{username:s.username,password:s.password});case 5:a=e.sent,t=a.data,y(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),400==e.t0.response.status?t=e.t0.response.data:n=!0,y(!1);case 14:return e.next=16,P(t,n);case 16:if(!e.sent){e.next=18;break}return e.abrupt("return",t);case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(o.a.mark((function e(n,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a&&(n.success||n.message)){e.next=3;break}return t("Something went wrong. Check that the backend is running, reachable and returns valid JSON.",{variant:"error"}),e.abrupt("return",!1);case 3:if(n.success){e.next=6;break}return t(n.message,{variant:"error"}),e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(a);case 2:if(!e.sent){e.next=7;break}return e.next=5,N();case 5:e.sent&&(i((function(e){return Object(d.a)(Object(d.a)({},e),{},{username:"",password:"",confirmPassword:""})})),t("Registered Successfully !",{variant:"success"}),n.push("/login"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.username&&0!=n.username.length){e.next=3;break}return t("Username is a required field",{variant:"warning"}),e.abrupt("return",!1);case 3:if(!(n.username&&n.username.length<6)){e.next=6;break}return t("Username must be at least 6 characters",{variant:"warning"}),e.abrupt("return",!1);case 6:if(n.password&&0!=n.password.length){e.next=9;break}return t("Password is a required field",{variant:"warning"}),e.abrupt("return",!1);case 9:if(!(n.password&&n.password.length<6)){e.next=12;break}return t("Password must be at least 6 characters",{variant:"warning"}),e.abrupt("return",!1);case 12:if(!n.password||!n.confirmPassword||n.password===n.confirmPassword){e.next=15;break}return t("Passwords do not match",{variant:"warning"}),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A,{hasHiddenAuthButtons:!0}),Object(g.jsx)("div",{className:"content",children:Object(g.jsxs)(h.a,{spacing:2,className:"form",children:[Object(g.jsx)("h2",{className:"title",children:"Register"}),Object(g.jsx)(b.a,{id:"username",label:"Username",variant:"outlined",title:"Username",name:"username",placeholder:"Enter Username",size:"small",onChange:function(e){C(e)},fullWidth:!0}),Object(g.jsx)(b.a,{id:"password",variant:"outlined",label:"Password",name:"password",type:"password",size:"small",helperText:"Password must be atleast 6 characters length",onChange:C,fullWidth:!0}),Object(g.jsx)(b.a,{id:"confirmPassword",variant:"outlined",label:"Confirm Password",name:"confirmPassword",type:"password",size:"small",onChange:C,fullWidth:!0}),Object(g.jsx)(p.a,{variant:"contained",onClick:function(){return z(s)},children:"Register Now"}),k&&Object(g.jsx)(f.a,{}),Object(g.jsxs)("p",{className:"secondary-action",children:["Already have an account?"," ",Object(g.jsx)(I.b,{to:"/login",children:Object(g.jsx)("a",{className:"link",children:"Login here"})})]})]})}),Object(g.jsx)(w,{})]})};n(155),n(156);var z=function(){var e=Object(m.b)().enqueueSnackbar,t=Object(S.f)(),n=Object(a.useState)({}),r=Object(j.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(!1),x=Object(j.a)(i,2),k=x[0],y=x[1],C=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s((function(){return Object(d.a)(Object(d.a)({},c),{},Object(u.a)({},t.target.name,t.target.value))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,y(!0),e.prev=2,e.next=5,O.a.post("".concat(ae.endpoint,"/auth/login"),{username:c.username,password:c.password});case 5:a=e.sent,t=a.data,y(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),400==e.t0.response.status?t=e.t0.response.data:n=!0,y(!1);case 14:return e.next=16,P(t,n);case 16:if(!e.sent){e.next=20;break}return e.next=19,E(t.token,t.username,t.balance);case 19:return e.abrupt("return",t);case 20:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var t=Object(l.a)(o.a.mark((function t(n,a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a&&(n.success||n.message)){t.next=3;break}return e("Something went wrong. Check that the backend is running, reachable and returns valid JSON.",{variant:"error"}),t.abrupt("return",!1);case 3:if(n.success){t.next=6;break}return e(n.message,{variant:"error"}),t.abrupt("return",!1);case 6:return t.abrupt("return",!0);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),z=function(){var n=Object(l.a)(o.a.mark((function n(a){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q(a);case 2:if(!n.sent){n.next=7;break}return n.next=5,N();case 5:n.sent&&(s((function(e){return Object(d.a)(Object(d.a)({},e),{},{username:"",password:""})})),e("Logged in ",{variant:"success"}),t.push("/"));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),q=function(t){return t.username&&0!=t.username.length?t.username&&t.username.length<6?(e("Username must be at least 6 characters",{variant:"warning"}),!1):t.password&&0!=t.password.length?!(t.password&&t.password.length<6)||(e("Password must be at least 6 characters",{variant:"warning"}),!1):(e("Password is a required field",{variant:"warning"}),!1):(e("Username is a required field",{variant:"warning"}),!1)},E=function(){var e=Object(l.a)(o.a.mark((function e(t,n,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("username",n),localStorage.setItem("token",t),localStorage.setItem("balance",a);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(g.jsxs)(v.a,{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"100vh",children:[Object(g.jsx)(A,{hasHiddenAuthButtons:!0,history:t}),Object(g.jsx)(v.a,{className:"content",children:Object(g.jsxs)(h.a,{spacing:2,className:"form",children:[Object(g.jsx)("h2",{className:"title",children:"Login"}),Object(g.jsx)(b.a,{id:"username",label:"Username",variant:"outlined",title:"Username",name:"username",placeholder:"Enter Username",onChange:function(e){C(e)},size:"small",fullWidth:!0}),Object(g.jsx)(b.a,{id:"password",variant:"outlined",label:"Password",name:"password",type:"password",helperText:"Password must be atleast 6 characters length",size:"small",onChange:function(e){C(e)},fullWidth:!0}),Object(g.jsx)(p.a,{variant:"contained",onClick:function(){z(c)},children:"Login to QKart"}),k&&Object(g.jsx)(f.a,{}),Object(g.jsxs)("p",{className:"secondary-action",children:["Doesn't have an account?"," ",Object(g.jsx)(I.b,{to:"/register",children:Object(g.jsx)("a",{className:"link",children:"Register now"})})]})]})}),Object(g.jsx)(w,{})]})},q=n(208),E=n(227),D=n(218),J=n(204),B=n(205),R=n(206),F=n(207),T=n(222),U=(n(157),function(e,t){if(e)return e.map((function(e){return Object(d.a)(Object(d.a)({},e),t.find((function(t){return e.productId===t._id})))}))}),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e.length)return 0;var t=e.map((function(e){return e.cost*e.qty})).reduce((function(e,t){return e+t}));return t},L=function(e){var t=e.isReadOnly,n=void 0!==t&&t,a=e.value,r=e.handleAdd,c=e.handleDelete;return n?Object(g.jsxs)(v.a,{children:["Qty: ",a]}):Object(g.jsxs)(h.a,{direction:"row",alignItems:"center",children:[Object(g.jsx)(T.a,{size:"small",color:"primary",onClick:c,children:Object(g.jsx)(J.a,{})}),Object(g.jsx)(v.a,{padding:"0.5rem","data-testid":"item-qty",children:a}),Object(g.jsx)(T.a,{size:"small",color:"primary",onClick:r,children:Object(g.jsx)(B.a,{})})]})},_=function(e){var t=e.products,n=e.items,a=void 0===n?[]:n,r=e.handleQuantity,c=e.isReadOnly,s=void 0!==c&&c,i=Object(S.f)(),u=localStorage.getItem("token");return a.length?Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(v.a,{className:"cart",children:[a.map((function(e){return Object(g.jsx)(v.a,{children:e.qty>0?Object(g.jsxs)(v.a,{display:"flex",alignItems:"flex-start",padding:"1rem",children:[Object(g.jsx)(v.a,{className:"image-container",children:Object(g.jsx)("img",{src:e.image,alt:e.name,width:"100%",height:"100%"})}),Object(g.jsxs)(v.a,{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"6rem",paddingX:"1rem",children:[Object(g.jsx)("div",{children:e.name}),Object(g.jsxs)(v.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(g.jsx)(L,{isReadOnly:s,value:e.qty,handleAdd:Object(l.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(u,a,e.productId,t,e.qty+1);case 2:case"end":return n.stop()}}),n)}))),handleDelete:Object(l.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(u,a,e.productId,t,e.qty-1);case 2:case"end":return n.stop()}}),n)})))}),Object(g.jsxs)(v.a,{padding:"0.5rem",fontWeight:"700",children:["$",e.cost]})]})]})]}):null},e.productId)})),Object(g.jsxs)(v.a,{padding:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(g.jsx)(v.a,{color:"#3C3C3C",alignSelf:"center",children:"Order total"}),Object(g.jsxs)(v.a,{color:"#3C3C3C",fontWeight:"700",fontSize:"1.5rem",alignSelf:"center","data-testid":"cart-total",children:["$",W(a)]})]}),Object(g.jsx)(v.a,{display:"flex",justifyContent:"flex-end",className:"cart-footer",children:Object(g.jsx)(p.a,{color:"primary",variant:"contained",startIcon:Object(g.jsx)(F.a,{}),className:"checkout-btn",onClick:function(){return i.push("/checkout")},children:"Checkout"})})]})}):Object(g.jsxs)(v.a,{className:"cart empty",children:[Object(g.jsx)(R.a,{className:"empty-cart-icon"}),Object(g.jsx)(v.a,{color:"#aaa",textAlign:"center",children:"Cart is empty. Add more items to the cart to checkout."})]})},Q=(n(158),n(223)),Y=n(224),$=n(225),H=n(226),K=n(213),M=(n(159),function(e){var t=e.product,n=e.handleAddToCart;return Object(g.jsx)(D.a,{item:!0,md:3,xs:6,children:Object(g.jsxs)(Q.a,{className:"card",children:[Object(g.jsx)(Y.a,{className:"product-image",children:Object(g.jsx)("img",{src:t.image,alt:"nothing"})}),Object(g.jsxs)($.a,{children:[Object(g.jsx)(H.a,{variant:"subtitle1",children:t.name}),Object(g.jsxs)(H.a,{color:"textSecondary",variant:"subtitle2",children:["$",t.cost]}),Object(g.jsx)(K.a,{name:"read-only",value:t.rating,readOnly:!0}),Object(g.jsx)(p.a,{fullWidth:!0,variant:"contained",onClick:n,children:"Add To Cart "})]})]})})}),V=function(){var e=Object(m.b)().enqueueSnackbar,t=Object(a.useState)(!1),n=Object(j.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)([]),i=Object(j.a)(s,2),u=i[0],d=i[1],h=Object(a.useState)([]),p=Object(j.a)(h,2),x=p[0],k=p[1],y=Object(a.useState)([]),C=Object(j.a)(y,2),N=C[0],S=C[1],I=localStorage.getItem("token"),P=function(){var t=Object(l.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,O.a.get("".concat(ae.endpoint,"/cart"),{headers:{Authorization:"Bearer ".concat(n)}});case 5:return a=t.sent,t.abrupt("return",a.data);case 9:return t.prev=9,t.t0=t.catch(2),e("Could not fetch cart details. Check that the backend is running, reachable and returns valid JSON",{variant:"error"}),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){R()}),[]),Object(a.useEffect)((function(){P(I).then((function(e){return U(e,u)})).then((function(e){return S(e)}))}),[u]);var z=function(t,n){return t||!n.length&&!n.message?(e("Could not fetch products. Check that the backend is running, reachable and returns valid JSON.",{variant:"error"}),!1):!!n.length||(e("No products found ",{variant:"error"}),!1)},J=function(t,n){return!(t||!n.length&&!n.message||!n.length)||(e("No products found ",{variant:"error"}),k([]),!1)},B=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},n=!1,c(!0),e.prev=3,e.next=6,O.a.get("".concat(ae.endpoint,"/products"));case 6:t=e.sent.data,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),n=!0;case 12:if(c(!1),!z(n,t)){e.next=15;break}return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:(t=e.sent)&&(d(t),k(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e,t){return-1!==e.findIndex((function(e){return e.productId===t}))},T=function(){var t=Object(l.a)(o.a.mark((function t(n,a,r,c,s){var i,u,d,l=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=l.length>5&&void 0!==l[5]?l[5]:{preventDuplicate:!1},n){t.next=4;break}return e("Please log in to add item to cart",{variant:"warning"}),t.abrupt("return");case 4:if(!i.preventDuplicate||!F(a,r)){t.next=7;break}return e("Item already in cart. Use the cart sidebar to update quantity or remove item.",{variant:"warning,"}),t.abrupt("return");case 7:return t.prev=7,t.next=10,O.a.post("".concat(ae.endpoint,"/cart"),{productId:r,qty:s},{headers:{Authorization:"Bearer ".concat(n)}});case 10:u=t.sent,d=U(u.data,c),S(d),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(7),t.t0.response?e(t.t0.response.data.message,{variant:"error"}):e("Could not fetch products. Check that the backend is running, reachabe and returns valid JSON.",{variant:"error"});case 18:case"end":return t.stop()}}),t,null,[[7,15]])})));return function(e,n,a,r,c){return t.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},a=!1,c(!0),e.prev=3,e.next=6,O.a.get("".concat(ae.endpoint,"/products/search?value=").concat(t));case 6:n=e.sent.data,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),a=!0;case 12:c(!1),J(a,n)&&k(n);case 14:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),L=0,Q=function(e,t){var n=e.target.value;L&&clearTimeout(L),L=setTimeout((function(){W(n)}),t)};return Object(g.jsxs)("div",{children:[Object(g.jsx)(A,{children:Object(g.jsx)(b.a,{className:"search-desktop",size:"small",InputProps:{endAdornment:Object(g.jsx)(E.a,{position:"end",children:Object(g.jsx)(q.a,{color:"primary"})})},onChange:function(e){Q(e,300)},placeholder:"Search for items/categories",name:"search"})}),Object(g.jsx)(b.a,{className:"search-mobile",size:"small",fullWidth:!0,onChange:function(e){Q(e,300)},InputProps:{endAdornment:Object(g.jsx)(E.a,{position:"end",children:Object(g.jsx)(q.a,{color:"primary"})})},placeholder:"Search for items/categories",name:"search"}),Object(g.jsxs)(D.a,{container:!0,children:[Object(g.jsx)(D.a,{item:!0,className:"product-grid",xs:12,children:Object(g.jsx)(v.a,{className:"hero",children:Object(g.jsxs)("p",{className:"hero-heading",children:["India\u2019s ",Object(g.jsx)("span",{className:"hero-highlight",children:"FASTEST DELIVERY"})," ","to your door step"]})})}),0!==u.length?Object(g.jsx)(D.a,{container:!0,spacing:2,md:I?8:12,xs:12,style:{margin:"20px"},children:x.map((function(e){return Object(g.jsx)(M,{product:e,handleAddToCart:Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(I,N,e._id,u,1,{preventDuplicate:!0});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))},e.id)}))}):r?Object(g.jsxs)("div",{className:"loading",children:[Object(g.jsx)(f.a,{}),"Loading Products..."]}):Object(g.jsx)("div",{children:"No Products Found"}),I?Object(g.jsx)(D.a,{xs:12,md:3,bg:"#E9F5E1",style:{margin:"20px"},children:Object(g.jsx)(_,{items:N,products:u,handleQuantity:T})}):null]}),Object(g.jsx)(w,{})]})},X=n(209),G=n(210),Z=n(228),ee=(n(160),function(e){var t=e.token,n=e.newAddress,a=e.handleNewAddress,r=e.addAddress;return Object(g.jsxs)(v.a,{display:"flex",flexDirection:"column",children:[Object(g.jsx)(b.a,{multiline:!0,minRows:4,placeholder:"Enter your complete address",value:n.value,onChange:function(e){a(Object(d.a)(Object(d.a)({},n),{},{value:e.target.value}))}}),Object(g.jsxs)(h.a,{direction:"row",my:"1rem",children:[Object(g.jsx)(p.a,{variant:"contained",onClick:Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t,n);case 2:case"end":return e.stop()}}),e)}))),children:"Add"}),Object(g.jsx)(p.a,{variant:"text",onClick:function(){a(Object(d.a)(Object(d.a)({},n),{},{isAddingNewAddress:!1}))},children:"Cancel"})]})]})}),te=function(){var e=localStorage.getItem("token"),t=Object(S.f)(),n=Object(m.b)().enqueueSnackbar,r=Object(a.useState)([]),c=Object(j.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)([]),h=Object(j.a)(u,2),b=h[0],f=h[1],x=Object(a.useState)({all:[],selected:""}),k=Object(j.a)(x,2),y=k[0],C=k[1],N=Object(a.useState)({isAddingNewAddress:!1,value:""}),I=Object(j.a)(N,2),P=I[0],z=I[1],q=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(ae.endpoint,"/products"));case 3:return t=e.sent,f(t.data),e.abrupt("return",t.data);case 8:if(e.prev=8,e.t0=e.catch(0),!e.t0.response||500!==e.t0.response.status){e.next=15;break}return n(e.t0.response.data.message,{variant:"error"}),e.abrupt("return",null);case 15:n("Could not fetch products. Check that the backend is running, reachable and returns valid JSON.",{variant:"error"});case 16:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,O.a.get("".concat(ae.endpoint,"/cart"),{headers:{Authorization:"Bearer ".concat(t)}});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:return e.prev=9,e.t0=e.catch(2),n("Could not fetch cart details. Check that the backend is running, reachable and returns valid JSON.",{variant:"error"}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,O.a.get("".concat(ae.endpoint,"/user/addresses"),{headers:{Authorization:"Bearer ".concat(t)}});case 5:return a=e.sent,C(Object(d.a)(Object(d.a)({},y),{},{all:a.data})),e.abrupt("return",a.data);case 10:return e.prev=10,e.t0=e.catch(2),n("Could not fetch addresses. Check that the backend is running, reachable and returns valid JSON.",{variant:"error"}),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(ae.endpoint,"/user/addresses"),{address:a.value},{headers:{Authorization:"Bearer ".concat(t)}});case 3:r=e.sent,C(Object(d.a)(Object(d.a)({},y),{},{all:r.data})),z({value:"",isAddingNewAddress:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response?n(e.t0.response.data.message,{variant:"error"}):n("Could not add this address. Check that the backend is running, reachable and returns valid JSON.",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("".concat(ae.endpoint,"/user/addresses/").concat(a),{headers:{Authorization:"Bearer ".concat(t)}});case 3:r=e.sent,C(Object(d.a)(Object(d.a)({},y),{},{all:r.data})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response?n(e.t0.response.data.message,{variant:"error"}):n("Could not delete this address. Check that the backend is running, reachable and returns valid JSON.",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),F=function(e,t){return localStorage.getItem("balance")<W(e)?(n("You do not have enough balance in your wallet for this purchase",{variant:"warning"}),!1):t.all.length?!!t.selected.length||(n("Please select one shipping address to proceed.",{variant:"warning"}),!1):(n("Please add a new address before proceeding.",{variant:"warning"}),!1)},T=function(){var e=Object(l.a)(o.a.mark((function e(a,r,c){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F(r,c)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,O.a.post("".concat(ae.endpoint,"/cart/checkout"),{addressId:c.selected},{headers:{Authorization:"Bearer ".concat(a)}});case 5:n("Order placed successfully",{varaint:"success"}),s=parseInt(localStorage.getItem("balance"))-W(r),localStorage.setItem("balance",s),t.push("/thanks"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),e.t0.response?n(e.t0.response.data.message,{variant:"error"}):n("Could not delete this address. Check that the backend is running, reachable and returns valid JSON.",{variant:"error"});case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var t=function(){var t=Object(l.a)(o.a.mark((function t(){var n,a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:return n=t.sent,t.next=5,E(e);case 5:if(a=t.sent,!n||!a){t.next=11;break}return t.next=9,U(a,n);case 9:r=t.sent,i(r);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(a.useEffect)((function(){e?J(e):(n("You must be logged in to access checkout page",{variant:"info"}),t.push("/"))}),[e]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A,{}),Object(g.jsxs)(D.a,{container:!0,children:[Object(g.jsx)(D.a,{item:!0,xs:12,md:9,children:Object(g.jsxs)(v.a,{className:"shipping-container",minHeight:"100vh",children:[Object(g.jsx)(H.a,{color:"#3C3C3C",variant:"h4",my:"1rem",children:"Shipping"}),Object(g.jsx)(H.a,{color:"#3C3C3C",my:"1rem",children:"Manage all the shipping addresses you want. This way you won't have to enter the shipping address manually with every order. Select the address you want to get your order delivered."}),Object(g.jsx)(Z.a,{}),Object(g.jsx)(v.a,{children:y.all.length?y.all.map((function(t){return Object(g.jsxs)(v.a,{className:y.selected===t._id?"address-item selected":"address-item not-selected",onClick:function(){C(Object(d.a)(Object(d.a)({},y),{},{selected:t._id}))},children:[Object(g.jsx)(H.a,{children:t.address}),Object(g.jsx)(p.a,{startIcon:Object(g.jsx)(X.a,{}),onClick:Object(l.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R(e,t._id);case 2:case"end":return n.stop()}}),n)}))),children:"Delete"})]},t._id)})):Object(g.jsx)(H.a,{my:"1rem",children:"No addresses found for this account. Please add one to proceed"})}),!P.isAddingNewAddress&&Object(g.jsx)(p.a,{color:"primary",variant:"contained",id:"add-new-btn",size:"large",onClick:function(){z((function(e){return Object(d.a)(Object(d.a)({},e),{},{isAddingNewAddress:!0})}))},children:"Add new address"}),P.isAddingNewAddress&&Object(g.jsx)(ee,{token:e,newAddress:P,handleNewAddress:z,addAddress:B}),Object(g.jsx)(H.a,{color:"#3C3C3C",variant:"h4",my:"1rem",children:"Payment"}),Object(g.jsx)(H.a,{color:"#3C3C3C",my:"1rem",children:"Payment Method"}),Object(g.jsx)(Z.a,{}),Object(g.jsxs)(v.a,{my:"1rem",children:[Object(g.jsx)(H.a,{children:"Wallet"}),Object(g.jsxs)(H.a,{children:["Pay $",W(s)," of available $",localStorage.getItem("balance")]})]}),Object(g.jsx)(p.a,{startIcon:Object(g.jsx)(G.a,{}),variant:"contained",onClick:Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e,s,y);case 2:case"end":return t.stop()}}),t)}))),children:"PLACE ORDER"})]})}),Object(g.jsx)(D.a,{item:!0,xs:12,md:3,bgcolor:"#E9F5E1",children:Object(g.jsx)(_,{isReadOnly:!0,products:b,items:s})})]}),Object(g.jsx)(w,{})]})},ne=(n(161),function(){var e=Object(S.f)();return Object(a.useEffect)((function(){localStorage.getItem("token")||e.push("/")}),[e]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A,{}),Object(g.jsxs)(v.a,{className:"greeting-container",children:[Object(g.jsx)("h2",{children:"Yay! It's ordered \ud83d\ude03"}),Object(g.jsx)("p",{children:"You will receive an invoice for your order shortly."}),Object(g.jsx)("p",{children:"Your order will arrive in 7 business days."}),Object(g.jsx)("p",{id:"balance-overline",children:"Wallet Balance"}),Object(g.jsxs)("p",{id:"balance",children:["$",localStorage.getItem("balance")," Available"]}),Object(g.jsx)(p.a,{variant:"contained",size:"large",id:"continue-btn",onClick:function(){e.push("/")},children:"Continue Shopping"})]}),Object(g.jsx)(w,{})]})}),ae={endpoint:"https://qkartbackend-functional.herokuapp.com/api/v1"};var re=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(S.c,{children:[Object(g.jsx)(S.a,{exact:!0,path:"/",children:Object(g.jsx)(V,{})}),Object(g.jsx)(S.a,{path:"/login",children:Object(g.jsx)(z,{})}),Object(g.jsx)(S.a,{path:"/register",children:Object(g.jsx)(P,{})}),Object(g.jsx)(S.a,{path:"/checkout",children:Object(g.jsx)(te,{})}),Object(g.jsx)(S.a,{path:"/thanks",children:Object(g.jsx)(ne,{})}),Object(g.jsx)(S.a,{children:Object(g.jsx)(V,{})})]})})},ce=n(215),se=n(85),ie=Object(se.a)({typography:{fontFamily:"Lato"},palette:{primary:{light:"#45c09f",main:"#00a278",dark:"#00845c",contrastText:"#fff"}}});s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(I.a,{children:Object(g.jsx)(ce.a,{theme:ie,children:Object(g.jsx)(m.a,{maxSnack:1,anchorOrigin:{vertical:"bottom",horizontal:"center"},preventDuplicate:!0,children:Object(g.jsx)(re,{})})})})}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.76a6ce7d.chunk.js.map