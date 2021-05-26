import example_1_gradcam_output from "./assets/p2_0232_3.jpg";
import example_1_gradcam_explanation from "./assets/p2_0232_3_0_Positive_0_00__Grad_Cam___conv2d_1__heatmap_02021_05_26_12_36_05_982491.png";

const xai_question_1 = "The information presented is intuitively understandable"
const xai_question_2 = "The information presented helps me to make an informed decision"
const xai_question_3 = "The information presented is useful only if available in realtime"

const minRateDescription = "Strongly disagree"
const maxRateDescription = "Strongly agree"
const rateMax = 7
const questions_on_new_line = false

const comment_rows = 2

const questions = {
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

var number_of_examples = questions.examples.length

var json = {
    "pages": [
        {
            "name": "ai_familiarity",
            "elements": [
                {
                    "type": "rating",
                    "name": "q0_1",
                    "title": "I use AI solutions regularly in my routine work",
                    "rateMax": rateMax,
                    "minRateDescription": minRateDescription,
                    "maxRateDescription": maxRateDescription
                },
                {
                    "type": "rating",
                    "name": "q0_2",
                    "title": "I am familiar with the use of AI applications in digital pathology",
                    "rateMax": rateMax,
                    "minRateDescription": minRateDescription,
                    "maxRateDescription": maxRateDescription
                },
                {
                    "type": "rating",
                    "name": "q0_3",
                    "title": "I am familiar with technical details of machine learning",
                    "rateMax": rateMax,
                    "minRateDescription": minRateDescription,
                    "maxRateDescription": maxRateDescription
                }
            ]
        }
    ]
}

// EXAMPLE 1: GradCAM
function create_example(index) {
    return (
        {
            "name": "example_" + index,
            "title": questions.examples[index].description,
            "elements": [
                {
                    "type": "panel",
                    "elements": [
                        {
                            "type": "image",
                            "imageLink": questions.examples[index].output_image,
                            "imageWidth": "256px",
                            "imageHeight": "256px",
                        },
                        {
                            "type": "html",
                            "html": questions.examples[index].output_description
                        }
                    ],
                    "width": "300px"
                },
                {
                    "type": "panel",
                    "elements": [
                        {
                            "type": "image",
                            "imageLink": questions.examples[index].explanation_image,
                            "imageWidth": "256px",
                            "imageHeight": "256px",
                        },
                        {
                            "type": "html",
                            "html": questions.examples[index].explanation_description
                        }
                    ],
                    "width": "300px",
                    "startWithNewLine": false
                },
                {
                    "type": "panel",
                    "elements": [
                        {
                            "type": "rating",
                            "name": "q" + index + "_1",
                            "title": xai_question_1,
                            "rateMax": rateMax,
                            "minRateDescription": minRateDescription,
                            "maxRateDescription": maxRateDescription,
                        },
                        {
                            "type": "rating",
                            "name": "q" + index + "_2",
                            "title": xai_question_2,
                            "rateMax": rateMax,
                            "minRateDescription": minRateDescription,
                            "maxRateDescription": maxRateDescription
                        },
                        {
                            "type": "rating",
                            "name": "q" + index + "_3",
                            "title": xai_question_3,
                            "rateMax": rateMax,
                            "minRateDescription": minRateDescription,
                            "maxRateDescription": maxRateDescription
                        },
                        {
                            "type": "comment",
                            "name": "q" + index + "_comments",
                            "title": "Comments (optional)",
                            "rows": comment_rows
                        }
                    ],
                    "startWithNewLine": questions_on_new_line
                }
            ]
        }
    )
}

var i;

for (i = 0; i < number_of_examples; i++) {
    json.pages.push(create_example(i))
}

export {json};