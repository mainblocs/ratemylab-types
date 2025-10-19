import { z } from "zod";

/* =========================
   API-layer helper types (unchanged)
   ========================= */
type ShopifyFeaturedImage = {
  id: string;
  altText: string;
  url: string;
};
type ShopifyImages = {
  nodes: ShopifyFeaturedImage[];
};

export type MetafieldField = {
  key: string;
  value: string | null;
  type?: string | null;
};

export type ProductVariantNode = {
  id: string;
  price: string | null;
  compareAtPrice: string | null;
  title: string | null;
};

export type ProductInput = {
  id: string;
  handle: string;
  title?: string | null;
  bodyHtml?: string | null;
  vendor?: string | null;
  productType?: string | null;
  status?: string | null;
  tags?: string[];
  createdAt?: string | null;
  updatedAt?: string | null;
  publishedAt?: string | null;
  images: ShopifyImages | null;
  featuredImage: ShopifyFeaturedImage | null;
  onlineStoreUrl?: string | null;
  seo?: { title?: string | null; description?: string | null } | null;
  variants?: { edges?: { node?: ProductVariantNode }[] };
};


const ProductDetailsSchema = z.object({
  title: z.string().nullable(),
  bodyHtml: z.string().nullable(),
  vendor: z.string().nullable(),
  productType: z.string().nullable(),
  status: z.string().nullable(),
  tags: z.array(z.string()),
  onlineStoreUrl: z.string().nullable(),
  publishedAt: z.string().nullable(),
});

const TestMetafieldsSchema = z.object({
  testhandle: z.string().nullable(),
  testname: z.string().nullable(),
  seotitle: z.string().nullable(),
  seodescription: z.string().nullable(),
  detaileddescription: z.string().nullable(),
  description: z.string().nullable(),
  categories: z.array(z.string()),
  islabcorptest: z.boolean().default(false),
  includedtestnames: z.array(z.string()),
  includedtestcodes: z.array(z.string()),
  includedcptcodes: z.array(z.string()),
  requiresfasting: z.boolean().default(false),
  ispackage: z.boolean().default(false),
  fastinghours: z.number().nullable(),
  specimen: z.string().nullable(),
  turnaroundtime: z.string().nullable(),
  samplereporturls: z.array(z.string()),
  morningcollectionpreferred: z.boolean().default(false),
  howtoprepare: z.string().nullable(),
  whentoconsider: z.string().nullable(),
  whobenefits: z.string().nullable(),
  commonlyusedfordiagnosisof: z.string().nullable(),
  caution: z.string().nullable(),
  recentfindings: z.string().nullable(),
  citations: z.string().nullable(),
  vendortestname: z.string().nullable(),
  relatedproducts: z.array(z.string()),
  vendortesturls: z.array(z.string()),
  vendorsamplereporturls: z.array(z.string()),
  offeringsurls: z.array(z.string()),
  isVendorStandardTest: z.boolean().default(false),
});

// Sub-schema for aggregated pricing info
const PricingSchema = z.object({
  variant_count: z.number().int(),
  min_price_cents: z.number().int().nullable(),
  max_price_cents: z.number().int().nullable(),
  min_compare_at_price_cents: z.number().int().nullable(),
  max_compare_at_price_cents: z.number().int().nullable(),
  on_sale: z.boolean().nullable(),
  currency_code: z.string().nullable(),
  pricing_json: z.string(), // The raw variants JSON
});

// The main, consolidated schema for the database row
export const testSchema = z.object({
  id: z.string(),
  testhandle: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  product_details: ProductDetailsSchema.nullable(),
  metafields: TestMetafieldsSchema.nullable(),
  pricing: PricingSchema.nullable(),
  images: z.string().nullable(),
  featured_image: z.string().nullable(), // JSON string of a single image object
});

export type TestSchema = z.infer<typeof testSchema>;

/* ====================================================================
   2. Derived Schemas for Insert and Patch (Update)
   ==================================================================== */

// Schema for INSERTING a new record.
// Derives from the base schema, making fields optional and omitting server-set values.
export const testInsertSchema = testSchema
  .omit({ created_at: true, updated_at: true })
  .partial({
    product_details: true,
    metafields: true,
    pricing: true,
    images: true,
    featured_image: true,
  });

export type TestInsert = z.infer<typeof testInsertSchema>;

// Schema for PATCHING (updating) an existing record.
// All fields are optional. `id` and timestamps cannot be changed.
export const testPatchSchema = testSchema
  .omit({ id: true, created_at: true, updated_at: true })
  .partial();

export type TestPatch = z.infer<typeof testPatchSchema>;

/* ====================================================================
   3. Query Schema (unchanged)
   ==================================================================== */
export const testsListQuerySchema = z.object({
  q: z.string().optional(),
  testhandle: z.string().optional(),
  vendor: z.string().optional(),
  status: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(500).optional(),
  offset: z.coerce.number().int().min(0).optional(),
});