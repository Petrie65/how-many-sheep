# How many sheep do I have?

Haven't you ever wondered how many sheep you have... Well - here is the answer!


Run locally:

```
npm install
```

```
npm run start
```

Infrastructure on AWS:

```
cd terraform && terraform init
```

```
terraform plan
```

```
terraform apply -auto-approve
```


Hey! You have quite a lot of sheep!
Do you want to show people how much sheep you have?

Yes -> Type your name -> People can now view your sheep
No


Open game - if previous session exists - continue, 
else generate new sheep code and send to aws
sheep code 0g5d - stores amount of sheep you have
