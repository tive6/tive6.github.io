var searchFunc=function(e,t,l){"use strict";var n=document.getElementById(t),r=document.getElementById(l);r.innerHTML="<ul><span class='local-search-empty'>首次搜索，正在载入索引文件，请稍后……<span></ul>",$.ajax({url:e,dataType:"xml",success:function(e){var t=$("entry",e).map((function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}})).get();r.innerHTML="",n.addEventListener("input",(function(){var e='<ul class="search-result-list">',l=this.value.trim().toLowerCase().split(/[\s\-]+/);if(r.innerHTML="",!(this.value.trim().length<=0)){if(t.forEach((function(t){var n=!0;t.title&&""!==t.title.trim()||(t.title="Untitled");var r=t.title.trim(),a=r.toLowerCase(),c=t.content.trim().replace(/<[^>]+>/g,""),s=c.toLowerCase(),i=t.url,u=-1,o=-1,h=-1;if(""!==s?l.forEach((function(e,t){u=a.indexOf(e),o=s.indexOf(e),u<0&&o<0?n=!1:(o<0&&(o=0),0===t&&(h=o))})):n=!1,n){e+="<li><a href='"+i+"' class='search-result-title'>"+r+"</a>";var f=c;if(h>=0){var m=h-20,p=h+80;m<0&&(m=0),0===m&&(p=100),p>f.length&&(p=f.length);var v=f.substr(m,p);l.forEach((function(e){var t=new RegExp(e,"gi");v=v.replace(t,'<em class="search-keyword">'+e+"</em>")})),e+='<p class="search-result">'+v+"...</p>"}e+="</li>"}})),-1===(e+="</ul>").indexOf("<li>"))return r.innerHTML="<ul><span class='local-search-empty'>没有找到内容，请尝试更换检索词。<span></ul>";r.innerHTML=e}}))}}),$(document).on("click","#local-search-close",(function(){$("#local-search-input").val(""),$("#local-search-result").html("")}))};function getSearchFile(){searchFunc("/search.xml","local-search-input","local-search-result")}