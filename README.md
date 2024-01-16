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

## Additional Resources

During the exercise, I referenced the [React Web SDK Reference](https://docs.launchdarkly.com/sdk/client-side/react/react-web) for additional guidance and information.

## Conclusion

I have thoroughly enjoyed working on this exercise and appreciate the opportunity to demonstrate my proficiency with LaunchDarkly.
Although I did run into a few roadblocks, it was easy to find the information needed to solve these on the documentation.

Thank you for considering my submission.

---
