(()=>{"use strict";let e=((e,t)=>{let d,n,a=0,s=[];return d=document.getElementById("down"),n=document.createElement("div"),n.textContent="Index",n.classList.add("drop-down"),d.appendChild(n),{add_element:e=>{s.push(e)},nav_elements:s,render:()=>{let e=document.createElement("div");n.appendChild(e),e.classList.add("drop-down-curtain");for(let t=0;t<s.length;t++){let d=document.createElement("div");d.textContent=s[t],d.classList.add("drop-down-elements"),e.appendChild(d)}n.addEventListener("click",(()=>{0==a?(console.log("ran"),e.classList.remove("remove"),e.classList.add("anim"),a=1):1==a&&(e.classList.remove("anim"),e.classList.add("remove"),a=0)}))}}})();e.add_element("HOME"),e.add_element("Contacts"),e.add_element("asdf"),e.render();let t=(e=>{const t=[];let d,n,a,s=0,l=0,i=e=>{if(null==e)s+=1,s>=t.length&&(s=0);else{const{classList:n}=e.target;n.contains("arrow-left")?(s-=1,s<0&&(s=t.length-1)):n.contains("arrow-right")&&(s+=1,s>=t.length&&(s=0)),clearInterval(d),r()}n.classList.remove("end-anim"),n.classList.add("play-anim")},r=()=>{d=setInterval((()=>{i(null)}),5e3)};r();return{render:()=>{const e=document.createElement("div");a=document.createElement("img");const d=document.getElementById("scroll");n=document.createElement("div"),n.classList.add("curtain");const r=document.createElement("div"),c=document.createElement("div");r.classList.add("arrow"),c.classList.add("arrow"),r.classList.add("arrow-left"),c.classList.add("arrow-right"),r.textContent="<",c.textContent=">",r.addEventListener("click",i),c.addEventListener("click",i),e.classList.add("is-window"),a.src=t[s],n.addEventListener("animationend",(()=>{n.classList.remove("play-anim"),0==l?(a.src=t[s],l=1,n.classList.add("end-anim")):l=0})),d.appendChild(e),e.appendChild(a),e.appendChild(n),e.appendChild(r),e.appendChild(c)},addElement:e=>{t.push(e)}}})();t.addElement("./img/a.jpg"),t.addElement("./img/iandex.jpg"),t.addElement("./img/inddex.jpg"),t.addElement("./img/index.jpg"),t.render()})();