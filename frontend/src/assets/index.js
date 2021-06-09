export default {
  base_image: require("./base_image.png"),
  logo_image: require("./empaia_logo.png"),
  saliencyMaps: {
    gradcam_0: require("./SM/gradcam_0.png"),
    gradcam_1: require("./SM/gradcam_1.png"),
    gradcam_2: require("./SM/gradcam_2.png"),
    guidedbackprop_0: require("./SM/guided_backprop_0.png"),
    gradcam_local_0: require("./SM/gradcam_local_0.png"),
    gradcam_local_1: require("./SM/gradcam_local_1.png"),
  },
  prototypes: {
    prototypes_0: require("./PR/prototypes_0.png"),
  },
  counterfactuals: {
    oneAxis_0: require("./CF/one_axis_0.png"),
    twoAxis_0: require("./CF/two_axis_0.png"),
  },
  conceptAttribution: {
    textAttributes_0: require("./CA/text_attributes_0.png"),
    textAttributes_1: require("./CA/text_attributes_1.png"),
  },
  trustScores: {
    edgeCases_0: require("./TS/edge_cases_0.png"),
    tissueDetection_0: require("./TS/tissue_detection_0.png"),
    colorCoded_0: require("./TS/color_coded_0.png"),
  },
};
