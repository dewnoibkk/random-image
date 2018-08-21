import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from './image.model';
import { ImageService } from './image.service';

@Component({
             selector: 'app-image',
             templateUrl: './image.component.html',
             styleUrls: [ './image.component.css' ],
           })
export class ImageComponent implements OnInit {
  @Input() delayMilliSecond: number;
  image: ImageModel = null;
  private isRandom: boolean;

  @Input()
  set random(random: boolean) {
    this.isRandom = random;
    if (random) {
      this.startRandom();
    }
  }

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    if (this.delayMilliSecond === 0) {
      this.delayMilliSecond = 100;
    }
  }

  async startRandom() {
    while (this.isRandom) {
      this.image = this.imageService.getRandomImage();
      await this.delay();
    }
  }

  private delay() {
    return new Promise(resolve => setTimeout(resolve, this.delayMilliSecond));
  }
}
