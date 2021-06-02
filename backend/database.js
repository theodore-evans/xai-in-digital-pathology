let mongoose = require("mongoose");

let surveySchema = mongoose.Schema({
  id: {
    type: "Number",
  },
  ai_: {
    ai_in_routine: {
      type: "Number",
    },
    ai_familiarity: {
      type: "Number",
    },
  },
  ml_: {
    ml_familiarity: {
      type: "Number",
    },
  },
  prototypes_: {
    prototypes_usability: {
      type: "Number",
    },
    prototypes_informativeness: {
      type: "Number",
    },
  },
  cross_: {
    cross_validation_understandability: {
      type: "Number",
    },
    cross_validation_usability: {
      type: "Number",
    },
    cross_validation_informativeness: {
      type: "Number",
    },
  },
  model_: {
    model_ensemble_variance_understandability: {
      type: "Number",
    },
    model_ensemble_variance_usability: {
      type: "Number",
    },
    model_ensemble_variance_informativeness: {
      type: "Number",
    },
  },
  edge_: {
    edge_cases_informativeness: {
      type: "Number",
    },
    edge_cases_understandability: {
      type: "Number",
    },
    edge_cases_usability: {
      type: "Number",
    },
  },
  gradcam_: {
    gradcam_understandability: {
      type: "Number",
    },
    gradcam_informativeness: {
      type: "Number",
    },
    gradcam_usability: {
      type: "Number",
    },
  },
  counterfactuals_: {
    counterfactuals_informativeness: {
      type: "Number",
    },
    counterfactuals_usability: {
      type: "Number",
    },
    counterfactuals_understandability: {
      type: "Number",
    },
  },
  prototype_: {
    prototype_interpolation_informativeness: {
      type: "Number",
    },
    prototype_interpolation_usability: {
      type: "Number",
    },
    prototype_interpolation_understandability: {
      type: "Number",
    },
  },
  color_: {
    color_coded_confidence_informativeness: {
      type: "Number",
    },
    color_coded_confidence_usability: {
      type: "Number",
    },
    color_coded_confidence_understandability: {
      type: "Number",
    },
  },
  text_: {
    text_attributes_informativeness: {
      type: "Number",
    },
    text_attributes_usability: {
      type: "Number",
    },
    text_attributes_understandability: {
      type: "Number",
    },
  },
});

const survey = mongoose.model("survey", surveySchema);
module.exports = survey;
