import {Pipe, PipeTransform} from '@angular/core';
import {Rating} from "../interfaces/Hero";

// this probably can be just a regular component not a pipe
@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {
  private whiteStar = '&#9734';
  private blackStar = '&#9733';

  transform(value: Rating): string {
    return new Array(5)
      .fill(this.whiteStar)
      .map((_, i) => i + 1 <= value ? this.blackStar : this.whiteStar)
      .join('');
  }

}
