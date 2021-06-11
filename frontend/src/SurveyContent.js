import Images from "./assets";

const POSITIVE_COLOR = "color:red";
const NEGATIVE_COLOR = "color:lightblue";

export const CONTENT = {
  baseImage: Images.base_image,
  logoImage: Images.logo_image,
  instructions:{
    header: `<p>Dear participant,</p>
    Within the scope of the empaia project, we aim to evaluate the usability of different Explainable AI ("xAI") approaches in digital pathology. 
    We would like to hear your opinion towards different techniques for presenting explanations to pathologists working with AI solutions.`,
    image: `<div><span class="helper"></span><img src="${Images.base_image.default}" class="intro-fig" alt="AI output"></div>`,
    body: `<br>
      <p>Here is the output of an AI solution for digital pathology<sup>[1]</sup>. The region of interest has been annotated with the Ki-67 <span style="${POSITIVE_COLOR}">positive</span> and <span style="${NEGATIVE_COLOR}">negative</span> nuclei detected by the AI solution, as well as the nuclear positivity detected for the region and the whole slide.
      <ul class = "intro-list">
        <li>Each question shows a different explanation aiming to help you to evaluate these generated annotations.</li>
        <li>Please rate each proposed <b>explanation</b> with regards to its comprehensibility, informativeness and value to you as a user.</li>
        <li>Please <b>do not rate</b> the output of the AI solution itself, as this is not the focus of the survey</li>
        <li>Your additional thoughts, questions and feedback are greatly valued, and can be provided in the <em>Additional comments</em> box on each page.</li>
      </ul>
      We estimate a time of five minutes for fully answering the survey.</p>
      <p>It is important to answer all of the questions honestly and to press the complete button at the end, so that the results of the survey are collected and can be evaluated.</p>
      <p>The results of this survey will be used towards a submission to the <a href="https://www.journals.elsevier.com/future-generation-computer-systems/call-for-papers/explainable-artificial-intelligence-for-healthcare" target="_blank" rel="noopener noreferrer">Special Issue on Explainable AI in Healthcare</a> of Future Generation Computer Systems, as well as for identification of xAI requirements for the EMPAIA platform. 
  This survey does not raise any ethical issues. By clicking <em>Save & Complete</em>, you agree to the use of your submitted answers for these purposes. All input is treated anonymously and no additional data is collected.</p>
      <p>Thank you for participating in our study!</p>`,
    footer: `<div class="footnote">[1] F. Negahbani, R. Sabzi, B. P. Jahromi, D. Firouzabadi, F. Movahedi, M. K. Shirazi, S. Majidi, A. Dehghanian, Pathonet introduced as a deep neural network backend for evaluation of Ki-67 and tumor-infiltrating lymphocytes in breast cancer, Scientific reports 11 (1) (2021) 1–13.<div>`,
  },
  minRateDescription: "Strongly disagree",
  maxRateDescription: "Strongly agree",
  rateMax: 7,
  userProfiling: {
    id: "userProfiling",
    title: "Some questions about you",
    dropdownQuestions: [
      {
        id: "age",
        title: "My age:",
        choices: ["under 30", "30-40", "41-50", "51-60", "over 60"],
        startWithNewLine: true,
      },
      {
        id: "position",
        title: "My professional position is best described as:",
        choices: [
          "Consultant (Facharzt) for pathology/neuropathology",
          "Trainee (Assistenzarzt) in pathology/neuropathology",
          "Technician (MTA) for pathology/neuropathology",
          "Researcher in pathology/neuropathology",
        ],
        hasOther: true,
        startWithNewLine: false,
      },
    ],
    checkboxQuestions: [
      {
        id: "useOfDP",
        title: "I currently use digitial pathology/telepathology:",
        choices: ["in routine diagnostics", "in research"],
        hasNone: true,
        noneText: "not at all",
        startWithNewLine: true,
      },
      {
        id: "useOfAI",
        title: "I currently use AI-solutions:",
        choices: ["in routine diagnostics", "in research"],
        additionalDetails: {
          type: "text",
          title: "Which AI solutions?",
          visibleIfValues: ["'in routine diagnostics'", "'in research'"],
          startWithNewLine: true
        },
        hasNone: true,
        noneText: "not at all",
        startWithNewLine: false
      },
    ],
    ratingQuestions: [
      {
        id: "mlFamiliarity",
        title: "I am familiar with technical details of machine learning",
        startWithNewLine: true,
      },
      {
        id: "aiFamiliarity",
        title: "I am familiar with applications of AI in digital pathology",
        startWithNewLine: false,
      },
    ],
  },
  ratingQuestions: [
    {
      id: "understandability",
      title: "I find the explanation intuitively understandable",
    },
    {
      id: "usability",
      title:
        "The explanation helps me to understand factors relevant to the algorithm",
    },
    {
      id: "informativeness",
      title:
        "The explanation helps me to decide whether I can trust the generated annotations",
    },
    {
      id: "value",
      title:
        "The explanation provides me with valuable information for my work",
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
            Images.saliencyMaps.gradcam_2,
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
          name: "Counterfactual examples in one axis",
          description:
            "Show generated examples interpolating between positive and negative examples, showing model classifications for each",
          images: [Images.counterfactuals.oneAxis_0],
        },
        {
          id: "twoAxisCounterfactuals",
          name: "Counterfactual examples in two axes",
          description:
            "Show generated examples changing in two principal factors of variation, showing model classifications for each",
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
          description:
            "Display low-confidence annotations for review",
          images: [
            Images.trustScores.colorCoded_0,
            Images.trustScores.edgeCases_0,
          ],
        },
      ],
    },
  ],
  completedHtml: ` 
  <style>
  .column {
    float: left;
    width: 33.33%;
    padding: 5px;
  }

  @media only screen and (max-width: 600px) {
    .column {
      width: 100%;
      min-height: 100px;
    }
  }
  
  img {
    width: 50%;
    vertical-align: middle;
  }

  .row::after {
    content: "";
    clear: both;
    display: table;
    margin-top: 10px;
  }

  </style>
  <p style='font-size:24px;'>Thank you for completing the survey!<p>
  <p>Your answers have been saved. You can now safely close this page.</p>
  <p>If you would like to know more about the empaia project, please feel visit <a href="https://www.empaia.org">our website</a>.</p>
  <p>If you want to stay informed about any news regarding empaia, please follow <a href="https://www.empaia.org/news">this link</a> and register yourself for the newsletter. </p>
  <br>
  <div class="row">
    <div class="column">
      <span class="helper"></span>
      <a href="https://www.charite.de/en/" target="_blank" rel="noopener noreferrer">
        <img src="${Images.partnerLogos.charite.default}" alt="Charite">
      </a>
    </div>
    <div class="column">
      <span class="helper"></span>
      <a href="https://dai-labor.de/en/home/" target="_blank" rel="noopener noreferrer">
        <img src="${Images.partnerLogos.dai.default}" alt="DAI-Labor">
      </a>
    </div>
    <div class="column">
      <span class="helper"></span>
      <a href="https://www.mevis.fraunhofer.de/" target="_blank" rel="noopener noreferrer">
        <img src="${Images.partnerLogos.fraunhofer.default}" alt="Fraunhofer MEVIS">
      </a>
    </div>
  </div>
  <div class="row">
    <div class="column">
      <span class="helper"></span>
      <a href="https://www.qualityinpathology.com/en_GB/" target="_blank" rel="noopener noreferrer">
        <img src="${Images.partnerLogos.quip.default}" alt="QuIP">
      </a>
    </div>
    <div class="column">
      <span class="helper"></span>
      <a href="https://www.vitagroup.ag/" target="_blank" rel="noopener noreferrer">
        <img src="${Images.partnerLogos.vitagroup.default}" alt="Vitagroup">
      </a>
    </div>
    <div class="column">
      <span class="helper"></span>
      <a href="https://www.bmwi.de/" target="_blank" rel="noopener noreferrer">
        <img src="${Images.partnerLogos.bmwi.default}" alt="BMWi">
      </a>
    </div>
  </div>`,
};
