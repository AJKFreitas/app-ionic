import { EmployerPage } from './../employer/employer';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation';
declare var google;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'minas gerais, il';
  end = 'juis de fora, il';

  options: GeolocationOptions;
  currentPos: Geoposition;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  places : Array<any>; 
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public geolocation: Geolocation) {
  }

  ionViewDidEnter() {
    this.getUserPosition();
  }
  ionViewDidLoad() {
    // this.initMap();
    this.loadMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 }
    });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });

  }

  addMarker1() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
      
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  getUserPosition() {
    this.options = {
      enableHighAccuracy : false
      };
      this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
  
          this.currentPos = pos;     
  
          console.log(pos);
          this.addMap(pos.coords.latitude,pos.coords.longitude);
  
      },(err : PositionError)=>{
          console.log("error : " + err.message);
      ;
      })
  }

  addMap(lat, long) {

    let latLng = new google.maps.LatLng(lat, long);
    
        let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
        this.getRestaurants(latLng).then((results : Array<any>)=>{
            this.places = results;
            for(let i = 0 ;i < results.length ; i++)
            {
                this.createMarker(results[i]);
            }
        },(status)=>console.log(status));
    
        this.addMarker();
    

  }

 public addMarker(){
    
        let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
        });
    
        let content = "<p>Você esta aqui!</p>";          
        let infoWindow = new google.maps.InfoWindow({
        content: content
        });
    
        google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
        });
    
    }
    getRestaurants(latLng)
    {
        var service = new google.maps.places.PlacesService(this.map);
        let request = {
            location : latLng,
            radius : 8047 ,
            types: ["restaurant"]
        };
        return new Promise((resolve,reject)=>{
            service.nearbySearch(request,function(results,status){
                if(status === google.maps.places.PlacesServiceStatus.OK)
                {
                    resolve(results);    
                }else
                {
                    reject(status);
                }
    
            }); 
        });
      }

      createMarker(place)
      {
          let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: place.geometry.location
          });   
      } 

      goToEmployerPage(){
        this.navCtrl.push(EmployerPage);
      }
}
