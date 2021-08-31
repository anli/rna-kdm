Feature: Home Screen

  Scenario: Press Monster Levels Button
    Given I am at Home Screen
    When I press Monster Levels Button
    Then I should see Monster Levels Screen

  Scenario: Press Logout Button
    Given I am at Home Screen
    When I press Logout Button
    Then I should be Logout
