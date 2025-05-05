

#done-space


#space/terraform/40-day-course/16-Day-IaC   


# Briefing Document: Infrastructure as Code and Terraform

**Date:** October 26, 2023 (Based on the content referring to "today's class") **Source:** Excerpts from YouTube video transcript by Abhishek (Day 16 of a DevOps course) **Topic:** Introduction to Infrastructure as Code (IaC) and Terraform

**Overview:**

This briefing document summarizes the key themes and concepts discussed in the provided video transcript. The video serves as an introductory lesson on Infrastructure as Code (IaC) and positions Terraform as a solution to the challenges arising from multi-cloud and hybrid cloud environments. Abhishek explains the problems associated with managing infrastructure across different platforms using native tools and introduces Terraform as a unifying "API as code" solution.

**Main Themes and Important Ideas:**

1. **The Problem with Traditional Infrastructure Management:**

- Organizations like "Flipkart" need compute resources that can be created on various cloud platforms (AWS, Azure, GCP) or on-premises.
- Manually creating and managing these resources is inefficient and prone to errors.

1. **Introduction to Infrastructure as Code (IaC):**
?
- IaC is the practice of automating infrastructure provisioning and management using code.
- Examples of IaC tools mentioned are AWS CloudFormation Templates (CFT), Azure Resource Manager, and OpenStack Heat templates.
- The initial benefit of IaC is automation within a specific platform. For example, using CFT on AWS allows developers to request resources, and the pre-written scripts automate their creation.
- Quote: "instead of creating manually through the console what you have decided is you will use the AWS CLI okay or you can also use something like AWS cloud formation templates okay CFT..." (2:52-3:04)
<!--SR:!2025-05-02,1,210-->

1. **The Challenges of Multi-Cloud and Hybrid Cloud:**
?
- Organizations may choose to adopt multiple cloud providers due to various reasons like cost, support, or specific service offerings (hybrid cloud).
- A significant problem arises when an organization decides to switch cloud providers (e.g., from AWS to Azure) or adopt a hybrid approach.
- The platform-specific IaC scripts (like CFT for AWS) become unusable on the new platform, requiring significant effort to rewrite them using the target platform's tools (e.g., Azure Resource Manager).
- Quote illustrating this problem: "...all these hundreds of scripts that you have written will be of no use because again if some developer comes to you and says that Abhishek I would need 10 virtual machines on your Azure platform okay so you cannot say that I have written CFT you can use the CFT because CFT is very specific to your AWS cloud provider." (4:55-5:15)
- This can lead to repeated efforts in learning and migrating scripts for each new platform (AWS CFT -> Azure ARM -> OpenStack Heat).
<!--SR:!2025-05-02,1,210-->

1. **Terraform as a Solution: "API as Code":**
?
- Terraform, developed by HashiCorp, is introduced as a tool to address the challenges of managing infrastructure across multiple providers.
- The core idea behind Terraform is "API as code."
- Instead of learning platform-specific tools, DevOps engineers can learn Terraform, which interacts with the underlying APIs of various cloud providers.
- Quote introducing Terraform's purpose: "so to solve this problem what people have come with is terraform okay so who is addressing this problem terraform and the concept here is API as code okay" (9:41-9:57)
<!--SR:!2025-05-08,7,250-->

1. **How Terraform Works:**⭐
?
- DevOps engineers write Terraform scripts that describe the desired infrastructure.
- Terraform uses provider plugins (e.g., AWS provider, Azure provider) to understand the APIs of different cloud platforms.
- Based on the provider configuration in the Terraform script (e.g., in provider.tf), Terraform translates the script into API calls that the specific cloud provider can understand and execute.
- Quote explaining this process: "...once you write the terraform module terraform will convert that script into AWS readable API okay or the API request that AWS can understand and it executes the action and gives you the result back okay so this is how terraform is one tool that can automate your resources on any cloud provider." (14:06-14:21)
<!--SR:!2025-05-02,1,210-->

1. **Benefits of Terraform:**
?
- **Cross-Platform Compatibility:** Terraform allows managing infrastructure on multiple cloud providers and even on-premises using a single tool.
- **Simplified Migration:** Migrating between cloud providers becomes smoother as changes primarily involve updating provider details and potentially some module adjustments in the Terraform scripts.
- **Reduced Learning Curve:** Instead of learning multiple platform-specific tools, engineers need to learn only Terraform.
<!--SR:!2025-05-03,2,190-->

1. **Explanation of API (Application Programming Interface):**
?
- An API is a way for applications to communicate with each other programmatically.
- Example: Manually accessing Google through a browser (user interface) vs. a script programmatically requesting information from Google using its API.
- Cloud providers expose APIs that allow programmatic interaction with their services.
- Terraform leverages these APIs to automate infrastructure management without requiring users to directly interact with them using programming languages.
- Quote defining API: "so API is nothing but application interface okay so basically using API you can talk to any application and you can get the response back for example okay let's take a basic example you want to talk to Google..." (14:39-14:58)
<!--SR:!2025-05-02,1,150-->

1. **Recap of IaC vs. API as Code (Terraform):**
?
- **Infrastructure as Code (IaC):** A broad concept of automating infrastructure using code (includes platform-specific tools).
- **API as Code (Terraform):** An advanced capability within the IaC domain that uses a unified tool to interact with the APIs of various providers, offering cross-platform benefits.
- Quote summarizing the difference: "So infrastructure as code is a concept using which you can automate your infrastructure...whereas terraform is a concept which is used to solve all of these problems like you know terraform also works on the same concept of infrastructure as code but terraform has advanced capabilities called API as code right..." (19:32-20:06)
<!--SR:!2025-05-02,1,210-->

**Next Steps (Mentioned in the Video):**

- The next class will focus on practical examples of Terraform, including installation and creating resources (e.g., EC2 instances) on AWS.

**Key Takeaways:**

- Infrastructure as Code is essential for modern infrastructure management and automation.
- Managing infrastructure across multiple cloud providers using native tools presents significant challenges due to platform-specific approaches.
- Terraform offers a solution by abstracting away the complexities of individual cloud provider APIs through its "API as code" approach.
- Learning Terraform can streamline multi-cloud and hybrid cloud management, reduce learning overhead, and simplify migrations.

This briefing document provides a comprehensive overview of the concepts introduced in the video transcript. It highlights the problem domain, the fundamental principles of IaC, and how Terraform addresses the evolving needs of infrastructure management in diverse cloud environments.