import Images from "./assets";

const POSITIVE_COLOR = "color:red";
const NEGATIVE_COLOR = "color:cyan";
const EXAMPLE_APP_DESCRIPTION = `<p>Nuclei marked as Ki-67 <span style=${POSITIVE_COLOR};>positive</span> or <span style=${NEGATIVE_COLOR};>negative</span></p>`;

export const CONTENT = {
  instructionsHTML:
    "<h1>Instructions</h><p>placeholder instructions html here</p>",
  minRateDescription: "Strongly disagree",
  maxRateDescription: "Strongly agree",
  rateMax: 7,
  userProfilingQuestions: [
    {
      id: "ai_InRoutine",
      text: "I use AI solutions regularly in my routine work",
    },
    {
      id: "ai_Familiarity",
      text: "I am familiar with the use of AI applications in digital pathology",
    },
    {
      id: "ml_Familiarity",
      text: "I am familiar with technical details of machine learning",
    },
  ],
  ratingQuestions: [
    {
      id: "understandability",
      text: "I found the explanation intuitively understandable",
    },
    {
      id: "usability",
      text: "The explanation helps me to understand factors relevant to the algorithm",
    },
    {
      id: "informativeness",
      text: "The explanation helps me to decide whether I can trust the generated annotations",
    },
    {
      id: "value",
      text: "The explanation provides me with valuable information for my work",
    },
  ],
  explanationClasses: [
    {
      id: "saliencyMaps",
      instances: [
        {
          id: "globalSaliency",
          name: "Global saliency map",
          description:
            "Show the most relevant pixels for the positive classifications within this region of interest",
          images: [
            Images.saliencyMaps.gradcam_0,
            Images.saliencyMaps.gradcam_1,
            Images.saliencyMaps.guidedbackprop_0,
          ],
        },
        {
          id: "localSaliency",
          name: "Local saliency map",
          description:
            "Show the most relevant pixels for the classification of a selected annotation",
          images: [
            Images.saliencyMaps.gradcam_local_0,
            Images.saliencyMaps.gradcam_local_1,
          ],
        },
      ],
    },
    {
      id: "conceptAttribution",
      instances: [
        {
          id: "textAttributes",
          name: "Text attributes",
          description:
            "Show the most important features attributed to positive classifications",
          images: [
            Images.conceptAttribution.textAttributes_0,
            Images.conceptAttribution.textAttributes_1,
          ],
        },
      ],
    },
    {
      id: "prototypes",
      instances: [
        {
          id: "prototypes",
          name: "Prototypical examples",
          description:
            "Show prototypical positively and negatively classified annotations within this region",
          images: [Images.prototypes.prototypes_0],
        },
      ],
    },
    {
      id: "counterfactuals",
      instances: [
        {
          id: "prototypeInterpolation",
          name: "Counterfactuals in one axis",
          description:
            "Show counterfactual examples interpolating between positive and negative examples, showing model classifications for each",
          images: [Images.counterfactuals.oneAxis_0],
        },
        {
          id: "twoAxisCounterfactuals",
          name: "Counterfactuals in two axes",
          description:
            "Show counterfactual examples interpolating in two principal factors of variation, showing model classifications each",
          images: [Images.counterfactuals.twoAxis_0],
        },
      ],
    },
    {
      id: "trustScores",
      instances: [
        {
          id: "borderlineCases",
          name: "Borderline cases",
          description: "Display low-confidence annotations for review",
          images: [
            Images.trustScores.colorCoded_0,
            Images.trustScores.edgeCases_0,
          ],
        },
      ],
    },
  ],
};
