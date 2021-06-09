import Images from "./assets";

const POSITIVE_COLOR = "color:red";
const NEGATIVE_COLOR = "color:lightblue";

export const CONTENT = {
  title: "Explainable AI for Digital Pathology",
  baseImage: Images.base_image,
  instructionsHTML: `<p>Dear participant,</p>
    <p>Within the scope of the EMPAIA project, we aim to evaluate the usability of different Explainable AI ("xAI") approaches in Pathology. 
    We would like to hear your opinion towards different techniques for presenting explanations to pathologists working with AI solutions. 
    The answers will be collected and evaluated for scientific publications focusing on future directions for xAI approaches.</p>
    <p>The image here shows a small region of interest annotated by an AI solution with detected Ki-67 <span style="${POSITIVE_COLOR}">positive</span> and <span style="${NEGATIVE_COLOR}">negative</span> nuclei. 
    Also shown is the percentage of Ki-67 positive nuclei for the region and the whole slide.</p>
    <p>For each question, we show a different explanation that aims to help you with evaluating these generated annotations. <b>Please rate each proposed explanation with regard to its comprehensibility, informativeness and value to you as a user.</b></p>
    <p>We estimate a time of five to ten minutes for fully answering the study.</p>
    <p>Your additional comments are greatly valued, and can be provided in the comments box below the questions. Once you have answered the final question, press the complete button to submit your results.</p>
    <p>It is important to answer all of the questions honestly and to press the complete button at the end, so that the results of the survey are collected and can be evaluated. By clicking 'Complete', you agree to your survey results being used for research and development purposes within the scope of the EMPAIA project.</p>
    <p>All input is treated anonymously and no additional data is collected.</p>
    <p>Thank you for participating in our study!</p>`,
  completedHtml: ` <p style='font-size:24px;'>Thank you for completing the survey!<p>
  <p>Your answers have been saved. You can now safely close this page.</p>
  <p>If you would like to know more about the empaia project, please feel free to visit <a href="https://www.empaia.org">our website</a>.</p>
  <p>If you want to stay informed about any news regarding empaia, please follow <a href="https://www.empaia.org/news">this link</a> and register yourself for the newsletter. </p>`,
  minRateDescription: "Strongly disagree",
  maxRateDescription: "Strongly agree",
  rateMax: 7,
  userProfiling: {
    id: "userProfiling",
    title: "Some questions about you",
    dropdownQuestions: [
      {
        id: "age",
        text: "My age:",
        choices: ["under 30", "30-40", "41-50", "51-60", "over 60"],
      },
      {
        id: "position",
        text: "My professional position is best described as:",
        choices: [
          "Specialist physician (Facharzt) for pathology/neuropathology",
          "Assisting physician (Assistenzarzt) for pathology/neuropathology",
          "Researcher in pathology/neuropathology",
        ],
        hasOther: true,
        startWithNewLine: false,
      },
      {
        id: "useOfDP",
        text: "I currently use digitial pathology/telepathology:",
        choices: ["in routine diagnostics", "in research", "not at all"],
      },
      {
        id: "useOfAI",
        text: "I currently use of AI-solutions:",
        choices: ["in routine diagnostics", "in research", "not at all"],
        startWithNewLine: false,
      },
    ],
    ratingQuestions: [
      {
        id: "aiFamiliarity",
        text: "I am familiar with the use of AI applications in digital pathology",
      },
      {
        id: "mlFamiliarity",
        text: "I am familiar with technical details of machine learning",
        startWithNewLine: true,
      },
    ],
  },
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
          description: "Display low-confidence positive annotations for review",
          images: [
            Images.trustScores.colorCoded_0,
            Images.trustScores.edgeCases_0,
          ],
        },
      ],
    },
  ],
};
