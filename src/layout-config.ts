import ApplicationConfig from "./ApplicationConfig";

const config: ApplicationConfig = {
  name: "@madie/madie-layout",
  app: () => System.import("@madie/madie-layout"),
  activeWhen: ["/"],
  customProps: {
    domElementGetter: (): HTMLElement | null => document.getElementById("main"),
  },
};

export default config;
