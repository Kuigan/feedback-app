variable "db_host" {
  description = "The database host"
  type        = string
}

variable "db_name" {
  description = "The database name"
  type        = string
}

variable "db_password" {
  description = "The database password"
  type        = string
  sensitive   = true
}

variable "db_port" {
  description = "The database port"
  type        = number
}

variable "db_user" {
  description = "The database user"
  type        = string
}

variable "vpc_id" {
  description = "The VPC ID"
  type        = string
}