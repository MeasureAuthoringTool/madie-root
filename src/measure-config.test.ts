import measureConfig from "./measure-config";

describe("Measure Config", () => {
  const appModuleStub = { success: true };
  beforeEach(async () => {
    System.import = jest.fn().mockResolvedValue(appModuleStub);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should contain the expected properties", () => {
    expect(measureConfig).toMatchObject({
      name: "@madie/madie-measure",
      app: expect.any(Function),
      activeWhen: ["/"],
      customProps: {
        domElementGetter: expect.any(Function),
      },
    });
  });

  it("should have a domElementGetter to locate the #madie-measure element", () => {
    document.getElementById = jest.fn(() => null);
    expect(measureConfig.customProps.domElementGetter()).toBeNull();
    expect(document.getElementById).toHaveBeenCalledWith("madie-measure");
  });

  it("should have a module loader which loads the madie-measure app", async () => {
    let result = await measureConfig.app();
    expect(result).toBe(appModuleStub);
    expect(System.import).toHaveBeenCalledWith("@madie/madie-measure");
  });
});
