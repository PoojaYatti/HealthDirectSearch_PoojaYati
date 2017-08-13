$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Test Search functionality for HealthDirect",
  "description": "\r\nIn order to test searchbox\r\nAs a healthdirect user\r\nI want to enter some search critera and validate",
  "id": "test-search-functionality-for-healthdirect",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Validation of search results",
  "description": "",
  "id": "test-search-functionality-for-healthdirect;validation-of-search-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to HealthDirect on \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"\u003csearchkeyword\u003e\" in searchbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on searchicon",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The search results are \"\u003cexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "test-search-functionality-for-healthdirect;validation-of-search-results;",
  "rows": [
    {
      "cells": [
        "browser",
        "searchkeyword",
        "expectedResult"
      ],
      "line": 15,
      "id": "test-search-functionality-for-healthdirect;validation-of-search-results;;1"
    },
    {
      "cells": [
        "Chrome",
        "Diabetes",
        "Successful"
      ],
      "line": 16,
      "id": "test-search-functionality-for-healthdirect;validation-of-search-results;;2"
    },
    {
      "cells": [
        "Chrome",
        "xxxxxxxxxx",
        "Failed"
      ],
      "line": 17,
      "id": "test-search-functionality-for-healthdirect;validation-of-search-results;;3"
    },
    {
      "cells": [
        "Mozilla",
        "Autism",
        "Successful"
      ],
      "line": 18,
      "id": "test-search-functionality-for-healthdirect;validation-of-search-results;;4"
    },
    {
      "cells": [
        "Mozilla",
        "AB1@D23",
        "Failed"
      ],
      "line": 19,
      "id": "test-search-functionality-for-healthdirect;validation-of-search-results;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Validation of search results",
  "description": "",
  "id": "test-search-functionality-for-healthdirect;validation-of-search-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to HealthDirect on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Diabetes\" in searchbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on searchicon",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The search results are \"Successful\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 31
    }
  ],
  "location": "searchStepDefinition.i_navigate_to_HealthDirect_on(String)"
});
formatter.result({
  "duration": 12892412980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Diabetes",
      "offset": 9
    }
  ],
  "location": "searchStepDefinition.i_enter_in_searchbox(String)"
});
formatter.result({
  "duration": 415522234,
  "status": "passed"
});
formatter.match({
  "location": "searchStepDefinition.i_click_on_searchicon()"
});
formatter.result({
  "duration": 1129972472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successful",
      "offset": 24
    }
  ],
  "location": "searchStepDefinition.the_search_results_are(String)"
});
formatter.result({
  "duration": 267829994,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validation of search results",
  "description": "",
  "id": "test-search-functionality-for-healthdirect;validation-of-search-results;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to HealthDirect on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"xxxxxxxxxx\" in searchbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on searchicon",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The search results are \"Failed\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 31
    }
  ],
  "location": "searchStepDefinition.i_navigate_to_HealthDirect_on(String)"
});
formatter.result({
  "duration": 7048186563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xxxxxxxxxx",
      "offset": 9
    }
  ],
  "location": "searchStepDefinition.i_enter_in_searchbox(String)"
});
formatter.result({
  "duration": 265495869,
  "status": "passed"
});
formatter.match({
  "location": "searchStepDefinition.i_click_on_searchicon()"
});
formatter.result({
  "duration": 300293497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failed",
      "offset": 24
    }
  ],
  "location": "searchStepDefinition.the_search_results_are(String)"
});
formatter.result({
  "duration": 270854351,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validation of search results",
  "description": "",
  "id": "test-search-functionality-for-healthdirect;validation-of-search-results;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to HealthDirect on \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Autism\" in searchbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on searchicon",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The search results are \"Successful\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 31
    }
  ],
  "location": "searchStepDefinition.i_navigate_to_HealthDirect_on(String)"
});
formatter.result({
  "duration": 11233729866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autism",
      "offset": 9
    }
  ],
  "location": "searchStepDefinition.i_enter_in_searchbox(String)"
});
formatter.result({
  "duration": 246762138,
  "status": "passed"
});
formatter.match({
  "location": "searchStepDefinition.i_click_on_searchicon()"
});
formatter.result({
  "duration": 82615982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successful",
      "offset": 24
    }
  ],
  "location": "searchStepDefinition.the_search_results_are(String)"
});
formatter.result({
  "duration": 910851631,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validation of search results",
  "description": "",
  "id": "test-search-functionality-for-healthdirect;validation-of-search-results;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to HealthDirect on \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"AB1@D23\" in searchbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on searchicon",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The search results are \"Failed\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 31
    }
  ],
  "location": "searchStepDefinition.i_navigate_to_HealthDirect_on(String)"
});
formatter.result({
  "duration": 10815076792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AB1@D23",
      "offset": 9
    }
  ],
  "location": "searchStepDefinition.i_enter_in_searchbox(String)"
});
formatter.result({
  "duration": 253371075,
  "status": "passed"
});
formatter.match({
  "location": "searchStepDefinition.i_click_on_searchicon()"
});
formatter.result({
  "duration": 97306262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failed",
      "offset": 24
    }
  ],
  "location": "searchStepDefinition.the_search_results_are(String)"
});
formatter.result({
  "duration": 1039358539,
  "status": "passed"
});
});