import { Component } from '@angular/core';
import { Album } from './interfaces/Album';

@Component({
  selector: 'ms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-shop';

  topAlbumHeading: string = "Top Albums";
  latestAlbumHeading: string = "Latest Albums";
  bollywoodAlbumHeading: string = "Bollywood Albums";

  topAlbums: Album[] = [{
    name: "Music 101",
    singers: ["singer1", "singer2"],
    songs:[{
      name:"Awesonme Song",
      singer:["Singer1"],
      duration:10
    }],
    albumArt:{
      thumbnail:"https://via.placeholder.com/150"
    },
    price:100    
  }];
}
