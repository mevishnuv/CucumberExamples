$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:P1/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Success Login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Enter \"sam\" and \"abcd21\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Step.credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Step.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Step.home_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
});