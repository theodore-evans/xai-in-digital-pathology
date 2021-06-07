import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { surveyJson } from "./CreateSurveyJSON.js";

const EXAMPLE_OUTPUT_IMAGE = require("./assets/base_image.png").default;
const API_URL = "http://130.149.232.161:5000/result";

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
  fetch(API_URL, {
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

console.log(surveyJson);

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
        img.src =
          img.src == options.question.imageLink
            ? EXAMPLE_OUTPUT_IMAGE
            : options.question.imageLink;
      };
      var btn = document.createElement("button");
      btn.type = "button";
      // console.log(htmlElement);
      console.log(options);
      // let imageContainer = options.htmlElement.querySelector("sv_q_image");
      options.htmlElement.parentNode.appendChild(btn);
    }
  });
  return (
    <div className="container">
      <Survey.Survey
        model={model}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
      />
    </div>
  );
}
