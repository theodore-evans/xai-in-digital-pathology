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

function createUserProfilingPage() {
  var userProfilingPage = {
    id: CONTENT.userProfiling.id,
    elements: [],
  };

  for (var userProfilingQuestion of CONTENT.userProfiling.questions) {
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

  userProfilingPage.elements.push(createCommentsBox(CONTENT.userProfiling.id));

  return userProfilingPage;
}

function selectRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

function screenWidth() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}

function createImagePanel(name, link, idealWidth) {
  let minScreenWidth = 1200;
  let padding = 50;
  let imageWidth = idealWidth ;
  
  if (screenWidth() < minScreenWidth) {
    imageWidth = screenWidth();
  }

  let panelWidth = idealWidth + padding;

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
  var pages = [];

  for (var instance of SHUFFLE_EXPLANATION_CLASSES
    ? explanationClass.instances.sort(randomize)
    : explanationClass.instances) {
    var pageId = `${explanationClass.id}_${instance.id}`;
    var imageIndex = selectRandomIndex(instance.images);

    var page = {
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
  let page = {
    name: "info_page",
    elements: [],
  };

  page.elements.push({
    type: "html",
    html: CONTENT.instructionsHTML,
  });

  page.elements.push(createImagePanel("baseImage", CONTENT.baseImage, 600));

  return page;
}

var surveyJson = {
  title: CONTENT.title,
  requiredText: REQUIRED_TEXT,
  pages: [],
};

surveyJson.pages.push(createInstructionsPage());

surveyJson.pages.push(createUserProfilingPage());

for (var explanationClass of SHUFFLE_EXPLANATION_CLASSES
  ? CONTENT.explanationClasses.sort(randomize)
  : CONTENT.explanationClasses) {
  surveyJson.pages.push(...createPagesForExplanationClass(explanationClass));
}

export { surveyJson };
