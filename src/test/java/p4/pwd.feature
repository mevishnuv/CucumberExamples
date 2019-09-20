Feature: Login

  Scenario Outline: Success Login
    Given Enter credentials
      | name | password |
      | sam  | abcd     |
      | ram  | aqwer    |
    When Click on login
    Then Home page is displayed
