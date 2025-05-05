


### ansible galaxy roles


```
ansible-galaxy role init test 
```

- in the name of test a role will be created 
- ls



```
ansible-vault edit aws_keys.yml --vault-password-file vault.pass

```



```
ec2_access_key: AKIA4MTWJN3AFB7S26MQ
ec2_secret_key: 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

```




```
---
- hosts: localhost
  connection: local
  tasks:
  - name: start an instance with a public IP address
    amazon.aws.ec2_instance:
      name: "ansible-instance"
      # key_name: "prod-ssh-key"
      # vpc_subnet_id: subnet-013744e41e8088axx
      instance_type: t2.micro
      security_group: default
      region: us-west-2
      aws_access_key: "{{ec2__access_key}}"  # From vault as defined
      aws_secret_key: "{{ec2__secret_key}}"  # From vault as defined     
  
      network:
        assign_public_ip: true
      image_id: ami-075686beab831bb7f
      tags:
        Environment: Testing
```

