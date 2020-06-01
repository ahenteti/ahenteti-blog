import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "firstletter",
})
export class FirstLetterPipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.charAt(0) : "A";
  }
}
