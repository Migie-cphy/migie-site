1. 先装基础环境

apt update
apt install -y nginx curl git build-essential

2. 安装 Node 20
我建议用 nvm，后面换版本最省事。

nvm 官方仓库：

- https://github.com/nvm-sh/nvm

常用安装流程：

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
nvm alias default 20
node -v
npm -v

3. 安装 PM2
PM2 官方：

- https://pm2.keymetrics.io/

npm install -g pm2
pm2 -v

4. 上传项目到服务器
你服务器连 GitHub 慢的话，不建议 git clone。直接本地打包上传更稳。

本地：

cd /Users/migie/workplace/migie_site
tar --exclude=node_modules --exclude=.next --exclude=.git -czf migie-site.tar.gz .

上传到服务器后解压，比如放到：

mkdir -p /opt/migie-site
tar -xzf migie-site.tar.gz -C /opt/migie-site
cd /opt/migie-site

5. 安装依赖并构建

npm install
npm run build

6. 启动 Next.js
先手动试运行：

npm run start

默认会监听 3000。确认没报错后，用 PM2 托管：

pm2 start npm --name migie-site -- start
pm2 save
pm2 startup

pm2 startup 执行后会给你一条命令，把那条再复制执行一次。

7. 配 Nginx 反向代理
新建配置：

nano /etc/nginx/sites-available/migie-site

写入：

server {
listen 80;
server_name migie.top www.migie.top;

location / {
proxy_pass http://127.0.0.1:3000;
proxy_http_version 1.1;

proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;

proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";

proxy_buffering off;
}
}

启用它：

ln -s /etc/nginx/sites-available/migie-site /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx

8. 开防火墙
如果开了 ufw：

ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable

9. 配 HTTPS
最常用是 certbot：

apt install -y certbot python3-certbot-nginx
certbot --nginx -d migie.top -d www.migie.top

10. 日常更新
以后每次更新代码：

cd /opt/migie-site
tar -xzf 新包.tar.gz -C /opt/migie-site
npm install
npm run build
pm2 restart migie-site

排错命令

pm2 status
pm2 logs migie-site
systemctl status nginx
nginx -t
curl http://127.0.0.1:3000