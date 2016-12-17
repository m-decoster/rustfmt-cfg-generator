/* file: config.js

Copyright 2016 The rustfmt-cfg-generator developers

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

var config = {};

function showOptions(index) {
    document.getElementById("choices").innerHTML = "";

    var optionCount = document.getElementById("option-count");
    optionCount.innerHTML = index + 1;

    var currentOptions = options[index];

    for (var i = 0; i < currentOptions.length; i++) {
        var choicesElement = document.getElementById("choices");
        var div = document.createElement("div");
        div.className += "option";
        div.addEventListener("click", createAddToConfigCallback(index, i));
        var description = document.createElement("h4");
        var checkmarkBallot = "&#10007; ";
        if (currentOptions[i].default) {
            checkmarkBallot = "&#10003; ";
        }
        description.innerHTML = checkmarkBallot + currentOptions[i].description;
        var code = document.createElement("pre");
        code.innerHTML = currentOptions[i].example;

        div.appendChild(description);
        div.appendChild(code);
        choicesElement.appendChild(div);
    }
}

function addToConfig(optionIndex, choiceIndex) {
    var choice = options[optionIndex][choiceIndex];
    console.log("Adding: ", choice.key, choice.value);
    config[choice.key] = choice.value;
}

function createAddToConfigCallback(optionIndex, choiceIndex) {
    return function() {
        addToConfig(optionIndex, choiceIndex);
        if(optionIndex < options.length - 1) {
            showOptions(optionIndex + 1);
        } else {
            generateConfigFile();
        }
    };
}

function generateConfigFile() {
    document.getElementById("counter").className += "hidden";

    var questionDiv = document.getElementById("question-choice");
    questionDiv.className += "hidden";
    var configDiv = document.getElementById("question-config");
    configDiv.className = "";

    document.getElementById("choices").innerHTML = "";

    var configString = "";
    for (var key in config) {
        configString += key + " = " + config[key] + "\n";
    }

    var configDiv = document.createElement("pre");
    configDiv.id = "config-file";
    configDiv.innerHTML = configString;

    document.getElementById("choices").appendChild(configDiv);

    console.log(configString);
}

showOptions(0);

var optionCount = document.getElementById("option-count");
optionCount.innerHTML = "1";
var optionTotal = document.getElementById("option-total");
optionTotal.innerHTML = options.length;