Feature: App

  Scenario: User is logged in
    Given User is logged in
    Then I should see Home Screen

  Scenario: User is logged out
    Given User is logged in
    Then I should see Login Screen
