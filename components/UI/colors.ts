export type ColorsType = {
  highlight: string;
  accent: string;
  border: string;
};

export const Colors: Readonly<ColorsType> = {
  highlight: "#007AFF",
  accent: "#48189ba9",
  border: "#38BDF8",
};

export type ColorKey = keyof typeof Colors;

export default Colors;
