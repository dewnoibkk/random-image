import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageModel } from './image.model';
import { ImageService } from './image.service';

@Component({
             selector: 'app-image',
             templateUrl: './image.component.html',
             styleUrls: [ './image.component.css' ],
           })
export class ImageComponent implements OnInit {
  private isRandom: boolean;

  @Input() delayMilliSecond: number;
  @Output() randomChanged = new EventEmitter<boolean>();
  image: ImageModel = null;

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
    this.image = this.imageService.getRandomImage();
  }

  onStart() {
    this.random = !this.isRandom;
    this.randomChanged.emit(this.isRandom);
  }

  async startRandom() {
    while (this.isRandom && this.delayMilliSecond > 0) {
      this.image = this.imageService.getRandomImage();
      await this.delay();
    }
    this.isRandom = false;
    this.randomChanged.emit(this.isRandom);
  }

  private delay() {
    return new Promise(resolve => setTimeout(resolve, this.delayMilliSecond));
  }
}
