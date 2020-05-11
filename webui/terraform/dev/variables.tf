variable "AWS_ACCESS_KEY" {}
variable "AWS_SECRET_KEY" {}
variable "AMIS" {
   type = map(string)
   default = {
    ap-southeast-1 = "ami-0ec225b5e01ccb706"
  }

}
variable "AWS_REGION" {
  default = "ap-southeast-1"
}
variable "AWS_SB_REGION" {
  type = map(string)
  default = {
   av-a = "ap-southeast-1a"
   av-b = "ap-southeast-1b"
   av-c = "ap-southeast-1c"
 }
}
