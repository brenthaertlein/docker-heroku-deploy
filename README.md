# Docker Heroku Deploy

A simple web server that will be run in a Docker container and auto-deploy to Heroku

## [Check me out here!](https://dry-woodland-14761.herokuapp.com/)

## Table of contents

* [Tutorial](#Tutorial)
* [Troubleshooting](#Troubleshooting)
* [Resources](#Resources)

## Tutorial

Each commit in this project represents a step in the tutorial process of learning how to
automatically deploy a Dockerized application to Heroku.

### Prelude

This project is version controlled in a `git`. Certain steps will involve committing your work.
These steps provided initially will afterwards be references by saying "commit your work". It is
recommended to push work to a remote repository with each commit.

In advance of starting this project you should have a repository set up
on [GitHub](https://www.github.com) and an application set up on [Heroku](https://www.herokuapp.com)

### Commit 1: Project setup

* run `npm init` in your project directory
    * fill out the prompts as appropriate, the `MIT` license should be sufficient if you choose not
      to use the default `ISC` license
* run `git init` in your project directory
* add a `.gitignore` file if needed
* run `git add -A` to stage the files in your working directory
* run `git commit -m "Initial commit"` with any message your prefer

### Commit 2: Build a webapp

* run `touch index.js`
* add a some code to `index.js` to provide a webserver that will return an expected response
    * don't forget to use `process.env.PORT` when setting the port,
      see [Troubleshooting](#Troubleshooting)
* run `git commit`

### Commit 3: Add a Dockerfile

* add a `Dockerfile` running `node:14` that copies your source code to a working directory and
  executes the command `node index.js`
* add a `.dockerignore` file if needed
* commit your work

### Commit 4: Add GitHub Action

* run `mkdir .github`, `mkdir .github/workflows`, `touch `.github/workflows/docker-heroku.yml`
* add an `env` property for your **Heroku application name**
* add `steps` to deploy your application to Heroku on push to `main`
* commit your work and run `git push` to see your GitHub Action run

Go to [GitHub](https://www.github.com) and verify the Action has run successfully. Check out your
Heroku dashboard or visit `https://<heroku-app-name>.herokuapp.com` to see your application running!

## Troubleshooting

> My GitHub action is failing

Double and triple check the syntax of your GitHub Actions YAML markup against the example. Every `-`
and `:` matters!

> My server isn't working

Check your logs with `heroku logs --tail -a <your-app-name>`. If you see
a `Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch`
error occur, chances are you did not bind the port of your webserver to the environment variable
for `PORT`. In the case of our example NodeJS app, use `process.env.PORT` for your webserver.

## Resources

* https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/
* https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
* https://enlear.academy/how-to-deploy-a-dockerized-web-app-to-heroku-using-the-github-actions-f16c00b19621
