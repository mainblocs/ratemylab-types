export type Nullable<T> = T | null | undefined;
export type Result<T, E = Error> = {
    ok: true;
    value: T;
} | {
    ok: false;
    error: E;
};
export declare const ok: <T>(value: T) => Result<T>;
export declare const err: <E = Error>(error: E) => Result<never, E>;
//# sourceMappingURL=utils.d.ts.map