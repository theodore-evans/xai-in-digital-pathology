import example_app_output from "./assets/p2_0232_3.jpg";
import example_app_output_with_selection from "./assets/p2_0232_3_with_selection.png";
import gradcam_explanation from "./assets/p2_0232_3_0_Positive_0_00__Grad_Cam___conv2d_1__heatmap_02021_05_26_12_36_05_982491.png";
import edge_cases_explanation from "./assets/p2_0232_3_edge_cases.png";
import cross_validation_explanation from "./assets/p2_0232_3_adipose_detection.png"
import interpolation from "./assets/prototype_interpolation.png";
import prototypes from "./assets/prototypes.png";
import counterfactuals from "./assets/counterfactuals_2axis.png"
import text_attributes from "./assets/text_attributes.png"
import color_coded_confidence from "./assets/color_coded_confidence.png"

// import placeholder_image from "./assets/placeholder.png";

const example_app_description = "<p>Sample app output ( <span style='color:red';>positive</span> / <span style='color:lightgreen';>negative</span> )</p>"

export var questions = {
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
    "examples" : [
        {
            "id":"gradcam",
            "description": "Display most relevant pixels",
            "output_image": example_app_output,
            "output_description": example_app_description,
            "explanation_image": gradcam_explanation,
            "explanation_description": "<p>Most relevant regions for Ki-67 positive classifications</p>"
        },
        {
            "id": "edge_cases",
            "description": "Display edge cases for review",
            "output_image": example_app_output,
            "output_description": example_app_description,
            "explanation_image": edge_cases_explanation,
            "explanation_description": "<p>Least confident positive predictions for review</p>"
        },
        {
            "id": "cross_validation",
            "description": "Cross-validation from other apps",
            "output_image": example_app_output,
            "output_description": example_app_description,
            "explanation_image": cross_validation_explanation,
            "explanation_description": "<p>Segmentation of other tissues by a separate app</p>"
        },
        {
            "id": "prototypes",
            "description": "Show prototypical positive and negative classifications",
            "output_image": example_app_output,
            "output_description": example_app_description,
            "explanation_image" : prototypes,
            "explanation_description": "<p>Prototypical examples for positive and negative classifications</p>"
        },
        {
            "id": "prototype_interpolation",
            "description": "Show interpolation between positive and negative examples",
            "output_image": example_app_output,
            "output_description": example_app_description,
            "explanation_image" : interpolation,
            "explanation_description": "<p>Interpolation between positive and negative prototypes, showing model decision boundary for positive and negative classification</p>"
        },
        {
            "id": "counterfactuals",
            "description": "Show generated counterfactual examples with classifications",
            "output_image": example_app_output_with_selection,
            "output_description": example_app_description + "<p>One annotation selected</p>",
            "explanation_image": counterfactuals,
            "explanation_description": "<p>Counterfactual examples generated in two axes of variation, showing decision boundaries</p>"
        },
        {
            "id": "text_attributes",
            "description": "Show most important features in text format",
            "output_image": example_app_output,
            "output_description": example_app_description,
            "explanation_image" : text_attributes,
            "explanation_description": "<p>Most important features attributed to positive classifications</p>"
        },
        {
            "id": "color_coded_confidence",
            "description": "Show positive cases color-coded by confidence class",
            "output_image": example_app_output,
            "output_description": example_app_description,
            "explanation_image": color_coded_confidence,
            "explanation_description": "<p>Classifications color coded according to <span style='color:blue';>high model confidence</span> / <span style='color:orange'>low model confidence</span> confidence</p>"
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