export type DEFAULT_RES_SINGLE<T> =
    {
        code: number,
        success: false,
        errors: string[],
        data?: T,
        warnings?: string[],
    } | {
        code: number,
        success: true,
        data: T,
        warnings?: string[],
    };

export type DEFAULT_RES_SINGLE_P<T> = Promise<DEFAULT_RES_SINGLE<T>>;

export type DEFAULT_RES_ARR<T> =
    {
        code: number,
        success: false,
        errors: string[],
        data?: T[],
        warnings?: string[],
    } | {
        code: number,
        success: true,
        data: T[],
        warnings?: string[],
    };

export type DEFAULT_RES_ARR_P<T> = Promise<DEFAULT_RES_ARR<T>>;

export type INTERNAL_RES_SINGLE<T> =
    {
        success: false,
        errors: string[],
        data?: T,
        warnings?: string[],
    } | {
        success: true,
        data: T,
        warnings?: string[],
    };

export type INTERNAL_RES_SINGLE_P<T> = Promise<INTERNAL_RES_SINGLE<T>>;

export type INTERNAL_RES_ARR<T> =
    {
        success: false,
        errors: string[],
        data?: T[],
        warnings?: string[],
    } | {
        success: true,
        data: T[],
        warnings?: string[],
    };

export type INTERNAL_RES_ARR_P<T> = Promise<INTERNAL_RES_ARR<T>>;