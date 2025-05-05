

## Import the Workshop Project

- [ ]  1. Download the attachment from this issue
- [ ]  2. Navigate to your root GitLab group in the demo environment
- [ ]  3. In your GitLab group, click `New Project`, `Import Project`, `GitLab Export` in the upper right-hand corner
- [ ]  4. Upload the downloaded project export attachment
- [ ]  5. Click `Import Project`, then execute the rest of the steps in this Issue in your demo project.

## [](#install-gitlab-runner)Install GitLab Runner

In this section, we we install [GitLab Runner](https://docs.gitlab.com/runner/install/) on your local machine (or another machine to which you have access). If you are unable to install GitLab Runner or Docker on your machine, backup project Runners will be available in the demo environment

- [ ]  1. Navigate to the [installation guide](https://docs.gitlab.com/runner/install/#supported-operating-systems) for the OS on which Runner will be installed (Linux or MacOS will be the easiest to configure). If you already have Docker on your machine, you can also run [GitLab Runner in a Docker container](https://docs.gitlab.com/runner/install/docker.html#install-the-docker-image-and-start-the-container) (be advised, this method may not be fully compatible with the workshop without advanced configuration)
- [ ]  2. Follow the installation steps for your chosen distribution (**Note:** If installing on MacOS, use [this method](https://docs.gitlab.com/runner/install/osx.html) rather than Homebrew. GitLab does not maintain the Homebrew formula)
- [ ]  3. After installing the GitLab Runner package, follow the steps in the docs to install Runner as a service and start the service.
- [ ]  4. To use the [Docker Executor](https://docs.gitlab.com/runner/executors/docker.html), which spins up isolated containers for executing each CI job, the Docker will need to be available on your machine. For [MacOS](https://docs.docker.com/desktop/setup/install/mac-install/) and [Windows](https://docs.docker.com/desktop/setup/install/windows-install/), Docker Desktop will be the easiest option (**Note**: To run Linux containers on Windows, ensure Docker Desktop is targeting the [right Docker daemon).](https://learn.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/set-up-linux-containers) Docker can be installed on [Linux](https://docs.docker.com/desktop/setup/install/linux/) using various distributions' package managers.

## [](#register-gitlab-runner)Register GitLab Runner

- [ ]  1. In your demo project, follow [these steps](https://docs.gitlab.com/ee/ci/runners/runners_scope.html#create-a-project-runner-with-a-runner-authentication-token) to create a Project Runner (select the checkbox for "Run untagged jobs", no other configurations are necessary)
- [ ]  2. When prompted to Register the runner, select the operating system you installed Runner upon. Copy the script generated at the bottom of the UI, then run it in the the shell on the Runner machine ([these docs](https://docs.gitlab.com/runner/register/#register-with-a-runner-authentication-token) also outline how to register a Runner on a machine after it is created in a GitLab Group / Project)
- [ ]  3. Follow the shell prompts, using the demo instance URL top level domain for the GitLab instance, name your runner, and choose "**Docker**" when prompted for the executor.
- [ ]  4. To verify successful registration of the Runner with your project, run `gitlab-runner verify` in your shell. If there are no issues, the process will start listening for incoming jobs from your demo project. After verifying, kill this process

## [](#advanced-gitlab-runner-configuration)Advanced GitLab Runner Configuration

-  1. On the machine with GitLab Runner, locate the `config.toml` file that was created during the registration process and open it an editor of your choice. Depending on the OS and install method, the config.toml file may be in different location detailed [here](https://docs.gitlab.com/runner/configuration/advanced-configuration.html).
    
-  2. If you are using Docker Desktop, you will need to edit the `host` for the Docker daemon under the `[runners.docker]` section of the config. It should look something like below (replacing `USERNAME` with the username under which you installed Docker Desktop)
    
    [![image.png](/-/project/69352458/uploads/b76a057a5baf7040d5985bfe0f02523e/image.png)](/-/project/69352458/uploads/b76a057a5baf7040d5985bfe0f02523e/image.png)
    
-  3. In the `[[runners]]` section of the config file, we are going to enable the feature flag [`FF_NETWORK_PER_BUILD`](https://docs.gitlab.com/runner/executors/docker.html#create-a-network-for-each-job) which will allow Docker services to communicate with one another during CI builds. Your configuration should now look like this, adding the line `environment = ["FF_NETWORK_PER_BUILD=1"]`
    

[![image.png](/-/project/69352458/uploads/f17ad0f97133495e8315d98302d388e1/image.png)](/-/project/69352458/uploads/f17ad0f97133495e8315d98302d388e1/image.png)

- [ ]  4. In the [global](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-global-section) section of the `config.toml` (top of the file above `[[runners]]`), add a line setting the `concurrent` keyword to 5. This will allow the Docker executor to run multiple concurrent CI jobs during the execution of a pipeline rather than one at a time.

[![image.png](/-/project/69352458/uploads/338d5fee2a7372ab9613b839d6a83b27/image.png)](/-/project/69352458/uploads/338d5fee2a7372ab9613b839d6a83b27/image.png)

- [ ]  5. Save the configuration file and exit. Restart the Runner service and verify successful operation with `gitlab-runner verify`

## [](#demo-project-export)Demo Project Export




## Module Overview

In this module, we will explore pipeline optimization techniques by:

* configuring advanced workflow rules controlling different contexts under which the pipeline will run,
* using caches to speed up job execution,
* and storing artifacts that can be passed between jobs and stored after pipeline execution.

The base pipeline will use Kaniko to build our project as a containerized service from the project Dockerfile and automate unit testing with reporting of results integrated directly in the Merge Request process. We'll also use the built-in GitLab container registry to store tagged images built within the pipelines.

## Steps

* [ ] 1.) In your demo project, locate the branch `1-pipeline-optimization` in `Code > Branches`

* [ ] 2.) Next to the branch name, click `New` to create a new Merge Request from this branch for merging the commits in branch into `main`
* [ ] 3.) The merge request will be pre-populated from the commits already made to this branch. Also notice that when the merge request is merged/closed that it will close this Issue (this is linked automatically between the branch name and this Issue number; the same would apply if you clicked "Create Merge" from within an Issue). Scroll to the bottom and click `Create Merge Request`
* [ ] 4.) View the files that were added in the feature branch commits by clicking on the `Changes` tab in the Merge request. Review the newly added **.gitlab-ci.yml** file which is used to configure our starting pipeline:
  * The pipeline includes [`workflow rules`](https://docs.gitlab.com/ee/ci/yaml/#workflowrules) which will make the pipeline behave differently for:
    * Merge requests (creates special MR-specific image tags with the [`workflow:rules:variables`](https://docs.gitlab.com/ee/ci/yaml/#workflowrulesvariables) keyword)
    * Main branch pushes (push both latest and commit-specific image tags)
    * [Prevents duplicate pipelines ](https://docs.gitlab.com/ee/ci/pipelines/merge_request_pipelines.html#add-jobs-to-merge-request-pipelines)when branches have open merge requests
  * [Global variables](https://docs.gitlab.com/ee/ci/yaml/#variables) are declared which will be inherited by all pipeline jobs (unless overridden in a job-specific variable declaration)
  * The `build` stage:
    * Runs a job using Kaniko (a secure container builder that does not require privileged access) instead of Docker-in-Docker to build a Docker image of our code and push that image to the project's [Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/). This job is [included](https://docs.gitlab.com/ee/ci/yaml/#includetemplate) from GitLab's [Kaniko template](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/lib/gitlab/ci/templates/Kaniko.gitlab-ci.yml), with configuration overrides being specified in the `kaniko-build` job of our project's `.gitlab-ci.yml`
    * [rules:variables](https://docs.gitlab.com/ee/ci/yaml/#rulesvariables) keyword is used to tag images differently based on whether the job is running in a merge request or main branch pipeline.
      * When building on main branch, the job adds both a commit-specific tag and 'latest' image tag.
      * When building in the context of a merge request, images are tagged with the prefix `mr-<merge request id>-<branch name>`.
  * The `test` stage:
    * Runs a unit test job using pytest
    * Uses [caching](https://docs.gitlab.com/ee/ci/caching/) to speed up pip dependency installation in subsequent pipeline runs. The [`cache:key`](https://docs.gitlab.com/ee/ci/yaml/index.html#cachekey) specifies that the cache will only be shared between `unit-test` jobs run on the same branch
    * Generates and stores JUnit test reports as [report artifacts](https://docs.gitlab.com/ee/ci/yaml/index.html#artifactsreports). Uploading this artifact will [expose test results](https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html) in the GitLab Merge Request / Pipeline UI
    * Unit tests will be skipped in pipelines running on the main branch
* [ ] 5.) Observe in the Merge Request UI that a [`merge request pipeline`](https://docs.gitlab.com/ee/ci/pipelines/merge_request_pipelines.html) has already executed on the existing commits made to our feature branch. This was triggered by a opening a merge request for the branch. Any future commits pushed to this branch will trigger a new merge request pipeline that runs against all changes made to the branch (not just the latest commit).
* [ ] 6.) In the MR UI, observe that the results of our unit test job were reported by uploading the junit report artifact. Details on these tests and their results can be viewed by clicking into the pipeline (click the pipeline number, ex: **#577244133,** then click the "`Tests`" tab.
* [ ] 7.) Verify that an image was successfully built and pushed by the pipeline. In the left hand navigation menu, click `Deploy` -\> `Container Registry`, then find the image tag (it should similar to `<demo-project-name>-user-service:mr-1-1-pipeline-optimization`)
* [ ] 8.) Navigate back to the Merge Request, then click `Mark as Ready` in the Overview tab (if prompted), then click `Merge`. This will trigger a new `main` branch pipeline using the newly added configurations to the **.gitlab-ci.yml file**.
* [ ] 9.) After the pipeline on the main branch completes (status is viewable by clicking the left-side navigation `Build` -\> `Pipelines`), navigate back to the project's container registry to verify that the `kaniko-build` job behaved differently due to the `rules` conditions in our pipeline. There should be two new image tags for the `user-service`, a **latest** tag and a commit SHA for the main branch pipeline.




## Module Overview

In this module, we will explore advanced testing and security practices by:

- implementing GitLab's built-in security analyzers including secret detection, SAST, and container scanning,
- configuring parallel test execution across multiple Python versions,
- and leveraging GitLab's CI/CD component catalog for code quality analysis.

## [](#steps)Steps

-  1.) In your demo project, locate the branch `2-advanced-testing-and-security` in `Code > Branches`
    
-  2.) Next to the branch name, click `New` to create a new Merge Request from this branch for merging the commits in branch into `main`. In the MR, scroll to the bottom and click `Create Merge Request`
    
-  3.) In the `Changes` tab in the Merge request, review the modifications to our .gitlab-ci.yml configuration which:
    
    - Adds a new stage, **secure,** which will be used for security analyzer jobs
    - Uses the [`include:template`](https://docs.gitlab.com/ee/ci/yaml/#includetemplate) keyword to add predefined jobs that run GitLab's secret detection, SAST, and container scanning analyzers
    - Uses the [`include:component`](https://docs.gitlab.com/ee/ci/yaml/#includecomponent) keyword to add code quality tests using a component from [GitLab's CI/CD component catalog](https://gitlab.com/explore/catalog), modifying the behavior with [`inputs`](https://docs.gitlab.com/ee/ci/yaml/#includeinputs) to declare the Python image that will be used to execute the job
    - Adds parallelism to our existing `unit-tests` job with the [`parallel:matrix`](https://docs.gitlab.com/ee/ci/yaml/#parallelmatrix) keyword. This will create three separate instances of the `unit-tests` in each pipeline, with each job using a different VERSION
        - Notice the `cache` key was changed in order to include the `VERSION`. This will ensure only packages for the correct Python version are shared between jobs
    - Overrides behavior of the `pylint` job from the included component to modify the `before_script` execution steps
    - Overrides behavior of the `secret_detection` and `semgrep-sast` jobs included by the templates, causing them to execute in the `secure` stage immediately when the pipeline is kicked off with an empty [`needs`](https://docs.gitlab.com/ee/ci/yaml/#needs) keyword array.
    - Override behavior of the `container_scanning` job to ensure it scans the image tag uploaded to the project container registry by the `kaniko-build` job. The [`CS_DEFAULT_BRANCH_IMAGE`](https://docs.gitlab.com/ee/user/application_security/container_scanning/#setting-the-default-branch-image) variable ensure that any newly detected container scanning vulnerabilities added during merge requests are compared against scan results the correct image tag built for the default branch.
-  4.) As with the previous module, a [`merge request pipeline`](https://docs.gitlab.com/ee/ci/pipelines/merge_request_pipelines.html) has already executed on the existing commits made to our feature branch. Once the pipeline completes, reload the Merge Request to see that there are new findings from the container scanning job in the [merge request security widget](https://docs.gitlab.com/ee/user/application_security/index.html#merge-request). From here, each vulnerability can be drilled into to analyze the category of vulnerability, where it was introduced, and remediations (if available).
    
-  5.) From the MR, click on the pipeline number to view the pipeline details:
    
    - Notice the **pylint** job has a warning and it failed, however it did not affect continued execution of the pipeline. This is due to the inclusion of the [allow_failure](https://docs.gitlab.com/ee/ci/yaml/#allow_failure) keyword in the component specification. Often, code quality utilities (such as **pylint**) will return a non-zero exit code if there are _any_ code quality findings (even if the scan itself was successful). We'll modify this behavior later
    - Click the `unit-tests` job to expand a pop-up showing that three parallel jobs were executed, each running the unit tests in a container with a different Python version.
    - Click the **Tests** tab in the pipeline overview to see that each parallel job uploaded its own report on passed / failed unit tests. This can be useful when debugging test problems with specific versions of a language
    - Click the **Security** tab to view a complete list of all findings from security analyzer jobs run by this pipeline. While these results are what get included in the MR security widget we previously viewed, there are advanced filtering capabilities in this view.
    - Click the **Code Quality** to view the findings of the pylint code quality scan.
-  6.) Navigate back to the Merge Request, then click `Mark as Ready` in the Overview tab (if prompted), then click `Merge`. This will trigger a new `main` branch pipeline using the newly added configurations to the **.gitlab-ci.yml file**.
    
-  7.) After the pipeline on the main branch completes (status is viewable by clicking the left-side navigation `Build` -> `Pipelines`), view the project [Vulnerability report](https://docs.gitlab.com/ee/user/application_security/vulnerability_report/) by clicking `Secure` -> `Vulnerability Report`. This report provides information on the vulnerabilities detected in scans of the default branch (which for our purposes should be the same as what was detected in the merge request pipeline). Once populated, this report will serve as the basis for comparing any new or no longer detected vulnerability findings when scans run within the context of new merge requests.






## Module Overview

In this module, we will explore release management and deployment automation by:

- implementing release jobs in our pipeline that trigger when semantically versioned commit tags are pushed to our repository,
- automating release note generation using GitLab's Repository API to create changelogs from commit history,
- configuring production deployment workflows with manual approval gates,
- and managing environment tracking through GitLab's built-in environment management features.

## [](#steps)Steps

-  1.) In your demo project, locate the branch `4-release-and-deployment` in `Code > Branches` and open a new Merge Request to merge this branch into **main**
    
-  2.) In the `Changes` tab of the MR, observe the new additions to root-level `.gitlab-ci.yml` configuration (our orchestration pipeline):
    
    - New stages are added: **prepare-release**, **release**, and **deploy**
    - New variables are added for:
        - naming the [GitLab environment](https://docs.gitlab.com/ee/ci/environments/) to which our application will be deployed
        - specifying the regex pattern against which [commit tags](https://docs.gitlab.com/ee/user/project/repository/tags/) will be checked to ensure they follow [semantic versioning](https://semver.org/). All jobs added in this module use **`rules`** which will only include the jobs when a semantic versioned commit tag is pushed to the project repository.
    - In the **prepare-release** stage, new jobs which:
        - create release notes using [Repositories API](https://docs.gitlab.com/ee/api/repositories.html#generate-changelog-data) to automatically generate [changelogs](https://docs.gitlab.com/ee/user/project/changelogs.html#add-a-trailer-to-a-git-commit) from commits with the appropriate [git trailers](https://docs.gitlab.com/ee/user/project/changelogs.html#add-a-trailer-to-a-git-commit)
        - add new image tags with the semantic version to each service matching the images built for the commit SHA linked to the pushed commit tag
    - A job in the **release** stage which:
        - Creates a [GitLab Release](https://docs.gitlab.com/ee/user/project/releases/) for the versioned commit tag, linking release notes generated in the prior step and tagged service images to the release
    - A manually triggered **deploy-job** for [deploying](https://docs.gitlab.com/ee/ci/environments/deployments.html) our application to a production environment which will be [tracked by GitLab](https://docs.gitlab.com/ee/ci/environments/), as well as a manually triggered cleanup job which will run scripts to [stop and teardown the environment](https://docs.gitlab.com/ee/ci/environments/index.html#stopping-an-environment)
        - **Note**: The `script` section of both jobs uses a placeholder and will not actually deploy our application anywhere; however, the CI/CD configurations will still demonstrate how deployments are managed in GitLab.
-  3.) Back in the MR, mark it as "Ready" and merge the changes into **main**
    
-  4.) After the pipeline for **main** has completed (notice that none of our new jobs were included), navigate to `Code` -> `Tags` and click "**New Tag**" in the top-right corner
    
-  5.) In the **Tag name** box, add the tag **`v1.0.0` .** Keep the default selection of **Create from**: **main**, then in the **Message** field add "Pushing v1.0.0 tag to create initial release". After finishing, click **Create tag**
    
-  5.) Navigate back to the project's Pipelines (`CI/CD` -> `Pipelines)` to observe the new pipeline that has been triggered by the pushed commit tag. This pipeline should include the jobs declared in the **prepare-release**, **release**, and **deploy** stages of our CI/CD configuration (as well as a cleanup job in the .**post** stage for tearing down the environment). Pipeline execution will stop at the **deploy** job which requires manual interaction in the GitLab UI (we'll trigger this momentarily)
    
-  6.) After the **release-job** completes, navigate to the project Releases page (`Deploy` -> `Releases`). This page will now reflect a release for our **v1.0.0** tag with:
    
    - links to our source code at its state for the commit SHA linked to the tag
    - links to the service image tags associated with this release which are contained in the project's Container registry (these links won't actually open in a browser, but will be be valid for commands like `docker pull`)
    - The release notes generated by the Repositories API (including links to the commits associated with release notes items as well as the merge request for merging them into **main**
-  7.) Navigate back to the project's pipeline page, then for the latest pipeline on **main** click the **deploy-prod** job, then click the [play/run button](https://docs.gitlab.com/ee/ci/jobs/job_control.html#run-a-manual-job).
    
    - **Note**: Project members with a Developer role (or higher) can trigger a manual CI/CD job. Use [protected environments](https://docs.gitlab.com/ee/ci/jobs/job_control.html#protect-manual-jobs) if you need to further limit the users with authorization to run deployment jobs.
-  8.) After the **deploy-prod** job completes, navigate to the Environments page (`Operate` -> `Environments`) to view the information that is associated with the newly created **microservice-demo** deployment. Information will be displayed for the success / failure status of the CI/CD job which deployed to the environment, which commit triggered the deployment pipeline, tags associated to the commit (if available), and who manually triggered the deployment job (you can also click on the deployment name to view a history of all deployment events for this environment)
    
-  9.) On the right side of the deployment, click the Play button, then click the **stop-prod** job. This will manually trigger the stop-prod job to run cleanup scripts and teardown the environment. After this job completes, refresh the Environments page and you should now see the **microservice-demo** in the **Stopped** tab


# Introduction

This section is optional and will walk you through how to transfer the project out of the demo and into your personal namespace / instance. We will also walk through how to transfer a whole group if you want more than a specific project.

# [](#transferring-a-project)Transferring a Project

1. If you only want a single project to reference for later, start here. If instead you want the whole group we have been working with to reference later, skip to step 2.
2. This step is completely optional, if you do not wish to transfer just click **finish**. **Keep in mind that if you do not have an existing ultimate license some of the lab functionality will go away when you transfer your project.**
3. Projects cannot be transferred when there are images in the container registry, clean them up by going to **Packages and Registries --> Container registry**
4. Delete all the available images by clicking on the **trashcan** at the back of the line, and confirm the deletion until **all** images are deleted
5. While still in your project use the left hand navigation menu to click through **Settings -> General**
6. From there scroll to the bottom and click **Expand** on the **_Advanced_** section.
7. We then want to locate the **_Transfer project_** section and click the **Select a new namespace** dropdown. From there search for your name and select it. Your name will most likely be under **Users** in bold. **NOTE: This will be your actual name and not your GitLab ID.**
8. A confirmation message will then pop up where you just need to re-enter the name of your project then click **Confirm**.
9. Your project will then be immediately moved to your personal namespace for you to reference in the future.

# [](#transferring-a-group)Transferring a Group

1. If you completed step 1 and don't need to reference any of the other projects in the future, skip this step and end the workshop.
2. First copy the URL of your current group. It should be similar to the example below:

> [https://gitlab.com/gitlab-learn-labs/environments/session-{your](https://gitlab.com/gitlab-learn-labs/environments/session-%7Byour) session id}/{your group id}

3. Next locate where you want to transfer the project to. More often than not it will be under your personal namespace or a different group you have already created. Go ahead and click **New group** or **New subgroup** then select **Import group/import an existing group**.
4. From here we will want to input the URL of our existing group we copied earlier then click **Connect instance**. At that point GitLab will begin to move over your group for you so that you can reference it even when the workshop infra is torn down.