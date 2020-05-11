#!/bin/bash
sudo yum -y update 
sudo yum install -y wget vim tar ksh git
sudo amazon-linux-extras install ansible2
sudo mkdir /apps
sudo chmod 777 /apps
cd /apps && git clone https://github.com/smadhulika/pigeon.git
cd /apps/pigeon/web-ui/playbooks && ansible-playbook docker.yml