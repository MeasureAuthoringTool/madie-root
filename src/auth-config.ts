import ApplicationConfig from "./ApplicationConfig";

const config: ApplicationConfig = {
  name: "@madie/madie-auth",
  app: () => System.import("@madie/madie-auth"),
  activeWhen: ["/"],
  customProps: {
    domElementGetter: (): HTMLElement | null =>
      document.getElementById("madie-auth"),
  },
};

export default config;
