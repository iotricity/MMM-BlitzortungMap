/* Magic Mirror
 * Module: MMM-BlitzortungMap
 *
 * By Jeroen van Vooren (Iotricity)
 * MIT Licensed.
 */

Module.register("MMM-BlitzortungMap", {
	defaults: {
		width: 600,
		height: 450,
		lat: '52.4696193',
		lon: '4.6485682',
		reloadtime: 15,
		mapstyle: 0,
		mapzoom: 5,
		mapcontrols: false,
		showstations: true,
		showstationlinks: true,
		showstationlinkrange: 3,
		showcircles: true,
		showcirclerange: 3
	},

	start: function () {
		var self = this;

		setInterval(() => {
			self.updateDom();
		}, 60000 * this.config.reloadtime);
	},

	getStyles: function () {
		let styles = ['MMM-BlitzortungMap.css'];

		return styles;
	},

	getDom: function () {
		var blitzContainer = document.createElement('div');
		blitzContainer.className = 'blitzContainer';

		// https://map.blitzortung.org/mapexample.html
		var blitzFrame = document.createElement('iframe');
		blitzFrame.className = 'blitzFrame';
		blitzFrame.src = 'https://map.blitzortung.org/index.php?interactive=0&NavigationControl=0&FullScreenControl=0&Cookies=0&InfoDiv=0&MenuButtonDiv=0&ScaleControl=0&LinksCheckboxChecked=0&LinksRangeValue=10&MapStyle=' + this.config.mapstyle + '&MapStyleRangeValue=10&Advertisment=0#' + this.config.mapzoom + '/' + this.config.lat + '/' + this.config.lon;
		blitzContainer.appendChild(blitzFrame);

		return blitzContainer;
	}
});
