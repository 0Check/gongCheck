// 폰트를 rem으로 계산
const calcRem = (size: number) => `${size / 16}rem`;

// 폰트 사이즈
const fontSizes = {
  // small, medium, large
  small: `font-size: ${calcRem(12)}`,
  base: `font-size: ${calcRem(16)}`,
  lg: `font-size: ${calcRem(18)}`,
  subTitle: `font-size: ${calcRem(24)}`,
  mainTitle: `font-size: ${calcRem(30)}`,
};

// 색깔
const colors = {
  primary: "#333",
  secondary: "#333",
  third: "#333",
  error: "#333",
  disabled: "#333",
  danger: "#333",
  cancel: "#333",
  border: "#333333",
  background: "#333",
  placeholder: "#999999",
  grayLight: "#C2C2C2",
  gray: "#ADADAD",
  grayDark: "#999999",
};
const backgroundColors = {
  primaryLight: "#FFC266",
  primary: "#FFAD33",
  primaryDark: "#FF9900",
  secondaryLight: "#B29ADA",
  secondary: "#9879CE",
  secondaryDark: "#7E57C2",
  thirdLight: "#97D4FF",
  third: "#75C6FF",
  thirdDark: "#52B8FF",
  fourthLight: "#FFAA8E",
  fourth: "#FF8D69",
  fourthDark: "#FF7143",
  fifthLight: "#74CB85",
  fifth: "#46BA5D",
  fifthDark: "#18A934",
  sixthLight: "#67E1C2",
  sixth: "#34D7AE",
  sixthDark: "#01CD9A",
  seventhLight: "#82B3F4",
  seventh: "#5999F1",
  seventhDark: "#2F80ED",
  eighthLight: "#F7DF94",
  eighth: "#F5D470",
  eighthDark: "#F2C94C",
  error: "white",
  disabled: "#E5E5E5",
  dangerLight: "#FC9372",
  danger: "#FB6F43",
  dangerDark: "#FA4B14",
  cancel: "black",
  border: "#999999",
  placeholder: "#f0f0f0",
  black: "#333333",
  white: "#FFFFFF",
  background: "#FFFFFF",
  background1: "#F4F4F4",
  background2: "#F6EFE5",
  grayLight: "#C2C2C2",
  gray: "#ADADAD",
  grayDark: "#999999",
  googleCalendarGray: "#f1f3f4",
};

const deviceSizes = {
  mobile: "360px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (min-width: ${deviceSizes.tablet})`,
};

const theme = {
  fontSizes,
  colors,
  backgroundColors,
  deviceSizes,
  device,
};

export default theme;
