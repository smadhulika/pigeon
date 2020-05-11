# Internet VPC
resource "aws_vpc" "pigeon-vpc" {
    cidr_block = "10.0.0.0/16"
    instance_tenancy = "default"
    enable_dns_support = "true"
    enable_dns_hostnames = "true"
    enable_classiclink = "false"
    tags = {
        Name = "pigeon-vpc"
    }
}


# Subnets
#********
resource "aws_subnet" "pigeon-subnet-public-1" {
    vpc_id = "${aws_vpc.pigeon-vpc.id}"
    cidr_block = "10.0.1.0/27"
    map_public_ip_on_launch = "true"
    availability_zone = "${var.AWS_SB_REGION.av-a}"

    tags = {
        Name = "pigeon-subnet-public-1"
    }
}

# NAT Gateway
#**************

resource "aws_eip" "pigeon_nat-1" {
  vpc      = true
}
resource "aws_nat_gateway" "pigeon_nat-gw-1" {
  allocation_id = "${aws_eip.pigeon_nat-1.id}"
  subnet_id = "${aws_subnet.pigeon-subnet-public-1.id}"
  depends_on = [aws_internet_gateway.pigeon_gw]
}


# Network ACL's
#**************

resource "aws_network_acl" "pigeon-vpc" {
  vpc_id = aws_vpc.pigeon-vpc.id

  egress {
    protocol   = "tcp"
    rule_no    = 100
    action     = "allow"
    cidr_block = "10.0.1.0/27"
    from_port  = 8080
    to_port    = 8080
  }

  ingress {
    protocol   = "tcp"
    rule_no    = 105
    action     = "allow"
    cidr_block = "10.0.1.0/27"
    from_port  = 8080
    to_port    = 8080
  }


  tags = {
    Name = "pigeon-vpc"
  }
}


# Route tables
#*************
resource "aws_route_table" "pigeon_route-public" {
    vpc_id = "${aws_vpc.pigeon-vpc.id}"
    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = "${aws_internet_gateway.pigeon_gw.id}"
    }

    tags = {
        Name = "pigeon_route-public"
    }
}


# Route table associations 
#*************************#

# Public
#********

resource "aws_route_table_association" "pigeon_route-public-1-assoc" {
    subnet_id = "${aws_subnet.pigeon-subnet-public-1.id}"
    route_table_id = "${aws_route_table.pigeon_route-public.id}"
}


# Internet GW
#************

resource "aws_internet_gateway" "pigeon_gw" {
    vpc_id = "${aws_vpc.pigeon-vpc.id}"

    tags = {
        Name = "pigeon_gw"
    }
}

