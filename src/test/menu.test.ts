import { describe, expect, it } from "vitest";
import { beverageMenu, foodMenu } from "@/lib/menu";
import { site } from "@/lib/site";

const allItems = (diet: "veg" | "nonveg") => foodMenu[diet].flatMap((s) => s.items);

describe("menu rules", () => {
  it("lists Fish Tikka under Non-Veg Tandoori, not Veg", () => {
    const tandoori = foodMenu.nonveg.find((s) => s.id === "tandoori");
    expect(tandoori?.items).toContain("Fish Tikka");
    expect(allItems("veg")).not.toContain("Fish Tikka");
  });

  it("keeps egg dishes in a Non-Veg Eggetarian group", () => {
    const egg = foodMenu.nonveg.find((s) => s.title === "Eggetarian");
    expect(egg?.items).toContain("Egg Curry");
    expect(allItems("veg").some((i) => i.toLowerCase().includes("egg"))).toBe(false);
  });

  it("shows Veg Pulao only once", () => {
    expect(allItems("veg").filter((i) => i === "Veg Pulao")).toHaveLength(1);
  });

  it("shows no prices", () => {
    const all = [...allItems("veg"), ...allItems("nonveg")];
    expect(all.some((i) => /₹|rs\.?\s?\d|\binr\b/i.test(i))).toBe(false);
  });

  it("has no invented beverages", () => {
    expect(beverageMenu).toHaveLength(0);
  });

  it("does not assume an Instagram account", () => {
    expect(site.instagram.url).toBeNull();
  });

  it("uses the supplied phone and reservation links", () => {
    expect(site.phone.href).toBe("tel:+917799793737");
    expect(site.links.reserve).toBe("https://www.google.com/maps/reserve/v/dine/c/8qn_4Yg3MAI");
  });
});
