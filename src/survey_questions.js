import example_1_gradcam_output from "./assets/p2_0232_3.jpg";
import example_1_gradcam_explanation from "./assets/p2_0232_3_0_Positive_0_00__Grad_Cam___conv2d_1__heatmap_02021_05_26_12_36_05_982491.png";

export var questions = {
    "examples" : [
        {
            "description": "Explainability example 1: GradCAM heatmap",
            "output_image": example_1_gradcam_output,
            "output_description": "<p>Sample app output ( <span style='color:red';>positive</span> / <span style='color:lightgreen';>negative</span> )</p>",
            "explanation_image": example_1_gradcam_explanation,
            "explanation_description": "<p>Most relevant regions for Ki-67 positive classifications</p>"
        }
    ]
}