import Images from "./assets"

const EXAMPLE_APP_DESCRIPTION = "<p>Sample app output ( <span style='color:red';>positive</span> / <span style='color:lightgreen';>negative</span> )</p>"

export var questions = {
    "minRateDescription": "Strongly disagree",
    "maxRateDescription": "Strongly agree",
    "rateMax": 7,
    "userProfilingQuestions": [
        {
            "id": "ai_in_routine",
            "text": "I use AI solutions regularly in my routine work"
        },
        {
            "id": "ai_familiarity",
            "text": "I am familiar with the use of AI applications in digital pathology"
        },
        {
            "id": "ml_familiarity",
            "text": "I am familiar with technical details of machine learning"
        },
    ],
    "ratingQuestions": [
        {
            "id": "understandability",
            "text": "The information presented is intuitively understandable"
        },
        {
            "id": "informativeness",
            "text": "The information presented helps me to make an informed decision"
        },
        {
            "id": "time_criticality",
            "text": "The information presented is useful only if available in realtime"
        }
    ],
    "examples": [
        {
            "id": "gradcam",
            "description": "Display most relevant pixels",
            "outputImage": Images.example_app_output,
            "outputDescription": EXAMPLE_APP_DESCRIPTION,
            "explanationImage": Images.gradcam_explanation,
            "explanationDescription": "<p>Most relevant regions for Ki-67 positive classifications</p>"
        },
        {
            "id": "edge_cases",
            "description": "Display edge cases for review",
            "outputImage": Images.example_app_output,
            "outputDescription": EXAMPLE_APP_DESCRIPTION,
            "explanationImage": Images.edge_cases_explanation,
            "explanationDescription": "<p>Least confident positive predictions for review</p>"
        },
        {
            "id": "cross_validation",
            "description": "Cross-validation from other apps",
            "outputImage": Images.example_app_output,
            "outputDescription": EXAMPLE_APP_DESCRIPTION,
            "explanationImage": Images.cross_validation_explanation,
            "explanationDescription": "<p>Segmentation of other tissues by a separate app</p>"
        },
        {
            "id": "prototypes",
            "description": "Show prototypical positive and negative classifications",
            "outputImage": Images.example_app_output,
            "outputDescription": EXAMPLE_APP_DESCRIPTION,
            "explanationImage": Images.prototypes,
            "explanationDescription": "<p>Prototypical examples for positive and negative classifications</p>"
        },
        {
            "id": "prototype_interpolation",
            "description": "Show interpolation between positive and negative examples",
            "outputImage": Images.example_app_output,
            "outputDescription": EXAMPLE_APP_DESCRIPTION,
            "explanationImage": Images.interpolation,
            "explanationDescription": "<p>Interpolation between positive and negative prototypes, showing model decision boundary for positive and negative classification</p>"
        },
        {
            "id": "counterfactuals",
            "description": "Show generated counterfactual examples with classifications",
            "outputImage": Images.example_app_output_with_selection,
            "outputDescription": EXAMPLE_APP_DESCRIPTION + "<p>One annotation selected</p>",
            "explanationImage": Images.counterfactuals,
            "explanationDescription": "<p>Counterfactual examples generated in two axes of variation, showing decision boundaries</p>"
        },
        {
            "id": "text_attributes",
            "description": "Show most important features in text format",
            "outputImage": Images.example_app_output,
            "outputDescription": EXAMPLE_APP_DESCRIPTION,
            "explanationImage": Images.text_attributes,
            "explanationDescription": "<p>Most important features attributed to positive classifications</p>"
        },
        {
            "id": "color_coded_confidence",
            "description": "Show positive cases color-coded by confidence class",
            "outputImage": Images.example_app_output,
            "outputDescription": EXAMPLE_APP_DESCRIPTION,
            "explanationImage": Images.color_coded_confidence,
            "explanationDescription": "<p>Classifications color coded according to <span style='color:blue';>high </span> / <span style='color:orange'>low</span> model confidence</p>"
        }
    ]
}

// # EXAMPLES (X = done)

// ## SALIENCY MAPS
// Heatmap overlay on results X gradcam

// ## CONCEPT ATTRIBUTION
// Visual representation of attributed concepts (feature visualisation)
// Text-based representation of attributed concepts X text_attributes

// ## PROTOTYPES
// Display of prototypes of predicted classes X prototypes
// Interpolation between prototypes with decision boundary X prototype_interpolation
// Multiple interpolations between random samples

// ## COUNTERFACTUALS
// Closest counterfactual with opposite classification X counterfactuals
// Closest counterfactual with no classification X counterfactuals

// ## TRUST SCORES
// Color-coded confidence rating X color_coded_confidence
// Flagging of edge cases for review X edge_cases
// Variance of model ensemble, placing of this model within ensemble
// Visualisation of training/validation data statistics/demographics
// Cross-validation with other models (e.g. tissue/feature detection) X cross_validation