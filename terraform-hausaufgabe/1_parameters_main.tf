provider "aws" {
  region = "us-east-1"
}

resource "aws_ssm_parameter" "db_host" {
  name  = "/feedback-app/backend/test/db-host"
  type  = "String"
  value = var.db_host
}

resource "aws_ssm_parameter" "db_name" {
  name  = "/feedback-app/backend/test/db-name"
  type  = "String"
  value = var.db_name
}

resource "aws_ssm_parameter" "db_password" {
  name  = "/feedback-app/backend/test/db-password"
  type  = "SecureString"
  value = var.db_password
}

resource "aws_ssm_parameter" "db_port" {
  name  = "/feedback-app/backend/test/db-port"
  type  = "String"
  value = var.db_port
}

resource "aws_ssm_parameter" "db_user" {
  name  = "/feedback-app/backend/test/db-user"
  type  = "String"
  value = var.db_user
}

resource "aws_ssm_parameter" "vpc_id" {
  name  = "/feedback-app/backend/test/vpc-id"
  type  = "String"
  value = var.vpc_id
}
