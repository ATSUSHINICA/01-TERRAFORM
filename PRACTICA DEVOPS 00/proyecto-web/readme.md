# PRACTICA DEVOPS 00 - José Alejandro Diaz Delgado 

Servicio: Amazon S3

Operacion: ``terraform apply``  

Resultado:

│ Error: reading S3 Bucket (practica-devops-00-jose-alejandro) object lock configuration:operation error S3: GetObjectLockConfiguration, https response error StatusCode: 403, RequestID: 7RKY7X06QEQTHVRF, HostID: Z+sKRlQ11/tx8r5AVsuksTVpUZ/U4fx+NkGNVHkkqMUI8uqBi4n82SsHyxAaf3WX1yBIRcJBxFLsiAdtGehbeHvX+aPzPVxw, api error AccessDenied: User: arn:aws:sts::188055787420:assumed-role/voclabs/user5424381=josealejandrodelgadodiaz@gmail.com is not authorized to perform: s3:GetBucketObjectLockConfiguration on resource: "arn:aws:s3:::practica-devops-00-jose-alejandro" with an explicit deny in a service control policy: arn:aws:organizations::021312171183:policy/o-zmj0qsgu0z/service_control_policy/p-6v4y751d
│ 
│   with aws_s3_bucket.website_bucket,
│   on main.tf line 16, in resource "aws_s3_bucket" "website_bucket":
│   16: resource "aws_s3_bucket" "website_bucket" {
│ 

Causa: Restricción aplicada por la Service Control Policy