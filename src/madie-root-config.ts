import { registerApplication, start } from "single-spa";
import { ApplicationProps } from "./ApplicationConfig";
import layoutConfig from "./layout-config";
import editorConfig from "./editor-config";
import authConfig from "./auth-config";

registerApplication<ApplicationProps>(layoutConfig);
registerApplication<ApplicationProps>(editorConfig);
registerApplication<ApplicationProps>(authConfig);

start({
  urlRerouteOnly: true,
});
