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
			id: "aiInRoutine",
			text: "I use AI solutions regularly in my routine work",
		},
		{
			id: "aiFamiliarity",
			text: "I am familiar with the use of AI applications in digital pathology",
		},
		{
			id: "mlFamiliarity",
			text: "I am familiar with technical details of machine learning",
		},
	],
	ratingQuestions: [
		{
			id: "understandability",
			text: "The explanation is intuitively understandable",
		},
		{
			id: "usability",
			text: "The explanation helps me to understand the factors affecting this result",
		},
		{
			id: "informativeness",
			text: "The explanation helps me to decide whether I can trust this result",
		},
	],
	examples: [
		{
			class: "saliencyMaps",
			instances: [
				{
					id: "gradcam",
					description: "Display most relevant pixels",
					images: [Images.gradcam],
					imageCaption:
						"<p>Most relevant regions for Ki-67 positive classifications</p>",
				},
			],
		},
		{
			class: "conceptAttribution",
			instances: [
				{
					id: "textAttributes",
					description: "Show most important features in text format",
					images: [Images.text_attributes],
					imageCaption:
						"<p>Most important features attributed to positive classifications</p>",
				},
			],
		},
		{
			class: "prototypes",
			instances: [
				{
					id: "prototypes",
					description:
						"Show prototypical positive and negative classifications",
					images: [Images.prototypes],
					imageCaption:
						"<p>Prototypical examples for positive and negative classifications</p>",
				},
			],
		},
        {
			class: "counterfactuals",
			instances: [
				{
					id: "prototypeInterpolation",
					description:
						"Show interpolation between positive and negative prototypes",
					images: [Images.interpolation],
					imageCaption:
                        "<p>Interpolation between positive and negative prototypes, showing model decision boundary for positive and negative classification</p>",
				},
                {
					id: "twoAxisCounterfactuals",
					description:
						"Show generated counterfactual examples with classifications",
					images: [Images.counterfactuals],
					imageCaption:
                        "<p>Counterfactual examples generated in two axes of variation, showing decision boundaries</p>",
				},
			],
		},
		{
			class: "trustScores",
			instances: [
				{
					id: "crossValidation",
					description: "Cross-validation from other apps",
					images: [Images.cross_validation_adipose],
					imageCaption:
						"<p>Segmentation of other tissues by a separate app, with potential conflicts highlighted</p>",
				},
				{
					id: "colorCodedConfidence",
					description: "Display low-confidence annotations for review",
					images: [Images.color_coded_confidence, Images.edge_cases],
					imageCaption:
						"<p>Classifications color coded according to <span style='color:blue';>high </span> / <span style='color:orange'>low</span> model confidence</p>",
				},
			],
		},
	],
};

// # EXPLANATION CLASSES (X = done)

// ## SALIENCY MAPS
// Heatmap overlay on results                                               X gradcam

// ## CONCEPT ATTRIBUTION
// Visual representation of attributed concepts (feature visualisation)
// Text-based representation of attributed concepts                         X text_attributes

// ## PROTOTYPES
// Display of prototypes of predicted classes                               X prototypes
// Interpolation between prototypes with decision boundary                  X prototype_interpolation
// Multiple interpolations between random samples

// ## COUNTERFACTUALS
// Closest counterfactual with opposite classification                      X counterfactuals
// Closest counterfactual with no classification                            X counterfactuals

// ## TRUST SCORES
// Color-coded confidence rating                                            X color_coded_confidence
// Flagging of edge cases for review                                        X edge_cases
// Variance of model ensemble, placing of this model within ensemble        X model_ensemble_variance
// Visualisation of training/validation data statistics/demographics
// Cross-validation with other models (e.g. tissue/feature detection)       X cross_validation
