#!/bin/sh

DIR="$( cd "$( dirname "$0" )" && pwd )"

rsync -avz --delete $DIR/../dist/ deploy@testing.nkb:/srv/www/pages/connections/

