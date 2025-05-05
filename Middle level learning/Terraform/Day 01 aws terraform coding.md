#done-space 


#goes-to/terraform


#space/terraform/snaps 


### to create 5 instances in the region specified in the code.
?
- for aws -id you need to go instance and select the region specified in the code and select the create instance in the web UI and copy the aws id in the code.
```
locals {
  instance_names = [
    "web-server-1",
    "web-server-2",
    "app-server-1",
    "app-server-2",
    "db-server-1"
  ]
}
# Create multiple EC2 instances with SSH key
resource "aws_instance" "multi" {
  for_each = toset(local.instance_names)
  ami           = "ami-087f352c165340ea1"  # Replace with a valid AMI in your region
  instance_type = "t3.micro"
  key_name      = "multi-instance" # 👈 This is the PEM key name registered in AWS
  tags = {
    Name = each.key
  }
}
```
<!--SR:!2025-05-02,1,190-->




[[day 02]]
