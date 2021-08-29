Feature: Monster Levels Screen

  Scenario: API data is loaded
    Given I am at Monster Levels Screen
    When API data is loaded
    Then I should see data

  Scenario: Press a Monster Level
    Given I am at Monster Levels Screen
    When I press a Monster Level
    Then I should see Showdown Screen

