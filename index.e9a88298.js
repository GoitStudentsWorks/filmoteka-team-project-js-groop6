!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("4Nugj"),a("b7ONl"),a("1beAg");var o=a("gBZVT"),s=a("1beAg"),i=a("6p62o");window.addEventListener("load",o.default),window.addEventListener("load",s.default),document.querySelector("#theme-toggle").addEventListener("click",i.onThemeBtnClick),a("8FeKp"),a("h0FqT"),a("gBZVT"),a("7iM06"),a("iE7r8"),a("kEjuW"),a("iNDEe");var c,u=a("bpxeT"),d=a("2TvXO"),l=a("k30FB"),f=a("b7ONl"),m=a("6JpON"),v=a("gQOBw"),g=a("fGC9r"),p=new(0,f.FilmAPI),h=new(0,l.DatabaseAPI),w=document.querySelector(".cards__list"),b=document.querySelector(".modal-card"),y="",x=(c=e(u)(e(d).mark((function t(){var r,n;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=document.querySelector("[data-card-modal-watched-film]"),n=document.querySelector("[data-card-modal-queue-film]"),(0,v.onAuthStateChanged)(g.auth,(function(e){e?(r.removeAttribute("disabled"),n.removeAttribute("disabled")):(r.setAttribute("disabled",""),n.setAttribute("disabled",""),m.Block.dots(".modal-card__btn-wrapper","Log in to add movies to the library",{messageMaxLength:50,svgSize:"70px",svgColor:"#66000000",backgroundColor:"rgba(255,255,255,0.5)"}))}));case 3:case"end":return e.stop()}}),t)}))),function(){return c.apply(this,arguments)}),k=function(){var e=document.querySelector("[data-card-modal-watched-film]");e.classList.remove("add-to-watched"),e.classList.add("remove-from-watched"),e.textContent="Remove from watched"},L=function(){var e=document.querySelector("[data-card-modal-queue-film]");e.classList.remove("add-to-queue"),e.classList.add("remove-from-queue"),e.textContent="Remove from queue"},E=function(){var e=document.querySelector("[data-card-modal-watched-film]");e.classList.remove("remove-from-watched"),e.classList.add("add-to-watched"),e.textContent="Add to watched"},N=function(){var e=document.querySelector("[data-card-modal-queue-film]");e.classList.remove("remove-from-queue"),e.classList.add("add-to-queue"),e.textContent="Add to queue"},T=function(){var t=e(u)(e(d).mark((function t(r){var n,a;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.target.closest(".card-item")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,setTimeout(x,200),y=Number(r.target.closest(".card-item").dataset.id),e.next=7,h.checkPresenseInWatched(y);case 7:return(n=e.sent)?k():n||E(),e.next=11,h.checkPresenseInQueue(y);case 11:(a=e.sent)?L():a||N(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),m.Notify.failure("Ooops! Something went wrong. Try reloading page");case 18:case"end":return e.stop()}}),t,null,[[2,15]])})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=e(u)(e(d).mark((function t(r){var n,a;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("cardModalWatchedFilm"in r.target.dataset)){e.next=25;break}if(e.prev=1,!r.target.classList.contains("add-to-watched")){e.next=18;break}return e.next=5,p.fetchDetails(y);case 5:return n=e.sent,e.next=8,h.addToWatched(n);case 8:return m.Notify.success("".concat(n.title," added to Watched List")),k(),e.next=12,h.checkPresenseInQueue(y);case 12:if(!e.sent){e.next=18;break}return N(),e.next=17,h.removeMovieFromQueue(y);case 17:m.Notify.success("".concat(n.title," removed from Queue List"));case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),m.Notify.failure("Ooops! Something went wrong. Try reloading page");case 23:e.next=48;break;case 25:if(!("cardModalQueueFilm"in r.target.dataset)){e.next=48;break}if(e.prev=26,!r.target.classList.contains("add-to-queue")){e.next=43;break}return e.next=30,p.fetchDetails(y);case 30:return a=e.sent,e.next=33,h.addToQueue(a);case 33:return m.Notify.success("".concat(a.title," added to Queue List")),L(),e.next=37,h.checkPresenseInWatched(y);case 37:if(!e.sent){e.next=43;break}return E(),e.next=42,h.removeMovieFromWatched(y);case 42:m.Notify.success("".concat(a.title," removed from Watched List"));case 43:e.next=48;break;case 45:e.prev=45,e.t1=e.catch(26),m.Notify.failure("Ooops! Something went wrong. Try reloading page");case 48:case"end":return e.stop()}}),t,null,[[1,20],[26,45]])})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=e(u)(e(d).mark((function t(r){return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!("cardModalWatchedFilm"in r.target.dataset)){e.next=9;break}if(!r.target.classList.contains("remove-from-watched")){e.next=7;break}return e.next=5,h.removeMovieFromWatched(y);case 5:m.Notify.success("Movie removed from Watched List"),E();case 7:e.next=15;break;case 9:if(!("cardModalQueueFilm"in r.target.dataset)){e.next=15;break}if(!r.target.classList.contains("remove-from-queue")){e.next=15;break}return e.next=13,h.removeMovieFromQueue(y);case 13:m.Notify.success("Movie removed from Queue List"),N();case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),m.Notify.failure("Ooops! Something went wrong. Try reloading page");case 20:case"end":return e.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}();w.addEventListener("click",T),b.addEventListener("click",F),b.addEventListener("click",O),a("jcFG7");u=a("bpxeT"),d=a("2TvXO"),g=a("fGC9r"),v=a("gQOBw");var M=a("k4iT1"),q=(m=a("6JpON"),function(){var t=e(u)(e(d).mark((function t(){return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,v.onAuthStateChanged)(g.auth,(function(e){e?(M.refs.openModalHomeBtn.classList.add("log-out"),M.refs.openModalHomeBtn.setAttribute("title","Click to Log Out"),M.refs.openModalHomeBtn.classList.remove("log-in")):(M.refs.openModalHomeBtn.classList.remove("log-out"),M.refs.openModalHomeBtn.setAttribute("title","Click to Log In"),M.refs.openModalHomeBtn.classList.add("log-in"))}));case 1:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}());q();var S=function(){var t=e(u)(e(d).mark((function t(r){var n,a;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),n=M.refs.registerEmail.value,a=M.refs.registerPassword.value,e.prev=3,e.next=6,(0,v.createUserWithEmailAndPassword)(g.auth,n,a);case 6:e.sent,M.refs.modal.classList.toggle("auth-modal-is-hidden"),r.target.reset(),m.Notify.success("You have successfully registered and logged in. Have fun!"),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(3),"Firebase: Password should be at least 6 characters (auth/weak-password)."===e.t0.message&&m.Notify.warning("Password should be at least 6 characters"),"Firebase: Error (auth/email-already-in-use)."===e.t0.message&&m.Notify.warning("An account is already registered with this email"),"Firebase: Error (auth/invalid-email)."===e.t0.message&&m.Notify.warning("Please enter valid email address"),"Firebase: Error (auth/missing-password)."===e.t0.message&&m.Notify.warning("Please enter password");case 18:case"end":return e.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}();M.refs.registerForm.addEventListener("submit",S);var B=function(){var t=e(u)(e(d).mark((function t(r){var n,a;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),n=M.refs.loginEmail.value,a=M.refs.loginPassword.value,e.prev=3,e.next=6,(0,v.signInWithEmailAndPassword)(g.auth,n,a);case 6:e.sent,M.refs.modal.classList.toggle("auth-modal-is-hidden"),r.target.reset(),m.Notify.success("You have logged in. Welcome back!"),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(3),"Firebase: Error (auth/missing-password)."===e.t0.message&&m.Notify.warning("Please enter password"),"Firebase: Error (auth/invalid-email)."===e.t0.message&&m.Notify.warning("Please enter valid email address"),"Firebase: Error (auth/user-not-found)."===e.t0.message&&m.Notify.warning("User not found. Please check if you entered valid email address and password"),"Firebase: Error (auth/wrong-password)."===e.t0.message&&m.Notify.warning("You have entered incorrect password");case 18:case"end":return e.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}();M.refs.loginForm.addEventListener("submit",B);var P=function(){var t=e(u)(e(d).mark((function t(r){return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.target.classList.contains("log-out")){t.next=2;break}return t.abrupt("return");case 2:m.Confirm.show("You are about to log out.","Proceed?","Log Out","Stay Logged In",e(u)(e(d).mark((function t(){return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.signOut)(g.auth);case 2:m.Notify.success("You have been logged out. See you soon");case 3:case"end":return e.stop()}}),t)}))),(function(){}),{titleColor:"#b92f2c",fontFamily:"Roboto, sans-serif;",borderRadius:"10px",okButtonBackground:"#b92f2c"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();M.refs.openModalHomeBtn.addEventListener("click",P);var A=function(){M.refs.loginForm.classList.toggle("login-hidden"),M.refs.registerForm.classList.toggle("register-hidden")};(M=a("k4iT1")).refs.showLoginBtn.addEventListener("click",A),M.refs.showRegisterBtn.addEventListener("click",A);var W=function(e){e.target.classList.contains("log-in")?M.refs.modal.classList.remove("auth-modal-is-hidden"):e.target.classList.contains("auth-modal-close")&&M.refs.modal.classList.add("auth-modal-is-hidden")};M.refs.openModalHomeBtn.addEventListener("click",W),M.refs.closeModalBtn.addEventListener("click",W),a("ivfiQ");var C={},Q=a("l5bVx"),j="Expected a function",D=/^\s+|\s+$/g,I=/^[-+]0x[0-9a-f]+$/i,H=/^0b[01]+$/i,_=/^0o[0-7]+$/i,R=parseInt,Y="object"==typeof t&&t&&t.Object===Object&&t,U="object"==typeof self&&self&&self.Object===Object&&self,$=Y||U||Function("return this")(),G=Object.prototype.toString,V=Math.max,X=Math.min,J=function(){return $.Date.now()};function Z(e,t,r){var n,a,o,s,i,c,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(j);function m(t){var r=n,o=a;return n=a=void 0,u=t,s=e.apply(o,r)}function v(e){return u=e,i=setTimeout(p,t),d?m(e):s}function g(e){var r=e-c;return void 0===c||r>=t||r<0||l&&e-u>=o}function p(){var e=J();if(g(e))return h(e);i=setTimeout(p,function(e){var r=t-(e-c);return l?X(r,o-(e-u)):r}(e))}function h(e){return i=void 0,f&&n?m(e):(n=a=void 0,s)}function w(){var e=J(),r=g(e);if(n=arguments,a=this,c=e,r){if(void 0===i)return v(c);if(l)return i=setTimeout(p,t),m(c)}return void 0===i&&(i=setTimeout(p,t)),s}return t=K(t)||0,z(r)&&(d=!!r.leading,o=(l="maxWait"in r)?V(K(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),w.cancel=function(){void 0!==i&&clearTimeout(i),u=0,n=c=a=i=void 0},w.flush=function(){return void 0===i?s:h(J())},w}function z(t){var r=void 0===t?"undefined":e(Q)(t);return!!t&&("object"==r||"function"==r)}function K(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(Q)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==G.call(t)}(t))return NaN;if(z(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=z(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(D,"");var n=H.test(t);return n||_.test(t)?R(t.slice(2),n?2:8):I.test(t)?NaN:+t}C=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError(j);return z(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),Z(e,t,{leading:n,maxWait:t,trailing:a})},window.addEventListener("scroll",C((function(){var e=document.querySelector(".scroll-to-top");document.body.scrollTop>550||document.documentElement.scrollTop>550?e.style.display="flex":e.style.display="none"}),1e3)),a("6p62o"),a("h8yxa"),a("cDXQO")}();
//# sourceMappingURL=index.e9a88298.js.map
