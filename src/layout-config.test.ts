import layoutConfig from "./layout-config";

describe("Layout Config", () => {
  const appModuleStub = { success: true };
  beforeEach(async () => {
    System.import = jest.fn().mockResolvedValue(appModuleStub);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should contain the expected properties", () => {
    expect(layoutConfig).toMatchObject({
      name: "@madie/madie-layout",
      app: expect.any(Function),
      activeWhen: ["/"],
      customProps: {
        domElementGetter: expect.any(Function),
      },
    });
  });

  it("should have a domElementGetter to locate the #main element", () => {
    document.getElementById = jest.fn(() => null);
    expect(layoutConfig.customProps.domElementGetter()).toBeNull();
  });

  it("should have a module loader which loads the madie-layout app", async () => {
    let result = await layoutConfig.app();
    expect(result).toBe(appModuleStub);
    expect(System.import).toHaveBeenCalledWith("@madie/madie-layout");
  });
});
