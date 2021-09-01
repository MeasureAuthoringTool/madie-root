import ApplicationConfig from "./ApplicationConfig";

const config: ApplicationConfig = {
  name: "@madie/madie-editor",
  app: () => System.import("@madie/madie-editor"),
  activeWhen: ["/"],
};

export default config;
