import"./hoisted.6DtKhXaX.js";const r=document.getElementById("subscription-form"),n=document.getElementById("email-input"),a=document.getElementById("submit-button"),o=document.getElementById("loader"),s=document.getElementById("button-text"),i=document.getElementById("error-message"),c="zuozizhen.com";let t=!1;function u(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}async function l(){if(i.style.display="none",!u(n.value)){i.style.display="block";return}if(!t){t=!0,o.style.display="block",s.style.display="none";try{const e=await fetch("https://subscribers-email-to-notion.jingmiaofenxiang.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.value,website:c})});e.ok?window.location.href="/subscribed/":alert("订阅失败，错误代码："+e.status)}catch(e){console.error("订阅请求出错：",e),alert("订阅请求出错，请稍后再试。")}finally{t=!1,o.style.display="none",s.style.display="block"}}}a.addEventListener("click",l);r.addEventListener("submit",function(e){e.preventDefault(),l()});
