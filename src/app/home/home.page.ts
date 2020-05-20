import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';




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


	// Current Location Lat/Lng
	latitude: any;
	longitude: any;
	
	@ViewChild('mapElement', {static: true}) mapNativeElement: ElementRef;
	constructor(private geolocation: Geolocation, private router: Router) { }

	ngOnInit() {	
	}

	ngAfterViewInit(): void {

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
		map.setOptions(mapOpt);


		/* Map Pin Icons */

		const youAreHere = {
			url: 'assets/icon/u.png',
			scaledSize: new google.maps.Size(50,50)
		};
		const landmarkICO = {
			url: 'assets/icon/landmark.png'
		};


		/* Map Geolocation */

		this.geolocation.getCurrentPosition().then((resp) => {
			this.latitude = resp.coords.latitude;
			this.longitude = resp.coords.longitude;
			const pos = {lat: this.latitude, lng: this.longitude};
			map.setCenter(pos);


			/* Current Location Marker Object */

			const locationMarker = new google.maps.Marker({
				position: pos,
				map: map,
				icon: youAreHere,
				title: 'You are here!'	
			});
		});

		/* Marker with link to page creation */


		function addLinikedMarker (lat, lng, icon, popupString: string, name: string) {

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(lat,lng),
				icon: icon,
				map: map
			});
			var infoWindow = new google.maps.InfoWindow({
				content: popupString
			});
			marker.addListener('click', function () {
				infoWindow.open(map, marker);
			});	
		}
		/* Linked Marker Calls */



		var summitPark = '<p> <b>test</b> window </p>'
		addLinikedMarker (39.250511, -84.387455, landmarkICO, summitPark, 'summit park');


		
	}
}
