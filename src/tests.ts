// packages/types/src/tests.ts
import { z } from "zod";

/* =========================
   API-layer types
   ========================= */

export type MetafieldField = {
  key: string;
  value: string | null;
  type?: string | null;
};

export type ProductVariantNode = {
  id: string;
  price: string | null;
  compareAtPrice: string | null;
  title: string | null
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
  created_at?: string | null;
  updated_at?: string | null;
  publishedAt?: string | null;
  onlineStoreUrl?: string | null;
  seo?: { title?: string | null; description?: string | null } | null;
  variants?: { edges?: { node?: ProductVariantNode }[] };
  // Note: metafields/testdetails are carried alongside ProductInput by your fetchers,
  // but are not required in this base type. The transformer can accept an extended type.
};

/* =========================
   Zod schema (matches `tests` table columns)
   ========================= */

export const testSchema = z.object({
  // Identity
  id: z.string(),
  handle: z.string(),
  testhandle: z.string().nullable().optional(),

  // Product (first-level)
  title: z.string().nullable().optional(),
  body_html: z.string().nullable().optional(),
  vendor: z.string().nullable().optional(),
  product_type: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  tags: z.string().nullable().optional(), // JSON string
  created_at: z.number().int().nonnegative().optional(),
  updated_at: z.number().int().nonnegative().optional(),
  published_at: z.string().nullable().optional(),
  online_store_url: z.string().nullable().optional(),
  seo_title: z.string().nullable().optional(),
  seo_description: z.string().nullable().optional(),

  // Metaobject (flattened)
  testname: z.string().nullable().optional(),
  seotitle: z.string().nullable().optional(),
  seodescription: z.string().nullable().optional(),
  description: z.string().nullable().optional(), // keep plain (NOT html)
  categories: z.string().nullable().optional(),  // JSON string
  islabcorptest: z.boolean().optional().default(false),
  includedtestnames: z.string().nullable().optional(), // JSON string
  includedtestcodes: z.string().nullable().optional(), // JSON string
  includedcptcodes: z.string().nullable().optional(),  // JSON string
  requiresfasting: z.boolean().optional().default(false),
  ispackage: z.boolean().optional().default(false),
  isspecializedtest: z.boolean().optional().default(false),
  fastinghours: z.number().nullable().optional(),
  specimen: z.string().nullable().optional(),
  turnaroundtime: z.string().nullable().optional(),
  samplereporturls: z.string().nullable().optional(), // JSON string
  detaileddescription: z.string().nullable().optional(), // multi_line stays plain
  morningcollectionpreferred: z.boolean().optional().default(false),

  // Rich Text (converted to HTML)
  howtoprepare: z.string().nullable().optional(),
  whentoconsider: z.string().nullable().optional(),
  whobenefits: z.string().nullable().optional(),
  commonlyusedfordiagnosisof: z.string().nullable().optional(),
  caution: z.string().nullable().optional(),
  recentfindings: z.string().nullable().optional(),
  citations: z.string().nullable().optional(),

  // Vendor & refs
  vendortestname: z.string().nullable().optional(),
  tags_meta: z.string().nullable().optional(),
  relatedproducts: z.string().nullable().optional(),
  vendortesturls: z.string().nullable().optional(),
  vendorsamplereporturls: z.string().nullable().optional(),
  offeringsurls: z.string().nullable().optional(),

  // Variant pricing (aggregated)
  variant_count: z.number().int().nullable().optional(),
  min_price_cents: z.number().int().nullable().optional(),
  max_price_cents: z.number().int().nullable().optional(),
  min_compare_at_price_cents: z.number().int().nullable().optional(),
  max_compare_at_price_cents: z.number().int().nullable().optional(),
  on_sale: z.boolean().nullable().optional(),
  currency_code: z.string().nullable().optional(),

  // Raw meta pricing JSON passthrough (if present)
  pricing_json: z.string().nullable().optional(),
});

export type TestSchema = z.infer<typeof testSchema>;
export const testPatchSchema = testSchema.partial();
