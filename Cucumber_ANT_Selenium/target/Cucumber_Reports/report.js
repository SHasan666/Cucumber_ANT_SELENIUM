$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 3,
  "name": "Test Facebook Login",
  "description": "In order to work \nAs a user\nI want to login",
  "id": "test-facebook-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Test login with valid cred",
  "description": "",
  "id": "test-facebook-login;test-login-with-valid-cred",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Runmode is \"\u003cRunmode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Open \"\u003cBrowser\u003e\" and go to \"testSitebaseURL\"",
  "rows": [
    {
      "cells": [
        "URL_Description",
        "URL"
      ],
      "line": 11
    },
    {
      "cells": [
        "Prod",
        "https://www.google.com"
      ],
      "line": 12
    },
    {
      "cells": [
        "Uat",
        "https://www.google.com"
      ],
      "line": 13
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on \"loginButton\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Login should be \"\u003cExpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "test-facebook-login;test-login-with-valid-cred;",
  "rows": [
    {
      "cells": [
        "Runmode",
        "Browser",
        "username",
        "password",
        "ExpectedResult"
      ],
      "line": 19,
      "id": "test-facebook-login;test-login-with-valid-cred;;1"
    },
    {
      "cells": [
        "N",
        "Mozilla",
        "sakib@gmail.com",
        "1234",
        "Fail"
      ],
      "line": 20,
      "id": "test-facebook-login;test-login-with-valid-cred;;2"
    },
    {
      "cells": [
        "N",
        "Mozilla",
        "zerin@gmail.com",
        "12345555",
        "Success"
      ],
      "line": 21,
      "id": "test-facebook-login;test-login-with-valid-cred;;3"
    },
    {
      "cells": [
        "Y",
        "Mozilla",
        "seleniumsakib@gmail.com",
        "sakib1234",
        "Success"
      ],
      "line": 22,
      "id": "test-facebook-login;test-login-with-valid-cred;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Test login with valid cred",
  "description": "",
  "id": "test-facebook-login;test-login-with-valid-cred;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Runmode is \"N\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Open \"Mozilla\" and go to \"testSitebaseURL\"",
  "matchedColumns": [
    1
  ],
  "rows": [
    {
      "cells": [
        "URL_Description",
        "URL"
      ],
      "line": 11
    },
    {
      "cells": [
        "Prod",
        "https://www.google.com"
      ],
      "line": 12
    },
    {
      "cells": [
        "Uat",
        "https://www.google.com"
      ],
      "line": 13
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter valid \"sakib@gmail.com\" and valid \"1234\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on \"loginButton\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Login should be \"Fail\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 12
    }
  ],
  "location": "CommonUtil.Runmode_is(String)"
});
formatter.result({
  "duration": 108522337,
  "error_message": "cucumber.api.PendingException: Skipping the test as Runmode is No\r\n\tat com.van.stepDefination.CommonUtil.Runmode_is(Unknown Source)\r\n\tat ✽.Given Runmode is \"N\"(1Login.feature:9)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 6
    },
    {
      "val": "testSitebaseURL",
      "offset": 26
    }
  ],
  "location": "Login_Step.Open_Browser_and_go_to_url(String,String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sakib@gmail.com",
      "offset": 15
    },
    {
      "val": "1234",
      "offset": 43
    }
  ],
  "location": "Login_Step.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "Login_Step.I_click_on_login_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fail",
      "offset": 17
    }
  ],
  "location": "Login_Step.user_should_be_able_to_login_successfully(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 179219,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Test login with valid cred",
  "description": "",
  "id": "test-facebook-login;test-login-with-valid-cred;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Runmode is \"N\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Open \"Mozilla\" and go to \"testSitebaseURL\"",
  "matchedColumns": [
    1
  ],
  "rows": [
    {
      "cells": [
        "URL_Description",
        "URL"
      ],
      "line": 11
    },
    {
      "cells": [
        "Prod",
        "https://www.google.com"
      ],
      "line": 12
    },
    {
      "cells": [
        "Uat",
        "https://www.google.com"
      ],
      "line": 13
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter valid \"zerin@gmail.com\" and valid \"12345555\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on \"loginButton\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Login should be \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 12
    }
  ],
  "location": "CommonUtil.Runmode_is(String)"
});
formatter.result({
  "duration": 303173,
  "error_message": "cucumber.api.PendingException: Skipping the test as Runmode is No\r\n\tat com.van.stepDefination.CommonUtil.Runmode_is(Unknown Source)\r\n\tat ✽.Given Runmode is \"N\"(1Login.feature:9)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 6
    },
    {
      "val": "testSitebaseURL",
      "offset": 26
    }
  ],
  "location": "Login_Step.Open_Browser_and_go_to_url(String,String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "zerin@gmail.com",
      "offset": 15
    },
    {
      "val": "12345555",
      "offset": 43
    }
  ],
  "location": "Login_Step.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "Login_Step.I_click_on_login_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 17
    }
  ],
  "location": "Login_Step.user_should_be_able_to_login_successfully(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 41845,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Test login with valid cred",
  "description": "",
  "id": "test-facebook-login;test-login-with-valid-cred;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Open \"Mozilla\" and go to \"testSitebaseURL\"",
  "matchedColumns": [
    1
  ],
  "rows": [
    {
      "cells": [
        "URL_Description",
        "URL"
      ],
      "line": 11
    },
    {
      "cells": [
        "Prod",
        "https://www.google.com"
      ],
      "line": 12
    },
    {
      "cells": [
        "Uat",
        "https://www.google.com"
      ],
      "line": 13
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter valid \"seleniumsakib@gmail.com\" and valid \"sakib1234\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on \"loginButton\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Login should be \"Success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "CommonUtil.Runmode_is(String)"
});
formatter.result({
  "duration": 91189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 6
    },
    {
      "val": "testSitebaseURL",
      "offset": 26
    }
  ],
  "location": "Login_Step.Open_Browser_and_go_to_url(String,String,DataTable)"
});
formatter.result({
  "duration": 10424594249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seleniumsakib@gmail.com",
      "offset": 15
    },
    {
      "val": "sakib1234",
      "offset": 51
    }
  ],
  "location": "Login_Step.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 2159355630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "Login_Step.I_click_on_login_button(String)"
});
formatter.result({
  "duration": 2556066196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 17
    }
  ],
  "location": "Login_Step.user_should_be_able_to_login_successfully(String)"
});
formatter.result({
  "duration": 908290377,
  "status": "passed"
});
formatter.after({
  "duration": 26844,
  "status": "passed"
});
formatter.uri("2HomePage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 3,
  "name": "Home Page Test",
  "description": "",
  "id": "home-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@HomePage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Test profile and home button",
  "description": "",
  "id": "home-page-test;test-profile-and-home-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@HomePageButtonTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "\"\u003cButtons\u003e\" should be present",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "home-page-test;test-profile-and-home-button;",
  "rows": [
    {
      "cells": [
        "Buttons"
      ],
      "line": 13,
      "id": "home-page-test;test-profile-and-home-button;;1"
    },
    {
      "cells": [
        "profilelink"
      ],
      "line": 14,
      "id": "home-page-test;test-profile-and-home-button;;2"
    },
    {
      "cells": [
        "homelink"
      ],
      "line": 15,
      "id": "home-page-test;test-profile-and-home-button;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am logged in facebook with Mozilla",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 29
    }
  ],
  "location": "CommonUtil.i_am_logged_in_facebook_with(String)"
});
formatter.result({
  "duration": 1053810158,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test profile and home button",
  "description": "",
  "id": "home-page-test;test-profile-and-home-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@HomePage"
    },
    {
      "line": 8,
      "name": "@HomePageButtonTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "\"profilelink\" should be present",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "profilelink",
      "offset": 1
    }
  ],
  "location": "CommonUtil.should_be_present(String)"
});
formatter.result({
  "duration": 59003980,
  "status": "passed"
});
formatter.after({
  "duration": 37502,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am logged in facebook with Mozilla",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 29
    }
  ],
  "location": "CommonUtil.i_am_logged_in_facebook_with(String)"
});
formatter.result({
  "duration": 78225503,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test profile and home button",
  "description": "",
  "id": "home-page-test;test-profile-and-home-button;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@HomePage"
    },
    {
      "line": 8,
      "name": "@HomePageButtonTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "\"homelink\" should be present",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "homelink",
      "offset": 1
    }
  ],
  "location": "CommonUtil.should_be_present(String)"
});
formatter.result({
  "duration": 49678233,
  "status": "passed"
});
formatter.after({
  "duration": 42634,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am logged in facebook with Mozilla",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 29
    }
  ],
  "location": "CommonUtil.i_am_logged_in_facebook_with(String)"
});
formatter.result({
  "duration": 132934523,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Test title",
  "description": "",
  "id": "home-page-test;test-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@HomePageTitleTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "title should be \"Facebook\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 17
    }
  ],
  "location": "HomePage_Step.title_should_be(String)"
});
formatter.result({
  "duration": 21420321,
  "status": "passed"
});
formatter.after({
  "duration": 47766,
  "status": "passed"
});
});