function afficher(){
	var nom=document.getElementById("nom_pays").value
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+nom+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res =>res.json())
		.then(resJson => alert('Il fait '+resJson.main.temp+'° à '+nom))
	document.getElementById("nom_pays").value="";
}


function newyork(){
	var lat_ne=40.97989806962013
	var lon_ne=-81.5625
	var lat_sw=38.82259097617712
	var lon_sw=-81.5625
	window.fetch('https://api.netatmo.com/api/getpublicdata?lat_ne='+lat_ne+'&lon_ne='+lon_ne+'&lat_sw='+lat_sw+'&lon_sw='+lon_sw+'&filter=false&units=metric&lang=fr&access_token=5e12634141a113000c492d05|8d0f301decd59b05474bb6fbfb265610')
        .then(res =>res.json())
        .then(resJson => document.getElementById("1").innerHTML=resJson['body'][4]['measures']['02:00:00:00:6b:ee']['res']['1578369404']+'°')
    window.fetch('https://api.netatmo.com/api/getpublicdata?lat_ne='+lat_ne+'&lon_ne='+lon_ne+'&lat_sw='+lat_sw+'&lon_sw='+lon_sw+'&filter=false&units=metric&lang=fr&access_token=5e12634141a113000c492d05|8d0f301decd59b05474bb6fbfb265610')
        .then(res1 =>res1.json())
        .then(res1Json => document.getElementById("2").innerHTML=resJson['body'][4]['measures']['02:00:00:00:6b:ee']['res']['1578369404']+'%')
    window.fetch('https://api.netatmo.com/api/getpublicdata?lat_ne='+lat_ne+'&lon_ne='+lon_ne+'&lat_sw='+lat_sw+'&lon_sw='+lon_sw+'&filter=false&units=metric&lang=fr&access_token=5e12634141a113000c492d05|8d0f301decd59b05474bb6fbfb265610')
        .then(res2 =>res2.json())
        .then(res2Json => document.getElementById("3").innerHTML=resJson['body'][4]['measures']['02:00:00:00:6b:ee']['res']['1578369404'])
}

function bogota(){
	var lat_ne=5.266007882805492
	var lon_ne=-75.234375
	var lat_sw=4.915832801313174
	var lon_sw=-75.5859375
	window.fetch('https://api.netatmo.com/api/getpublicdata?lat_ne='+lat_ne+'&lon_ne='+lon_ne+'&lat_sw='+lat_sw+'&lon_sw='+lon_sw+'&filter=false&units=metric&lang=fr&access_token=5e12634141a113000c492d05|8d0f301decd59b05474bb6fbfb265610')
        .then(res =>res.json())
        .then(resJson => document.getElementById("1").innerHTML=resJson['body'][4]['measures']['02:00:00:00:6b:ee']['res']['1578369404']+'°')
    window.fetch('https://api.netatmo.com/api/getpublicdata?lat_ne='+lat_ne+'&lon_ne='+lon_ne+'&lat_sw='+lat_sw+'&lon_sw='+lon_sw+'&filter=false&units=metric&lang=fr&access_token=5e12634141a113000c492d05|8d0f301decd59b05474bb6fbfb265610')
        .then(res1 =>res1.json())
        .then(res1Json => document.getElementById("2").innerHTML=resJson['body'][4]['measures']['02:00:00:00:6b:ee']['res']['1578369404']+'%')
    window.fetch('https://api.netatmo.com/api/getpublicdata?lat_ne='+lat_ne+'&lon_ne='+lon_ne+'&lat_sw='+lat_sw+'&lon_sw='+lon_sw+'&filter=false&units=metric&lang=fr&access_token=5e12634141a113000c492d05|8d0f301decd59b05474bb6fbfb265610')
        .then(res2 =>res2.json())
        .then(res2Json => document.getElementById("3").innerHTML=resJson['body'][4]['measures']['02:00:00:00:6b:ee']['res']['1578369404'])
}

function Paris(){
	var lat_ne=48.86471476180278
	var lon_ne=2.373046875
	var lat_sw=48.83579746243092
	var lon_sw=2.3291015625
	window.fetch('https://api.netatmo.com/api/getpublicdata?lat_ne='+lat_ne+'&lon_ne='+lon_ne+'&lat_sw='+lat_sw+'&lon_sw='+lon_sw+'&filter=false&units=metric&lang=fr&access_token=5e12634141a113000c492d05|8d0f301decd59b05474bb6fbfb265610')
        .then(res =>res.json())
        .then(resJson => document.getElementById("1").innerHTML=resJson['body'][4]['measures']['02:00:00:00:6b:ee']['res']['1578369404']+'°')
    window.fetch('https://api.netatmo.com/api/getpublicdata?lat_ne='+lat_ne+'&lon_ne='+lon_ne+'&lat_sw='+lat_sw+'&lon_sw='+lon_sw+'&filter=false&units=metric&lang=fr&access_token=5e12634141a113000c492d05|8d0f301decd59b05474bb6fbfb265610')
        .then(res1 =>res1.json())
        .then(res1Json => document.getElementById("2").innerHTML=resJson['body'][4]['measures']['02:00:00:00:6b:ee']['res']['1578369404']+'%')
    window.fetch('https://api.netatmo.com/api/getpublicdata?lat_ne='+lat_ne+'&lon_ne='+lon_ne+'&lat_sw='+lat_sw+'&lon_sw='+lon_sw+'&filter=false&units=metric&lang=fr&access_token=5e12634141a113000c492d05|8d0f301decd59b05474bb6fbfb265610')
        .then(res2 =>res2.json())
        .then(res2Json => document.getElementById("3").innerHTML=resJson['body'][4]['measures']['02:00:00:00:6b:ee']['res']['1578369404'])
}


