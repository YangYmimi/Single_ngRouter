/**
 *
 * @description
 */

'use strict';

angular.module('JustinApp').directive('tencentMap', function() {
	return {
		restrict: 'E',
		template: '<div id="tencentMap" class="tencent-map"></div>',
		replace: true,
		link: function(scope, elem, attr) {
			var map, address;

			scope.$watch(function() {
				address = JSON.parse(attr.mapUrl);
				return attr.mapUrl;
			}, function(crt) {
				console.log(crt);
			})

			var initGoogleMap = (function() {
				var funName = ("cpMapLoadedMapFunction" + Math.random() * 100000).replace(".", "");
				window[funName] = function() {
					initScopeAfterGoogleMapLoaded();
				};

				function loadScript() {
					var script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + 'callback=' + funName;
					document.body.appendChild(script);
				}

				if (window.google && window.google.Map) {
						initScopeAfterGoogleMapLoaded();
				} else {
						loadScript();
				}
			})();

			function initScopeAfterGoogleMapLoaded() {
				var center = new google.maps.LatLng(address[0], address[1]);
				map = new google.maps.Map(
					document.getElementById("googleMap"), {
						center: center,
							zoom: 15,
							mapTypeId: google.maps.MapTypeId.ROADMAP
					}
				);

				var marker = new google.maps.Marker({
					position: center,
					map: map
				});

				marker.setDraggable(true);
				google.maps.event.addListener(
					marker,
					'dragend',
					function(event) {
						lat = event.latLng.getLat();
						lng = event.latLng.getLng();
					}
				);
			}
		}
	}
});
