import {questions} from "./survey_questions.js"

const rating_question_1 = "The information presented is intuitively understandable"
const rating_question_2 = "The information presented helps me to make an informed decision"
const rating_question_3 = "The information presented is useful only if available in realtime"

const minRateDescription = "Strongly disagree"
const maxRateDescription = "Strongly agree"
const rateMax = 7
const questionsAreOnNewLine = false
const answersAreRequired = false

const comment_rows = 2

var json = {
    "requiredText": "*",
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
                    "maxRateDescription": maxRateDescription,
                    "isRequired": answersAreRequired
                },
                {
                    "type": "rating",
                    "name": "q0_2",
                    "title": "I am familiar with the use of AI applications in digital pathology",
                    "rateMax": rateMax,
                    "minRateDescription": minRateDescription,
                    "maxRateDescription": maxRateDescription,
                    "isRequired": answersAreRequired
                },
                {
                    "type": "rating",
                    "name": "q0_3",
                    "title": "I am familiar with technical details of machine learning",
                    "rateMax": rateMax,
                    "minRateDescription": minRateDescription,
                    "maxRateDescription": maxRateDescription,
                    "isRequired": answersAreRequired
                }
            ]
        }
    ]
}

// EXAMPLE 1: GradCAM
function create_example_page(example) {
    return (
        {
            "name": "example_" + example.id,
            "title": example.description,
            "elements": [
                {
                    "type": "panel",
                    "elements": [
                        {
                            "type": "image",
                            "imageLink": example.output_image,
                            "imageWidth": "256px",
                            "imageHeight": "256px",
                        },
                        {
                            "type": "html",
                            "html": example.output_description
                        }
                    ],
                    "width": "300px"
                },
                {
                    "type": "panel",
                    "elements": [
                        {
                            "type": "image",
                            "imageLink": example.explanation_image,
                            "imageWidth": "256px",
                            "imageHeight": "256px",
                        },
                        {
                            "type": "html",
                            "html": example.explanation_description
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
                            "name": "q" + example.id + "_1",
                            "title": rating_question_1,
                            "rateMax": rateMax,
                            "minRateDescription": minRateDescription,
                            "maxRateDescription": maxRateDescription,
                            "isRequired": answersAreRequired
                        },
                        {
                            "type": "rating",
                            "name": "q" + example.id + "_2",
                            "title": rating_question_2,
                            "rateMax": rateMax,
                            "minRateDescription": minRateDescription,
                            "maxRateDescription": maxRateDescription,
                            "isRequired": answersAreRequired
                        },
                        {
                            "type": "rating",
                            "name": "q" + example.id + "_3",
                            "title": rating_question_3,
                            "rateMax": rateMax,
                            "minRateDescription": minRateDescription,
                            "maxRateDescription": maxRateDescription,
                            "isRequired": answersAreRequired
                        },
                        {
                            "type": "comment",
                            "name": "q" + example.id + "_comments",
                            "title": "Comments (optional)",
                            "rows": comment_rows
                        }
                    ],
                    "startWithNewLine": questionsAreOnNewLine
                }
            ]
        }
    )
}

for (var example of questions.examples) {
    json.pages.push(create_example_page(example))
}

export {json};