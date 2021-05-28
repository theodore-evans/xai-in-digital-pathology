import { questions } from "./survey_questions.js"

const REQUIRED_TEXT = "*"
const QUESTIONS_ARE_ON_NEW_LINE = false
const ANSWERS_ARE_REQUIRED = false
const COMMENT_ROWS = 3

function createCommentsBox(questionId) {
    return (
        {
            "type": "comment",
            "name": questionId + "_comments",
            "title": "Comments",
            "rows": COMMENT_ROWS
        }
    )
}

function createUserProfilingPage() {

    const USER_PROFILING_PAGE_ID = "user_profiling"

    var userProfilingPage = {
        "name": USER_PROFILING_PAGE_ID,
        "elements": []
    }

    for (var userProfilingQuestion of questions.userProfilingQuestions) {
        userProfilingPage.elements.push({
            "type": "rating",
            "name": userProfilingQuestion.id,
            "title": userProfilingQuestion.text,
            "rateMax": questions.rateMax,
            "minRateDescription": questions.minRateDescription,
            "maxRateDescription": questions.maxRateDescription,
            "isRequired": ANSWERS_ARE_REQUIRED
        })
    }

    userProfilingPage.elements.push(createCommentsBox(USER_PROFILING_PAGE_ID))

    return userProfilingPage
}

function createExamplePage(example) {

    var examplePage = {
        "name": "example_" + example.id,
        "title": example.description,
        "elements": [
            {
                "type": "panel",
                "elements": [
                    {
                        "type": "image",
                        "imageLink": example.outputImage,
                        "imageWidth": "256px",
                        "imageHeight": "256px",
                    },
                    {
                        "type": "html",
                        "html": example.outputDescription
                    }
                ],
                "width": "300px"
            },
            {
                "type": "panel",
                "elements": [
                    {
                        "type": "image",
                        "imageLink": example.explanationImage,
                        "imageWidth": "256px",
                        "imageHeight": "256px",
                    },
                    {
                        "type": "html",
                        "html": example.explanationDescription
                    }
                ],
                "width": "300px",
                "startWithNewLine": false
            }
        ]
    }

    var ratingPanel = {
        "type": "panel",
        "elements": [],
        "startWithNewLine": QUESTIONS_ARE_ON_NEW_LINE
    }

    for (var ratingQuestion of questions.ratingQuestions) {
        ratingPanel.elements.push(
            {
                "type": "rating",
                "name": example.id + "_" + ratingQuestion.id,
                "title": ratingQuestion.text,
                "rateMax": questions.rateMax,
                "minRateDescription": questions.minRateDescription,
                "maxRateDescription": questions.maxRateDescription,
                "isRequired": ANSWERS_ARE_REQUIRED
            }
        )
    }

    ratingPanel.elements.push(createCommentsBox(example.id))
    examplePage.elements.push(ratingPanel)

    return examplePage
}

var surveyJson = {
    "requiredText": REQUIRED_TEXT,
    "pages": [
        {
        }
    ]
}

surveyJson.pages.push(createUserProfilingPage())

for (var example of questions.examples) {
    surveyJson.pages.push(createExamplePage(example))
}

export { surveyJson };