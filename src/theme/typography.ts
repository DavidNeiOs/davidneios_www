export enum FontFamilies {
  serif = '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  sansSerif = '"Lucida Sans Unicode", "Lucida Grande", sans-serif'
}

export enum FontWeights {
  light = "300",
  regular = "normal",
  medium = "500",
  semiBold = "600",
  bold = "bold",
}

export const fontSizes = [12, 14, 16, 18, 24, 32, 40, 64, 96]
export const lineHeights = [18, 20, 22, 24, 32, 40, 48, 72, 106]

export const textPresets = {
  default: {},
  headerLargePrimary: {
    fontFamily: FontFamilies.serif,
    fontSize: `${fontSizes[6]}px`,
    lineHeight: `${lineHeights[6]}px`,
    fontWeight: FontWeights.medium,
  },
  headerLargePrimarydBold: {
    fontFamily: FontFamilies.serif,
    fontSize: `${fontSizes[6]}px`,
    lineHeight: `${lineHeights[6]}px`,
    fontWeight: FontWeights.bold,
  },
  headerMediumPrimary: {
    fontFamily: FontFamilies.serif,
    fontSize: `${fontSizes[5]}px`,
    lineHeight: `${lineHeights[5]}px`,
    fontWeight: FontWeights.medium,
  },
  headerMediumPrimaryBold: {
    fontFamily: FontFamilies.serif,
    fontSize: `${fontSizes[5]}px`,
    lineHeight: `${lineHeights[5]}px`,
    fontWeight: FontWeights.bold,
  },
  headerSmallPrimary: {
    fontFamily: FontFamilies.serif,
    fontSize: `${fontSizes[4]}px`,
    lineHeight: `${lineHeights[4]}px`,
    fontWeight: FontWeights.semiBold,
  },
  headerSmallPrimaryBold: {
    fontFamily: FontFamilies.serif,
    fontSize: `${fontSizes[4]}px`,
    lineHeight: `${lineHeights[4]}px`,
    fontWeight: FontWeights.bold,
  },
  bodyLargeBoldPrimary: {
    fontSize: `${fontSizes[4]}px`,
    lineHeight: `${lineHeights[4]}px`,
    fontWeight: FontWeights.bold,
  },
  bodyLargePrimary: {
    fontFamily: FontFamilies.sansSerif,
    fontSize: `${fontSizes[4]}px`,
    lineHeight: `${lineHeights[4]}px`,
    fontWeight: FontWeights.regular,
  },
  bodyMediumPrimary: {
    fontFamily: FontFamilies.serif,
    fontSize: `${fontSizes[2]}px`,
    lineHeight: `${lineHeights[2]}px`,
    fontWeight: FontWeights.semiBold,
  },
  bodySmallPrimary: {
    fontFamily: FontFamilies.sansSerif,
    fontSize: `${fontSizes[1]}px`,
    lineHeight: `${lineHeights[1]}px`,
    fontWeight: FontWeights.regular,
  },
}
export type TextTypes = keyof typeof textPresets