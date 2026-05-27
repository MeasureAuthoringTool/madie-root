import ApplicationConfig from "./ApplicationConfig";

const config: ApplicationConfig = {
  name: "@madie/madie-cql-library",
  app: () => System.import("@madie/madie-cql-library"),
  activeWhen: ["/cql-libraries"],
  customProps: {
    domElementGetter: (): HTMLElement | null =>
      document.getElementById("madie-cql-library"),
  },
};

export default config;
