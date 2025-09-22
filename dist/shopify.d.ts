export type ShopifySeo = {
    title?: string | null;
    description?: string | null;
};
export type ShopifyVariantNode = {
    id: string;
    price: string | null;
    compareAtPrice: string | null;
};
export type ShopifyVariants = {
    edges?: Array<{
        node?: ShopifyVariantNode;
    }>;
};
export type ShopifyMetaFieldField = {
    key: string;
    value: string | null;
    type?: string | null;
};
export type ShopifyMetaobjectRef = {
    id: string;
    type?: string | null;
    handle?: string | null;
    fields?: ShopifyMetaFieldField[];
};
export type ShopifyProductWithMeta = {
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
    onlineStoreUrl?: string | null;
    seo?: ShopifySeo | null;
    variants?: ShopifyVariants;
    testdetails?: {
        reference?: ShopifyMetaobjectRef | null;
    } | null;
};
//# sourceMappingURL=shopify.d.ts.map