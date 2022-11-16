import cqllibraryConfig from "./cql-library-config";

describe("Cql Library Config", () => {
  const appModuleStub = { success: true };
  beforeEach(async () => {
    System.import = jest.fn().mockResolvedValue(appModuleStub);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should contain the expected properties", () => {
    expect(cqllibraryConfig).toMatchObject({
      name: "@madie/madie-cql-library",
      app: expect.any(Function),
      activeWhen: ["/"],
      customProps: {
        domElementGetter: expect.any(Function),
      },
    });
  });

  it("should have a domElementGetter to locate the #madie-cql-library element", () => {
    document.getElementById = jest.fn(() => null);
    expect(cqllibraryConfig.customProps.domElementGetter()).toBeNull();
    expect(document.getElementById).toHaveBeenCalledWith("madie-cql-library");
  });

  it("should have a module loader which loads the madie-cql-library app", async () => {
    let result = await cqllibraryConfig.app();
    expect(result).toBe(appModuleStub);
    expect(System.import).toHaveBeenCalledWith("@madie/madie-cql-library");
  });
});
