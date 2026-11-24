import { t2v, videoModel } from "./defaults";

const base = videoModel("wan-2.6", "Wan 2.6", { start: 1 }, t2v("wan/v2.6/text-to-video"));

export const wan26 = {
  ...base,
  settings: {
    ...base.settings,
    duration: {
      type: "range" as const,
      min: 5,
      max: 15,
      step: 5,
      default: 5,
    },
  },
};
