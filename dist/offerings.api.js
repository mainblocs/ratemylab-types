import { z } from "zod";
export const offeringSchema = z.object({
    testUrl: z.string(), // ✅ PK
    vendorId: z.string(),
    testId: z.string(),
    vendorTestName: z.string().nullable().optional(),
    priceCents: z.number().int(),
    isActive: z.boolean().default(true),
    notes: z.string().nullable().optional(),
    createdAt: z.number().int(),
    updatedAt: z.number().int(),
});
export const offeringPatchSchema = offeringSchema
    .omit({ createdAt: true, updatedAt: true }) // we always overwrite timestamps
    .partial()
    .refine(
// prevent changing PK via patch body (route uses path param as key)
(v) => !("testUrl" in v), { message: "testUrl is immutable; cannot be changed in PATCH body." });
export const offeringInsertSchema = offeringSchema.omit({
    createdAt: true,
    updatedAt: true,
}).partial({
    // allow defaults at insert-time
    isActive: true,
});
export const offeringArraySchema = z.array(offeringSchema);
