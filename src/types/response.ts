export type DEFAULT_RES_CONSTANTS = {
    code: number
    updated_token?: string
    time?: number
    warnings?: string[]
}

export type INTERNAL_RES_CONSTANTS = {
    warnings?: string[]
}

export type DEFAULT_RES_SINGLE<T> =
    {
        success: false
        errors: string[]
        data?: T
    } & DEFAULT_RES_CONSTANTS
    | {
        success: true
        data: T
        count?: number
    } & DEFAULT_RES_CONSTANTS;

export type DEFAULT_RES_ARRAY<T> =
    {
        success: false
        errors: string[]
        data?: T[]
    } & DEFAULT_RES_CONSTANTS
    | {
        success: true
        data: T[]
        count?: number
    } & DEFAULT_RES_CONSTANTS;

export type DEFAULT_RES_GENERAL<T> = DEFAULT_RES_SINGLE<T> | DEFAULT_RES_ARRAY<T>;


export type DEFAULT_RES_SINGLE_P<T> = Promise<DEFAULT_RES_SINGLE<T>>;

export type DEFAULT_RES_ARRAY_P<T> = Promise<DEFAULT_RES_ARRAY<T>>;

export type DEFAULT_RES_GENERAL_P<T> = Promise<DEFAULT_RES_SINGLE<T> | DEFAULT_RES_ARRAY<T>>;


export type INTERNAL_RES_SINGLE<T> =
    {
        success: false
        errors: string[]
        data?: T
    } & INTERNAL_RES_CONSTANTS
    | {
        success: true
        data: T
        count?: number
    } & INTERNAL_RES_CONSTANTS;

export type INTERNAL_RES_ARRAY<T> =
    {
        success: false,
        errors: string[]
        data?: T[]
    } & INTERNAL_RES_CONSTANTS
    | {
        success: true
        data: T[]
        count?: number
    } & INTERNAL_RES_CONSTANTS;

export type INTERNAL_RES_GENERAL<T> = INTERNAL_RES_SINGLE<T> | INTERNAL_RES_ARRAY<T>;


export type INTERNAL_RES_SINGLE_P<T> = Promise<INTERNAL_RES_SINGLE<T>>;

export type INTERNAL_RES_ARRAY_P<T> = Promise<INTERNAL_RES_ARRAY<T>>;

export type INTERNAL_RES_GENERAL_P<T> = Promise<INTERNAL_RES_SINGLE<T> | INTERNAL_RES_ARRAY<T>>;