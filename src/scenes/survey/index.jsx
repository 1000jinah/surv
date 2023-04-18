import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/modern.min.css";
import "../../index.css"
import { json } from "../../json";

function animate(show) {
  const element = document.getElementById("surveyElement");
  if (!!element) {
    const list = element.classList;
    if (!list.contains("expandable")) {
      list.add("expandable");
    }
    if (show) {
      list.add("expandable_show");
    } else {
      list.remove("expandable_show");
    }
  }
}

var doAnimantion = true;
function Survesy() {
  const survey = new Model(json);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  survey.onCurrentPageChanging.add(function (sender, options) {
    if (!doAnimantion) return;
    options.allowChanging = false;
    setTimeout(function () {
      doAnimantion = false;
      sender.currentPage = options.newCurrentPage;
      doAnimantion = true;
    }, 500);
    animate(false);
  });
  survey.onCurrentPageChanged.add(function (sender) {
    animate(true);
  });
  survey.onCompleting.add(function (sender, options) {
    if (!doAnimantion) return;
    options.allowComplete = false;
    setTimeout(function () {
      doAnimantion = false;
      sender.doComplete();
      doAnimantion = true;
    }, 500);
    animate(false);
  });
  survey.onAfterRenderSurvey.add((sender, options) => {
    animate(true);
  });
  return <Survey model={survey} />;
}
export default Survesy;
