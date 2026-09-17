
# URL 
http://practica-devops-00-jose-alejandro.s3-website-us-east-1.amazonaws.com/


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




PS C:\Users\josea\Documents\GITHUB\DAM2 (git)\DOCUMENTOS\DAPM\01-TERRAFORM> gemini

 ▝▜▄     Gemini CLI v0.60.0
   ▝▜▄
  ▗▟▀    Authenticated with gemini-api-key /auth
 ▝▀    


Tips for getting started:
1. Create GEMINI.md files to customize your interactions
2. /help for more information
3. Ask coding questions, edit code or run commands
4. Be specific for the best results
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 > ya esta subido en el bucket del s3 pero necesito que me des el url de la pagina                                                                                                                
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

  ✓  FindFiles  '**/*.tfstate' → Found 1 matching file(s)
  ✓  SearchText  'website_endpoint' in **/*.tfstate → No matches found
  ✓  ReadFile  terraform-aws\main.tf
  ✓  ReadFile  PRACTICA DEVOPS 00\...\main.tf
  ✓  FindFiles  '**/*.tfstate' → Found 2 matching file(s)
  ✓  SearchText  'http' in **/proyecto-web/*.tfstate → No matches found
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✓  Shell terraform output                                                                                                                                                                  │
│                                                                                                                                                                                            │
│ ... first 2 lines hidden (Ctrl+O to show) ...                                                                                                                                              │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│ ╷                                                                                                                                                                                          │
│ │ Warning: No outputs found                                                                                                                                                                │
│ │                                                                                                                                                                                          │
│ │ The state file either has no outputs defined, or all the defined outputs are empty. Please define an output in your configuration with the `output` keyword and run `terraform refresh`  │
│ │ for it to become available. If you are using interpolation, please verify the interpolated value is not empty. You can use the `terraform console` command to assist.                    │
│ ╵                                                                                                                                                                                          │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✓  Shell Get-Content terraform.tfstate                                                                                                                                                     │
│                                                                                                                                                                                            │
│ ... first 75 lines hidden (Ctrl+O to show) ...                                                                                                                                             │
│           "identity_schema_version": 0,                                                                                                                                                    │
│           "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjoxMjAwMDAwMDAwMDAwLCJkZWxldGUiOjM2MDAwMDAwMDAwMDAsInJlYWQiOjEyMDAwMDAwMDAwMDAsInVwZGF0ZSI6MTIwMDAw │
│ MDAwMDAwMH19"                                                                                                                                                                              │
│         }                                                                                                                                                                                  │
│       ]                                                                                                                                                                                    │
│     }                                                                                                                                                                                      │
│   ],                                                                                                                                                                                       │
│   "check_results": null                                                                                                                                                                    │
│ }                                                                                                                                                                                          │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✓  Shell Get-Content terraform.tfstate                                                                                                                                                     │
│                                                                                                                                                                                            │
│ ... first 50 lines hidden (Ctrl+O to show) ...                                                                                                                                             │
│             "region": "us-east-1"                                                                                                                                                          │
│           },                                                                                                                                                                               │
│           "private": "eyJzY2hlbWFfdmVyc2lvbiI6IjEifQ=="                                                                                                                                    │
│         }                                                                                                                                                                                  │
│       ]                                                                                                                                                                                    │
│     }                                                                                                                                                                                      │
│   ],                                                                                                                                                                                       │
│   "check_results": null                                                                                                                                                                    │
│ }                                                                                                                                                                                          │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✓  Shell aws s3api get-bucket-website --bucket practica-devops-00-jose-alejandro                                                                                                           │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│ aws: [ERROR]: An error occurred (NoSuchWebsiteConfiguration) when calling the GetBucketWebsite operation: The specified bucket does not have a website configuration                       │
│                                                                                                                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✓  Shell aws s3 ls                                                                                                                                                                         │
│                                                                                                                                                                                            │
│ 2026-09-16 17:59:33 practica-devops-00-jose-alejandro                                                                                                                                      │
│                                                                                                                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✓  Shell aws s3 ls s3://practica-devops-00-jose-alejandro --recursive                                                                                                                      │
│                                                                                                                                                                                            │
│ 2026-09-16 19:20:48       3176 css/styles.css                                                                                                                                              │
│ 2026-09-16 19:20:48       4501 index.html                                                                                                                                                  │
│ 2026-09-16 19:20:33       1518 javascript/app.js                                                                                                                                           │
│ 2026-09-16 19:20:33       1077 readme.md                                                                                                                                                   │
│                                                                                                                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✓  Shell aws s3api get-bucket-policy --bucket practica-devops-00-jose-alejandro                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│ aws: [ERROR]: An error occurred (NoSuchBucketPolicy) when calling the GetBucketPolicy operation: The bucket policy does not exist                                                          │
│                                                                                                                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
  ✓  ReadFile  PRACTICA DEVOPS 00\...\readme.md
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✓  Shell aws s3 website s3://practica-devops-00-jose-alejandro/ --index-document index.html                                                                                                │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✓  Shell aws s3api get-bucket-website --bucket practica-devops-00-jose-alejandro                                                                                                           │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│ "cat" no se reconoce como un comando interno o externo,                                                                                                                                    │
│ programa o archivo por lotes ejecutable.                                                                                                                                                   │
│                                                                                                                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✓  Shell aws s3api get-bucket-website --bucket practica-devops-00-jose-alejandro --no-cli-pager                                                                                            │
│                                                                                                                                                                                            │
│ ... first 1 line hidden (Ctrl+O to show) ...                                                                                                                                               │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│                                                                                                                                                                                            │
│ {                                                                                                                                                                                          │
│     "IndexDocument": {                                                                                                                                                                     │
│         "Suffix": "index.html"                                                                                                                                                             │
│     }                                                                                                                                                                                      │
│ }                                                                                                                                                                                          │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✓  Shell aws s3api get-public-access-block --bucket practica-devops-00-jose-alejandro --no-cli-pager                                                                                       │
│                                                                                                                                                                                            │
│ {                                                                                                                                                                                          │
│     "PublicAccessBlockConfiguration": {                                                                                                                                                    │
│         "BlockPublicAcls": true,                                                                                                                                                           │
│         "IgnorePublicAcls": true,                                                                                                                                                          │
│         "BlockPublicPolicy": true,                                                                                                                                                         │
│         "RestrictPublicBuckets": true                                                                                                                                                      │
│     }                                                                                                                                                                                      │
│ }                                                                                                                                                                                          │
│                                                                                                                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ -  Shell Disables public access block on the S3 bucket to allow public web access.                                                                                                         │
│                                                                                                                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯


ℹ Request cancelled.

