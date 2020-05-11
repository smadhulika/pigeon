# pigeon

Hello Team,

Good Day !!

Please follow the steps to test the dockerised webui Application.
This is one simple thought which i find in my mind and written the code. There are multiple ways to achive this.


Tools:
=====
AWS \
Terraform \
Ansible \
Docker(written docker file)


Installation Steps:
-------------------

1) Create S3 Bucket

2) Create iam role name ec2-admin and attach below policies

 AmazonEC2FullAccess \
 AmazonS3FullAccess \
 AmazonVPCFullAccess 

3) Import any of your Public Key in aws (key pairs) with the name webuikey

4) Create AWS instance Amazon LInux2 - t2.micro and attach above iam role to the instance

5) install terraform and create /apps directory

6) dowload Source code from github 
https://github.com/smadhulika/pigeon.git

7)  Update Export Variables under scripts directory

/apps/pigeon/webui/terraform/scripts 

vi export-variables \
export S3_BUCKET="<s3bucketname>"   

Note: Change your s3 bucket name to store terraform state ( Mandatory) . Any other if you modified the directory structure 


8) Excute the below scripts to provision infrastruture, Provision Ec2 instance, create Docker container & Install Webui application

cd /apps/pigeon/webui/terraform/scripts \
source export-variables \
./terraform-plan.sh \
./terraform-apply.sh 

Note: It will setup containerized Application and dispaly the Public ip address at end of script execution


9) Test the application

Get:
http://<public IP >:8080/api/v1/retrieve/pigeon

Use postman tool to Upload and delete the files



Note: if you want to use own repository to test the code. Create a public repo and test. Boot strap script will pull the code to run ansible playbooks to do Docker stuff



Stay Home & Safe !!
