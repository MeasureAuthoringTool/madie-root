import ApplicationConfig from "./ApplicationConfig";

const config: ApplicationConfig = {
  name: "@madie/madie-measure",
  app: () => System.import("@madie/madie-measure"),
  activeWhen: ["/measure"],
  customProps: {
    domElementGetter: (): HTMLElement | null =>
      document.getElementById("madie-measure"),
  },
};

export default config;
