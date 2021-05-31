import React from "react";
import * as Survey from "survey-react";
// import * as widgets from "surveyjs-widgets";

import "survey-react/survey.css";

import { surveyJson } from "./CreateSurveyJSON.js";

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
	return (
		<div className="container">
			<h2>
				Explainability usability study - FGCS Special Issue on XAI in healthcare
			</h2>
			<Survey.Survey
				model={model}
				onComplete={onComplete}
				onValueChanged={onValueChanged}
			/>
		</div>
	);
}
