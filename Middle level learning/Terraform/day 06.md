#done-space 

#space/terraform/06



## Day 6: Managing Environments with Workspaces

[](https://github.com/iam-veeramalla/terraform-zero-to-hero/blob/main/README.md#day-6-managing-environments-with-workspaces)

#### Introduction to Terraform Workspaces

[](https://github.com/iam-veeramalla/terraform-zero-to-hero/blob/main/README.md#introduction-to-terraform-workspaces)

Understand the concept of workspaces and their role in managing different environments. Learn how workspaces aid in isolating configurations.

#### Creating and Switching Between Workspaces

[](https://github.com/iam-veeramalla/terraform-zero-to-hero/blob/main/README.md#creating-and-switching-between-workspaces)

Learn how to create new workspaces and switch between them using terraform workspace commands. Understand their significance in environment management.

#### Using Workspaces for Environment Management

[](https://github.com/iam-veeramalla/terraform-zero-to-hero/blob/main/README.md#using-workspaces-for-environment-management)

Learn deeper into how workspaces streamline environment management. Comprehend their benefits in maintaining separate state files for various settings.

### main.tf

```
provider "aws" {
    region = "us-east-1"
}

variable "ami" {
  description = "This is AMI for the instance"
}

variable "instance_type" {
  description = "This is the instance type, for example: t2.micro"
}

resource "aws_instance" "example" {
    ami = var.ami
    instance_type = var.instance_type
}

```


### main.tf

```
provider "aws" {
  region = "us-east-1"
}

variable "ami" {
  description = "value"
}

variable "instance_type" {
  description = "value"
  type = map(string)

  default = {
    "dev" = "t2.micro"
    "stage" = "t2.medium"
    "prod" = "t2.xlarge"
  }
}

module "ec2_instance" {
  source = "./modules/ec2_instance"
  ami = var.ami
  instance_type = lookup(var.instance_type, terraform.workspace, "t2.micro")
}



ami = "ami-053b0d53c279acc90"

```



[[day 07]]