import { QUESTIONS, INSTRUCTIONS } from "./SurveyContent.js"

const REQUIRED_TEXT = "*"
const QUESTIONS_ARE_ON_NEW_LINE = false
const ANSWERS_ARE_REQUIRED = false
const COMMENT_ROWS = 3
const SHUFFLE_EXAMPLES = true

function randomize(a, b) {
    return Math.random() - 0.5;
}

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

    for (var userProfilingQuestion of QUESTIONS.userProfilingQuestions) {
        userProfilingPage.elements.push({
            "type": "rating",
            "name": userProfilingQuestion.id,
            "title": userProfilingQuestion.text,
            "rateMax": QUESTIONS.rateMax,
            "minRateDescription": QUESTIONS.minRateDescription,
            "maxRateDescription": QUESTIONS.maxRateDescription,
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
                        "html": "<b>RESULT</b>" + example.outputDescription
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
                        "html": "<b>EXPLANATION</b>" + example.explanationDescription
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

    for (var ratingQuestion of QUESTIONS.ratingQuestions) {
        ratingPanel.elements.push(
            {
                "type": "rating",
                "name": example.id + "_" + ratingQuestion.id,
                "title": ratingQuestion.text,
                "rateMax": QUESTIONS.rateMax,
                "minRateDescription": QUESTIONS.minRateDescription,
                "maxRateDescription": QUESTIONS.maxRateDescription,
                "isRequired": ANSWERS_ARE_REQUIRED
            }
        )
    }

    ratingPanel.elements.push(createCommentsBox(example.id))
    examplePage.elements.push(ratingPanel)

    return examplePage
}

function createInstructionsPage() {
    return (
        {
            "name": "info_page",
            "elements": [
                {
                    "type": "html",
                    "html": INSTRUCTIONS
                }
            ]
        }
    )
}

var surveyJson = {
    "requiredText": REQUIRED_TEXT,
    "pages": [
        {
        }
    ]
}

// surveyJson.pages.push(createUserProfilingPage())

// surveyJson.pages.push(createInstructionsPage())

for (var example of SHUFFLE_EXAMPLES ? QUESTIONS.examples.sort(randomize) : QUESTIONS.examples) {
    surveyJson.pages.push(createExamplePage(example))
}

export { surveyJson };