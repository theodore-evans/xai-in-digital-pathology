import React from "react";
import * as Survey from "survey-react";
// import * as widgets from "surveyjs-widgets";
import "survey-react/survey.css";

import { surveyJson } from "./CreateSurveyJSON.js";
import Images from "./assets";

Survey.StylesManager.applyTheme("default");

function onValueChanged(result) {
	console.log("value changed!");
}

function onComplete(result) {
	console.log("Complete! " + result);
}

export function SurveyPage() {
	var model = new Survey.Model(surveyJson);
	model.showProgressBar = "bottom";
	model.showQuestionNumbers = "off";
    model.showPreviewBeforeComplete = "showAllQuestions";
	model.onAfterRenderQuestion.add(function (sender, options) {
		if (options.question.name === "displayExample") {
			var img = options.htmlElement.getElementsByTagName("img")[0];
			img.src = Images.example_app_output;
			options.htmlElement.onmouseover = function () {
				img.src = options.question.imageLink;
			};
			options.htmlElement.onmouseout = function () {
				img.src = Images.example_app_output;
			};
		}
	});
	return (
		<div className="container">
			<h2>Explainable AI for digital pathology</h2>
			<Survey.Survey
				model={model}
				onComplete={onComplete}
				onValueChanged={onValueChanged}
			/>
		</div>
	);
}
