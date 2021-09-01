import { RegisterApplicationConfig, LifeCycles } from "single-spa";

export interface ApplicationProps {
  domElementGetter: () => HTMLElement | null;
}

export default interface ApplicationConfig
  extends RegisterApplicationConfig<ApplicationProps> {
  app: () => Promise<LifeCycles<ApplicationProps>>;
  customProps?: {
    domElementGetter: () => HTMLElement | null;
  };
}
