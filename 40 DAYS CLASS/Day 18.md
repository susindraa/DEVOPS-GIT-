

#done-space



#space/40-day-course/18-Day-CI-CD 


# Briefing Document: Understanding CI/CD with a Focus on Modern Approaches

**Date:** October 26, 2023 (Based on the content, assuming a sequential learning approach) **Prepared For:** Interested Parties in DevOps Practices **Subject:** Review of Key Concepts and Modern Trends in Continuous Integration and Continuous Delivery (CI/CD)

This briefing document summarizes the main themes and important ideas discussed in the provided transcript, which is an excerpt from a DevOps course video. The speaker, Abhishek, introduces the fundamental concepts of CI/CD, explains traditional implementations using tools like Jenkins, and contrasts them with modern, scalable solutions exemplified by Kubernetes and GitHub Actions.

## Main Themes:

1. **Introduction to CI/CD:** The video begins by addressing the widespread interest in CI/CD and defining its core components.

- "CI CD is basically two steps right one is continuous integration and the second thing is continuous delivery okay so there are two parts to cicd"
- **Continuous Integration (CI):** The process of integrating a set of tools and processes followed before delivering an application to the customer.
- **Continuous Delivery (CD):** The process of deploying or delivering an application to a specific platform for customer access.

1. **The Need for CI/CD:** Abhishek highlights the practical necessity of CI/CD in modern software development.

- He uses the example of an application developer deploying to a customer across the globe to illustrate the complexity and the need for automation.
- He emphasizes that "every organization goes through this right whether it's a startup whether it's MNC or whether it is man companies everyone has customers over the globe and your application has to be delivered to your customer in a prompt or you know in a efficient and reliable way..."
- The core problem CI/CD solves is automating the steps required to deliver software efficiently and reliably, moving away from manual processes that would take "months of time."

1. **Standard Steps in a CI/CD Pipeline:** The speaker outlines common stages involved in delivering an application. These steps may vary based on the application type and organizational requirements.

- **Unit Testing:** Testing individual units or components of the code.
- "unit testing is nothing but let's say you are writing a calculator functionality... you will pass some arguments like you know in your testing you will say pass two and three and verify that the output is 5 okay so this is nothing but unit testing your code..."
- **Static Code Analysis:** Analyzing code without executing it to identify potential issues like syntax errors, formatting problems, and unnecessary variable declarations.
- "you are syntactically right you have well formatted your application okay in some programming languages uh formatting or the indentation is also very important right so you have to verify all of these things..."
- **Code Quality and Vulnerability Testing:** Identifying security flaws and ensuring the overall quality of the code.
- "...for a customer you cannot deliver application with some security bugs..."
- **Automation Testing (Functional/End-to-End):** Verifying that the application works as expected from the user's perspective and that new changes haven't negatively impacted existing functionalities.
- "...you will verify that you know the change that you have done or the addition functionality that you have written does not impact subtraction multiplication or division functionality okay so you verify your application in a end-to-end manner..."
- **Reporting:** Generating and storing reports on the results of the various testing stages.
- "these reports are very essential for any organization like you know tomorrow if somebody asks you what is your unit test coverage how many unit tests pass..."
- **Deployment:** Deploying the application to an environment where customers can access it.
- "...without deploying your application your client will not be able to access your application..."

1. **Automation through CI/CD:** The central idea is that CI/CD automates all the aforementioned manual steps, triggered by code changes in a Version Control System (VCS) like GitHub, Bitbucket, or GitLab.

- "cicd is a process where you automate all of these things right if you have to do all of these things manually... it would it would take months of time..."
- The CI/CD process is initiated when a developer pushes confident code changes to a VCS.
- "your CI CD gets executed when you push your changes to one of these tools."

1. **Legacy CI/CD with Jenkins:** Jenkins is presented as a traditional, widely adopted CI/CD tool that acts as an orchestrator.

- "what Jenkins will do is Jenkins will act as a orchestrator or it will act as a pipe or a tunnel..."
- Jenkins automates the pipeline by integrating various tools for each step (e.g., Maven for building and unit testing Java applications, SonarQube for code quality, Kubernetes/Docker for deployment).
- Jenkins pipelines automate the execution of these tools upon code commits.
- Jenkins can also manage the promotion of applications through different environments (Dev, Staging, Production).
- "Jenkins can take care of deploying your application to multiple stages okay... Jenkins can promote your applications to Dev environments then whenever it is confident what it can do is it can promote the application to staging environment and finally it can promote to production."
- The rationale for multiple environments is to test code in less critical environments before deploying to production, acknowledging the potential cost differences and the need for thorough testing at each stage.

1. **Challenges with Traditional CI/CD (Jenkins in the context of Microservices):** The video highlights the scalability and cost challenges associated with managing Jenkins, especially in microservices architectures with numerous services and development teams.

