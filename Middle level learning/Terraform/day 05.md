


#done-space 

#goes-to/terraform 

#space/terraform/05


- Certainly, let's delve deeper into the `file`, `remote-exec`, and `local-exec` provisioners in Terraform, along with examples for each.
?
4. **file Provisioner:**
5. **remote-exec Provisioner:**
6. **local-exec Provisioner:**
<!--SR:!2025-05-03,2,190-->




7. **file Provisioner:**
?
   - The `file` provisioner is used to copy files or directories from the local machine to a remote machine. This is useful for deploying configuration files, scripts, or other assets to a provisioned instance.
   - Example:
```hcl
   resource "aws_instance" "example" {
     ami           = "ami-0c55b159cbfafe1f0"
     instance_type = "t2.micro"
   }
   provisioner "file" {
     source      = "local/path/to/localfile.txt"
     destination = "/path/on/remote/instance/file.txt"
     connection {
       type     = "ssh"
       user     = "ec2-user"
       private_key = file("~/.ssh/id_rsa")
     }
   }
```
   - In this example, the `file` provisioner copies the `localfile.txt` from the local machine to the `/path/on/remote/instance/file.txt` location on the AWS EC2 instance using an SSH connection.
 -
<!--SR:!2025-05-02,1,150-->





7. **remote-exec Provisioner:**
?
   - The `remote-exec` provisioner is used to run scripts or commands on a remote machine over SSH or WinRM connections. It's often used to configure or install software on provisioned instances.
   - Example:
```hcl
   resource "aws_instance" "example" {
     ami           = "ami-0c55b159cbfafe1f0"
     instance_type = "t2.micro"
   }
   provisioner "remote-exec" {
     inline = [
       "sudo yum update -y",
       "sudo yum install -y httpd",
       "sudo systemctl start httpd",
     ]
     connection {
       type        = "ssh"
       user        = "ec2-user"
       private_key = file("~/.ssh/id_rsa")
       host        = aws_instance.example.public_ip
     }
   }
```
   - In this example, the `remote-exec` provisioner connects to the AWS EC2 instance using SSH and runs a series of commands to update the package repositories, install Apache HTTP Server, and start the HTTP server.
-
<!--SR:!2025-05-02,1,150-->
     
     
     
     
7. **local-exec Provisioner:**
?
   - The `local-exec` provisioner is used to run scripts or commands locally on the machine where Terraform is executed. It is useful for tasks that don't require remote execution, such as initializing a local database or configuring local resources.
   - Example:
```hcl
   resource "null_resource" "example" {
     triggers = {
       always_run = "${timestamp()}"
     }
     provisioner "local-exec" {
       command = "echo 'This is a local command'"
     }
   }
```
   - In this example, a `null_resource` is used with a `local-exec` provisioner to run a simple local command that echoes a message to the console whenever Terraform is applied or refreshed. The `timestamp()` function ensures it runs each time.
-
<!--SR:!2025-05-02,1,150-->

 
### full working code for copying files from you instance to newly created instance

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

resource "aws_instance" "app_server" {
  ami           = "ami-075686beab831bb7f"
  instance_type = var.env == "prod" ? "t2.small" : "t2.micro"       
  key_name      = "multi-instance"

  tags = {
    Name = lower(join("-", [replace(var.env, "_", "-"), var.instanc>  }

  # File provisioner to copy a local file to the instance
  provisioner "file" {
    source      = "/home/ubuntu/terraform-files/local-file.txt"     
    destination = "/home/ubuntu/local-file.txt"

    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = file("/home/ubuntu/terraform-files/multi-instan>      host        = self.public_ip
    }
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



```


### full working code to execute programmes in the newly created instance

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

resource "aws_instance" "app_server" {
  ami           = "ami-075686beab831bb7f"  # Use the appropriate AMI for your region
  instance_type = var.env == "prod" ? "t2.small" : "t2.micro"  # Adjust instance type based on environment
  key_name      = "multi-instance"

  tags = {
    Name = lower(join("-", [replace(var.env, "_", "-"), var.instance_name]))
  }

  # File provisioner to copy a local file to the instance
  provisioner "file" {
    source      = "/home/ubuntu/terraform-files/local-file.txt"  # Local file path
    destination = "/home/ubuntu/local-file.txt"  # Destination path on the EC2 instance

    connection {
      type        = "ssh"
      user        = "ubuntu"  # Use 'ubuntu' as the user for Ubuntu-based EC2 instances
      private_key = file("/home/ubuntu/terraform-files/multi-instance.pem")  # Path to the private key for authentication
      host        = self.public_ip  # Public IP of the EC2 instance
    }
  }

  # Remote-exec provisioner to run commands on the EC2 instance
  provisioner "remote-exec" {
    inline = [
      "sudo apt update -y",  # Update package list for Ubuntu-based instances
      "sudo apt install -y apache2",  # Install Apache web server
      "sudo systemctl start apache2",  # Start Apache service
      "sudo systemctl enable apache2"  # Enable Apache to start on boot
    ]

    connection {
      type        = "ssh"
      user        = "ubuntu"  # Use 'ubuntu' as the user for Ubuntu-based EC2 instances
      private_key = file("/home/ubuntu/terraform-files/multi-instance.pem")  # Path to the private key for authentication
      host        = self.public_ip  # Public IP of the EC2 instance
    }
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

```
 

### working code to execute programmes in local instance

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

resource "aws_instance" "app_server" {
  ami           = "ami-075686beab831bb7f"
  instance_type = var.env == "prod" ? "t2.small" : "t2.micro"       
  key_name      = "multi-instance"

  tags = {
    Name = lower(join("-", [replace(var.env, "_", "-"), var.instance_name]))
  }

  # File provisioner to copy a local file to the instance
  provisioner "file" {
    source      = "/home/ubuntu/terraform-files/local-file.txt"     
    destination = "/home/ubuntu/local-file.txt"

    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = file("/home/ubuntu/terraform-files/multi-instance.pem")
      host        = self.public_ip
    }
  }

  # Remote execution commands on the instance
  provisioner "remote-exec" {
    inline = [
      "sudo apt update -y",
      "sudo apt install -y apache2",
      "sudo systemctl start apache2",
    ]
connection {
      type        = "ssh"
      user        = "ubuntu"  # Use 'ubuntu' as the user for Ubuntu-based EC2 instances
      private_key = file("/home/ubuntu/terraform-files/multi-instance.pem")  # Path to the private key for authentication
      host        = self.public_ip  # Public IP of the EC2 instance 
    }
  }
}

# Adding null_resource for local execution (your example)
resource "null_resource" "example" {
  triggers = {
    always_run = "${timestamp()}"
  }

  provisioner "local-exec" {
    command = "echo 'This is a local command'"
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
```

[[Middle level learning/Terraform/day 06|day 06]]