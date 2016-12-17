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
        description.innerHTML = currentOptions[i].description;
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