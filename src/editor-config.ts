import ApplicationConfig from "./ApplicationConfig";

const config: ApplicationConfig = {
  name: "@madie/madie-editor",
  app: () => System.import("@madie/madie-editor"),
  activeWhen: ["/"],
  customProps: {
    domElementGetter: (): HTMLElement | null =>
      document.getElementById("madie-editor"),
  },
};

export default config;
