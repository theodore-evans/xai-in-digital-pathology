import { CONTENT } from "./SurveyContent.js";

const REQUIRED_TEXT = "*";
const QUESTIONS_ARE_ON_NEW_LINE = false;
const ANSWERS_ARE_REQUIRED = false;
const COMMENT_ROWS = 3;
const SHUFFLE_EXPLANATION_CLASSES = true;

function randomize(a, b) {
  return Math.random() - 0.5;
}

function createCommentsBox(questionId) {
  return {
    type: "comment",
    name: questionId + "_comments",
    title: "Comments",
    rows: COMMENT_ROWS,
  };
}

function createUserProfilingPage() {
  const USER_PROFILING_PAGE_ID = "user_profiling";

  var userProfilingPage = {
    name: USER_PROFILING_PAGE_ID,
    elements: [],
  };

  for (var userProfilingQuestion of CONTENT.userProfilingQuestions) {
    userProfilingPage.elements.push({
      type: "rating",
      name: userProfilingQuestion.id,
      title: userProfilingQuestion.text,
      rateMax: CONTENT.rateMax,
      minRateDescription: CONTENT.minRateDescription,
      maxRateDescription: CONTENT.maxRateDescription,
      isRequired: ANSWERS_ARE_REQUIRED,
    });
  }

  userProfilingPage.elements.push(createCommentsBox(USER_PROFILING_PAGE_ID));

  return userProfilingPage;
}

function selectRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

function createPagesForExplanationClass(explanationClass) {
  var pages = [];

  for (var instance of SHUFFLE_EXPLANATION_CLASSES
    ? explanationClass.instances.sort(randomize)
    : explanationClass.instances) {
    var pageId = `${explanationClass.id}_${instance.id}`;
    var imageIndex = selectRandomIndex(instance.images);

    //get screen size
    var width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    var height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    let computedWidth = "650px";
    if (width < 1200) {
      computedWidth = `${width - 50}px`;
    }
    console.log(`height ${height} width ${width}`);

    var page = {
      name: pageId,
      elements: [
        {
          type: "panel",
          elements: [
            {
              type: "image",
              name: "displayExample",
              imageLink: instance.images[imageIndex],
              imageWidth: computedWidth,
              imageHeight: computedWidth,
            },
          ],
          width: computedWidth,
        },
      ],
    };

    var ratingPanel = {
      type: "panel",
      elements: [
        {
          type: "html",
          html: `<h3>${instance.name}</h3>${instance.description}`,
        },
      ],
      startWithNewLine: QUESTIONS_ARE_ON_NEW_LINE,
    };

    for (var ratingQuestion of CONTENT.ratingQuestions) {
      ratingPanel.elements.push({
        type: "rating",
        name: `${pageId}_image${imageIndex}_${ratingQuestion.id}`,
        title: ratingQuestion.text,
        rateMax: CONTENT.rateMax,
        minRateDescription: CONTENT.minRateDescription,
        maxRateDescription: CONTENT.maxRateDescription,
        isRequired: ANSWERS_ARE_REQUIRED,
      });
    }

    ratingPanel.elements.push(createCommentsBox(pageId));
    page.elements.push(ratingPanel);

    pages.push(page);
  }

  return pages;
}

function createInstructionsPage() {
  return {
    name: "info_page",
    elements: [
      {
        type: "html",
        html: CONTENT.instructionsHTML,
      },
    ],
  };
}

var surveyJson = {
  requiredText: REQUIRED_TEXT,
  pages: [{}],
};

surveyJson.pages.push(createUserProfilingPage());

// surveyJson.pages.push(createInstructionsPage())

for (var explanationClass of SHUFFLE_EXPLANATION_CLASSES
  ? CONTENT.explanationClasses.sort(randomize)
  : CONTENT.explanationClasses) {
  surveyJson.pages.push(...createPagesForExplanationClass(explanationClass));
}

export { surveyJson };
