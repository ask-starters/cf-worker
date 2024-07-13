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