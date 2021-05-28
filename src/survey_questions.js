import {
    example_app_output,
    example_app_output_with_selection,
    gradcam_explanation,
    edge_cases_explanation,
    cross_validation_explanation,
    interpolation,
    prototypes,
    counterfactuals,
    text_attributes,
    color_coded_confidence
} from "./assets"

const EXAMPLE_APP_DESCRIPTION = "<p>Sample app output ( <span style='color:red';>positive</span> / <span style='color:lightgreen';>negative</span> )</p>"

export var questions = {
    "minRateDescription" : "Strongly disagree",
    "maxRateDescription" : "Strongly agree",
    "rateMax" : 7,
    "user_profiling_questions" : [
        { 
            "id" : "ai_in_routine",
            "text" : "I use AI solutions regularly in my routine work"
        },
        { 
            "id" : "ai_familiarity",
            "text" : "I am familiar with the use of AI applications in digital pathology"
        },
        { 
            "id" : "ml_familiarity",
            "text" : "I am familiar with technical details of machine learning"
        },
    ],
    "rating_questions": [
        {
            "id" : "understandability",
            "text" : "The information presented is intuitively understandable"
        },
        {
            "id" : "informativeness",
            "text" : "The information presented helps me to make an informed decision"
        },
        {
            "id" : "time_criticality",
            "text" : "The information presented is useful only if available in realtime"
        }
    ],
    "examples" : [
        {
            "id":"gradcam",
            "description": "Display most relevant pixels",
            "output_image": example_app_output,
            "output_description": EXAMPLE_APP_DESCRIPTION,
            "explanation_image": gradcam_explanation,
            "explanation_description": "<p>Most relevant regions for Ki-67 positive classifications</p>"
        },
        {
            "id": "edge_cases",
            "description": "Display edge cases for review",
            "output_image": example_app_output,
            "output_description": EXAMPLE_APP_DESCRIPTION,
            "explanation_image": edge_cases_explanation,
            "explanation_description": "<p>Least confident positive predictions for review</p>"
        },
        {
            "id": "cross_validation",
            "description": "Cross-validation from other apps",
            "output_image": example_app_output,
            "output_description": EXAMPLE_APP_DESCRIPTION,
            "explanation_image": cross_validation_explanation,
            "explanation_description": "<p>Segmentation of other tissues by a separate app</p>"
        },
        {
            "id": "prototypes",
            "description": "Show prototypical positive and negative classifications",
            "output_image": example_app_output,
            "output_description": EXAMPLE_APP_DESCRIPTION,
            "explanation_image" : prototypes,
            "explanation_description": "<p>Prototypical examples for positive and negative classifications</p>"
        },
        {
            "id": "prototype_interpolation",
            "description": "Show interpolation between positive and negative examples",
            "output_image": example_app_output,
            "output_description": EXAMPLE_APP_DESCRIPTION,
            "explanation_image" : interpolation,
            "explanation_description": "<p>Interpolation between positive and negative prototypes, showing model decision boundary for positive and negative classification</p>"
        },
        {
            "id": "counterfactuals",
            "description": "Show generated counterfactual examples with classifications",
            "output_image": example_app_output_with_selection,
            "output_description": EXAMPLE_APP_DESCRIPTION + "<p>One annotation selected</p>",
            "explanation_image": counterfactuals,
            "explanation_description": "<p>Counterfactual examples generated in two axes of variation, showing decision boundaries</p>"
        },
        {
            "id": "text_attributes",
            "description": "Show most important features in text format",
            "output_image": example_app_output,
            "output_description": EXAMPLE_APP_DESCRIPTION,
            "explanation_image" : text_attributes,
            "explanation_description": "<p>Most important features attributed to positive classifications</p>"
        },
        {
            "id": "color_coded_confidence",
            "description": "Show positive cases color-coded by confidence class",
            "output_image": example_app_output,
            "output_description": EXAMPLE_APP_DESCRIPTION,
            "explanation_image": color_coded_confidence,
            "explanation_description": "<p>Classifications color coded according to <span style='color:blue';>high </span> / <span style='color:orange'>low</span> model confidence</p>"
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