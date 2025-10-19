import { z } from 'zod';

declare const vendorSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    businessName: z.ZodOptional<z.ZodString>;
    websiteUrl: z.ZodOptional<z.ZodString>;
    logoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceSelector: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    target: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    selector: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceAttr: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceRegex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    searchUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>;
    drawFeeCents: z.ZodDefault<z.ZodNumber>;
    requisitionFeeCents: z.ZodDefault<z.ZodNumber>;
    serviceFeeCents: z.ZodDefault<z.ZodNumber>;
    doctorAppointmentOffered: z.ZodDefault<z.ZodBoolean>;
    supportEmail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    supportPhone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    created_at: z.ZodOptional<z.ZodNumber>;
    updated_at: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    currency: string;
    drawFeeCents: number;
    requisitionFeeCents: number;
    serviceFeeCents: number;
    doctorAppointmentOffered: boolean;
    isActive: boolean;
    businessName?: string | undefined;
    websiteUrl?: string | undefined;
    logoUrl?: string | null | undefined;
    priceSelector?: string | null | undefined;
    target?: string | null | undefined;
    selector?: string | null | undefined;
    priceAttr?: string | null | undefined;
    priceRegex?: string | null | undefined;
    searchUrl?: string | null | undefined;
    supportEmail?: string | null | undefined;
    supportPhone?: string | null | undefined;
    notes?: string | null | undefined;
    created_at?: number | undefined;
    updated_at?: number | undefined;
}, {
    id: string;
    name: string;
    businessName?: string | undefined;
    websiteUrl?: string | undefined;
    logoUrl?: string | null | undefined;
    priceSelector?: string | null | undefined;
    target?: string | null | undefined;
    selector?: string | null | undefined;
    priceAttr?: string | null | undefined;
    priceRegex?: string | null | undefined;
    searchUrl?: string | null | undefined;
    currency?: string | undefined;
    drawFeeCents?: number | undefined;
    requisitionFeeCents?: number | undefined;
    serviceFeeCents?: number | undefined;
    doctorAppointmentOffered?: boolean | undefined;
    supportEmail?: string | null | undefined;
    supportPhone?: string | null | undefined;
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
    created_at?: number | undefined;
    updated_at?: number | undefined;
}>;
type Vendor = z.infer<typeof vendorSchema>;
declare const vendorInsertSchema: z.ZodObject<{
    name: z.ZodString;
    businessName: z.ZodOptional<z.ZodString>;
    websiteUrl: z.ZodOptional<z.ZodString>;
    logoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceSelector: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    target: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    selector: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceAttr: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceRegex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    searchUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    drawFeeCents: z.ZodOptional<z.ZodNumber>;
    requisitionFeeCents: z.ZodOptional<z.ZodNumber>;
    serviceFeeCents: z.ZodOptional<z.ZodNumber>;
    doctorAppointmentOffered: z.ZodOptional<z.ZodBoolean>;
    supportEmail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    supportPhone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    businessName?: string | undefined;
    websiteUrl?: string | undefined;
    logoUrl?: string | null | undefined;
    priceSelector?: string | null | undefined;
    target?: string | null | undefined;
    selector?: string | null | undefined;
    priceAttr?: string | null | undefined;
    priceRegex?: string | null | undefined;
    searchUrl?: string | null | undefined;
    currency?: string | undefined;
    drawFeeCents?: number | undefined;
    requisitionFeeCents?: number | undefined;
    serviceFeeCents?: number | undefined;
    doctorAppointmentOffered?: boolean | undefined;
    supportEmail?: string | null | undefined;
    supportPhone?: string | null | undefined;
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
}, {
    name: string;
    businessName?: string | undefined;
    websiteUrl?: string | undefined;
    logoUrl?: string | null | undefined;
    priceSelector?: string | null | undefined;
    target?: string | null | undefined;
    selector?: string | null | undefined;
    priceAttr?: string | null | undefined;
    priceRegex?: string | null | undefined;
    searchUrl?: string | null | undefined;
    currency?: string | undefined;
    drawFeeCents?: number | undefined;
    requisitionFeeCents?: number | undefined;
    serviceFeeCents?: number | undefined;
    doctorAppointmentOffered?: boolean | undefined;
    supportEmail?: string | null | undefined;
    supportPhone?: string | null | undefined;
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
}>;
type VendorInsert = z.infer<typeof vendorInsertSchema>;
declare const vendorPatchSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    businessName: z.ZodOptional<z.ZodString>;
    websiteUrl: z.ZodOptional<z.ZodString>;
    logoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceSelector: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    target: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    selector: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceAttr: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceRegex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    searchUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    drawFeeCents: z.ZodOptional<z.ZodNumber>;
    requisitionFeeCents: z.ZodOptional<z.ZodNumber>;
    serviceFeeCents: z.ZodOptional<z.ZodNumber>;
    doctorAppointmentOffered: z.ZodOptional<z.ZodBoolean>;
    supportEmail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    supportPhone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    businessName?: string | undefined;
    websiteUrl?: string | undefined;
    logoUrl?: string | null | undefined;
    priceSelector?: string | null | undefined;
    target?: string | null | undefined;
    selector?: string | null | undefined;
    priceAttr?: string | null | undefined;
    priceRegex?: string | null | undefined;
    searchUrl?: string | null | undefined;
    currency?: string | undefined;
    drawFeeCents?: number | undefined;
    requisitionFeeCents?: number | undefined;
    serviceFeeCents?: number | undefined;
    doctorAppointmentOffered?: boolean | undefined;
    supportEmail?: string | null | undefined;
    supportPhone?: string | null | undefined;
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
}, {
    name?: string | undefined;
    businessName?: string | undefined;
    websiteUrl?: string | undefined;
    logoUrl?: string | null | undefined;
    priceSelector?: string | null | undefined;
    target?: string | null | undefined;
    selector?: string | null | undefined;
    priceAttr?: string | null | undefined;
    priceRegex?: string | null | undefined;
    searchUrl?: string | null | undefined;
    currency?: string | undefined;
    drawFeeCents?: number | undefined;
    requisitionFeeCents?: number | undefined;
    serviceFeeCents?: number | undefined;
    doctorAppointmentOffered?: boolean | undefined;
    supportEmail?: string | null | undefined;
    supportPhone?: string | null | undefined;
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
}>;
type VendorPatch = z.infer<typeof vendorPatchSchema>;

