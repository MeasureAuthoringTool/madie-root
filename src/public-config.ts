import ApplicationConfig from "./ApplicationConfig";

const config: ApplicationConfig = {
  name: "@madie/madie-public",
  app: () => System.import("@madie/madie-public"),
  activeWhen: ["/"],
  customProps: {
    domElementGetter: (): HTMLElement | null =>
      document.getElementById("madie-public"),
  },
};

export default config;
