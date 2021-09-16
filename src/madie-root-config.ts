import { registerApplication, start } from "single-spa";
import { ApplicationProps } from "./ApplicationConfig";
import layoutConfig from "./layout-config";
import editorConfig from "./editor-config";
import authConfig from "./auth-config";
import publicConfig from "./public-config";

registerApplication<ApplicationProps>(layoutConfig);
registerApplication<ApplicationProps>(editorConfig);
registerApplication<ApplicationProps>(authConfig);
registerApplication<ApplicationProps>(publicConfig);

start({
  urlRerouteOnly: true,
});
