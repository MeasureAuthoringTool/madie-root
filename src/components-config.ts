import ApplicationConfig from "./ApplicationConfig";

const config: ApplicationConfig = {
  name: "@madie/madie-components",
  app: () => System.import("@madie/madie-components"),
  activeWhen: ["/"],
  customProps: {
    domElementGetter: (): HTMLElement | null =>
      document.getElementById("madie-components"),
  },
};

export default config;
