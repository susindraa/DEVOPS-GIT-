---
title: "copying local files to ec2 instance using bash"
date: 2025-04-30
time: 17:33
module: ec2 instance
environment: Dev
priority: Low
tags: [bug]
---

## 📝 What is the issue?
- copying file from local machine to ece machine 

## 🧪 Approaches
- scp -i "/c/Users/user/Downloads/first-instance-creation.pem" "/c/Users/user/Downloads/multi-instance.pem" ubuntu@51.21.253.241:/home/ubuntu/terraform-files/ 

## ✅ Solution
- use this command 
``` 
scp -i "/c/Users/user/Downloads/first-instance-creation.pem" "/c/Users/user/Downloads/multi-instance.pem" ubuntu@51.21.253.241:/home/ubuntu/terraform-files/ 
```

## 🧾 Summary / Notes
- first you need to give present instance key and then then file and public ip 

