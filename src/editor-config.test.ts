import editorConfig from "./editor-config";

describe("Editor Config", () => {
  const appModuleStub = { success: true };
  beforeEach(async () => {
    System.import = jest.fn().mockResolvedValue(appModuleStub);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should contain the expected properties", () => {
    expect(editorConfig).toMatchObject({
      name: "@madie/madie-editor",
      app: expect.any(Function),
      activeWhen: ["/"],
      customProps: {
        domElementGetter: expect.any(Function),
      },
    });
  });

  it("should have a domElementGetter to locate the #madie-editor element", () => {
    document.getElementById = jest.fn(() => null);
    expect(editorConfig.customProps.domElementGetter()).toBeNull();
    expect(document.getElementById).toHaveBeenCalledWith("madie-editor");
  });

  it("should have a module loader which loads the madie-editor app", async () => {
    let result = await editorConfig.app();
    expect(result).toBe(appModuleStub);
    expect(System.import).toHaveBeenCalledWith("@madie/madie-editor");
  });
});
