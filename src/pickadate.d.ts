/// <reference path="../typings/tsd.d.ts" />

interface JQuery {
  pickadate(opts?: any): Pickadate;
}

interface Pickadate {
  pickadate(opts?: any): Pickadate;
  open(focus?: boolean): Pickadate;
  close(focus?: boolean): Pickadate;
  start(): Pickadate;
  stop(): Pickadate;
  render(all?: boolean): Pickadate;
  clear(): Pickadate;
  get(thing: string, format?: string): any;
  set(thing: string, value: any): Pickadate;
  on(event: string, handler: () => void): Pickadate;
  off(event: string): Pickadate;
  trigger(event: string): Pickadate;
}