
import xai_example_base from "./assets/p2_0232_3.jpg";
import gradcam_example_1 from "./assets/p2_0232_3_0_Positive_0_00__Grad_Cam___conv2d_1__heatmap_02021_05_26_12_36_05_982491.png";

export var json = {
    "pages": [
        // {
        //     "name": "ai_familiarity",
        //     "elements": [
        //         {
        //             "type": "rating",
        //             "name": "question1",
        //             "title": "I use AI solutions regularly in my routine work",
        //             "rateMax": 7,
        //             "minRateDescription": "Strongly agree",
        //             "maxRateDescription": "Strongly disagree"
        //         },
        //         {
        //             "type": "rating",
        //             "name": "question2",
        //             "title": "I am familiar with the use of AI applications in digital pathology",
        //             "rateMax": 7,
        //             "minRateDescription": "Strongly agree",
        //             "maxRateDescription": "Strongly disagree"
        //         },
        //         {
        //             "type": "rating",
        //             "name": "question3",
        //             "title": "I am familiar with technical details of machine learning",
        //             "rateMax": 7,
        //             "minRateDescription": "Strongly agree",
        //             "maxRateDescription": "Strongly disagree"
        //         }
        //     ]
        // },
        {
            "name": "xai_case_1",
            "elements": [
                {
                    "type": "image",
                    "name": "Example app output",
                    "imageLink": xai_example_base,
                    "imageWidth": "256px",
                    "imageHeight": "256px",
                    "width": "300px"
                },
                {
                    "type": "image",
                    "name": "GradCAM heatmap",
                    "imageLink": gradcam_example_1,
                    "imageWidth": "256px",
                    "imageHeight": "256px",
                    "width" : "300px",
                    "startWithNewLine": false,
                },
                {
                    "type": "panel",
                    "name": "first_question_panel",
                    "width": "10%",
                    "elements": [
                        {
                            "type": "rating",
                            "name": "question5",
                            "title": "The information presented is intuitively understandable",
                            "rateMax": 7,
                            "minRateDescription": "Strongly agree",
                            "maxRateDescription": "Strongly disagree",
                        },
                        {
                            "type": "rating",
                            "name": "question4",
                            "title": "The information presented helps me to make an informed decision",
                            "rateMax": 7,
                            "minRateDescription": "Strongly agree",
                            "maxRateDescription": "Strongly disagree"
                        },
                        {
                            "type": "rating",
                            "name": "question6",
                            "title": "The information presented is useful only if available in realtime",
                            "rateMax": 7,
                            "minRateDescription": "Strongly agree",
                            "maxRateDescription": "Strongly disagree"
                        }
                    ],
                    "startWithNewLine": false
                }
            ]
        }
    ]
};