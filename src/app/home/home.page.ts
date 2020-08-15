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


		//var mapDiv = document.getElementById('map');

		function addLinikedMarker (lat, lng, icon, popupString: string, name: string) {

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(lat,lng),
				icon: icon,
				map: map
			});
			var infoWindow = new google.maps.InfoWindow();
			infoWindow.setContent(popupString);
			marker.addListener('click', function () {
				infoWindow.open(map, marker);
			});

			google.maps.event.addDomListener(map, 'click', function() {
          		infoWindow.close();
        	});

			// infoWindow.close();
	
		}
		/* Linked Marker Calls */

		var stixDurbrowHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/Stix-Durbrow.jpg" style = "float: right; margin: 5px;">' + '<p><b>Stix-Durbrow House, c. 1928</b></p>' + '<p> 10451 Grandoaks Lane, Montgomery, OH </p>' + '<p> Guy Chaney Burrough, noted architect, designed this classic Tudor-style house which is unique to the Montgomery area. The original property comprised more than thirty acres of land. </p>'
		addLinikedMarker (39.250235,-84.355324, landmarkICO, stixDurbrowHouse, 'Stix-Durbrow House, c. 1928');
		

		var groverKjellenbergHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/grover-kjellenberg-house.jpg" style = "float: right; margin: 5px;">' + '<p><b>Grover-Kjellenberg House, c. 1840</b></p>' + '<p> 10305 Montgomery Road, Montgomery, OH </p>' + '<p>This house was built by Adam Grover from sun-cured bricks made on the property. Mr. Grover gave the property at the corner of Montgomery and Deerfield Roads to establish the Hopewell Cemetery. This house has been a residence, a stagecoach stop, and a tavern.</p>'
		addLinikedMarker (39.246348,-84.34615500000001, landmarkICO,groverKjellenbergHouse, 'Grover-Kjellenberg House, c. 1840');

		var hopewellCemetery = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/hopewell-cemetery.jpg" style = "float: right; margin: 5px;">' + '<p><b>Hopewell Cemetery, c. 1803</b></p>' + '<p> 10205 Montgomery Road, Montgomery, OH </p>' + '<p>The congregation of Hopewell Presbyterian Church moved from their early log-school home to this site. In accord with the times, the adjacent land became the burial ground. Veterans of the Revolutionary War, War of 1812, and the Civil War are buried here.</p>'
		addLinikedMarker (39.243957,-84.34743200000003, landmarkICO,hopewellCemetery, 'Hopewell Cemetery, c. 1803');

		var cristHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/crist-house.jpg" style = "float: right; margin: 5px;">' + '<p><b>Crist House, c. 1815</b></p>' + '<p> 9854 Zig Zag Road, Montgomery, OH </p>' + '<p>This Federal-style house is one of several pre-1860 farmhouses remaining in Montgomery. The early part of the house was built by Abraham Crist, who came from Orange County, N.Y., in 1807-08. The property remained in the Crist family until 1869.</p>'
		addLinikedMarker (39.2362465,-84.36040860000003, landmarkICO,cristHouse, 'Crist House, c. 1815');

		var wilderSwaimHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/swaim-house.jpg" style = "float: right; margin: 5px;">' + '<p><b>Wilder-Swaim House, c. 1820</b></p>' + '<p> 7650 Cooper Road, Montgomery, OH </p>' + '<p>The first residents were James and Susan Wilder who arrived from Rhode Island. William Swaim, a principal of Montgomery school, purchased the property in 1917. In 1933 the property became a golf course and in 1976 a city-owned park.</p>'
		addLinikedMarker (39.228958,-84.361625, landmarkICO,wilderSwaimHouse, 'Wilder-Swaim House, c. 1820');

		var crainEberhardHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/eberhard.jpg" style = "float: right; margin: 5px;">' + '<p><b>Crain-Eberhard House, c. 1884</b></p>' + '<p> 7737 Remington Road, Montgomery, OH </p>' + '<p>This Federal-style house was built by Jonathan Crain. The Crains were among the pioneers who moved in with the second wave of people coming to the area. Note the original flagstone walk.</p>'
		addLinikedMarker (39.228949,-84.35809699999999, landmarkICO,crainEberhardHouse, 'Crain-Eberhard House, c. 1884');

		var parrottSmithHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/parrott-smith.jpg" style = "float: right; margin: 5px;">' + '<p><b>Parrott-Smith House, c. 1897</b></p>' + '<p> 7712 Cooper Road, Montgomery, OH </p>' + '<p>This house, situated at the beginning of a 75-foot driveway, is the best example of the Craftsman Bungalow-style house remaining in Montgomery. Important features include rough-cut stone foundation and shiplap wood siding. The house was built by brothers, Austin and Duncan Parrott.</p>'
		addLinikedMarker (39.227992,-84.3588709, landmarkICO,parrottSmithHouse, 'Parrott-Smith House, c. 1897');

		var arstingstallMayHouse = '<img src = "https://www.montgomeryohio.org/wp-content/uploads/2014/09/may.jpg" style = "float: right; margin: 5px;">' + '<p><b>Arstingstall-May House, c. 1907</b></p>' + '<p> 80 West Street, Montgomery, OH, United States </p>' + '<p>The Arstingstall-May House is a fine example of a T-shaped farmhouse built by George Arstingstall, who was a prominent member of the community. A member of Montgomery’s first city council, he remained on council for 34 years.</p>'
		addLinikedMarker (39.2293049,-84.35483199999999, landmarkICO,arstingstallMayHouse, 'Arstingstall-May House, c. 1907');

		var bellHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/bell.jpg" style = "float: right; margin: 5px;">' + '<p><b>Bell House, c. 1825</b></p>' + '<p> 9521 Montgomery Road, Montgomery, OH </p>' + '<p>Over the years, the facade of this house has changed. It still retains its architectural value as a saltbox, only one of a few left in the area. Its landmark name was from Eliza Bell who lived in the house in 1890.</p>'
		addLinikedMarker (39.2291321,-84.35385580000002, landmarkICO,bellHouse, 'Bell House, c. 1825');

		var blairBarkerHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/blair-barker.jpg" style = "float: right; margin: 5px;">' + '<p><b>Blair-Barker House, c. 1875</b></p>' + '<p> 7844 Remington Road, Montgomery, OH </p>' + '<p>The architecture of this house is unique with its Italianate windows and colored-pattern slate roof. James Blair built this house for his bride Anna Cosby.</p>'
		addLinikedMarker (39.2285263,-84.35471840000002, landmarkICO,blairBarkerHouse, 'Blair-Barker House, c. 1875');

		var smethurstHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/smethurst.jpg" style = "float: right; margin: 5px;">' + '<p><b>Smethurst House, c. 1869</b></p>' + '<p> 7850 Remington Road, Montgomery, OH </p>' + '<p>The first owner, James Lloyd Smethurst, was a carpenter by trade. He was elected Montgomery’s first mayor in 1910. The house originally sat at the corner of Remington and Montgomery Roads. It was moved to its current location in 1987 to save it from demolition.</p>'
		addLinikedMarker (39.2284209,-84.35442060000003, landmarkICO,smethurstHouse, 'Smethurst House, c. 1869');

		var crainConklinHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/crain-conklin.jpg" style = "float: right; margin: 5px;">' + '<p><b>Crain-Conklin House, c. 1820</b></p>' + '<p> 9463 Montgomery Road, Montgomery, OH </p>' + '<p>The architecture of this home is Federal. Star-shaped anchor irons grace the second floor exterior of the building. William Crain, the village blacksmith, built the house. In 1880, it belonged to Charles Conklin and continued to be in the Conklin family until the 1960’s.</p>'
		addLinikedMarker (39.2281647,-84.3546768, landmarkICO,crainConklinHouse, 'Crain-Conklin House, c. 1820');

		var universalistChurch = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/Universalist_Church-e1432654766826.jpg" style = "float: right; margin: 5px;">' + '<p><b>Universalist Church, c. 1837</b></p>' + '<p> 9471 Montgomery Road, Montgomery, OH </p>' + '<p>The church was built by a group that separated from the Hopewell Presbyterian Church. The bricks were made on the site, and you will notice some of them have a house-key imprint. For many years the church bell was the village fire alarm.</p>'
		addLinikedMarker (39.22816950000001,-84.3543654, landmarkICO,universalistChurch, 'Universalist Church, c. 1837');

		var hopewellMontgomeryPresbyterianChurch = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/hmchurch.jpg" style = "float: right; margin: 5px;">' + '<p><b>Hopewell-Montgomery Presbyterian Church, c. 1829</b></p>' + '<p> 9431 Shelly Lane, Montgomery, OH </p>' + '<p>This is the oldest church in Montgomery. The church served the Presbyterians for over 130 years. The stained glass windows are memorials to early church members. The anchor in the blue pane of glass is a memorial to James Ayers, a shipbuilder who lived in Montgomery.</p>'
		addLinikedMarker (39.227809,-84.35564499999998, landmarkICO,hopewellMontgomeryPresbyterianChurch, 'Hopewell-Montgomery Presbyterian Church, c. 1829');

		var pureOilStation = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/pure-oil.jpg" style = "float: right; margin: 5px;">' + '<p><b>Pure Oil Station, c. 1931</b></p>' + '<p> 9426 Shelly Lane, Montgomery, OH </p>' + '<p>C.A. Petersen created this most famous “Cottage Style” design for the Pure Oil Company in 1927. Only a handful of these stations remain nationwide. In 1958, the station was moved to this location, saving it from demolition.</p>'
		addLinikedMarker (39.2276079,-84.355073, landmarkICO,pureOilStation, 'Pure Oil Station, c. 1931');

		var pioneerBuilding = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/pioneer.jpg" style = "float: right; margin: 5px;">' + '<p><b>Pioneer Building, c. 1818-1819</b></p>' + '<p> 9433 Montgomery Road, Montgomery, OH </p>' + '<p>The building is Federal style. Abraham Slaughter was an early owner. Upon his death in 1830, the house was auctioned off for the top bid of $50.00. In 1840 it became the residence of Dr. John Naylor, a surgeon at Camp Dennison during the Civil War.</p>'
		addLinikedMarker (39.22767,-84.35485299999999, landmarkICO,pioneerBuilding, 'Pioneer Building, c. 1818-1819');

		var sniderCrainHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/snider-crain.jpg" style = "float: right; margin: 5px;">' + '<p><b>Snider-Crain House, c. 1818</b></p>' + '<p> 9464 Montgomery Road, Montgomery, OH </p>' + '<p>This two-story frame house was built by John Snider, who was a son of Cornelius Snider, one of the founders of Montgomery. For over a century, the Snider and Crain families were owners and occupants of this landmark.</p>'
		addLinikedMarker (39.2278265,-84.35398680000003, landmarkICO,sniderCrainHouse, 'Snider-Crain House, c. 1818');

		var jonathanCrainHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/jonathan.jpg" style = "float: right; margin: 5px;">' + '<p><b>Jonathan Crain House, c. 1884</b></p>' + '<p> 9441 Main Street, Montgomery, OH </p>' + '<p>George Crain, a long-time resident of Montgomery, was a well-known manufacturer of wagons. He built this house which includes elements common to the Greek Revival style of architecture.</p>'
		addLinikedMarker (39.227791,-84.35336999999998, landmarkICO,jonathanCrainHouse, 'Jonathan Crain House, c. 1884');

		var johnsonMurdoughBuilding = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/johnson-murdough.jpg" style = "float: right; margin: 5px;">' + '<p><b>Johnson-Murdough Building, c. 1890</b></p>' + '<p> 9429 Montgomery Road, Montgomery, OH </p>' + '<p>This house is part of the early residential neighborhood of the village. The original house is thought to have been torn down in 1890 and replaced by the present simple front-gable townhouse.</p>'
		addLinikedMarker (39.2274974,-84.35468200000003, landmarkICO,johnsonMurdoughBuilding, 'Johnson-Murdough Building, c. 1890');

		var taulmanHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/taulman1.jpg" style = "float: right; margin: 5px;">' + '<p><b>Taulman House, c. 1830</b></p>' + '<p> 7786 Cooper Road, Montgomery, OH </p>' + '<p>This property was originally owned by Joseph Taulman who was Montgomery’s first postmaster in 1812 and a tax collector in 1815.</p>'
		addLinikedMarker (39.226953,-84.3569349, landmarkICO,taulmanHouse, 'Taulman House, c. 1830');

		var formerVillageHall = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/village-hall.jpg" style = "float: right; margin: 5px;">' + '<p><b>Former Village Hall c. 1925</b></p>' + '<p> 7816 Cooper Road, Montgomery, OH </p>' + '<p>The diminutive size of this civic building illustrates the modest size of the community it served when it was constructed in 1925. Built with fines collected during prohibition days, it served as the village hall and jail for 44 years.</p>'
		addLinikedMarker (39.2267695,-84.3558377, landmarkICO,formerVillageHall, 'Former Village Hall c. 1925');

		var sageTavern = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/sage.jpg" style = "float: right; margin: 5px;">' + '<p><b>Sage Tavern, c. 1818-1819</b></p>' + '<p> 9410 Montgomery Road, Montgomery, OH </p>' + '<p>Originally built as the Montgomery Hotel and in later years known as the Sage Tavern, this structure was built of posts and beams. At one time it was almost three times the present length. Teamsters, driving their wagons between Columbus and Cincinnati, slept on the floor for 10 cents a night.</p>'
		addLinikedMarker (39.2270401,-84.35449349999999, landmarkICO,sageTavern, 'Sage Tavern, c. 1818-1819');

		var sniderHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/snider-house.jpg" style = "float: right; margin: 5px;">' + '<p><b>Snider House, c. 1870</b></p>' + '<p> 7789 Cooper Road, Montgomery, OH </p>' + '<p>This frame saltbox was first owned by David Snider, a son of Cornelius Snider, one of the original founders of Montgomery. Along with other townsmen, he established a grist mill which stood at the southwest corner of Main and Cooper Roads.</p>'
		addLinikedMarker (39.226519,-84.35668299999998, landmarkICO,sniderHouse, 'Snider House, c. 1870');

		var wellerHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/weller.jpg" style = "float: right; margin: 5px;">' + '<p><b>Weller House, c. 1807</b></p>' + '<p> 7795 Cooper Road, Montgomery, OH </p>' + '<p>An excellent example of early saltbox architecture, the name was derived from salt boxes that sat on iron kitchen stoves. The house was first owned by Lodowick Weller, one of the early settlers of Montgomery. The Weller House is one of the oldest buildings in Montgomery.</p>'
		addLinikedMarker (39.2265202,-84.3564687, landmarkICO,wellerHouse, 'Weller House, c. 1807');

		var yostTavern = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/yost.jpg" style = "float: right; margin: 5px;">' + '<p><b>Yost Tavern, c. 1805</b></p>' + '<p> 7872 Cooper Road, Montgomery, OH </p>' + '<p>This simple wood-frame building was both a home and a place of business for Abraham Yost, who operated the tavern. It was situated at the junction of two Indian trails, the Shawnee and Miami. Yost Tavern was a thriving business, for Montgomery was the last overnight stop before Cincinnati.</p>'
		addLinikedMarker (39.226642,-84.35416570000001, landmarkICO,yostTavern, 'Yost Tavern, c. 1805');

		var sherrittReesHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/09/Rees-Hoffman-House.jpg" style = "float: right; margin: 5px;">' + '<p><b>Sherritt-Rees House c.1813</b></p>' + '<p> 7881 Cooper Road, Montgomery, OH </p>' + '<p>The yellow brick house at the southeast corner of Cooper and Main Street has played an important role in the history of Montgomery.  The house sits on lot 7 of the original plat of the city by Nathaniel Terwilliger, and there are stories that before the current home was built a man named John Osborn operated a log tavern at this location.  Records show that Abraham and Moses Crist, brothers who arrived from New York and became leading members of the community, bought the lot from Terwilliger but likely did not build the house.</p>'
		addLinikedMarker (39.22610299999999,-84.35418199999998, landmarkICO,sherrittReesHouse, 'Sherritt-Rees House c.1813');

		var hoffmanHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/hoffman.jpg" style = "float: right; margin: 5px;">' + '<p><b>Hoffman House, c. 1870</b></p>' + '<p> 7887 Cooper Road, Montgomery, OH </p>' + '<p>An example of the evolution and adaptation of the Colonial Revival style, there have been several additions to the house since it was first built. Robert Hoffman served 16 years on City Council and Ruth Hoffman was Clerk of Council.</p>'
		addLinikedMarker (39.225913,-84.35392890000003, landmarkICO,hoffmanHouse, 'Hoffman House, c. 1870');

		var cameronFeinthelHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/feinthel.jpg" style = "float: right; margin: 5px;">' + '<p><b>Cameron-Feinthel House, c. 1891</b></p>' + '<p> 7893 Cooper Road, Montgomery, OH </p>' + '<p>A Queen Anne style of Victorian architecture, the house has such appointments as patterned shingles and stained glass that enhance the property which first served as a Methodist Parsonage. In 1941, Edward Feinthel purchased the house. He was the village clerk in 1949.</p>'
		addLinikedMarker (39.225789,-84.35375499999998, landmarkICO,cameronFeinthelHouse, 'Cameron-Feinthel House, c. 1891');

		var millsHellmanHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/mills-hellman-house.jpg" style = "float: right; margin: 5px;">' + '<p><b>Mills-Hellman House, c. 1839-1847</b></p>' + '<p> 7913 Cooper Road, Montgomery, OH </p>' + '<p>The Mills Hellman House was a landmark that was demolished by the owner following an extensive fire in March 2002. The original wood-frame structure, which was likely constructed between 1820 and 1847, was a small two-story home built with elements of the Greek Revival style, including a low pitch roof, wide band of trim at the wall roof juncture, and the prominent pediment at the gable ends. Two additions were added to the rear of the house after 1900, as was a low pitch front porch roof supported by three plain columns. One report stated that there was originally a log structure on the lot with an exterior chimney and that a new frame building replaced this and enclosed the chimney that remains on the left side. This could be possible since this property is in the first plat of the village recorded in 1802 and the history of the lot prior to 1839 is not known. The Mills Hellman house was recognized by the City as a landmark in 1990.  At the time of the fire, plans were underway to completely update and enlarge the house, which had deteriorated through age and owner neglect; however, the fire was extensive and unfortunately, these plans were never realized. The fire department had secured the building, but the City had not agreed to a demolition permit; however, the owner proceeded on his own and the building was lost.</p>'
		addLinikedMarker (39.225515,-84.35335199999997, landmarkICO,millsHellmanHouse, 'Mills-Hellman House, c. 1839-1847');

		var patmoreLumleyHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/lumley.jpg" style = "float: right; margin: 5px;">' + '<p><b>Patmore-Lumley House, c. 1810</b></p>' + '<p> 7919 Cooper Road, Montgomery, OH </p>' + '<p>This landmark is on land once owned by Nathaniel Terwilliger and sold to Abraham Patmore in 1807 for $32.00. The Lumley family purchased the house in the second half of the 1800’s. It remained in their family for more than 100 years.</p>'
		addLinikedMarker (39.225352,-84.35312899999997, landmarkICO,patmoreLumleyHouse, 'Patmore-Lumley House, c. 1810');

		var wooleyKelschHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/kelsch.jpg" style = "float: right; margin: 5px;">' + '<p><b>Wooley-Kelsch House, c. 1890</b></p>' + '<p> 7967 Cooper Road, Montgomery, OH </p>' + '<p>While this Victorian residence has been modified during the ensuing years, its essential style is still intact. The foundation walls supporting the original structure are three feet thick. Early owners of the property were original settlers of Montgomery.</p>'
		addLinikedMarker (39.224362,-84.35170699999998, landmarkICO,wooleyKelschHouse, 'Wooley-Kelsch House, c. 1890');

		var masonHouse = '<img src = "https://history.montgomeryohio.org/wp-content/uploads/sites/3/2017/07/mason-house.jpg" style = "float: right; margin: 5px;">' + '<p><b>Mason House, c. 1861</b></p>' + '<p> 39.22391748823135,-84.35646199958467 </p>' + '<p>This Greek Revival house is one of the few early farmhouses remaining in Montgomery today. In the 1920’s-30’s, the two-story full-width front porch and a one-story rear frame addition were built.</p>'
		addLinikedMarker (39.22391748823135,-84.35646199958467, landmarkICO,masonHouse, 'Mason House, c. 1861');

	}
}