- The traditional model of deploying individual Jenkins master and worker nodes for different teams or projects can lead to a "very humongous" and costly infrastructure.
- Scaling up Jenkins involves adding more compute resources, which can be expensive, and maintaining these instances adds significant overhead.
- The speaker raises the ideal scenario of having "zero servers when I'm not using any or when I'm not making any code changes," which is difficult to achieve efficiently with a traditional Jenkins setup.

1. **Modern CI/CD Solutions (Kubernetes and GitHub Actions as Examples):** The discussion shifts to modern, more scalable CI/CD approaches.

- **Kubernetes' own CI/CD:** The speaker uses the Kubernetes project itself as an example of efficient CI/CD management.
- **GitHub Actions:** This is presented as a modern CI/CD tool that addresses the scalability and resource utilization challenges of traditional systems.
- "Here what they are doing is they are running the entire thing using GitHub actions so GitHub actions is another way of doing CI CD just like Jenkins and what happens here is whenever a code chain is made it will spin up a kubernetes pod or you know a Docker container for you and everything gets executed on the docker container and if you are not using it then you know the server or the worker which is used to run these Docker containers will be used by some other uh projects..."
- **Shared Resources:** Modern CI/CD often leverages shared resource pools (e.g., cloud-based runners) where compute instances are spun up on demand for pipeline execution and released afterward. This leads to better resource utilization and cost efficiency.
- "...in the concept of shared resources the advantage is that so kubernetes project there are uh like you know if you go to the kubernetes organization here there are some 77 repositories... you can create one common server... and what you can say is that whenever a developer is making commit on any of the 77 repositories okay so what you will do is you can create a kubernetes pod on this kubernetes cluster and once the execution is done all of these steps are done just delete the part so that I'll be free one more time..."
- **Scalability:** Modern solutions like those integrated with Kubernetes inherently offer better scalability. Adding more capacity is often simpler than scaling traditional CI/CD infrastructure.
- "...in terms of kubernetes you all know that easily you can increase one more node and you know you can scale it up to 100 000 or whatever you would like to..."
- The example of the Kubernetes GitHub repository (using GitHub Actions) illustrates how a large, active open-source project manages CI/CD without constantly running dedicated infrastructure when no code changes are being made.

1. **Emerging CI/CD Alternatives:** The speaker briefly mentions other modern CI/CD tools beyond Jenkins and GitHub Actions.

- "there are projects on GitHub there are projects on gitlab there are projects on You Know Travis CI there are products on Circle CI so these are all Alternatives and these are all emerging cicd Solutions..."
- The importance of understanding these alternatives is highlighted, even if the initial learning focuses on Jenkins.

1. **Advantages of Modern CI/CD (Specifically GitHub Actions):** The speaker expresses a preference for GitHub Actions due to several advantages.

- **Event-Driven:** GitHub Actions are inherently event-driven, triggering pipelines based on various Git events. While Jenkins can be configured for this, it's a default behavior in GitHub Actions.
- "Jenkins is even driven but you can only configure pull request action using some web hooks... but if there is no web hook configuration for Jenkins by default it is not event driven whereas GitHub actions are default event driven..."
- **Integration:** GitHub Actions allows for easy integration and reuse of pipelines across different projects within the same platform.

## Most Important Ideas and Facts:

- CI/CD is crucial for efficient and reliable software delivery.
- It encompasses two main phases: Continuous Integration (code merging and building) and Continuous Delivery (automated deployment).
- A typical CI/CD pipeline involves steps like unit testing, static code analysis, security scanning, automated testing, reporting, and deployment.
- Jenkins is a widely used, but potentially less scalable and cost-effective, legacy CI/CD orchestrator, especially for large microservices environments.
- Modern CI/CD solutions, such as GitHub Actions and GitLab CI/CD, offer better scalability and resource utilization through event-driven triggers and shared compute resources (like containers or pods).
- Kubernetes itself demonstrates modern CI/CD practices by leveraging tools like GitHub Actions to manage its development lifecycle efficiently.
- Understanding the principles of CI/CD is essential, and exploring modern alternatives to Jenkins is recommended.
- GitHub Actions are highlighted for their event-driven nature and ease of integration across projects.
- While there are syntactical differences, the core concepts of CI/CD remain similar across different tools like GitHub Actions and GitLab CI/CD.

## Quotes for Emphasis:

- "CI CD is basically two steps right one is continuous integration and the second thing is continuous delivery..."
- "...to achieve that you have to have all of these steps automated right..."
- "Jenkins is a orchestrator which will facilitate all of these tools..."
- "...this has to scale up right... the setups become very humongous right because every time you scale up this Jenkins instances you know you have to create lot of lot of computer..."
- "...literally you are using zero compute instances when there is no code change so this is about your modern day CI CD setup..."
- "GitHub actions are default event driven continuous integration and continuous Delivery Solutions..."

This briefing document provides a foundational understanding of CI/CD as presented in the video excerpt, emphasizing the shift towards more scalable and efficient modern solutions compared to traditional approaches. The upcoming sessions of the DevOps course are expected to delve into the practical implementation of both Jenkins and GitHub Actions.

convert_to_textConvert to source

NotebookLM can be inaccurate; please double check its responses.