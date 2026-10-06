import storiesJson from "./stories.json";

export interface Story {
  slug: string;
  title: string;
  paragraphs: string[];
  image: string;
  category: string;
}

const images: Record<string, [string, string]> = {
  "justice-for-our-planet": ["/lovable-uploads/57100eec-fb80-4f35-863f-bbb768fe4ad6.png", "Our Work in Action"],
  "climate-justice-now": ["/lovable-uploads/9e061065-5933-4b72-b553-020cadf78450.png", "Our Work in Action"],
  "youth-climate-movement": ["/lovable-uploads/ece93f4b-dc67-4927-91ec-383b644905ed.png", "Our Work in Action"],
  "there-is-no-planet-b": ["/lovable-uploads/986ce0c1-9a5a-46b6-b23a-c386f6631da2.png", "Our Work in Action"],
  "dont-burn-our-future": ["/lovable-uploads/ca883ce2-eaef-4f33-8a1d-b22fa0ef3de6.png", "Our Work in Action"],
  "climate-change-in-schools": ["/lovable-uploads/f1b3e418-8b2d-4bad-8566-9fd813009b30.png", "Our Work in Action"],
  "climate-innovation-challenge": ["/lovable-uploads/245fe874-c840-4674-b70c-c77725989cc8.png", "Our Work in Action"],
  "creative-environmental-action": ["/lovable-uploads/f12e6142-c2f2-4c89-ad3d-f0473c9fb0b8.png", "Our Work in Action"],
  "planting-the-first-sapling": ["/lovable-uploads/tree-planting-1.png", "Tree Planting at M-PESA Foundation Academy"],
  "hands-on-climate-action": ["/lovable-uploads/tree-planting-2.png", "Tree Planting at M-PESA Foundation Academy"],
  "getting-our-hands-in-the-soil": ["/lovable-uploads/tree-planting-3.webp", "Tree Planting at M-PESA Foundation Academy"],
  "watering-the-future": ["/lovable-uploads/tree-planting-4.webp", "Tree Planting at M-PESA Foundation Academy"],
  "group-photo-at-the-planting-site": ["/lovable-uploads/tree-planting-5.webp", "Tree Planting at M-PESA Foundation Academy"],
  "united-for-climate-justice": ["/lovable-uploads/tree-planting-6.webp", "Tree Planting at M-PESA Foundation Academy"],
  "standing-tall-together": ["/lovable-uploads/tree-planting-7.webp", "Tree Planting at M-PESA Foundation Academy"],
  "community-in-action": ["/lovable-uploads/tree-planting-8.webp", "Tree Planting at M-PESA Foundation Academy"],
  "a-greener-tomorrow": ["/lovable-uploads/tree-planting-9.webp", "Tree Planting at M-PESA Foundation Academy"],
};

export const stories: Story[] = (storiesJson as Omit<Story, "image" | "category">[]).map((s) => ({
  ...s,
  image: images[s.slug]?.[0] ?? "",
  category: images[s.slug]?.[1] ?? "",
}));

export const slugify = (title: string) =>
  title.toLowerCase().replace(/'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
