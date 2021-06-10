import { CONTENT } from "./SurveyContent.js";

const REQUIRED_TEXT = "*";
const QUESTIONS_ARE_ON_NEW_LINE = false;
const ANSWERS_ARE_REQUIRED = false;
const COMMENT_ROWS = 3;
const SHUFFLE_EXPLANATION_CLASSES = true;
const IDEAL_IMAGE_WIDTH = 600;

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

function createDropdownQuestion(questionId, questionContent) {
  let dropdownQuestionElements = [];
  dropdownQuestionElements.push({
    type: "dropdown",
    name: questionId,
    title: questionContent.title,
    choices: [],
    hasOther: questionContent.hasOther,
    isRequired: ANSWERS_ARE_REQUIRED,
    startWithNewLine: questionContent.startWithNewLine,
  });

  for (let choice of questionContent.choices) {
    dropdownQuestionElements[0].choices.push(choice);
  }

  if (questionContent.additionalDetails) {
    let details = questionContent.additionalDetails;
    dropdownQuestionElements.push({
      type: details.type,
      name: `${questionId}_details`,
      title: details.title,
      visibleIf: `[${details.visibleIfValues}] contains({${questionId}})`,
      isRequired: false,
    });
  }
  return dropdownQuestionElements;
}

function createRatingQuestion(questionId, questionContent) {
  return {
    type: "rating",
    name: questionId,
    title: questionContent.title,
    rateMax: CONTENT.rateMax,
    minRateDescription: CONTENT.minRateDescription,
    maxRateDescription: CONTENT.maxRateDescription,
    isRequired: ANSWERS_ARE_REQUIRED,
    startWithNewLine: questionContent.startWithNewLine,
  };
}

function createUserProfilingPage() {
  var userProfilingPage = {
    id: CONTENT.userProfiling.id,
    elements: [],
  };

  for (let dropdownQuestion of CONTENT.userProfiling.dropdownQuestions) {
    userProfilingPage.elements.push(
      ...createDropdownQuestion(
        `user_profiling_${dropdownQuestion.id}`,
        dropdownQuestion
      )
    );
  }

  for (let ratingQuestion of CONTENT.userProfiling.ratingQuestions) {
    userProfilingPage.elements.push(
      createRatingQuestion(
        `user_profiling_${ratingQuestion.id}`,
        ratingQuestion
      )
    );
  }

  userProfilingPage.elements.push(createCommentsBox(CONTENT.userProfiling.id));

  return userProfilingPage;
}

function selectRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

export function screenWidth() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}

function createImagePanel(name, link, idealWidth) {
  let minScreenWidth = 600;
  let padding = 50;
  let imageWidth = idealWidth - padding;
  let panelWidth = idealWidth;

  if (screenWidth() < minScreenWidth) {
    imageWidth = screenWidth() - 1.5*padding;
    panelWidth = screenWidth() - padding;
  }

  return {
    type: "panel",
    elements: [
      {
        type: "image",
        name: name,
        imageLink: link,
        imageWidth: `${imageWidth}px`,
        imageHeight: `${imageWidth}px`,
      },
    ],
    width: `${panelWidth}px`,
    startWithNewLine: false,
  };
}

function createPagesForExplanationClass(explanationClass) {
  let pages = [];

  for (let instance of SHUFFLE_EXPLANATION_CLASSES
    ? explanationClass.instances.sort(randomize)
    : explanationClass.instances) {
    let pageId = `${explanationClass.id}_${instance.id}`;
    let imageIndex = selectRandomIndex(instance.images);

    let page = {
      name: pageId,
      elements: [],
    };

    page.elements.push(
      createImagePanel(
        "displayExample",
        instance.images[imageIndex],
        IDEAL_IMAGE_WIDTH
      )
    );

    let ratingPanel = {
      type: "panel",
      elements: [
        {
          type: "html",
          html: `<h3>${instance.name}</h3>${instance.description}`,
        },
      ],
      startWithNewLine: QUESTIONS_ARE_ON_NEW_LINE,
    };

    for (let ratingQuestion of CONTENT.ratingQuestions) {
      ratingPanel.elements.push(
        createRatingQuestion(
          `${pageId}_image${imageIndex}_${ratingQuestion.id}`,
          ratingQuestion
        )
      );
    }

    ratingPanel.elements.push(createCommentsBox(pageId));
    page.elements.push(ratingPanel);

    pages.push(page);
  }

  return pages;
}

function createInstructionsPage() {
  let page = {
    name: "info_page",
    elements: [],
  };

  page.elements.push({
    type: "html",
    html: CONTENT.instructionsHTML,
  });

  page.elements.push(createImagePanel("baseImage", CONTENT.baseImage, 550));

  return page;
}

let surveyJson = {
  title: CONTENT.title,
  requiredText: REQUIRED_TEXT,
  clearInvisibleValues: "onHidden",
  pages: [],
  logo: CONTENT.logoImage,
};

surveyJson.pages.push(createInstructionsPage());
surveyJson.pages.push(createUserProfilingPage());
for (var explanationClass of SHUFFLE_EXPLANATION_CLASSES
  ? CONTENT.explanationClasses.sort(randomize)
  : CONTENT.explanationClasses) {
  surveyJson.pages.push(...createPagesForExplanationClass(explanationClass));
}

export { surveyJson };
