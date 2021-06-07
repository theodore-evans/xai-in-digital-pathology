let mongoose = require("mongoose");

let surveySchema = mongoose.Schema(
  {
    id: {
      type: "Number",
    },
    ai_: {
      ai_InRoutine: {
        type: "Number",
      },
      ai_Familiarity: {
        type: "Number",
      },
    },
    ml_: {
      ml_Familiarity: {
        type: "Number",
      },
    },
    userProfiling_: {
      userProfiling_comments: {
        type: "String",
      },
    },
    trustScores_: {
      trustScores_borderlineCases_image1_understandability: {
        type: "Number",
      },
      trustScores_borderlineCases_image1_usability: {
        type: "Number",
      },
      trustScores_borderlineCases_image1_informativeness: {
        type: "Number",
      },
      trustScores_borderlineCases_image1_value: {
        type: "Number",
      },
      trustScores_borderlineCases_comments: {
        type: "String",
      },
    },
    counterfactuals_: {
      counterfactuals_prototypeInterpolation_image0_understandability: {
        type: "Number",
      },
      counterfactuals_prototypeInterpolation_image0_usability: {
        type: "Number",
      },
      counterfactuals_prototypeInterpolation_image0_informativeness: {
        type: "Number",
      },
      counterfactuals_prototypeInterpolation_image0_value: {
        type: "Number",
      },
      counterfactuals_prototypeInterpolation_comments: {
        type: "String",
      },
      counterfactuals_twoAxisCounterfactuals_image0_understandability: {
        type: "Number",
      },
      counterfactuals_twoAxisCounterfactuals_image0_usability: {
        type: "Number",
      },
      counterfactuals_twoAxisCounterfactuals_image0_informativeness: {
        type: "Number",
      },
      counterfactuals_twoAxisCounterfactuals_image0_value: {
        type: "Number",
      },
      counterfactuals_twoAxisCounterfactuals_comments: {
        type: "String",
      },
    },
    prototypes_: {
      prototypes_prototypes_image0_understandability: {
        type: "Number",
      },
      prototypes_prototypes_image0_usability: {
        type: "Number",
      },
      prototypes_prototypes_image0_informativeness: {
        type: "Number",
      },
      prototypes_prototypes_image0_value: {
        type: "Number",
      },
      prototypes_prototypes_comments: {
        type: "String",
      },
    },
    conceptAttribution_: {
      conceptAttribution_textAttributes_image1_understandability: {
        type: "Number",
      },
      conceptAttribution_textAttributes_image1_usability: {
        type: "Number",
      },
      conceptAttribution_textAttributes_image1_informativeness: {
        type: "Number",
      },
      conceptAttribution_textAttributes_image1_value: {
        type: "Number",
      },
      conceptAttribution_textAttributes_comments: {
        type: "String",
      },
    },
    saliencyMaps_: {
      saliencyMaps_globalSaliency_image0_usability: {
        type: "Number",
      },
      saliencyMaps_globalSaliency_image0_understandability: {
        type: "Number",
      },
      saliencyMaps_globalSaliency_image0_informativeness: {
        type: "Number",
      },
      saliencyMaps_globalSaliency_image0_value: {
        type: "Number",
      },
      saliencyMaps_globalSaliency_comments: {
        type: "String",
      },
      saliencyMaps_localSaliency_image0_understandability: {
        type: "Number",
      },
      saliencyMaps_localSaliency_image0_usability: {
        type: "Number",
      },
      saliencyMaps_localSaliency_image0_informativeness: {
        type: "Number",
      },
      saliencyMaps_localSaliency_image0_value: {
        type: "Number",
      },
      saliencyMaps_localSaliency_comments: {
        type: "String",
      },
    },
  },
  { strict: false }
);

const survey = mongoose.model("survey", surveySchema);
module.exports = survey;
