import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";

import "./survey.css";
import { surveyJson } from "./CreateSurveyJSON.js";
import Images from "./assets";
import { CONTENT } from "./SurveyContent.js";


//preload images on page load to prevent flickering later - global array to keep them in memory
let ImageArray = [];
Object.keys(Images).forEach((key) => {
  Object.keys(Images[key]).forEach((subkey) => {
    const img = new Image();
    img.src = typeof Images[key][subkey].default == "undefined" ? Images[key][subkey] : Images[key][subkey].default;
    ImageArray.push(img);
  });
});

const EXAMPLE_OUTPUT_IMAGE = require("./assets/base_image.png").default;
const RESULT_URL = "/result";

Survey.StylesManager.applyTheme("default");
Survey.surveyLocalization.locales[
  Survey.surveyLocalization.defaultLocale
].requiredError = "This answer is required.";

function onValueChanged(sender, options) {
  let question_class = class_regex.exec(options.question.name)[0];
  console.log(options.value);
  if (Survey.data[question_class]) {
    Survey.data[question_class][options.name] = options.value;
  } else {
    Survey.data[question_class] = {};
    Survey.data[question_class][options.name] = options.value;
  }
}

function onComplete() {
  window.scrollTo(0, 0);
  fetch(RESULT_URL, {
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
    let minText = options.htmlElement.getElementsByClassName("sv_q_rating_min_text")[0];
    let maxText = options.htmlElement.getElementsByClassName("sv_q_rating_max_text")[0];

    if (minText) {
      minText.innerHTML = `<div class="min-max-text">${CONTENT.minRateDescription}</div>`;
    }
    if (maxText) {
      maxText.innerHTML= `<div class="min-max-text">${CONTENT.maxRateDescription}</div>`;
    }

    if (options.question.name === "displayExample") {
      let img = options.htmlElement.getElementsByTagName("img")[0];
      //toggle both the image and the button text onclick
      img.src = options.question.imageLink;
      let explanation_img_src = img.src;
      options.htmlElement.onclick = function () {
        img.src =
          img.src == explanation_img_src
            ? EXAMPLE_OUTPUT_IMAGE
            : options.question.imageLink;

        let button = options.htmlElement.getElementsByTagName("button")[0];
        button.innerHTML =
          button.innerHTML == "Hide explanation"
            ? "Show explanation"
            : "Hide explanation";
      };

      createPrettyButton(options);
    }
  });

  return (
    <div className="container">
      <Survey.Survey
        model={model}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
        completedHtml={CONTENT.completedHtml}
        completeText={"Save & Complete"}
        logoHeight={"75"}
        logoWidth={"150px"}
      />
    </div>
  );
}

function createPrettyButton(options) {
  var btn = document.createElement("button");
  btn.innerHTML = "Hide explanation";

  btn.style.setProperty("margin-top", "10px");

  var header = options.htmlElement.firstChild;
  var span = document.createElement("span");
  span.innerHTML = "  ";
  header.appendChild(span);
  header.appendChild(btn);
}
