import { JSDOM } from "jsdom";
import "systemjs";

declare global {
  interface Window {
    System: typeof System;
  }
}

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;
window.System = System;
