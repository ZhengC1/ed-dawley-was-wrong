# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"
Vagrant.configure("2") do |config|
    config.vm.box = "puphpet/centos65-x64"
    config.vm.box_check_update = false
    # connect on port 13306
    config.vm.network :forwarded_port, guest: 3306, host: 3306
    config.vm.provision :shell, :path => "./vagrant/install.sh"
    config.vm.synced_folder ".", "/vagrant/", :mount_options => ["dmode=777", "fmode=666"]
    config.vm.network "private_network", ip: "10.19.17.12"
end