type GID = `gid://${string}`;
type UrlString = `http${string}`;
type ISODateString = `${number}-${number}-${number}T${string}Z`;
type EpochSeconds = number;
type MoneyCents = number;

interface TestImage {
    id: GID | string;
    altText: string | null;
    url: UrlString | string;
    width: number;
    height: number;
}
interface PricingVariant {
    id: GID | string;
    price: string | number;
    title: string;
    compareAtPrice?: string | number | null;
}
interface Offering {
    id: string;
    testHandle: string;
    vendorId: string;
    testId: string;
    vendorTestName: string;
    testUrl: UrlString | string;
    priceCents: MoneyCents;
    isActive: boolean;
    notes: string | null;
    tags: string[] | string;
    categories: string[] | string;
    created_at: EpochSeconds;
    updated_at: EpochSeconds;
}
interface RawSingleTest {
    id: string;
    testhandle: string;
    title: string;
    body_html: string;
    tags: string;
    created_at: ISODateString;
    updated_at: string;
    published_at: ISODateString;
    testname: string;
    seotitle: string;
    seodescription: string;
    detaileddescription: string;
    description: string;
    categories: string;
    islabcorptest: boolean;
    includedtestnames: string;
    includedtestcodes: string;
    includedcptcodes: string;
    requiresfasting: boolean;
    ispackage: boolean;
    fastinghours: number;
    specimen: string;
    turnaroundtime: string;
    samplereporturls: string;
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
    relatedproducts: string;
    vendortesturls: string;
    vendorsamplereporturls: string;
    offeringsurls: string;
    min_price_cents: MoneyCents;
    max_price_cents: MoneyCents;
    images: string;
    featured_image: UrlString | string;
    pricing_json: string;
    offerings: Offering[];
}
type SpecimenKind = "Serum" | "Plasma" | "Whole Blood" | "Urine" | "Saliva" | "Buccal" | "Stool" | "Other";
interface NormalizedSingleTest {
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
    fastinghours: number;
    specimen: string;
    specimenKind?: SpecimenKind;
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
    offerings: (Offering & {
        tags: string[];
        categories: string[];
    })[];
}
interface DbTestRow {
    id: string;
    handle: string;
    title: string;
    seotitle: string | null;
    seodescription: string | null;
    body_html: string | null;
    detailed_description: string | null;
    description: string | null;
    how_to_prepare_html: string | null;
    when_to_consider_html: string | null;
    who_benefits_html: string | null;
    common_dx_html: string | null;
    caution_html: string | null;
    tags_json: string;
    categories_json: string;
    included_names_json: string;
    included_codes_json: string;
    included_cpt_json: string;
    requires_fasting: 0 | 1;
    is_package: 0 | 1;
    fasting_hours: number | null;
    specimen: string | null;
    specimen_kind: SpecimenKind | null;
    turnaround_time: string | null;
    morning_collection_preferred: 0 | 1;
    is_vendor_standard_test: 0 | 1;
    created_at: number;
    updated_at: number;
    published_at: number | null;
    associated_product_gid: string | null;
    sample_report_urls_json: string;
    vendor_sample_report_urls_json: string;
    vendor_test_urls_json: string;
    offerings_urls_json: string;
    related_products_json: string;
    images_json: string;
    featured_image_url: string | null;
    pricing_json: string;
    min_price_cents: number | null;
    max_price_cents: number | null;
    vendor_test_name: string | null;
}
interface DbOfferingRow {
    id: string;
    test_id: string;
    test_handle: string;
    vendor_id: string;
    vendor_test_name: string;
    test_url: string;
    price_cents: number;
    is_active: 0 | 1;
    notes: string | null;
    tags_json: string;
    categories_json: string;
    created_at: number;
    updated_at: number;
}

