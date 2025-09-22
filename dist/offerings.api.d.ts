import { z } from "zod";
export declare const offeringSchema: z.ZodObject<{
    testUrl: z.ZodString;
    vendorId: z.ZodString;
    testId: z.ZodString;
    vendorTestName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceCents: z.ZodNumber;
    isActive: z.ZodDefault<z.ZodBoolean>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodNumber;
    updatedAt: z.ZodNumber;
}, z.core.$strip>;
export type Offering = z.infer<typeof offeringSchema>;
export declare const offeringPatchSchema: z.ZodObject<{
    testUrl: z.ZodOptional<z.ZodString>;
    vendorId: z.ZodOptional<z.ZodString>;
    testId: z.ZodOptional<z.ZodString>;
    vendorTestName: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    priceCents: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, z.core.$strip>;
export declare const offeringInsertSchema: z.ZodObject<{
    testUrl: z.ZodString;
    vendorId: z.ZodString;
    testId: z.ZodString;
    vendorTestName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceCents: z.ZodNumber;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type OfferingInsert = z.infer<typeof offeringInsertSchema>;
export declare const offeringArraySchema: z.ZodArray<z.ZodObject<{
    testUrl: z.ZodString;
    vendorId: z.ZodString;
    testId: z.ZodString;
    vendorTestName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceCents: z.ZodNumber;
    isActive: z.ZodDefault<z.ZodBoolean>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodNumber;
    updatedAt: z.ZodNumber;
}, z.core.$strip>>;
//# sourceMappingURL=offerings.api.d.ts.map