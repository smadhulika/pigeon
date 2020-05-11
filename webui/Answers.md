 # PigeonLab DevOps Engineer Recruitment Test

Thank you for taking the time to do our technical test.

Please make this a **single** zip file named `{yourname}.zip` containing:

1. A single markdown file with the answers to the technical questions

2. One folder containing the technical test


## Technical Test

- Take the code in the app folder of this repository and deploy it on AWS using [Docker](https://docker.com).
- With this test, we want to assess your skills in various domains we believe are mandatory for working efficiently with us.

### Requirements

- Dockerize the application for prod and local development.
- Use terraform to provision/manage the infrastructure (IaC).
- You can use either ansible/salt-stack as CM tool (configuration-management).
- You can build AMI with required packages with any tool of your choice.
- Since you have to deploy on AWS, please do a basic setup of network security.
- In your solution please emphasize on readability, maintainability and DevOps methodologies. We expect a clear way to recreate your setup, which will be a key part of the assessment. Do not skip security considerations.



### Bonus Points

- If you can automate the whole process using GitLab CI.(--> yes completed )

- If you can set up production ready AWS infrastructure.(--> 80 % Completed, Still need to fine tune and apply security on VPC level)

- If you can run/deploy the application using container orchestration such as [ECS](https://aws.amazon.com/ecs/) or [k8s](https://k8s.io).(--> Dont have enough time to write)

- If you can document all aspects of your code.( --> yes completed)



### Technical questions

Please answer the following questions in a markdown file called `Answers.md`.

1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

Ans)
I have spend 20 Man hours to hours to write and test the code. 
if i have more time i could implement the same setup in openshift


2. How would you deal with some of the frustrations using terraform such as multiple remote state management, multiple modules for different environments and keeping it DRY?

Ans)
I dont feel any frustration while doing interesting work

3. Please describe yourself using YAML or a data templating language when dealing with configurations/resources.

Ans)
I have good exepertise skills while wring yaml code in ansible

4. What was the most useful feature that was added to the latest version of terraform? Please include a snippet of code that shows how you've used it.

Ans)
I did not write any module here, its simple code. If i get good oppurtunity  i can write a moudles for the project

5. How would you track down a performance issue in production? Have you ever had to do this?

Ans)
Heap size check in the instance and tested the applicaton using postman tool
of all api calls which you have given in assignment. it worked fine