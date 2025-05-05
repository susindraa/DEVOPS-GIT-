

```
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-west-2"
}

# Variable to select environment
variable "env" {
  description = "Environment name to decide instance type"
  type        = string
  default     = "dev"
}

# Variable for base instance name
variable "instance_name" {
  description = "Base value for the Name tag of the EC2 Instance"
  type        = string
  default     = "exampleinstance"
}

# EC2 Resource
resource "aws_instance" "app_server" {
  ami           = "ami-075686beab831bb7f"

  # Dynamic instance type based on environment
  instance_type = var.env == "prod" ? "t2.small" : "t2.micro"

  key_name = "multi-instance"

  tags = {
    Name = lower(join("-", [replace(var.env, "_", "-"), var.instance_name]))
  }
}


provisioner "file" { source =
  "local/path/to/localfile.txt" destination =
  "/path/on/remote/instance/file.txt" type = "ssh"
  user = "ec2-user"
  private_key = file("~/.ssh/id_rsa")
 }
}



# Outputs
output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.app_server.id
}

output "instance_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.app_server.public_ip
}





  value       = aws_instance.app_server.public_ip
}



variable "instance_name" {
  description = "value of the name tag for the EC2 Instance"
  type        = string
  default     = "exampleinstance"
}

```