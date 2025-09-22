// Common HTTP response shapes
export type ApiError = { error: string; code?: number };
export type ApiOk<T> = T;