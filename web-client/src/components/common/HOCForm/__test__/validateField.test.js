import validateField from "../validateField";

describe("validateField", () => {
  it("should validate username aisdjias", () => {
    const result = validateField("username", "aisdjias");
    const expected = "";
    expect(result).toEqual(expected);
  });
  it("should validate username ais", () => {
    const result = validateField("username", "ais");
    const expected = "length of username have to be between 4 to 32";
    expect(result).toEqual(expected);
  });
  it("should validate username aisa dj ..ias", () => {
    const result = validateField("username", "aisa dj ..ias");
    const expected =
      "only number and characters, special characters and space are not allowed";
    expect(result).toEqual(expected);
  });
  it("should validate password 1111", () => {
    const result = validateField("password", "1111");
    const expected = "";
    expect(result).toEqual(expected);
  });
  it("should validate password sadsadsadsadsadsdasadsdasdsdssdasddsadsdadasddadsdsdsdadasdsdasdas", () => {
    const result = validateField(
      "password",
      "sadsadsadsadsadsdasadsdasdsdssdasddsadsdadasddadsdsdsdadasdsdasdas"
    );
    const expected = "length of password have to be between 4 to 32";
    expect(result).toEqual(expected);
  });
  it("should validate email some@email.com", () => {
    const result = validateField("email", "some@email.com");
    const expected = "";
    expect(result).toEqual(expected);
  });
  it("should validate email some@alohamail", () => {
    const result = validateField("email", "some@alohamail");
    const expected = "invalid email";
    expect(result).toEqual(expected);
  });
});
