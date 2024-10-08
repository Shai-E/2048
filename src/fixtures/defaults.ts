export type FontSizesType = 'xs' | 'sm' | 'm' | 'lg' | 'xl' | 'xxl';

export type ButtonSizesType = 'small' | 'medium' | 'large' | 'auto';

export const fontSizes: Record<FontSizesType, number> = {
    xs: 10,
    sm: 12,
    m: 14,
    lg: 20,
    xl: 28,
    xxl: 36,
};

export const defaultFont = {familiy: 'Poppins'};

export const defaultHeaderTitleAlign = 'center';

