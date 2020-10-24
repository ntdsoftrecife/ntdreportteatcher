rm -fr build
npm run build
cd build
zip -r tmp.zip ./*
scp -P 20200 tmp.zip root@ntdsoft.net:/digital/
ssh -p 20200 root@ntdsoft.net "cd /digital/report/ && rm -fr ./* && mv -f ../tmp.zip ./ && unzip tmp.zip && rm -f tmp.zip"
cd ..
# rm -fr build