import { Component, Input } from '@angular/core';

@Component({
  selector: 'ms-album-listing',
  templateUrl: './album-listing.component.html',
  styleUrls: ['./album-listing.component.css']
})
export class AlbumListingComponent {
  @Input() heading: string="";
}
