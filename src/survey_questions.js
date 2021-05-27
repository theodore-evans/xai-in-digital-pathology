import example_app_output_1 from "./assets/p2_0232_3.jpg";
import example_1_gradcam_explanation from "./assets/p2_0232_3_0_Positive_0_00__Grad_Cam___conv2d_1__heatmap_02021_05_26_12_36_05_982491.png";
import example_2_edge_cases_explanation from "./assets/p2_0232_3_edge_cases.png";
import example_3_cross_validation_explanation from "./assets/p2_0232_3_adipose_detection.png"
import placeholder_image from "./assets/placeholder.png";

export var questions = {
    "examples" : [
        {
            "id":"gradcam",
            "description": "Case 1: GradCAM heatmap",
            "output_image": example_app_output_1,
            "output_description": "<p>Sample app output ( <span style='color:red';>positive</span> / <span style='color:lightgreen';>negative</span> )</p>",
            "explanation_image": example_1_gradcam_explanation,
            "explanation_description": "<p>Most relevant regions for Ki-67 positive classifications</p>"
        },
        {
            "id": "edgecases",
            "description": "Case 2: Edge cases",
            "output_image": example_app_output_1,
            "output_description": "<p>Sample app output ( <span style='color:red';>positive</span> / <span style='color:lightgreen';>negative</span> )</p>",
            "explanation_image": example_2_edge_cases_explanation,
            "explanation_description": "<p>Least confident positive predictions for review</p>"
        },
        {
            "id": "crossvalidation",
            "description": "Case 3: Cross-validation from other apps",
            "output_image": example_app_output_1,
            "output_description": "<p>Sample app output ( <span style='color:red';>positive</span> / <span style='color:lightgreen';>negative</span> )</p>",
            "explanation_image": example_3_cross_validation_explanation,
            "explanation_description": "<p>Segmentation of other tissues by a separate app</p>"
        }
    ]
}