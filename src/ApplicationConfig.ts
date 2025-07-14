import { RegisterApplicationConfig, LifeCycles } from "single-spa";

export interface ApplicationProps {
  domElementGetter: () => HTMLElement | null;
}

export default interface ApplicationConfig
  extends Omit<RegisterApplicationConfig<ApplicationProps>, "app"> {
  // updated `app` type to reflect native ESM dynamic import with default export
  app: () => Promise<{ default: LifeCycles<ApplicationProps> }>;
  customProps: {
    domElementGetter: () => HTMLElement | null;
  };
}
