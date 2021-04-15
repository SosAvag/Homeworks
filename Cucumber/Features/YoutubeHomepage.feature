Feature: youtube  homepage 

Scenario: I should change the theme to dark and sign in
Given I have opened web browser and miximized it
When  I should change the theme to dark 
And I should sign in

Scenario:I should add video to watch later section
Given I should hover mouse on first video
And I should click on watch later button
When I should click on watch later section
Then I should see the video in whatch later section
Then I should refresh the browser

Scenario:I should add video to history section
Given I should click on second suggested video
Then I should refresh the browser again
And I should click on history section
Then I should see the video in history section 

Scenario: I should see warning pop up after klicking on whatch leter widhout signing in
Given I should refresh the browser one more time
And I should click on avatar image
And I should sign out
And I should hover mouse on the first video again
And I should click on whatch late button again
Then I should see warning pop up