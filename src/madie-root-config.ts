import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@madie/madie-layout",
  app: () => System.import("@madie/madie-layout"),
  activeWhen: ["/"],
  customProps: {
    domElementGetter: (): HTMLElement | null => document.getElementById("main"),
  },
});

start({
  urlRerouteOnly: true,
});
