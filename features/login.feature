Feature: The Internet Guinea Pig Website

  Background:
    When I open login page

  Scenario Outline: As a user, I can log into the secure area
    When I login with <username> and <password>
    Then I should see a user icon

    Examples:
      | username         | password  |
      | diwej38033@luxiu2.com | Qwerty123 |

  Scenario Outline: As a user, I can't log in with non-existing email
    When I login with <username> and <password>
    Then I should see a notification with text <message>

    Examples:
      | username                | password    | message                 |
      | testinvalid@luxiu2.com | InvalidTest | Email is not registered |

  Scenario Outline: As a user, I can't log in with incorrect password
    When I login with <username> and <password>
    Then I should see a notification with text <message>

    Examples:
      | username         | password    | message            |
      | test@example.com | testinvalid | Incorrect password |

  Scenario Outline: As a user, I should see that credential fields are required
    When I enter username <username> and clear it
    Then I should see validation error for username field
    When I enter password <password> and clear it
    Then I should see validation error for password field

    Examples:
      | username | password |
      | test     | test     |
