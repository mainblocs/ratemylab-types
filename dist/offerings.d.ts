import { z } from "zod";
export declare const offeringSchema: z.ZodObject<{
    testUrl: z.ZodString;
    vendorId: z.ZodString;
    testId: z.ZodString;
    vendorTestName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceCents: z.ZodNumber;
    isActive: z.ZodDefault<z.ZodBoolean>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    created_at: z.ZodOptional<z.ZodNumber>;
    updated_at: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    created_at?: number;
    updated_at?: number;
    notes?: string;
    isActive?: boolean;
    testUrl?: string;
    vendorId?: string;
    testId?: string;
    vendorTestName?: string;
    priceCents?: number;
}, {
    created_at?: number;
    updated_at?: number;
    notes?: string;
    isActive?: boolean;
    testUrl?: string;
    vendorId?: string;
    testId?: string;
    vendorTestName?: string;
    priceCents?: number;
}>;
export type Offering = z.infer<typeof offeringSchema>;
export declare const offeringPatchSchema: z.ZodEffects<z.ZodObject<{
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    testUrl: z.ZodOptional<z.ZodString>;
    vendorId: z.ZodOptional<z.ZodString>;
    testId: z.ZodOptional<z.ZodString>;
    vendorTestName: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    priceCents: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    notes?: string;
    isActive?: boolean;
    testUrl?: string;
    vendorId?: string;
    testId?: string;
    vendorTestName?: string;
    priceCents?: number;
}, {
    notes?: string;
    isActive?: boolean;
    testUrl?: string;
    vendorId?: string;
    testId?: string;
    vendorTestName?: string;
    priceCents?: number;
}>, {
    notes?: string;
    isActive?: boolean;
    testUrl?: string;
    vendorId?: string;
    testId?: string;
    vendorTestName?: string;
    priceCents?: number;
}, {
    notes?: string;
    isActive?: boolean;
    testUrl?: string;
    vendorId?: string;
    testId?: string;
    vendorTestName?: string;
    priceCents?: number;
}>;
export declare const offeringInsertSchema: z.ZodObject<{
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    testUrl: z.ZodString;
    vendorId: z.ZodString;
    testId: z.ZodString;
    vendorTestName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceCents: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    notes?: string;
    isActive?: boolean;
    testUrl?: string;
    vendorId?: string;
    testId?: string;
    vendorTestName?: string;
    priceCents?: number;
}, {
    notes?: string;
    isActive?: boolean;
    testUrl?: string;
    vendorId?: string;
    testId?: string;
    vendorTestName?: string;
    priceCents?: number;
}>;
export type OfferingInsert = z.infer<typeof offeringInsertSchema>;
export declare const offeringArraySchema: z.ZodArray<z.ZodObject<{
    testUrl: z.ZodString;
    vendorId: z.ZodString;
    testId: z.ZodString;
    vendorTestName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceCents: z.ZodNumber;
    isActive: z.ZodDefault<z.ZodBoolean>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    created_at: z.ZodOptional<z.ZodNumber>;
    updated_at: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    created_at?: number;
    updated_at?: number;
    notes?: string;
    isActive?: boolean;
    testUrl?: string;
    vendorId?: string;
    testId?: string;
    vendorTestName?: string;
    priceCents?: number;
}, {
    created_at?: number;
    updated_at?: number;
    notes?: string;
    isActive?: boolean;
    testUrl?: string;
    vendorId?: string;
    testId?: string;
    vendorTestName?: string;
    priceCents?: number;
}>, "many">;
/** GET /offerings?… */
export declare const offeringListQuerySchema: z.ZodObject<{
    q: z.ZodOptional<z.ZodString>;
    vendorId: z.ZodOptional<z.ZodString>;
    testId: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    vendorId?: string;
    testId?: string;
    q?: string;
    limit?: number;
    offset?: number;
}, {
    vendorId?: string;
    testId?: string;
    q?: string;
    limit?: number;
    offset?: number;
}>;
/** GET /offerings/exists?vendorId=...&(testId|testhandle)=... */
export declare const offeringExistsQuerySchema: z.ZodEffects<z.ZodObject<{
    vendorId: z.ZodString;
    testId: z.ZodOptional<z.ZodString>;
    testhandle: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    testhandle?: string;
    vendorId?: string;
    testId?: string;
}, {
    testhandle?: string;
    vendorId?: string;
    testId?: string;
}>, {
    testhandle?: string;
    vendorId?: string;
    testId?: string;
}, {
    testhandle?: string;
    vendorId?: string;
    testId?: string;
}>;
/** GET /offerings/vendors/missing?(testId|testhandle)=... */
export declare const vendorsMissingQuerySchema: z.ZodEffects<z.ZodObject<{
    testId: z.ZodOptional<z.ZodString>;
    testhandle: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    testhandle?: string;
    testId?: string;
}, {
    testhandle?: string;
    testId?: string;
}>, {
    testhandle?: string;
    testId?: string;
}, {
    testhandle?: string;
    testId?: string;
}>;
//# sourceMappingURL=offerings.d.ts.map