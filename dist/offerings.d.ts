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
    isActive: boolean;
    testUrl: string;
    vendorId: string;
    testId: string;
    priceCents: number;
    created_at?: number | undefined;
    updated_at?: number | undefined;
    notes?: string | null | undefined;
    vendorTestName?: string | null | undefined;
}, {
    testUrl: string;
    vendorId: string;
    testId: string;
    priceCents: number;
    created_at?: number | undefined;
    updated_at?: number | undefined;
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
    vendorTestName?: string | null | undefined;
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
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
    testUrl?: string | undefined;
    vendorId?: string | undefined;
    testId?: string | undefined;
    vendorTestName?: string | null | undefined;
    priceCents?: number | undefined;
}, {
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
    testUrl?: string | undefined;
    vendorId?: string | undefined;
    testId?: string | undefined;
    vendorTestName?: string | null | undefined;
    priceCents?: number | undefined;
}>, {
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
    testUrl?: string | undefined;
    vendorId?: string | undefined;
    testId?: string | undefined;
    vendorTestName?: string | null | undefined;
    priceCents?: number | undefined;
}, {
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
    testUrl?: string | undefined;
    vendorId?: string | undefined;
    testId?: string | undefined;
    vendorTestName?: string | null | undefined;
    priceCents?: number | undefined;
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
    testUrl: string;
    vendorId: string;
    testId: string;
    priceCents: number;
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
    vendorTestName?: string | null | undefined;
}, {
    testUrl: string;
    vendorId: string;
    testId: string;
    priceCents: number;
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
    vendorTestName?: string | null | undefined;
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
    isActive: boolean;
    testUrl: string;
    vendorId: string;
    testId: string;
    priceCents: number;
    created_at?: number | undefined;
    updated_at?: number | undefined;
    notes?: string | null | undefined;
    vendorTestName?: string | null | undefined;
}, {
    testUrl: string;
    vendorId: string;
    testId: string;
    priceCents: number;
    created_at?: number | undefined;
    updated_at?: number | undefined;
    notes?: string | null | undefined;
    isActive?: boolean | undefined;
    vendorTestName?: string | null | undefined;
}>, "many">;
/** GET /offerings?… */
export declare const offeringListQuerySchema: z.ZodObject<{
    q: z.ZodOptional<z.ZodString>;
    vendorId: z.ZodOptional<z.ZodString>;
    testId: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    vendorId?: string | undefined;
    testId?: string | undefined;
    q?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
}, {
    vendorId?: string | undefined;
    testId?: string | undefined;
    q?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
}>;
/** GET /offerings/exists?vendorId=...&(testId|testhandle)=... */
export declare const offeringExistsQuerySchema: z.ZodEffects<z.ZodObject<{
    vendorId: z.ZodString;
    testId: z.ZodOptional<z.ZodString>;
    testhandle: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    vendorId: string;
    testhandle?: string | undefined;
    testId?: string | undefined;
}, {
    vendorId: string;
    testhandle?: string | undefined;
    testId?: string | undefined;
}>, {
    vendorId: string;
    testhandle?: string | undefined;
    testId?: string | undefined;
}, {
    vendorId: string;
    testhandle?: string | undefined;
    testId?: string | undefined;
}>;
/** GET /offerings/vendors/missing?(testId|testhandle)=... */
export declare const vendorsMissingQuerySchema: z.ZodEffects<z.ZodObject<{
    testId: z.ZodOptional<z.ZodString>;
    testhandle: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    testhandle?: string | undefined;
    testId?: string | undefined;
}, {
    testhandle?: string | undefined;
    testId?: string | undefined;
}>, {
    testhandle?: string | undefined;
    testId?: string | undefined;
}, {
    testhandle?: string | undefined;
    testId?: string | undefined;
}>;
//# sourceMappingURL=offerings.d.ts.map