resource "aws_instance" "dockerserver" {
  count                   = 1
  ami                     = "${lookup(var.AMIS, var.AWS_REGION)}"
  instance_type           = "t2.medium"
  key_name                = "${aws_key_pair.webui.key_name}"
  monitoring              = true
  subnet_id               = "${aws_subnet.pigeon-subnet-public-1.id}"
  user_data               = file("../scripts/bootstrap.sh")
  disable_api_termination = false
  vpc_security_group_ids  = [
    "${aws_security_group.pigeon_sg.id}"
  ]

  root_block_device {
    volume_type = "gp2"
    volume_size = 8
    delete_on_termination = true
  }

  tags = {
    Name                     = format("dockerserver-%02d", count.index + 1)
    Type                     = "EC2 Instance"
    Monitoring               = "true"
 }
}
