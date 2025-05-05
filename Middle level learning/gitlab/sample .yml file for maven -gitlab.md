

#goes-to/gitlab



```
variables:
  MAVEN_CLI_OPTS: "-s .m2/settings.xml --batch-mode"
  WAR_NAME: ROOT.war
  TOMCAT_USER: deployer
  TOMCAT_HOST: your.remote.server.com
  TOMCAT_PATH: /opt/tomcat/webapps

stages:
  - build
  - deploy

build:
  stage: build
  image: maven:3.9.4-eclipse-temurin-17
  script:
    - mvn $MAVEN_CLI_OPTS clean package -DskipTests
  artifacts:
    paths:
      - target/*.war
  tags:
    - lab-server

deploy:
  stage: deploy
  image: alpine:latest
  before_script:
    - apk add --no-cache openssh
  script:
    - echo "Deploying to Tomcat..."
    - scp target/*.war ${TOMCAT_USER}@${TOMCAT_HOST}:${TOMCAT_PATH}/${WAR_NAME}
  only:
    - tags
  when: manual
  tags:
    - lab-server

```