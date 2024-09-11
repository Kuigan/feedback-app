#!/bin/bash

# Die Userscripte werden automatisch als sudo ausgeführt, deswegen ohne sudo im Script

#Install Docker
yum update -y
yum install -y docker

#Start Docker
service docker start
systemctl enable docker

#Install Docker-Compose
curl -L "https://github.com/docker/compose/releases/download/v2.0.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

#Download Docker-Compose App Config
mkdir /home/ec2-user/feedback-app
cd /home/ec2-user/feedback-app
wget https://raw.githubusercontent.com/kuigan/feedback-app/main/docker-compose.yml

#Start the app
docker-compose up -d