import { Injectable } from '@angular/core';
import { ImageModel } from './image.model';

@Injectable({
              providedIn: 'root',
            })
export class ImageService {
  private images: ImageModel[] = [
    { url: '../../assets/images/1.jpg' },
    { url: '../../assets/images/2.jpg' },
    { url: '../../assets/images/3.jpg' },
    { url: '../../assets/images/4.jpg' },
    { url: '../../assets/images/5.jpg' },
    { url: '../../assets/images/6.jpg' },
    { url: '../../assets/images/7.jpg' },
    { url: '../../assets/images/8.jpg' },
    { url: '../../assets/images/9.jpg' },
    { url: '../../assets/images/10.jpg' },
  ];

  constructor() {
  }

  getRandomImage() {
    return this.images[ Math.floor(Math.random() * this.images.length) ];
  }
}
