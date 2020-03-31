export enum FontWeights {
  light = "300",
  semiBold = "600",
  bold = "bold",
}


export const textPresets = {
  default: {},
  heading1: {
    fontSize: "4.5rem",
    lineHeight: 1,
    fontWeight: FontWeights.light,
  },
  heading1Bold: {
    fontSize: "4.5rem",
    lineHeight: 1,
    fontWeight: FontWeights.bold,
  },
  heading2: {
    fontSize: "4rem",
    lineHeight: 1,
    fontWeight: FontWeights.light,
  },
  heading2Bold: {
    fontSize: "4rem",
    lineHeight: 1,
    fontWeight: FontWeights.bold,
  },
  heading3: {
    fontSize: "2.5rem",
    lineHeight: 1.6,
    fontWeight: FontWeights.bold,
  },
  heading3Bold: {
    fontSize: "2.5rem",
    lineHeight: 1.6,
    fontWeight: FontWeights.bold,
  },
  heading4: {
    fontSize: "1.9rem",
    lineHeight: 1.6,
    fontWeight: FontWeights.bold,
  },
  heading4Bold: {
    fontSize: "1.9rem",
    lineHeight: 1.6,
    fontWeight: FontWeights.bold,
  },
  bodyLargePrimary: {
    fontSize: "2rem",
    fontWeight: FontWeights.light,
  },
  bodyLargeBoldPrimary: {
    fontSize: "2rem",
    fontWeight: FontWeights.bold,
  },
  bodyMediumPrimary: {
    fontSize: "1.6rem",
    lineHeight: "",
    fontWeight: FontWeights.light,
  },
  bodySmallPrimary: {
    fontSize: "1.4rem",
    fontWeight: FontWeights.light,
  },
}
export type TextTypes = keyof typeof textPresets