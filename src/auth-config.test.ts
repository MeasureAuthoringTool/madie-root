import authConfig from "./auth-config";

describe("Auth Config", () => {
  const appModuleStub = { success: true };
  beforeEach(async () => {
    System.import = jest.fn().mockResolvedValue(appModuleStub);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should contain the expected properties", () => {
    expect(authConfig).toMatchObject({
      name: "@madie/madie-auth",
      app: expect.any(Function),
      activeWhen: ["/"],
    });
  });

  it("should have a module loader which loads the madie-auth app", async () => {
    let result = await authConfig.app();
    expect(result).toBe(appModuleStub);
    expect(System.import).toHaveBeenCalledWith("@madie/madie-auth");
  });
});
