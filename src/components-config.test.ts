import componentsConfig from "./components-config";

describe("Components Config", () => {
  const appModuleStub = { success: true };
  beforeEach(async () => {
    System.import = jest.fn().mockResolvedValue(appModuleStub);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should contain the expected properties", () => {
    expect(componentsConfig).toMatchObject({
      name: "@madie/madie-components",
      app: expect.any(Function),
      activeWhen: ["/"],
      customProps: {
        domElementGetter: expect.any(Function),
      },
    });
  });

  it("should have a domElementGetter to locate the #madie-components element", () => {
    document.getElementById = jest.fn(() => null);
    expect(componentsConfig.customProps.domElementGetter()).toBeNull();
    expect(document.getElementById).toHaveBeenCalledWith("madie-components");
  });

  it("should have a module loader which loads the madie-components app", async () => {
    let result = await componentsConfig.app();
    expect(result).toBe(appModuleStub);
    expect(System.import).toHaveBeenCalledWith("@madie/madie-components");
  });
});
