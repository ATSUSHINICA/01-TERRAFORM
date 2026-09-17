# 1. Configuración del proveedor
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# 2. Bucket S3 (Almacén de la web)
resource "aws_s3_bucket" "website_bucket" {
  bucket = "practica-devops-00-jose-alejandro" # Nombre único global
}

# 3. Configuración para hosting de web estática
resource "aws_s3_bucket_website_configuration" "website_config" {
  bucket = aws_s3_bucket.website_bucket.id

  index_document {
    suffix = "index.html"
  }
}

# 4. Enlace directo a la web generada por AWS S3
output "website_url" {
  value       = aws_s3_bucket_website_configuration.website_config.website_endpoint
  description = "URL del hosting estático en S3"
}
