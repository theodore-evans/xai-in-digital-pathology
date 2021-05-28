import {questions} from "./survey_questions.js"

const questionsAreOnNewLine = false
const answersAreRequired = false

const comment_rows = 2

function create_user_profiling_page() {
    var user_profiling_page = {
        "name": "user_profiling",
        "elements": []
    }

    for (var user_profiling_question of questions.user_profiling_questions) {
        user_profiling_page.elements.push({
            "type": "rating",
            "name": user_profiling_question.id,
            "title": user_profiling_question.text,
            "rateMax": questions.rateMax,
            "minRateDescription": questions.minRateDescription,
            "maxRateDescription": questions.maxRateDescription,
            "isRequired": answersAreRequired
        })
    }
    
    return user_profiling_page
}

function create_example_page(example) {
    
    var example_page = {
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
            }
        ]
    }

    var rating_panel = {
        "type": "panel",
        "elements": [],
        "startWithNewLine": questionsAreOnNewLine
    }

    var comments_question = {
        "type": "comment",
        "name": "q" + example.id + "_comments",
        "title": "Comments",
        "rows": comment_rows
    }

    for (var rating_question of questions.rating_questions) {
        rating_panel.elements.push(
            {
                "type": "rating",
                "name": "q" + example.id + "_" + rating_question.id,
                "title": rating_question.text,
                "rateMax": questions.rateMax,
                "minRateDescription": questions.minRateDescription,
                "maxRateDescription": questions.maxRateDescription,
                "isRequired": answersAreRequired
            }
        )
    }

    rating_panel.elements.push(comments_question)
    example_page.elements.push(rating_panel)

    return example_page
}

var survey_json = {
    "requiredText": "*",
    "pages": [
        {
        }
    ]
}

survey_json.pages.push(create_user_profiling_page())

for (var example of questions.examples) {
    survey_json.pages.push(create_example_page(example))
}

export {survey_json};