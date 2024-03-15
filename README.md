# Automation Test Suite: GoRest User CRUD APIs using NodeJS and Cypress.
- The test is linked to a GitHub Action that could be triggered by pushing new commits to the master branch.
- Additionally, this workflow could be triggered manually by:
   - Go to "Actions" in github
   - Choose the "Run Cypress test" from the workflow side menu
   - Click on "Run workflow"
  <img width="1440" alt="Screenshot 2024-03-15 at 13 49 34" src="https://github.com/maya95wakim/quatt-assignment/assets/46944139/b3321e6e-7ea4-408c-8589-63a94742ed8c">

- Click on the lateset workflow run name
- Once the workflow is done you can check the test result by checking the "Start the test command" job step
  <img width="1431" alt="Screenshot 2024-03-15 at 13 54 23" src="https://github.com/maya95wakim/quatt-assignment/assets/46944139/30fc1dd6-06d5-4aac-b98e-846a442176de">
  <img width="1432" alt="Screenshot 2024-03-15 at 13 54 56" src="https://github.com/maya95wakim/quatt-assignment/assets/46944139/72cd8ef7-4dce-4f52-8f7b-0db3092b4b67">

- Alternatively, you can check the test artifact:
   - Click on the completed workflow
   - Download the artifact folder from the artifact section.
   - Once downloaded, open the "mochawesome.html" file to view detailed test results and the Cypress test code
  
<img width="1438" alt="Screenshot 2024-03-15 at 14 05 17" src="https://github.com/maya95wakim/quatt-assignment/assets/46944139/35e4895f-a410-42fd-9425-bc2744fd2f25">
<img width="787" alt="Screenshot 2024-03-15 at 14 06 23" src="https://github.com/maya95wakim/quatt-assignment/assets/46944139/b1b54498-1593-4870-997f-bdad44aa5b47">
