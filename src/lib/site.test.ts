import { describe, it, expect } from "vitest";
import { whatsappLink } from "./site";

describe("whatsappLink", () => {
  it("uses the business number", () => {
    expect(whatsappLink().startsWith("https://wa.me/447919473710?text=")).toBe(true);
  });
  it("includes the product name in the message", () => {
    const url = whatsappLink("Sample Trail Model");
    expect(decodeURIComponent(url.split("text=")[1])).toContain("Sample Trail Model");
  });
});
