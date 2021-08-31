Feature: Login Screen

  Scenario: Press Login Button
    Given I am at Login Screen
    When I press Sign In Button
    Then I should see Login Form

  Scenario: User cancel login
    Given I try to Login
    When I cancel login process
    Then I should not see Error Message

  Scenario: Login process has error
    Given I try to Login
    When Login process has error
    Then I should see Error Message