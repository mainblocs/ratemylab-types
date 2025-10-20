import {type Offering} from "./offerings";
// primitives
export type GID = `gid://${string}`;
export type UrlString = `http${string}` | `https${string}`;
export type MoneyCents = number;

// subtypes
export interface TestImage {
  id: GID | string;
  altText: string | null;
  url: UrlString | string;
  width: number;
  height: number;
}

export interface PricingVariant {
  id: GID | string;
  price: string | number;
  title: string;
  compareAtPrice?: string | number | null;
}


// ---------- SINGLE APP TYPE (normalized) ----------
export interface UiTest {
  id: string;
  testhandle: string;
  title: string;

  body_html: string;
  tags: string[];

  created_at: Date;
  updated_at: Date;
  published_at: Date;

  testname: string;
  seotitle: string;
  seodescription: string;
  detaileddescription: string;
  description: string;

  categories: string[];
  islabcorptest: boolean;

  includedtestnames: string[];
  includedtestcodes: string[];
  includedcptcodes: string[];

  requiresfasting: boolean;
  ispackage: boolean;
  fastinghours: number | null;
  specimen: string;
  turnaroundtime: string;

  samplereporturls: UrlString[];
  morningcollectionpreferred: boolean;
  isvendorstandardtest: boolean;
  associated_product: GID | string;

  howtoprepare: string;
  whentoconsider: string;
  whobenefits: string;
  commonlyusedfordiagnosisof: string;
  caution: string;
  recentfindings: string | null;
  citations: string | null;

  vendortestname: string;
  relatedproducts: string[];
  vendortesturls: UrlString[];
  vendorsamplereporturls: UrlString[];
  offeringsurls: UrlString[];

  min_price_cents: MoneyCents;
  max_price_cents: MoneyCents;

  images: TestImage[];
  featured_image: UrlString | string;

  pricing_json: PricingVariant[];

  offerings: Offering[];
}
