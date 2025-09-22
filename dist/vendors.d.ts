import { z } from "zod";
/**
 * Zod schema aligned 1:1 with db/schema/vendors.ts columns.
 * Booleans use Zod boolean with defaults mirroring Drizzle defaults.
 * Integer cents fields are numbers (integers).
 * Timestamps are epoch millis (number).
 */
export declare const vendorSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    businessName: z.ZodString;
    websiteUrl: z.ZodString;
    logoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceSelector: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    target: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    selector: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceAttr: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceRegex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    searchUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodString>;
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
    businessName: string;
    websiteUrl: string;
    currency: string;
    drawFeeCents: number;
    requisitionFeeCents: number;
    serviceFeeCents: number;
    doctorAppointmentOffered: boolean;
    isActive: boolean;
    created_at?: number | undefined;
    updated_at?: number | undefined;
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
}, {
    id: string;
    name: string;
    businessName: string;
    websiteUrl: string;
    created_at?: number | undefined;
    updated_at?: number | undefined;
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
export type Vendor = z.infer<typeof vendorSchema>;
/**
 * Partial schema for PATCH/updates.
 * Keeps defaults for booleans/integers if you choose to apply defaults on merge.
 */
export declare const vendorPatchSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    businessName: z.ZodOptional<z.ZodString>;
    websiteUrl: z.ZodOptional<z.ZodString>;
    logoUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    priceSelector: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    target: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    selector: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    priceAttr: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    priceRegex: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    searchUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    currency: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    drawFeeCents: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    requisitionFeeCents: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    serviceFeeCents: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    doctorAppointmentOffered: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    supportEmail: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    supportPhone: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    created_at: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    updated_at: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    created_at?: number | undefined;
    updated_at?: number | undefined;
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
    id?: string | undefined;
    created_at?: number | undefined;
    updated_at?: number | undefined;
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
/**
 * Insert schema:
 * - Typically omit `id`, `createdAt`, `updatedAt` so DB generates them.
 * - Keep same defaults for server-side fill.
 */
export declare const vendorInsertSchema: z.ZodObject<{
    name: z.ZodString;
    businessName: z.ZodString;
    websiteUrl: z.ZodString;
    logoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceSelector: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    target: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    selector: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceAttr: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceRegex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    searchUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    drawFeeCents: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    requisitionFeeCents: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    serviceFeeCents: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    doctorAppointmentOffered: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    supportEmail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    supportPhone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    businessName: string;
    websiteUrl: string;
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
    businessName: string;
    websiteUrl: string;
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
export type VendorInsert = z.infer<typeof vendorInsertSchema>;
//# sourceMappingURL=vendors.d.ts.map