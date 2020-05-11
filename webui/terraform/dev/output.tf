output "dockerserver" {
  value = "${aws_instance.dockerserver.*.public_ip}"
}