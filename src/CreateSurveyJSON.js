import { CONTENT } from "./SurveyContent.js";

const REQUIRED_TEXT = "*";
const QUESTIONS_ARE_ON_NEW_LINE = false;
const ANSWERS_ARE_REQUIRED = false;
const COMMENT_ROWS = 4;
const SHUFFLE_EXAMPLES = true;
const DISPLAY_EXAMPLE_DESCRIPTIONS = false;

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

function createExamplePage(example) {
	var examplePage = {
		name: "example_" + example.id,
		title: DISPLAY_EXAMPLE_DESCRIPTIONS ? example.description : "",
		elements: [
			{
				type: "panel",
				elements: [
					{
						type: "image",
						name: "displayExample",
						imageLink: example.explanationImage,
						imageWidth: "500px",
						imageHeight: "500px",
					},
				],
				// width: "600px",
			},
		],
	};

	var ratingPanel = {
		type: "panel",
		elements: [],
		startWithNewLine: QUESTIONS_ARE_ON_NEW_LINE,
	};

	for (var ratingQuestion of CONTENT.ratingQuestions) {
		ratingPanel.elements.push({
			type: "rating",
			name: example.id + "_" + ratingQuestion.id,
			title: ratingQuestion.text,
			rateMax: CONTENT.rateMax,
			minRateDescription: CONTENT.minRateDescription,
			maxRateDescription: CONTENT.maxRateDescription,
			isRequired: ANSWERS_ARE_REQUIRED,
		});
	}

	ratingPanel.elements.push(createCommentsBox(example.id));
	examplePage.elements.push(ratingPanel);

	return examplePage;
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

surveyJson.pages.push(createUserProfilingPage())

// surveyJson.pages.push(createInstructionsPage())

for (var example of SHUFFLE_EXAMPLES
	? CONTENT.examples.sort(randomize)
	: CONTENT.examples) {
	surveyJson.pages.push(createExamplePage(example));
}

export { surveyJson };
