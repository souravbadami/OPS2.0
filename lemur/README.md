# LEMUR
A simple tool to ship logs from Logstash to Microsoft Azure Event Hub.

## Dependencies

1. `curl --silent --location https://rpm.nodesource.com/setup_7.x | bash -`

2. `yum -y install nodejs`

3. `npm install`

## Configuration

Move `config.sample.js` to `/etc/lemur/` and rename it to `config.js` and replace the configuration details. We have also included a sample httpd configuration file for reference.

## Execute

Type `node transfer.js`.