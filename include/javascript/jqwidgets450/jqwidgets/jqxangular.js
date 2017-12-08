/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
if(!jqxBaseFramework)var jqxBaseFramework=window.minQuery||window.jQuery;!function(a,b,c){function d(b,c,d,e,f){if(e&&f)switch(b){case"jqxGrid":case"jqxDataTable":case"jqxTreeGrid":if(d.columns){var g=e.columns||e,h=f.columns||f;if(g.length!=h.length)return!1;var i={};if(a.each(g,function(a,b){var c=this;for(var d in this)if(c[d]!=h[a][d]){var e=c.datafield||c.dataField;i[e]||(i[e]={}),i[e][d]=c[d]}}),!a.isEmptyObject(i))return a.each(i,function(b,d){for(var e in d){var f=a(c).jqxProxy("getcolumnproperty",b,e);f!==d[e]&&a(c).jqxProxy("setcolumnproperty",b,e,d[e])}}),!0}}return!1}function e(d,e,g,h,i,j,k){var l=function(b){if("jqxTree"===j||"jqxMenu"===j)return b;if("object"==typeof b&&b&&null!=b._bindingUpdate)return b;var c={},d=!1;if(a.isArray(b)||b instanceof Object&&!b.url&&!b.localdata&&!b.localData){if("jqxChart"===j)return b;if(d=!0,c.localData=b,c.type="array",b[0]){var e=new Array;"object"==a.type(b[0])&&(a.each(b[0],function(b,c){var d={name:b,type:a.type(c)};e.push(d)}),c.datafields=e)}}else b&&b.url?c=b:b&&(b.localdata||b.localData)&&(c=b);if(a.jqx.dataAdapter){var f=new a.jqx.dataAdapter(c);return f}return d?b:null};if(g.jqxSource!=c){var m=d.$watchCollection(g.jqxSource,function(c,f){if(c!=f){if(b.equals(c,f))return;if(c&&f&&c._source&&f._source&&b.equals(c._source,f._source))return;var h=l(c);a(e).jqxProxy({source:h});var i=b.extend({},d.$eval(g.jqxSettings));g.jqxSettings&&i&&i.propertyChanged&&i.propertyChanged("source",f,c)}});k.push(m)}else if(g.jqxSettings!=c){var n={},o=null,q=p(g.jqxSettings)(d),r=e.controller();for(var s in r)if(q&&r[s]==q.source){o=s;break}if(!o)for(var s in d)if(q&&d[s]==q.source){o=s;break}if(o){var t="";for(var s in d)if(d[s]==r){t=s;break}""!=t&&(o=t+"."+o);var m=i.$watchCollection(o,function(c,f){if(c!=f){if(b.equals(c,f))return;if(c&&f&&c._source&&f._source&&b.equals(c._source,f._source))return;var h=a.isArray(c)||"array"===a.type(c);if(new Date-n["jqxSettings.source"]>1e3||n=={}||!n["jqxSettings.source"]||h){var i=l(c);a(e).jqxProxy({source:i});var j=b.extend({},d.$eval(g.jqxSettings));g.jqxSettings&&j&&j.propertyChanged&&j.propertyChanged("source",f,c),n.property=new Date}}});k.push(m)}var m=d.$watchCollection(g.jqxSettings+".source",function(c,f){if(c!=f){if(b.equals(c,f))return;if(c&&f&&c._source&&f._source&&b.equals(c._source,f._source))return;if(new Date-n.property>1e3||!n["jqxSettings.property"]||n=={}){var h=l(c);a(e).jqxProxy({source:h});var i=b.extend({},d.$eval(g.jqxSettings));g.jqxSettings&&i&&i.propertyChanged&&i.propertyChanged("source",f,c),n["jqxSettings.source"]=new Date}}});k.push(m);var m=d.$watchCollection(g.jqxSettings,function(c,h){if(c){if(!h){var i=l(c.source);return void a(e).jqxProxy({source:i})}if(c.source!=h.source){if(b.equals(c.source,h.source))return;if(c&&h&&c.source&&h.source&&c.source._source&&h.source._source&&b.equals(c.source._source,h.source._source))return;if(c.source&&h.source&&a.isArray(c.source)&&a.isArray(h.source)&&f(c.source)==f(h.source))return;if(new Date-n.property>1e3||!n["jqxSettings.source"]||n=={}){var i=l(c.source);a(e).jqxProxy({source:i});var j=b.extend({},d.$eval(g.jqxSettings));g.jqxSettings&&j&&j.propertyChanged&&j.propertyChanged("source",h.source,c.source),n["jqxSettings.source"]=new Date}}}});k.push(m)}return l(h)}function f(b){if(null==b)return"";var c="";return a.each(b,function(b){var d=this;b>0&&(c+=", "),c+="[";var e=0;if("object"==a.type(d))for(var f in d)e>0&&(c+=", "),c+="{"+f+":"+d[f]+"}",e++;else e>0&&(c+=", "),c+="{"+b+":"+d+"}",e++;c+="]"}),c}function g(b,c,d,e,f,g){a.extend(a.jqx["_"+e].prototype,{definedInstance:function(){if(this.element&&this.element!==c[0])return!0;if(this.base&&this.base.element!==c[0])return!0;var h=this,i=function(c){a.each(g,function(d,e){h.addHandler(a(c),d,function(c){b.$parent?a.proxy(e,f)(c):e(c),"$apply"!=b.$root.$$phase&&"$digest"!=b.$root.$$phase&&b.$apply()})});var e=d.$attr;if(a.each(d,function(f,g){if(f.indexOf("jqxOn")>=0){var i=e[f].substring(7),j=a.camelCase(i),k=g;h.addHandler(a(c),j,function(a){if(a.data=d.data||d.jqxData,k.indexOf("(")>=0){var c=k.indexOf("("),e=p(k.substring(0,c))(b);e?e(a):b.$emit(j,a)}else b.$emit(k,a);"$apply"!=b.$root.$$phase&&"$digest"!=b.$root.$$phase&&b.$apply()})}}),d.jqxInstance){var i=p(d.jqxInstance).assign;i&&i(b,h),"$apply"!=b.$root.$$phase&&"$digest"!=b.$root.$$phase&&b.$apply()}};i(c),"jqxPopover"==e&&setTimeout(function(){i(h.host)})}})}function h(e,f,g,h,i,j){if(g.jqxSettings){var k=p(g.jqxSettings)(e);k&&(k.apply?(v[i.$id+h+g.jqxSettings]||(v[i.$id+h+g.jqxSettings]=new Array),v[i.$id+h+g.jqxSettings].push(j)):(k.apply=k[h]=function(){var b=arguments,c=new Array;return 0==b.length||(a.each(v[i.$id+h+g.jqxSettings],function(d,e){var f=this;c.push({widgetName:h,element:f,result:a.jqx.jqxWidgetProxy(h,f,b)})}),1==c.length?c[0].result:c)},k.digest=function(){/^\$(digest|apply)$/.test(e.$root.$$phase)||e.$digest()},k.refresh=function(j,l){var m={},n=a(f)[h]("getInstance");if(a.each(k,function(a,b){if("created"===a||"propertyChanged"===a||"data"==a||"refresh"==a||a==h||"apply"==a)return!0;var d=n.events||n._events;return!!(d&&d.indexOf(a)>=0||a.match(/(mousedown|click|mouseenter|mouseleave|mouseup|keydown|keyup|focus|blur|keypress)/g))||(j!=c&&j.indexOf(a)===-1||void(m[a]=b))}),m!=={})if(l)a.each(m,function(a,b){k[a]=n[a]}),"$apply"!=e.$root.$$phase&&"$digest"!=e.$root.$$phase&&e.$apply();else if(a.each(v[i.$id+h+g.jqxSettings],function(b,c){a(this).jqxProxy(m)}),g.jqxWatchSettings!=c&&i){var o=p(g.jqxSettings)(i);a.each(o,function(c,f){if(c.match(/(source|propertyChanged|created|data|apply|refresh)/g))return!0;var j=n.events||n._events;if(j&&j.indexOf(c)>=0||c.match(/(mousedown|click|mouseenter|mouseleave|mouseup|keydown|keyup|focus|blur|keypress)/g))return!0;if(c===h)return!0;if(!w[g.jqxSettings+"."+c]){var k=c,l=i.$watch(g.jqxSettings+"."+c,function(c,f){if(c!=f){if(b.equals(c,f))return;var j={};j[k]=c,a.each(v[i.$id+h+g.jqxSettings],function(b,e){var g=d(h,a(this),j,c,f);g||a(this).jqxProxy(j)});var l=b.extend({},e.$eval(g.jqxSettings));g.jqxSettings&&l&&l.propertyChanged&&l.propertyChanged(k,f,c)}},!0);w[g.jqxSettings+"."+c]=l}})}A[f[0].id]&&(m={},a.each(A[f[0].id],function(){if(j!=c&&j.indexOf(a.camelCase(this.value.substring(4)))===-1)return!0;if(m[a.camelCase(this.value.substring(4))]=e.$eval(this.label),l){var b=a.parse(this.label)(e).assign;b&&b(e,n[a.camelCase(this.value.substring(4))])}}),l?"$apply"!=e.$root.$$phase&&"$digest"!=e.$root.$$phase&&e.$apply():a.each(v[i.$id+h+g.jqxSettings],function(b,c){a(this).jqxProxy(m)}))},v[i.$id+h+g.jqxSettings]=new Array,v[i.$id+h+g.jqxSettings].push(j)))}}function i(d,f,g,h,i,j,k){var l=/(jqxGrid|jqxTree|jqxMenu|jqxDataTable|jqxTreeGrid|jqxListBox|jqxTreeMap|jqxComboBox|jqxDropDownList|jqxChart)/gi;if(g.jqxSettings&&j&&j.source===c&&g.jqxSource===c&&h.match(l)&&(h.match(/(jqxTree|jqxMenu)/gi)?f[0].innerHTML.toLowerCase().indexOf("ul")===-1&&(j.source=[]):j.source=[]),j.source!==c&&g.jqxSettings)j.source=e(d,f,g,j.source,i,h,k);else if(g.jqxSource!==c){var m=b.extend({},d.$eval(g.jqxSource)),n=!(!g.jqxSource||!g.jqxSource.dataBind);n?j.source=e(d,f,g,g.jqxSource,i,h,k):j.source=e(d,f,g,m,i,h,k)}var o=d.$watch(g.ngDisabled,function(b,d){if(b!=c&&(b!=d||a(f).jqxProxy("disabled")!==b)){var e={};e.disabled=b,a(f).length>0&&a(f).jqxProxy(e)}});k.push(o)}function j(e,f,j,l,m){var n=new Array,o=b.extend({},e.$eval(j.jqxSettings));i(e,f,j,l,m,o,n);var p={},q={};A[f[0].id]&&a.each(A[f[0].id],function(){var g=this.label,h=this.value,i=a.camelCase(h.substring("4"));if("undefined"!=typeof j[g]){var k=e.$eval(j[g]);if(k===c&&"string"===a.type(j[g])&&(k=j[g]),"instance"==i)return!0;"array"===a.type(k)&&"source"!==l?k=k.slice(0):"object"===a.type(k)&&"source"!==l&&(k=a.extend({},k));var m=/(columnmenuopening|columnmenuclosing|aggregatesrenderer|tooltipFormatFunction|labelsFormatFunction|rendergridrows|draw|renderFiles|initTools|initFeedBack|onTargetDrop|drawBefore|dragStart|dragEnd|onDropTargetEnter|onDropTargetLeave|onDrag|createCommand|ready|render|initrowdetails|initTabContent|initContent|renderer|renderToolbar|renderStatusBar|groupsrenderer|pagerrenderer|groupcolumnrenderer|updatefilterconditions|handlekeyboardnavigation|updatefilterpanel|rendered|virtualModeCreateRecords|virtualModeRecordCreating|search|selectionRenderer)/gi,o=/(searchMode)/gi,r=/(ready|aggregatesrenderer|initrowdetails|initTabContent|initContent|renderToolbar|renderStatusBar|pagerRenderer)/gi;if(a.isFunction(k)&&!i.match(m))q[index]=k;else{if(i.match(m)&&!i.match(o)){var s=function(){var a=k.apply(this,arguments);return i.match(r)&&!/^\$(digest|apply)$/.test(e.$root.$$phase)&&e.$digest(),a};return p[i]=s,!0}p[i]=k}var t=function(c,g){if(c!=g){if(b.equals(c,g))return;var i=a.camelCase(h.substring("4"));if("watch"==i){if(j.jqxWatch.indexOf(",")>=0||j.jqxWatch.indexOf("[")>=0){var k=j.jqxWatch;return k=k.replace("[",""),k=k.replace("]",""),k=k.trim(),k=k.split(","),void a.each(k,function(h,k){for(var m=this.split("."),n=0;n<m.length;n++){if(m[n]in a(f).data().jqxWidget){i=m[n];break}if(m[n].toLowerCase()in a(f).data().jqxWidget){i=m[n].toLowerCase();break}}var o={};o[i]=c[h];var p=d(l,a(f),o,c,g);if(!p){a(f).jqxProxy(o);var q=b.extend({},e.$eval(j.jqxSettings));j.jqxSettings&&q&&q.propertyChanged&&q.propertyChanged(i,g,c)}})}for(var k=j.jqxWatch.split("."),m=0;m<k.length;m++){if(k[m]in a(f).data().jqxWidget){i=k[m];break}if(k[m].toLowerCase()in a(f).data().jqxWidget){i=k[m].toLowerCase();break}}}var n={};n[i]=c;var o=d(l,a(f),n,c,g);if(!o){a(f).jqxProxy(n);var p=b.extend({},e.$eval(j.jqxSettings));j.jqxSettings&&p&&p.propertyChanged&&p.propertyChanged(i,g,c)}}};if("watch"==i){delete p[i];var t=e.$watch(j[g],t,!0);n.push(t)}else{var t=e.$watch(j[g],t);n.push(t)}}}),""==f[0].id?(c==u[l]&&(u[l]=0),f[0].id=l+u[l]++):""!=f[0].id&&f[0].id==l+"0"&&(c==u[l]&&(u[l]=0),f[0].id=l+u[l]++);var r=a(f)[l];if(!r)throw new Error("Missing required JavaScript references for: "+l);a.each(o,function(b,c){if("data"===b||"created"===b||"propertyChanged"===b)return!0;var d=/(columnmenuopening|columnmenuclosing|aggregatesrenderer|tooltipFormatFunction|labelsFormatFunction|rendergridrows|renderFiles|initTools|draw|drawBefore|dragStart|dragEnd|initFeedBack|onTargetDrop|onDropTargetEnter|onDropTargetLeave|onDrag|createCommand|ready|render|initrowdetails|initTabContent|initContent|renderer|renderToolbar|renderStatusBar|groupsrenderer|pagerrenderer|groupcolumnrenderer|updatefilterconditions|handlekeyboardnavigation|updatefilterpanel|rendered|virtualModeCreateRecords|virtualModeRecordCreating|search|selectionRenderer)/gi,f=/(searchMode)/gi,g=/(ready|aggregatesrenderer|initrowdetails|initTabContent|initContent|renderToolbar|renderStatusBar|pagerRenderer)/gi;if(a.isFunction(c)&&!b.match(d))q[b]=c;else{if(b.match(d)&&!b.match(f)){var h=function(){var a=c.apply(this,arguments);return b.match(g)&&!/^\$(digest|apply)$/.test(e.$root.$$phase)&&e.$digest(),a};return p[b]=h,!0}"array"===a.type(c)&&"source"!==b?c=c.slice(0):"object"===a.type(c)&&"source"!==b&&(c=a.extend({},c)),p[b]=c}}),g(e,f,j,l,m,q);var s=f[0];h(e,f,j,l,m,s);var t=(a(f)[l](p),a(f)[l]("getInstance"));k(e,f,j,l,m,o,s,t,p,n);var v=e.$on("$destroy",function(){t&&t.destroy&&!t.isDestroyed?(t.isDestroyed=!0,a(f).parents().length>0&&a(f)[l]("destroy"),t=null):(a(f).remove(),t=null);for(var b=0;b<n.length;b++)n[b]();p=[],q=[],v()});return t}function k(g,h,i,j,k,l,m,n,o,q){if(i.jqxSettings){if(i.jqxWatchSettings!=c&&k){var r=p(i.jqxSettings)(k);a.each(r,function(c,e){if(c.match(/(source|created|propertyChanged|data|apply|refresh)/g))return!0;var f=n.events||n._events;if(f&&f.indexOf(c)>=0||c.match(/(mousedown|click|mouseenter|mouseleave|mouseup|keydown|keyup|focus|blur|keypress)/g))return!0;if(c===j)return!0;if(o.hasOwnProperty(c)){var l=c,m=k.$watch(i.jqxSettings+"."+c,function(c,e){if(c!=e){if(b.equals(c,e))return;var f={};f[l]=c;var k=d(j,a(h),f,c,e);if(!k){a(h).jqxProxy(f);var m=b.extend({},g.$eval(i.jqxSettings));i.jqxSettings&&m&&m.propertyChanged&&m.propertyChanged(l,e,c)}}},!0);w[i.jqxSettings+"."+c]=m,q.push(m)}})}var s=g.$watch(i.jqxSettings,function(l,m){var o={},p=!1;if(l!=m){if(b.equals(l,m))return;if(a.each(l,function(l,r){if("source"===l){if(null!=m.source)return!0;var s=e(g,h,i,r,k,q);o[l]=s}if("created"===l)return!0;if("propertyChanged"===l)return!0;if("data"===l)return g.$apply(),!0;var t=n.events||n._events;if(t&&t.indexOf(l)>=0||l.match(/(mousedown|click|mouseenter|mouseleave|mouseup|keydown|keyup|focus|blur|keypress)/g))return!0;var u=function(e){if(i.jqxWatchSettings!=c&&k&&!w[i.jqxSettings+"."+e]){var e=l,f=k.$watch(i.jqxSettings+"."+e,function(c,f){if(c!=f){if(b.equals(c,f))return;var k={};k[e]=c;var l=d(j,a(h),k,c,f);if(!l){a(h).jqxProxy(k);var m=b.extend({},g.$eval(i.jqxSettings));i.jqxSettings&&m&&m.propertyChanged&&m.propertyChanged(e,f,c)}}},!0);w[i.jqxSettings+"."+e]=f,q.push(f)}};r instanceof Object||null!=m&&r===m[l]?l!==j&&"apply"!==l&&"created"!==l&&"propertyChanged"!==l&&r instanceof Object&&(null==m||f(r)!==f(m[l])||""==f(r)&&""==f(m[l]))&&(o[l]=r,u(l),p=!0):(o[l]=r,u(l),p=!0)}),o!=={}&&p){var r=d(j,a(h),o,l,m);if(!r){a(h).jqxProxy(o);var s=b.extend({},g.$eval(i.jqxSettings));i.jqxSettings&&s&&s.propertyChanged&&s.propertyChanged(index,m,l)}}}});q.push(s)}}function l(b,d,e,f){var g=b[0].nodeName.toLowerCase(),h=a(b).parent(),i=a(b).html(),j=!(!h||!h[0]||"ng-include"!=h[0].nodeName.toLowerCase());if(a(b).parents("[ui-view]").length>0&&(j=!0),j&&!d)return void a(b).attr("data-jqx-ng-include",!0);var k='<div id="jqx-ngwidget">'+i+"</div>";if(g.indexOf("jqx")>=0){var l=b[0].attributes,m=b;if(g.indexOf("input")>=0)g.indexOf("date")>=0||g.indexOf("number")>=0?a(b).replaceWith('<div id="jqx-ngwidget"></div>'):g.indexOf("password")>=0?a(b).replaceWith('<input id="jqx-ngwidget" type="password"/>'):a(b).replaceWith('<input id="jqx-ngwidget"/>');else if(g.indexOf("jqx-button")>=0&&g.indexOf("jqx-button-group")==-1)a(b).replaceWith('<button id="jqx-ngwidget">'+i+"</button>");else if(g.indexOf("jqx-toggle-button")>=0)a(b).replaceWith('<button id="jqx-ngwidget">'+i+"</button>");else if(g.indexOf("jqx-link-button")>=0)if(a(b).find("a").length>0){var n=a(b).find("a");n.attr("id","jqx-ngwidget"),a(b).replaceWith(n)}else a(b).replaceWith('<a id="jqx-ngwidget">'+i+"</a>");else if(g.indexOf("jqx-data-table")>=0||g.indexOf("jqx-grid")>=0)a(b).find("tr").length>0?a(b).replaceWith('<div id="jqx-ngwidget">'+i+"</div>"):a(b).replaceWith('<div id="jqx-ngwidget"></div>');else if(g.indexOf("jqx-list-box")>=0||g.indexOf("jqx-drop-down-list")>=0||g.indexOf("jqx-combo-box")>=0)a(b).find("option").length>0?a(b).replaceWith('<select id="jqx-ngwidget">'+i+"</select>"):a(b).find("li").length>0?a(b).replaceWith('<ul id="jqx-ngwidget">'+i+"</ul>"):a(b).replaceWith('<div id="jqx-ngwidget"></div>');else if(g.indexOf("jqx-list-menu")>=0)a(b).replaceWith('<ul id="jqx-ngwidget" data-role="listmenu">'+i+"</ul>");else if(g.indexOf("jqx-tooltip")>=0){var o=a(b).children();o.detach(),a(o).insertAfter(a(b)),a.each(l,function(){a(o)[0]&&a(o)[0].setAttribute(this.name,this.value)}),a(b).remove(),b=o}else a(b).replaceWith(k);m=h.find("#jqx-ngwidget").removeAttr("id"),a.each(l,function(){a(m)[0]&&a(m)[0].setAttribute(this.name,this.value)})}var p=b[0];m&&m.length&&(p=m[0]);return""==p.id&&(c==u[f]&&(u[f]=0),p.id=f+u[f]++),a.each(e,function(a,b){a!==f&&"jqxNgModel"!=a&&a.indexOf("jqxOn")==-1&&"jqxData"!=a&&"jqxWatchSettings"!=a&&"jqxCreated"!=a&&"jqxSource"!=a&&"jqxCreate"!=a&&"jqxSettings"!=a&&a.indexOf("jqx")>=0&&(A[p.id]||(A[p.id]=new Array),A[p.id].push({label:a,value:e.$attr[a]}))}),a(p)}function m(b,d){function e(b){d.filesCount=0;var e=b.length;if(b.scripts){var f=b.scripts.length;for(var g in b.deps){f++;var h=b.deps[g];f+=h.length}e=f}var i=function(b,f){var g=0,h=0,i=function(){var j=b[g],k=a('script[src*="'+j+'"]').length;if(0===k){var l=document.getElementsByTagName("head")[0],m=document.createElement("script");m.type="text/javascript";var n=function(){return d.filesCount++,h++,y[j]=!1,x[j]!=c&&a.each(x[j],function(){this.documentReady=!0,this.scriptsLoaded&&this.scriptsLoaded()}),x[j]=!0,d.filesCount==e?(d.documentReady=!0,void(d.scriptsLoaded&&d.scriptsLoaded())):void(h===b.length&&f&&f())};m.addEventListener?m.addEventListener("load",n,!1):window.attachEvent&&m.attachEvent("onreadystatechange",function(){"complete"!=m.readyState&&"loaded"!=m.readyState||n()}),y[j]=!0;var o=C;"globalize.js"==j&&(o=C+"globalization/"),m.src=o+j,l.appendChild(m),g++,g<b.length&&i()}else{if(d.filesCount++,d.filesCount==e)return x[j]===!0||y[j]===c?(d.documentReady=!0,void(d.scriptsLoaded&&d.scriptsLoaded())):(x[j]==c&&(x[j]=new Array),void x[j].push(d));g++,g<b.length&&i(),h++,h===b.length&&f&&f()}};i()};b.scripts?(i(b.scripts),a.each(b.deps,function(a,b){var c=new Array;c.push(a),i(c,function(){i(b)})})):i(b)}var f={jqxCalendar:["jqxdatetimeinput.js","jqxcalendar.js","jqxtooltip.js","globalize.js","jqxbuttons.js"],jqxDateTimeInput:["jqxdatetimeinput.js","jqxcalendar.js","jqxtooltip.js","globalize.js","jqxbuttons.js"],jqxScheduler:["jqxscheduler.js","jqxscheduler.api.js","jqxdate.js","jqxmenu.js","jqxwindow.js","jqxcheckbox.js","jqxnumberinput.js","jqxscrollbar.js","jqxlistbox.js","jqxdropdownlist.js","jqxinput.js","jqxradiobutton.js","jqxdatetimeinput.js","jqxcalendar.js","jqxtooltip.js","globalize.js","jqxbuttons.js"],jqxListBox:["jqxlistbox.js","jqxdata.js","jqxbuttons.js","jqxscrollbar.js"],jqxComboBox:["jqxlistbox.js","jqxdata.js","jqxbuttons.js","jqxscrollbar.js","jqxcombobox.js"],jqxDropDownList:["jqxlistbox.js","jqxdata.js","jqxbuttons.js","jqxscrollbar.js","jqxdropdownlist.js"],jqxKanban:["jqxkanban.js","jqxsortable.js"],jqxSortable:["jqxsortable.js"],jqxKnob:["jqxdraw.js","jqxknob.js"],jqxGrid:{scripts:["jqxdatetimeinput.js","jqxcalendar.js","jqxmenu.js","jqxtooltip.js","jqxscrollbar.js","jqxbuttons.js","jqxlistbox.js","jqxdropdownlist.js","jqxcombobox.js","jqxcheckbox.js","globalize.js"],deps:{"jqxgrid.js":["jqxgrid.selection.js","jqxgrid.filter.js","jqxgrid.sort.js","jqxgrid.storage.js","jqxgrid.grouping.js","jqxgrid.pager.js","jqxgrid.columnsresize.js","jqxgrid.columnsreorder.js","jqxgrid.edit.js","jqxgrid.export.js","jqxgrid.aggregates.js"],"jqxdata.js":["jqxdata.export.js"]}},jqxDataTable:{scripts:["jqxdatatable.js","jqxdatetimeinput.js","jqxcalendar.js","jqxmenu.js","jqxtooltip.js","jqxscrollbar.js","jqxbuttons.js","jqxlistbox.js","jqxdropdownlist.js","jqxcombobox.js","jqxcheckbox.js","globalize.js","jqxinput.js"],deps:{"jqxdata.js":["jqxdata.export.js"]}},jqxTreeGrid:{scripts:["jqxdatetimeinput.js","jqxcalendar.js","jqxmenu.js","jqxtooltip.js","jqxscrollbar.js","jqxbuttons.js","jqxlistbox.js","jqxdropdownlist.js","jqxcombobox.js","jqxcheckbox.js","globalize.js","jqxinput.js"],deps:{"jqxdatatable.js":["jqxtreegrid.js"],"jqxdata.js":["jqxdata.export.js"]}},jqxDockingLayout:{scripts:["jqxmenu.js"],deps:{"jqxlayout.js":["jqxdockinglayout.js"]}},jqxCheckBox:["jqxcheckbox.js"],jqxRadioButton:["jqxradiobutton.js"],jqxBulletChart:["jqxbulletchart.js","jqxtooltip.js"],jqxRangeSelector:["jqxrangeselector.js"],jqxScrollView:["jqxbuttons.js","jqxscrollview.js"],jqxSwitchButton:["jqxswitchbutton.js"],jqxTouch:["jqxtouch.js"],jqxColorPicker:["jqxcolorpicker.js"],jqxInput:["jqxinput.js"],jqxTextArea:["jqxtextarea.js","jqxbuttons.js","jqxscrollbar.js"],jqxTagCloud:["jqxtagcloud.js"],jqxPopover:["jqxpopover.js"],jqxLayout:["jqxlayout.js","jqxmenu.js","jqxwindow.js"],jqxLoader:["jqxloader.js"],jqxResponsivePanel:["jqxresponsivepanel.js"],jqxEditor:["jqxeditor.js"],jqxNumberInput:["jqxbuttons.js","jqxnumberinput.js"],jqxMaskedInput:["jqxmaskedinput.js"],jqxSlider:["jqxbuttons.js","jqxslider.js"],jqxPanel:["jqxbuttons.js","jqxscrollbar.js","jqxpanel.js"],jqxButton:["jqxbuttons.js"],jqxLinkButton:["jqxbuttons.js"],jqxToggleButton:["jqxbuttons.js"],jqxRepeatButton:["jqxbuttons.js"],jqxDropDownButton:["jqxdropdownbutton.js"],jqxNotification:["jqxnotification.js"],jqxDockPanel:["jqxdockpanel.js"],jqxProgressBar:["jqxprogressbar.js"],jqxListMenu:["jqxbuttons.js","jqxscrollbar.js","jqxpanel.js","jqxlistmenu.js"],jqxTree:["jqxbuttons.js","jqxscrollbar.js","jqxpanel.js","jqxtree.js","jqxdata.js"],jqxMenu:["jqxmenu.js","jqxdata.js"],jqxTabs:["jqxtabs.js","jqxbuttons.js"],jqxDragDrop:["jqxdragdrop.js"],jqxDraw:["jqxdraw.js"],jqxWindow:["jqxwindow.js"],jqxDocking:["jqxwindow.js","jqxdocking.js"],jqxButtonGroup:["jqxbuttons.js","jqxbuttongroup.js"],jqxChart:["jqxdata.js","jqxchart.js"],jqxNavigationBar:["jqxnavigationbar.js"],jqxExpander:["jqxexpander.js"],jqxResponse:["jqxresponse.js"],jqxPasswordInput:["jqxpasswordinput.js"],jqxRating:["jqxrating.js"],jqxSplitter:["jqxbuttons.js","jqxsplitter.js"],jqxValidator:["jqxvalidator.js"],jqxTooltip:["jqxtooltip.js"],jqxGauge:["jqxdraw.js","jqxgauge.js"],jqxLinearGauge:["jqxdraw.js","jqxgauge.js"],jqxTreeMap:["jqxtreemap.js"],jqxRibbon:["jqxbuttons.js","jqxribbon.js"],jqxFormattedInput:["jqxbuttons.js","jqxformattedinput.js"],jqxComplexInput:["jqxbuttons.js","jqxcomplexinput.js"],jqxToolBar:["jqxtoolbar.js"],jqxFileUpload:["jqxfileupload.js"],jqxNavBar:["jqxnavbar.js"]};e(f[b])}function n(b){var d=function(d,e,f,g,h){if(a(e).attr("data-jqx-ng-include")){a(e).removeAttr("data-jqx-ng-include");var i=a(e.children()).detach();e=l(e,!0,f,b),e.append(i),s(e)(d);var k=!0;for(var n in f)if(n.toString().indexOf("jqx")!=-1&&(d[f[n]]!=c&&(k=!1),f[n].split(".").length>1))for(var o=f[n].split("."),t=0;t<o.length;t++)d[o[t]]!=c&&(k=!1);k&&f.jqxSettings&&(p(f.jqxSettings)(d)||(k=!1)),k&&(d=d.$parent)}if(a.jqx.AMD){var u={};z[b]=!1,u.documentReady=!1,m(b,u)}var v=e[0].style.visibility,w=e[0].style.display;e[0].style.visibility="hidden",e[0].style.display="none";var x=d,y=r(function(){r.cancel(y),y=c;var h=function(){var h=g[0];e[0].style.visibility=v,e[0].style.display=w;var i=j(d,e,f,b,x),k=(b.toLowerCase(),b.match(/(input|list|radio|checkbox|combobox|rating|slider|scrollbar|progress|range|editor|picker|range|gauge|textarea|calendar|switch|button)/gi)),l={element:e[0],name:b,instance:a(e).data().jqxWidget,id:e[0].id,scope:d},m=function(){d.$emit(b+"Created",l),f.jqxSettings&&p(f.jqxSettings)(d)&&p(f.jqxSettings)(d).created&&q(function(){var a=p(f.jqxSettings)(d).created;a(l)}),f.jqxCreated&&q(function(){var a=p(f.jqxCreated)(d);a(l)})};if("jqxGrid"===b||"jqxDataTable"===b)var n=0,o=r(function(){a(e).data().jqxWidget?(a(e).data().jqxWidget.initializedcall||25==n)&&(r.cancel(o),o=c,m()):(r.cancel(o),o=c),n++},100);else m();q(function(){if(h){if(h.$render=function(){var f=h.$viewValue;return f===c&&(f=h.$modelValue),"jqxRadioButton"===b?void(d.$eval(a(e).attr("value"))==h.$viewValue?a(e).val(!0):"true"==d.$eval(a(e).attr("value"))&&1==h.$viewValue?a(e).val(!0):a(e).val(!1)):"jqxCheckBox"===b?(d.$eval(a(e).attr("ng-true-value"))==h.$viewValue&&a(e).val(!0),void(d.$eval(a(e).attr("ng-false-value"))==h.$viewValue?a(e).val(!1):a(e).val(h.$viewValue))):void(f!=a(e).val()&&q(function(){a(e).val(f)}))},"jqxRadioButton"===b)d.$eval(a(e).attr("value"))==h.$viewValue?a(e).val(!0):"true"==d.$eval(a(e).attr("value"))&&1==h.$viewValue?a(e).val(!0):a(e).val(!1);else if("jqxCheckBox"===b)d.$eval(a(e).attr("ng-true-value"))==h.$viewValue&&a(e).val(!0),d.$eval(a(e).attr("ng-false-value"))==h.$viewValue?a(e).val(!1):a(e).val(h.$viewValue);else if("jqxDropDownList"===b||"jqxComboBox"===b||"jqxListBox"===b||"jqxInput"===b||"jqxTextArea"===b)if(f.jqxNgModel!=c){var g=a(e).data().jqxWidget;"jqxInput"!=b?g.valueMember?g.selectItem(h.$viewValue[g.valueMember]):g.displayMember?g.selectItem(h.$viewValue[g.displayMember]):a(e).val(h.$viewValue):a(e).val(h.$viewValue)}else a(e).val(h.$viewValue);else if("jqxDateTimeInput"===b||"jqxCalendar"===b)if(f.jqxNgModel!=c){var g=a(e).data().jqxWidget;"range"==g.selectionMode?g.setRange(h.$viewValue):g.setDate(h.$viewValue)}else a(e).val(h.$viewValue);else if("jqxToggleButton"==b){var g=a(e).data().jqxWidget;g.toggled=!0,g.refresh()}else a(e).val(h.$viewValue);if(k){var j="keyup change";"jqxScrollBar"==b&&(j="valueChanged"),"jqxToggleButton"==b&&(j="keyup click"),"jqxInput"==b&&(j="keyup change select");var l,m=i.host;!m&&i.base&&(m=i.base.host),a(m).on(j,function(g){var i=g.args;l&&q.cancel(l),l=q(function(){if("jqxRadioButton"===b)i&&"api"!=i.type&&h.$setViewValue(d.$eval(a(e).attr("value")));else if("jqxCheckBox"===b)a(e).attr("ng-true-value")!=c&&i.checked?h.$setViewValue(a(e).attr("ng-true-value")):a(e).attr("ng-false-value")==c||i.checked?h.$setViewValue(a(e).val()):h.$setViewValue(a(e).attr("ng-false-value"));else if("jqxDropDownList"===b||"jqxComboBox"===b||"jqxListBox"===b||"jqxInput"===b||"jqxTextArea"===b){var g=a(e).val();if(f.jqxNgModel!=c){var j=a(e).data().jqxWidget;j.getSelectedItem&&(g=j.getSelectedItem(),g.originalItem&&(g=g.originalItem)),"jqxInput"!==b&&"jqxTextArea"!==b||(g=j.selectedItem),h.$setViewValue(g)}else h.$setViewValue(g)}else if("jqxDateTimeInput"===b||"jqxCalendar"===b)if(f.jqxNgModel!=c){var j=a(e).data().jqxWidget;"range"==j.selectionMode?h.$setViewValue(j.getRange()):h.$setViewValue(j.getDate())}else if("date"===a.type(h.$viewValue)){var j=a(e).data().jqxWidget;"range"==j.selectionMode?h.$setViewValue(j.getRange()):h.$setViewValue(j.getDate())}else h.$setViewValue(a(e).val());else if("jqxToggleButton"==b){var j=a(e).data().jqxWidget;h.$setViewValue(j.toggled)}else h.$setViewValue(a(e).val());d.$emit(b+"ModelChange",h.$viewValue)})})}}})};if(f.ngShow===c||f.jqxCreate!==c){var i=function(){if(null!=f.jqxCreate||null!=f.jqxCreate)if(f.jqxCreate===!0||null!==f.jqxCreate&&"object"==a.type(f.jqxCreate))h();else var b=d.$watch(f.jqxCreate,function(a,c){"number"==typeof a?(q(h,a),b()):a&&(h(),b())});else h()};if(a.jqx.AMD){var k=function(){var b=!0;for(var c in z)if(!z[c]){b=!1;break}if(b){B||(d.$emit("jQWidgetsScriptsLoaded"),B=!0);for(var c in z)a.each(z[c],function(){this()}),z[c]=new Array}};if(u.documentReady){var l={element:e[0],name:b,scope:d};d.$emit(b+"ScriptsLoaded",l),z[b]||(z[b]=new Array),z[b].push(i),k()}else u.scriptsLoaded=function(){var a={element:e[0],name:b,scope:d};d.$emit(b+"ScriptsLoaded",a),z[b]||(z[b]=new Array),z[b].push(i),k()}}else i()}else var m=d.$watch(f.ngShow,function(a,b){a&&(h(),m())})})};o.directive(b,["$timeout","$interval","$parse","$compile","$log",function(a,c,e,f,g){q=a,r=c,p=e,s=f,t=g;var h;return{restrict:"ACE",require:["?ngModel"],scope:!1,template:function(a,c){l(a,!1,c,b),h=this.scope},controller:["$scope","$attrs","$element","$transclude",function(a,b,c,d){}],compile:function(a,b,c){return{pre:function(a,b,c,d,e){},post:function(a,b,c,e,f){d(a,b,c,e,f)}}},link:d}}])}if(b){a.jqx=a.jqx||{},a.jqx.AMD=!1;var o=b.module("jqwidgets",[]),p=(b.module("jqwidgets-amd",[],function(){a.jqx.AMD=!0}),null),q=null,r=null,s=null,t=null,u=new Array,v=new Array,w=new Array,x=new Array,y=new Array,z=new Array,A={},B=!1,C=function(){var a,b,c,d=document.getElementsByTagName("script");for(a=0;b=d[a];a++)if(c=b.src,c.indexOf("jqxcore.js")>=0){var e=c.substring(0,c.indexOf("jqxcore.js"));break}return e}();a.jqx.angularCompile=function(a,d){a.length>0&&(a=a[0]);var e=b.element(a),f=e.injector();d==c&&(d=a.innerHTML),f.invoke(["$compile","$rootScope",function(a,b){var c=e.html(d).scope();a(e)(c||b),/^\$(digest|apply)$/.test(b.$$phase)?/^\$(digest|apply)$/.test(c.$$phase)||c.$digest():b.$digest()}])},n("jqxBulletChart"),n("jqxButtonGroup"),n("jqxButton"),n("jqxBarGauge"),n("jqxRepeatButton"),n("jqxToggleButton"),n("jqxLinkButton"),n("jqxCalendar"),n("jqxChart"),n("jqxCheckBox"),n("jqxComplexInput"),n("jqxColorPicker"),n("jqxComboBox"),n("jqxDataTable"),n("jqxDateTimeInput"),n("jqxDocking"),n("jqxDockPanel"),n("jqxDragDrop"),n("jqxDraw"),n("jqxDropDownButton"),n("jqxDropDownList"),n("jqxEditor"),n("jqxExpander"),n("jqxFormattedInput"),n("jqxFileUpload"),n("jqxGauge"),n("jqxLinearGauge"),n("jqxGrid"),n("jqxInput"),n("jqxListBox"),n("jqxListMenu"),n("jqxMaskedInput"),n("jqxMenu"),n("jqxNavigationBar"),n("jqxNavBar"),n("jqxNotification"),n("jqxNumberInput"),n("jqxPanel"),n("jqxPasswordInput"),n("jqxProgressBar"),n("jqxRadioButton"),n("jqxRangeSelector"),n("jqxRating"),n("jqxRibbon"),n("jqxScrollBar"),n("jqxScrollView"),n("jqxSlider"),n("jqxSplitter"),n("jqxSwitchButton"),n("jqxTabs"),n("jqxToolBar"),n("jqxTooltip"),n("jqxTouch"),n("jqxTree"),n("jqxTreeGrid"),n("jqxTreeMap"),n("jqxValidator"),n("jqxWindow"),n("jqxTagCloud"),n("jqxPopover"),n("jqxKanban"),n("jqxKnob"),n("jqxSortablePlugin"),n("jqxScheduler"),n("jqxTextArea"),n("jqxLayout"),n("jqxDockingLayout"),n("jqxResponsivePanel"),n("jqxLoader")}}(jqxBaseFramework,window.angular);
