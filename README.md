# Thought Process

## Use CRA to get things up and running quickly

### `npx create-react-app clevertech-app`

### `npm run start` - npm works better on windows

Before I began, I ran some `mrm tasks` to set up gitignore, prettier, lint-staged, etc. Things that I feel help to make development easier. (All about the DevEx)

I organized my workspace in a generally accepted manner by where, app related files when in the app folder, and so on.

Since the app requires both React and Redux, I decided to go with RTK's very own RTK Query library to handle the fetching tasks instead of SWR, React Query, or even roll-my-own useFetch hook. It simplifies A LOT of the Redux Boilerplate terribleness, and kind of automagically creates slices and manages state without all of the hassle that usually comes with using Redux.

## Learn More

### Code Splitting

### Analyzing the Bundle Size

### Making a Progressive Web App

### Advanced Configuration

### Deployment