function paris(){
	var ville="Paris"
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res =>res.json())
		.then(resJson => document.getElementById("1").innerHTML=resJson.main.temp+"°")
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res1 =>res1.json())
		.then(res1Json => document.getElementById("2").innerHTML=res1Json.main.humidity+"%")
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res2 =>res2.json())
		.then(res2Json => document.getElementById("3").innerHTML=res2Json.main.pressure)
				

}


function lyon(){
	var ville="Lyon"
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res =>res.json())
		.then(resJson => document.getElementById("1").innerHTML=resJson.main.temp+"°")
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res1 =>res1.json())
		.then(res1Json => document.getElementById("2").innerHTML=res1Json.main.humidity+"%")
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res2 =>res2.json())
		.then(res2Json => document.getElementById("3").innerHTML=res2Json.main.pressure)
				

}

function strasboourg(){
	var ville="Strasbourg"
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res =>res.json())
		.then(resJson => document.getElementById("1").innerHTML=resJson.main.temp+"°")
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res1 =>res1.json())
		.then(res1Json => document.getElementById("2").innerHTML=res1Json.main.humidity+"%")
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res2 =>res2.json())
		.then(res2Json => document.getElementById("3").innerHTML=res2Json.main.pressure)
				

}

function paris(){
	var ville="Paris"
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res =>res.json())
		.then(resJson => document.getElementById("1").innerHTML=resJson.main.temp+"°")
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res1 =>res1.json())
		.then(res1Json => document.getElementById("2").innerHTML=res1Json.main.humidity+"%")
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res2 =>res2.json())
		.then(res2Json => document.getElementById("3").innerHTML=res2Json.main.pressure)
				

}

function evry(){
	var ville="Evry"
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res =>res.json())
		.then(resJson => document.getElementById("1").innerHTML=resJson.main.temp)
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res1 =>res1.json())
		.then(res1Json => document.getElementById("2").innerHTML=res1Json.main.humidity)
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res2 =>res2.json())
		.then(res2Json => document.getElementById("3").innerHTML=res2Json.main.pressure)
	
}

function nantes(){
	var ville="Nantes"
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res =>res.json())
		.then(resJson => document.getElementById("1").innerHTML=resJson.main.temp)
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res1 =>res1.json())
		.then(res1Json => document.getElementById("2").innerHTML=res1Json.main.humidity)
	window.fetch('http://api.openweathermap.org/data/2.5/weather?q='+ville+',fr&units=metric&lang=fr&APPID=09fdd882db9b5011dd0f280a71a7a9e8')
		.then(res2 =>res2.json())
		.then(res2Json => document.getElementById("3").innerHTML=res2Json.main.pressure)
	
}



function berlin(){
	var lat_ne=52.3755991766591
	var lon_ne=13.7109375
	var lat_sw=52.26815737376817
	var lon_sw=13.53515625
	window.fetch('https://api.netatmo.com/api/getpublicdata?lat_ne='+lat_ne+'&lon_ne='+lon_ne+'&lat_sw='+lat_sw+'&lon_sw='+lon_sw+'&filter=false&units=metric&lang=fr&access_token=5e12634141a113000c492d05|8d0f301decd59b05474bb6fbfb265610')
        .then(res =>res.json())
        .then(resJson => document.getElementById("1").innerHTML=resJson['body'][4]['measures']['02:00:00:00:6b:ee']['res']['1578369404']+'°')
    window.fetch('https://api.netatmo.com/api/getpublicdata?lat_ne='+lat_ne+'&lon_ne='+lon_ne+'&lat_sw='+lat_sw+'&lon_sw='+lon_sw+'&filter=false&units=metric&lang=fr&access_token=5e12634141a113000c492d05|8d0f301decd59b05474bb6fbfb265610')
        .then(res1 =>res1.json())
        .then(res1Json => document.getElementById("2").innerHTML=resJson['body'][4]['measures']['02:00:00:00:6b:ee']['res']['1578369404']+'%')
    window.fetch('https://api.netatmo.com/api/getpublicdata?lat_ne='+lat_ne+'&lon_ne='+lon_ne+'&lat_sw='+lat_sw+'&lon_sw='+lon_sw+'&filter=false&units=metric&lang=fr&access_token=5e12634141a113000c492d05|8d0f301decd59b05474bb6fbfb265610')
        .then(res2 =>res2.json())
        .then(res2Json => document.getElementById("3").innerHTML=resJson['body'][4]['measures']['02:00:00:00:6b:ee']['res']['1578369404'])
}


