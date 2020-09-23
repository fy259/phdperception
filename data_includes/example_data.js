/*
-Audio Perception-Experiments--

*/

var shuffleSequence = seq("intro", "practice", sepWith("sep", seq("story")), sepWith("sep", startsWith("q")));
var practiceItemTypes = ["practice"];
var centerItems = true;


var defaults = [
    "Separator", {
        transfer: 1000, //wait for 1000ms
          //other options: "keypress", "click"
        normalMessage: "请等候下一个句子。", //message to be displayed
        errorMessage: "错误，请等候下一个句子。" //message to be displayed in red
    },

    "Message", {
        //"html" option is obligatory
        hideProgressBar: false,
        transfer: "keypress"
    },

    "DashedSentence", {
        //"s" option is obligatory
        mode: "self-paced reading"
          //other option: "speeded acceptability"
    },

    "Question", {
        //"as" option is obligatory
        as: ["听见了", "听不见"],
       
    },


    //These settings are needed for audio Type 1
    "AcceptabilityJudgment", {
        //"s" option is obligatory
        //"q" option is obligatory
        //"as" option is obligatory
        as: ["OK"],
        //writing the "as" option here means that this is the default for
        //all AcceptabilityJudgment items
        presentAsScale: true, //presents the "as" option as a scale
        instructions: "点击OK之后回答问题",
        // leftComment: "(Bad)", //displayed on the left side of the scale
        // rightComment: "(Good)", //displayed on the right side of the scale
        //only two audio options available so far
        audioMessage: { html: "<u> 请点击此处听录音</u>" },
        audioTrigger: "click"
        //do not change this
        //click, we do have another option at this point of time
    },

    "DashedAcceptabilityJudgment", {
        //combination of AcceptabilityJudgment and DashedSentence
        //"s" option is obligatory
        //"q" option is obligatory
        //"as" option is obligatory
        hasCorrect: false
    },

    "Form", {
        //"html" option is obligatory
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];



var randomnumber=Math.floor(Math.random()*10000000001);
var completionCode=String("LIR" + randomnumber);
var sendingResultsMessage = "正在保存您的回答，请稍等";
var completionMessage = "您的回答已成功保存，感谢您的参与" ;
var completionErrorMessage = "保存失败，实验人员将为您提供帮助" ;


var items = [

    /*
    ===================
    SEPARATOR
    The pause needed between each item of the experiment
    ===================
    */

    //ends after timer (1000ms)
    ["sep", "Separator", {transfer: 1000, normalMessage: "请等候下一道题"}],

  


    /*
    ===================
    INTRODUCTION
    Can include files for Questionnaires, consent forms etc...
    ===================
    */

    //name of controller
    ["intro",
      //type
      "Form",
      //obligatory option that includes a HTML file that is a questionnaire
      {html: { include: "example_intro.html" },
      //fields that need to have the right format when taking input from user
      validators: {
        //age has to be a number
        age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],


    /*
    ===================
    TEXT
    Controllers that work with Text and Questions
    ===================
    */

    //text displayed word by word
    
    ["q1", "AcceptabilityJudgment", {
    s: {
      audio: "summersplash.mp3"
    }},
    // Just to check if participant can hear audio or No
    "Question", {
      q: '你听见声音了吗？'
    }],


    ["q2", "AcceptabilityJudgment", {
    s: {
      audio: "dianr.mp3"
    }},
    // Just to check if participant can hear audio or No
    "Question", {
                              //if a question has a correct answer (hasCorrect: true), you would have to put
                              //that answer as the first element in the "as" optio
                  q: "哪一个回答更自然？",
                              as: ["小王拿了花给小美", //this would be the correct answer if hasCorrect:true
                                   "我知道",
                                   ]}],
                 
                  ["q3", "AcceptabilityJudgment", {
    s: {
      audio: "goumai.mp3"
    }},
    // Just to check if participant can hear audio or No
    "Question", {hasCorrect: false, randomOrder: false,
                              //if a question has a correct answer (hasCorrect: true), you would have to put
                              //that answer as the first element in the "as" optio
                  q: "刚才播放的句子，你觉得听起来自然吗？",
                              as: ["自然", //this would be the correct answer if hasCorrect:true
                                   "不自然",
                                   ]}],

    
    
    
  
];