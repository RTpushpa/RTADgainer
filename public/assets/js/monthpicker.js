(function(e){e.fn.monthpicker=function(t,n){var r={de:{month:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},at:{month:["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},es:{month:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},fr:{month:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},hu:{month:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"]},it:{month:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]},nl:{month:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]}},i={minYear:"1980",maxYear:"2010",month:["January","February","March","April","May","June","July","August","September","October","November","December"]},s,o,u,a=e(this);if(!e.isEmptyObject(t)){i=e.extend(i,r[t.lang])}t=e.extend(i,t);a.hide();if(t.minYear>t.maxYear){for(s=t.minYear;s>=t.maxYear;s--){o+='<option value="'+s+'">'+s+"</option>"}}else{for(s=t.minYear;s<=t.maxYear;s++){o+='<option value="'+s+'">'+s+"</option>"}}e.map(t.month,function(e,t){u+='<option value="'+t+'">'+e+"</option>"});var f=e('<div class="col-xs-3"><select class="yearpick form-control"></div>'+o+"</select>"),l=e('<div class="col-xs-3"><select class="monthpick  form-control">'+u+"</select></div>");l.insertBefore(e(this));f.insertAfter(e(this));var c=function(){a.attr("value",Math.round(Date.UTC(f.val(),l.val(),1))/1e3)};f.change(c);l.change(c)}})(jQuery)