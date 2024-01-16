# React LD Exercise Submission

![GitHub last commit](https://img.shields.io/github/last-commit/fermelone/react-ld-exercise)

Author: [fermelone](https://github.com/fermelone)

## Introduction

This repository contains my submission for the SE Technical Assignment. The exercise's goal was to demonstrate my ability to use and adapt to the LaunchDarkly platform quickly.

## Exercise

### Goal

The goal of this exercise was to create a feature flag using one of the LaunchDarkly SDKs in an implementation of my choice. The implementation is simple, but I wanted to limit my implementation time to 2hs. I spent most of this time learning about the platform's core functionalities and how the React SDK's different implementations worked.

### My Submission

I have successfully completed the exercise as follows:

- Created a simple kill switch feature flag to change the rotating react image into a minion!
- Utilized the LaunchDarkly React Web SDK to implement the feature flag. I decided to use the `asyncWithLDProvider` initialization to prevent flickering on page load. I noticed that the choice of initialization may vary from client to client, but it's good to know they will have options.
- For bonus points, I incorporated targeting users loading the website from a specific region.
  - To simulate this, I send a custom context with a 'region' element.
  - To see it in action, load the page sending a US region queryParam (`http://localhost:3000/?region=US`)
 
## Running the submission

To run my submission locally, follow these steps:

1. On the LaunchDarkly platform, create a new project.
2. For this example, we need to create two feature flags:  
  - The first one is called `imageSwitch`:
    - It's a simple boolean kill switch 
  - The second one is called `usersFromUS`:
    - This one is also a boolean kill switch, but it has a targeting rule that looks like this:
    - <img width="378" alt="image" src="https://github.com/fermelone/react-ld-exercise/assets/16138087/f257bb54-3b5c-4dd6-b11b-b0e01b6f6df3">

> [!IMPORTANT]  
> Make sure you make the flags available to the client-side SDK on the flag's advanced settings

### Once you've created the flags:

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/fermelone/react-ld-exercise.git
   ```

2. Navigate to the project directory.

   ```bash
   cd react-ld-exercise
   ```

3. Install the necessary dependencies using npm.

   ```bash
   npm install
   ```

4. In src/index.js, set `clientSideID` to your own Client-side ID. You can find this in your LaunchDarkly portal under Account Settings / Projects.
  
5. Start the dev server.

   ```bash
   npm run start
   ```

5. Open your web browser and visit `http://localhost:3000` to view and interact with my submission.
6. If you want to see the targeting flag in action, load the page sending a US region queryParam (`http://localhost:3000/?region=US`)

## Additional Resources

During the exercise, I referenced the [React Web SDK Reference](https://docs.launchdarkly.com/sdk/client-side/react/react-web) for additional guidance and information.

## Conclusion

I have thoroughly enjoyed working on this exercise and appreciate the opportunity to demonstrate my proficiency with LaunchDarkly.
Although I did run into a few roadblocks, it was easy to find the information needed to solve these on the documentation.

Thank you for considering my submission.

---
