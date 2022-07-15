#!/bin/sh

# composer.* ./
cp ./wp-content/composer.json ./composer.json
composer config --no-plugins allow-plugins.composer/installers true
composer install --no-dev
apache2-foreground