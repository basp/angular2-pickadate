/// <reference path="../typings/tsd.d.ts" />

import {
ElementRef,
Directive,
Input,
Output,
EventEmitter
} from 'angular2/core';

@Directive({
  selector: 'input[pickadate]'
})
export class PickadateDirective {
  @Output() valueChange = new EventEmitter();
  
  @Input() value = new Date();
  @Input() format = 'dd-mm-yyyy';
  
  private _picker: Pickadate;

  constructor(private _element: ElementRef) { }

  ngOnInit() {
    let opts = {
      format: this.format
    };
    let $input = $(this._element.nativeElement).pickadate(opts);
    this._picker = $input.pickadate('picker')
      .set('select', this.value)
      .on('close', this.onPickerClose);
  }
  
  ngOnDestroy() {
    this._picker.off('close').stop();
  }
  
  private onPickerClose() {
    let str = this._picker.get('select', 'dd-mm-yyyy');
    // TODO: Convert `str` to `Date`
    this.valueChange.emit(new Date());
  }
}