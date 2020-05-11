resource "aws_security_group" "pigeon_sg" {
  name        = "pigeon_sg"
  description = "Ingress from efresh to instances"
  vpc_id      = "${aws_vpc.pigeon-vpc.id}"

  tags = {
    Name                     = "pigeon_sg"
    Type                     = "EC2 Security Group"
    Monitoring               = "true"
  }
}
