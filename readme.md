curl -O http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar
curl -L https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-macos.tar.gz | tar xz


## Standalone
java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.0.1.jar;2D
