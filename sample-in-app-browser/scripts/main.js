document.addEventListener("deviceready", onDeviceReady, false);

//Activate :active state
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
	navigator.splashscreen.hide();
    var app = new Application();
	app.run();
}

function Application() {
}

Application.prototype = {
    
	run: function() {
		var that = this,
		openLocal = document.getElementById("openLocal"),
		openExternalInAppBrowser = document.getElementById("openExternalInAppBrowser"),
		openPDF = document.getElementById("openPDF"),
		openExternalPDF = document.getElementById("openExternalPDF"),
		openExternalInSystemBrowser = document.getElementById("openExternalInSystemBrowser");
        
		openLocal.addEventListener("click", that.openLocal);		
		openExternalInAppBrowser.addEventListener("click", that.openExternalInAppBrowser);
		openPDF.addEventListener("click", that.openPDF);
		openExternalPDF.addEventListener("click", that.openExternalPDF);
		openExternalInSystemBrowser.addEventListener("click", that.openExternalInSystemBrowser);
	},
    
	openLocal: function() {
		window.open("img/ice.png", "_blank");
	},
 
	openExternalInAppBrowser:  function () {
		var ref=window.open("http://icenium.com", "_blank", 'location=no');
		setTimeout(function() {
	             ref.close();
	         }, 5000);
	},
    
	openExternalPDF:  function () {
		if (device.uuid == "e0101010d38bde8e6740011221af335301010333" || device.uuid == "e0908060g38bde8e6740011221af335301010333") {
			alert("Not Supported in Simulator.");
		}
		else {
			if (device.platform == 'Android') {
				window.open("http://www.icenium.com/docs/default-source/icenium-downloads/understanding-the-three-ways-to-build-mobile-apps.pdf?sfvrsn=0", "_system");
			}
			else
				window.open("http://www.icenium.com/docs/default-source/icenium-downloads/understanding-the-three-ways-to-build-mobile-apps.pdf?sfvrsn=0", "_blank");
		}
	},
	
	openPDF: function() {
		if (device.uuid == "e0101010d38bde8e6740011221af335301010333" || device.uuid == "e0908060g38bde8e6740011221af335301010333") {
			alert("Not Supported in Simulator.");
		}
		else {
			if (device.platform == 'Android') {
				window.open("whitepaper-mobile-developer-guidance.pdf", "_system");
			}
			else
				window.open("whitepaper-mobile-developer-guidance.pdf", "_blank");
		}
	},
    
	openExternalInSystemBrowser:function () {
		window.open("http://wiki.apache.org/cordova/InAppBrowser", "_system");
	}
}
