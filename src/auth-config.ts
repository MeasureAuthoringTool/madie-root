import ApplicationConfig from "./ApplicationConfig";

const config: ApplicationConfig = {
  name: "@madie/madie-auth",
  app: () => System.import("@madie/madie-auth"),
  activeWhen: ["/"],
};

export default config;