type ShopifySeo = {
    title?: string | null;
    description?: string | null;
};
type ShopifyVariantNode = {
    id: string;
    price: string | null;
    compareAtPrice: string | null;
};
type ShopifyVariants = {
    edges?: Array<{
        node?: ShopifyVariantNode;
    }>;
};
type ShopifyMetaFieldField = {
    key: string;
    value: string | null;
    type?: string | null;
};
type ShopifyMetaobjectRef = {
    id: string;
    type?: string | null;
    handle?: string | null;
    fields?: ShopifyMetaFieldField[];
};
type ShopifyFeaturedImage = {
    id: string;
    altText: string;
    url: string;
};
type ShopifyImages = {
    nodes: ShopifyFeaturedImage[];
};
type ShopifyProductWithMeta = {
    id: string;
    handle: string;
    title?: string | null;
    bodyHtml?: string | null;
    descriptionHtml?: string | null;
    vendor?: string | null;
    productType?: string | null;
    status?: string | null;
    tags?: string[];
    templateSuffix?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    publishedAt?: string | null;
    images: ShopifyImages;
    featuredImage: ShopifyFeaturedImage;
    onlineStoreUrl?: string | null;
    seo?: ShopifySeo | null;
    variants?: ShopifyVariants;
    testdetails?: {
        reference?: ShopifyMetaobjectRef | null;
    } | null;
};

type RTText = {
    type: "text";
    value?: string | null;
    text?: string | null;
};
type RTParagraph = {
    type: "paragraph";
    children?: RTNode[];
};
type RTListItem = {
    type: "list-item";
    children?: RTNode[];
};
type RTList = {
    type: "list";
    listType?: "unordered" | "ordered";
    children?: RTNode[];
};
type RTRoot = {
    type: "root";
    children?: RTNode[];
};
type RTNode = RTText | RTParagraph | RTListItem | RTList | RTRoot | (Record<string, unknown> & {
    type?: string;
});

type ApiError = {
    error: string;
    code?: number;
};
type ApiOk<T> = T;

type Nullable<T> = T | null | undefined;
type Result<T, E = Error> = {
    ok: true;
    value: T;
} | {
    ok: false;
    error: E;
};
declare const ok: <T>(value: T) => Result<T>;
declare const err: <E = Error>(error: E) => Result<never, E>;

export { type ApiError, type ApiOk, type DbOfferingRow, type DbTestRow, type NormalizedSingleTest, type Nullable, type Offering, type PricingVariant, type RTList, type RTListItem, type RTNode, type RTParagraph, type RTRoot, type RTText, type RawSingleTest, type Result, type ShopifyFeaturedImage, type ShopifyImages, type ShopifyMetaFieldField, type ShopifyMetaobjectRef, type ShopifyProductWithMeta, type ShopifySeo, type ShopifyVariantNode, type ShopifyVariants, type SpecimenKind, type TestImage, type Vendor, type VendorInsert, type VendorPatch, err, ok, vendorInsertSchema, vendorPatchSchema, vendorSchema };
