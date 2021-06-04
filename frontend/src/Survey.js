import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";

import { surveyJson } from "./CreateSurveyJSON.js";

const EXAMPLE_OUTPUT_IMAGE = require("./assets/base_image.png").default;

Survey.StylesManager.applyTheme("default");

function onValueChanged(sender, options) {
  let question_class = class_regex.exec(options.question.name)[0];

  if (Survey.data[question_class]) {
    Survey.data[question_class][options.name] = options.value;
  } else {
    Survey.data[question_class] = {};
    Survey.data[question_class][options.name] = options.value;
  }
}

function onComplete() {
  fetch("http://localhost:5000/result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Survey.data),
  });
}

//setup the survey data
Survey.data = {};
let class_regex = /^(.*?)\_/;

export function SurveyPage() {
  let model = new Survey.Model(surveyJson);
  Survey.data["id"] = Date.now();
  model.showProgressBar = "bottom";
  model.showQuestionNumbers = "off";
  model.onAfterRenderQuestion.add(function (sender, options) {
    if (options.question.name === "displayExample") {
      let img = options.htmlElement.getElementsByTagName("img")[0];

      img.src = EXAMPLE_OUTPUT_IMAGE;
      options.htmlElement.onclick = function () {
        img.src == options.question.imageLink
          ? EXAMPLE_OUTPUT_IMAGE
          : options.question.imageLink;
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
