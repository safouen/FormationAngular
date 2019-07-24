import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) { return value; } else { return 'assets/images/tim_logo.png'; }
  }

}
