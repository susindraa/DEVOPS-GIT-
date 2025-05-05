### **Top AWS Services for DevOps Engineers: Study Notes**

---

#space/40-day-course/13-Day-AWS-Services  

#done-space
#### **1. Amazon EC2 (Elastic Compute Cloud)**
?
- **Purpose**: Virtual servers in the cloud for running applications.
- **DevOps Use**: Deploy, manage, and scale applications.
- **Key Features**:
  - On-demand compute capacity.
  - Integration with Auto Scaling for dynamic workloads.
  - Supports multiple OS and instance types.
<!--SR:!2025-04-19,1,210-->

---

#### **2. Amazon VPC (Virtual Private Cloud)**
?
- **Purpose**: Isolated cloud network for secure resource deployment.
- **DevOps Use**:
  - Define subnets, route tables, and security groups.
  - Control inbound/outbound traffic (Security Groups/NACLs).
- **Key Features**:
  - Private and public subnets.
  - VPN and Direct Connect for hybrid setups.
<!--SR:!2025-05-04,1,150-->

---

#### **3. Amazon EBS (Elastic Block Store)**
?
- **Purpose**: Block storage for EC2 instances.
- **DevOps Use**:
  - Persistent storage for databases/applications.
  - Snapshots for backups.
- **Key Features**:
  - SSD/HDD options.
  - Encryption at rest (via KMS).
<!--SR:!2025-05-04,1,230-->

---

#### **4. Amazon S3 (Simple Storage Service)**
?
- **Purpose**: Object storage for static files, backups, and data lakes.
- **DevOps Use**:
  - Store artifacts, logs, and static website content.
  - Versioning and lifecycle policies.
- **Key Features**:
  - High durability (99.999999999%).
  - Serverless and scalable.
<!--SR:!2025-05-04,1,150-->

---

#### **5. AWS IAM (Identity and Access Management)**
?
- **Purpose**: Manage user permissions and roles.
- **DevOps Use**:
  - Grant least-privilege access.
  - Roles for EC2 instances (e.g., accessing S3).
- **Key Features**:
  - Multi-factor authentication (MFA).
  - Policies in JSON format.
<!--SR:!2025-05-04,1,150-->

---

#### **6. Amazon CloudWatch**
?
- **Purpose**: Monitoring and observability.
- **DevOps Use**:
  - Track metrics (CPU, memory).
  - Set alarms and automate actions (e.g., Lambda triggers).
- **Key Features**:
  - Log aggregation and dashboards.
  - Integration with Auto Scaling.
<!--SR:!2025-05-04,1,150-->

---

#### **7. AWS Lambda**
?
- **Purpose**: Serverless compute for event-driven tasks.
- **DevOps Use**:
  - Automate tasks (e.g., encrypting EBS volumes).
  - CI/CD pipelines (e.g., triggering builds).
- **Key Features**:
  - Pay-per-execution model.
  - Supports Python, Node.js, etc.
<!--SR:!2025-05-04,1,130-->

---

#### **8. AWS CI/CD Services**
?
- **CodePipeline**: Orchestrate CI/CD workflows.
- **CodeBuild**: Compile code and run tests.
- **CodeDeploy**: Deploy applications to EC2, Lambda, etc.
- **DevOps Use**:
  - End-to-end automation from code to production.
<!--SR:!2025-05-04,1,150-->

---

#### **9. AWS Config**
?
- **Purpose**: Track resource configurations and compliance.
- **DevOps Use**:
  - Audit changes (e.g., unencrypted S3 buckets).
  - Automate remediation (e.g., encrypting EBS via Lambda).
- **Key Features**:
  - Rules for compliance checks.
<!--SR:!2025-05-04,1,230-->

---

#### **10. AWS Billing & Cost Management**
?
- **Purpose**: Monitor and optimize cloud spend.
- **DevOps Use**:
  - Track costs by service (e.g., EC2 vs. S3).
  - Set budget alerts.
<!--SR:!2025-05-05,2,190-->

---

#### **11. AWS KMS (Key Management Service)**
?
- **Purpose**: Manage encryption keys.
- **DevOps Use**:
  - Encrypt S3, EBS, RDS.
  - Rotate keys automatically.
<!--SR:!2025-05-04,1,230-->

---

#### **12. AWS CloudTrail**
?
- **Purpose**: Log API activity for auditing.
- **DevOps Use**:
  - Track who created/deleted resources.
  - Integrate with CloudWatch for alerts.
<!--SR:!2025-05-04,1,250-->

---

#### **13. Amazon EKS (Elastic Kubernetes Service)**
?
- **Purpose**: Managed Kubernetes for container orchestration.
- **DevOps Use**:
  - Deploy microservices at scale.
- **Key Features**:
  - Integrates with IAM and VPC.
<!--SR:!2025-05-04,1,150-->

---

#### **14. Amazon ECS (Elastic Container Service)**
?
- **Purpose**: AWS-native container orchestration.
- **DevOps Use**:
  - Run Docker containers without Kubernetes.
- **Key Difference from EKS**: Proprietary (vs. managed Kubernetes).
<!--SR:!2025-05-04,1,150-->

---

#### **15. ELK Stack (Elasticsearch, Logstash, Kibana)**
?
- **Purpose**: Log management and analytics.
- **DevOps Use**:
  - Centralize logs from microservices.
  - Visualize errors and performance metrics.
<!--SR:!2025-05-04,1,210-->

---

### **Key Takeaways for DevOps**
?
1. **Automation**: Use Lambda, CodePipeline, and CloudWatch for end-to-end workflows.
2. **Security**: IAM, KMS, and Config ensure compliance.
3. **Scalability**: EC2 Auto Scaling, EKS, and ECS handle dynamic workloads.
4. **Cost Control**: Billing alerts and S3 lifecycle policies optimize spend.
>[!cue]- Cute ASS
<!--SR:!2025-05-04,1,130-->



**Interview Tip**: Understand differences (e.g., EKS vs. ECS, CloudWatch vs. CloudTrail) and use cases for each service.  

--- 

**Next Steps**: Practice deploying a CI/CD pipeline (CodePipeline + CodeDeploy) and monitoring with CloudWatch. Explore KMS encryption for S3/EBS.