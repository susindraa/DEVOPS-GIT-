
#goes-to/terraform 

### Terraform commands

- init
- fmt
- validate
- apply
- plan




### main.tf


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
resource "aws_instance" "app_server" {
  ami           = "ami-075686beab831bb7f"
  instance_type = "t2.micro"
  key_name      = "multi-instance"

  tags = {
    Name = var.instance_name
  }
}

```


### variables 


```

variable "instance_name" {
  description = "value of the name tag for the EC2 Instance"
  type        = string
  default     = "exampleinstance"
}

```

- Using this I called the Instance.

```
terraform apply -var "instance_name=YetAnotherName"

```


### output 


```
output "instance_id" {
  description  =  "ID of the EC2 instance"
  value        =  aws_instance.app_server.id
}

output "instance_public_ip" {
  description  = "public IP address of the EC2 instance"
  value        = aws_instance.app_server.public_ip
}

```


- After applying it will automatically calls the output.



### conditional expressions

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
variable "env" {
  description = "environment name to decide instance type"
  type = string
  default = "dev"
}
resource "aws_instance" "app_server" {
  ami = "ami-075686beab831bb7f"
  instance_type = var.env == "prod" ? "t2.small" : "t2.micro"
  key_name = "multi-instance"
  tags = {
    Name = var.instance_name
  }
}
# 👇 Outputs
output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.app_server.id
}
output "instance_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.app_server.public_ip
}
variable "instance_name" {
  description = "value of the name tag for the EC2 Instance"
  type        = string
  default     = "exampleinstance"
}
```




```
terraform apply -var="env=prod"

```


```
terraform apply -var="env=dev"

```



### Built in functions 

Perfect.  
Let’s walk through a **simple but real** example where built-in functions make your Terraform code **dynamic** and **reusable**.

---

# Problem

Suppose you want to create **EC2 instances** for different environments:

- `dev`
    
- `prod`
    
- `test`
    

You don't want to manually hardcode names.  
Instead, you want Terraform to **dynamically** create instance names based on environment.

---

# Dynamic and Reusable Example

First, define your environment as a variable:

```hcl
variable "environment" {
  description = "Deployment environment name"
  type        = string
}
```

Now, use built-in functions to generate a **dynamic name**:

```hcl
resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = lower(join("-", [var.environment, "server"]))
  }
}
```

**How it works:**

- `lower()` — Makes the entire name lowercase.
    
- `join("-", [...])` — Joins the environment name with the word `server` using `-`.
    

If you pass:

```hcl
environment = "Prod"
```

The instance name will automatically become:

```
prod-server
```

If you pass:

```hcl
environment = "Dev"
```

The instance name will automatically become:

```
dev-server
```

You don't have to write separate Terraform files for dev, prod, or test.  
One module can handle all by just changing the input.

---

# Why this is Dynamic and Reusable

- You can **reuse** the same resource block for all environments
    
- **No duplication** of resources for each environment
    
- **Easy maintenance** — just change the variable input
    

---

Would you also like me to show a slightly bigger example using **list** + **for loop** + **functions** to create multiple resources automatically?  
It’s even cooler. Let me know.







### modules




You're **very close**! 🔥  
Let me explain it even more **clearly and step-by-step**:

---

# 🧠 The Real Flow

✅ In your **main `main.tf`**, when you **call the module**,  
✅ You **pass variables** (`ami_id`, `instance_type`, `instance_name`).  
✅ The module looks for **those variables inside its own `variables.tf`** file.  
✅ The **module's `main.tf`** then **uses** those variables to create resources.  
✅ The **module's `outputs.tf`** defines what output you want from the module.  
✅ In your **main `main.tf`**, you **reference the module's outputs** and print them.

---

# 🔵 Visual Picture

```
main.tf (root project)
│
│ -- passes → variables to →
│
modules/ec2-instance/
    ├── variables.tf  (declares what inputs are needed)
    ├── main.tf       (uses the variables to create resources)
    ├── outputs.tf    (gives back outputs like instance ID)
```

---

# 📜 Small Step-by-Step Story

1. You say in **main.tf**:
    

```hcl
module "web_server" {
  source = "./modules/ec2-instance"
  ami_id = "ami-12345"
  instance_type = "t2.micro"
  instance_name = "WebServer"
}
```

👉 This **sends values** to the module.

---

2. **In module's `variables.tf`**, you have:
    

```hcl
variable "ami_id" {}
variable "instance_type" {}
variable "instance_name" {}
```

👉 This **receives values** inside the module.

---

3. **In module's `main.tf`**, you use the received variables:
    

```hcl
resource "aws_instance" "this" {
  ami           = var.ami_id
  instance_type = var.instance_type
  tags = {
    Name = var.instance_name
  }
}
```

👉 This **creates** your EC2 instance.

---

4. **In module's `outputs.tf`**, you output things:
    

```hcl
output "instance_id" {
  value = aws_instance.this.id
}
```

👉 This **sends back** data to your root main.tf.

---

5. **Back in root `main.tf`**, you can print the output:
    

```hcl
output "web_server_id" {
  value = module.web_server.instance_id
}
```

👉 Terraform shows you the EC2 instance ID after applying!

---

# 🎯 Final Simple Statement:

- **main.tf** gives **inputs** to **module**.
    
- **variables.tf** defines the **input names**.
    
- **main.tf** inside module **uses inputs** to create resources.
    
- **outputs.tf** inside module **returns outputs**.
    
- **main.tf** (root) **displays outputs** if you want.
    

---

# 🏆 You almost nailed it bro!

You are **99% right** — you just needed this clean flow to confirm.

---

Would you also like me to show you a **small diagram** I can create to show this flow visually in **one image**? 📈🚀  
It'll make it super easy to memorize! Want it? 🎯


- ![[terraform modules-terra]]
- [[modules terraform terra canvas.canvas|modules terraform terra]]




