import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;
var mapOpt = { minZoom: 13, maxZoom: 0};
var mapBoundaries = {
	north: 39.28,
	south: 39.20,
	east: -84.30,
	west: -84.40
}
@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit, AfterViewInit {
	latitude: any;
	longitude: any;
	@ViewChild('mapElement', {static: true}) mapNativeElement: ElementRef;
	constructor(private geolocation: Geolocation) { }

	ngOnInit() {
	}

	ngAfterViewInit(): void {
		/*
		

		/* Map Parameters */


		const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
			center: {lat: 39.251, lng: -84.342},
			zoom: 14,
			streetViewControl: false,
			mapTypeId: 'terrain',
			restriction: {
				latLngBounds: mapBoundaries,
				strictBounds: false,
			}




		});

		/* Map Geolocation */
		const youAreHere = {
			url: 'assets/icon/u.png',
			scaledSize: new google.maps.Size(50,50)

		};
		this.geolocation.getCurrentPosition().then((resp) => {
			this.latitude = resp.coords.latitude;
			this.longitude = resp.coords.longitude;
			const pos = {lat: this.latitude, lng: this.longitude};
			map.setCenter(pos);
			const locationMarker = new google.maps.Marker({
				position: pos,
				map: map,
				icon: youAreHere,
				title: 'You are here!'
				
			});
			const contentOfPin1 = '<div id="content">' + '<p> Test Icon Popup </p>'

			const pin1InfoWindow = new google.maps.InfoWindow({
				content: contentOfPin1,
				maxWidth: 400
			});
			marker.addListener('click', function() {
				pin1InfoWindow.open(map,marker);
			});






			
		}).catch((error) => {
			console.log('Error getting location', error);
		});



		/* Map Parameters */


		map.setOptions(mapOpt);


		/* Map Pin Creation */


		var iconBase =
		'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

		var icons = {
			parking: {
				icon: iconBase + 'parking_lot_maps.png'
			},
			library: {
				icon: iconBase + 'library_maps.png'
			},
			info: {
				icon: iconBase + 'info-i_maps.png'
			},
			home: {
				icon: youAreHere
			}
		};

		var features = [
		{
			position: new google.maps.LatLng(39.223251, -84.355784),
			type: 'home'
		}];

		// Create markers.
		for (var i = 0; i < features.length; i++) {
			var marker = new google.maps.Marker({
				position: features[i].position,
				icon: icons[features[i].type].icon,
				map: map
			});
		};







	}

}
