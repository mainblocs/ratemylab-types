import { z } from "zod";
export const offeringSchema = z.object({
    testUrl: z.string(), // ✅ PK
    vendorId: z.string(),
    testId: z.string(),
    vendorTestName: z.string().nullable().optional(),
    priceCents: z.number().int(),
    isActive: z.boolean().default(true),
    notes: z.string().nullable().optional(),
    created_at: z.number().int().nonnegative().optional(),
    updated_at: z.number().int().nonnegative().optional(),
});
export const offeringPatchSchema = offeringSchema
    .omit({ created_at: true, updated_at: true }) // we always overwrite timestamps
    .partial()
    .refine(
// prevent changing PK via patch body (route uses path param as key)
(v) => !("testUrl" in v), { message: "testUrl is immutable; cannot be changed in PATCH body." });
export const offeringInsertSchema = offeringSchema.omit({
    created_at: true,
    updated_at: true,
}).partial({
    // allow defaults at insert-time
    isActive: true,
});
export const offeringArraySchema = z.array(offeringSchema);
/** GET /offerings?… */
export const offeringListQuerySchema = z.object({
    q: z.string().trim().min(1).optional(),
    vendorId: z.string().trim().min(1).optional(),
    testId: z.string().trim().min(1).optional(),
    limit: z.coerce.number().int().min(1).max(500).optional(),
    offset: z.coerce.number().int().min(0).optional(),
});
/** GET /offerings/exists?vendorId=...&(testId|testhandle)=... */
export const offeringExistsQuerySchema = z
    .object({
    vendorId: z.string().trim().min(1),
    testId: z.string().trim().min(1).optional(),
    testhandle: z.string().trim().min(1).optional(),
})
    .refine((v) => Boolean(v.testId || v.testhandle), {
    message: "Provide either testId or testhandle",
    path: ["testId"], // hint position
});
/** GET /offerings/vendors/missing?(testId|testhandle)=... */
export const vendorsMissingQuerySchema = z
    .object({
    testId: z.string().trim().min(1).optional(),
    testhandle: z.string().trim().min(1).optional(),
})
    .refine((v) => Boolean(v.testId || v.testhandle), {
    message: "Provide either testId or testhandle",
    path: ["testId"],
});
