# ShoeLink 鞋类外贸展示网站

专业的 B2B 鞋类出口展示网站，托管于 GitHub Pages，免费稳定。

---

## 📌 重要链接

| 功能 | 链接 |
|------|------|
| 🌐 网站首页 | https://hfdhf.github.io/shoelink-website/ |
| 🔧 管理后台 | https://hfdhf.github.io/shoelink-website/manage.html |
| 📦 GitHub 仓库 | https://github.com/hfdhf/shoelink-website |
| 📊 网站统计 | https://analytics.google.com |

---

## 🔧 日常操作方法

### 1. 修改联系方式（邮箱、WhatsApp、地址等）

1. 打开：https://hfdhf.github.io/shoelink-website/manage.html
2. 点击 **"⚙️ 网站设置"** 标签页
3. 修改需要更改的内容
4. 点击 **"生成 site.json 代码"**
5. 点击 **"复制代码"**
6. 点击 **"打开 GitHub 文件"**
7. 粘贴代码，点击 **Commit changes**

### 2. 修改分类和子类

1. 打开：https://hfdhf.github.io/shoelink-website/manage.html
2. 点击 **"📂 分类与子类"** 标签页
3. 修改分类名称、添加子类、设置展示数量
4. 点击 **"生成 categories.json 代码"**
5. 复制代码到 GitHub 对应文件

### 3. 修改产品信息

1. 打开：https://hfdhf.github.io/shoelink-website/manage.html
2. 点击 **"👟 产品管理"** 标签页
3. 修改产品名称、分类、价格、图片路径等
4. 点击 **"生成 products.json 代码"**
5. 复制代码到 GitHub 对应文件

### 4. 上传产品图片

1. 打开：https://github.com/hfdhf/shoelink-website/new/main
2. 文件名输入：`images/产品名.jpg`（例如：`images/running-shoe-01.jpg`）
3. 点击上传区域选择图片
4. 点击 **Commit new file**
5. 回到管理后台，修改产品图片路径为 `images/产品名.jpg`

### 5. 添加新产品

1. 打开：https://github.com/hfdhf/shoelink-website/edit/main/_data/products.json
2. 复制最后一条产品记录
3. 在最后一条记录后添加逗号
4. 粘贴复制的记录，修改内容
5. 保存

### 6. 绑定自定义域名

1. 购买域名（推荐 Namecheap、GoDaddy、阿里云）
2. 打开：https://github.com/hfdhf/shoelink-website/settings/pages
3. 在 Custom domain 填入域名，保存
4. 在域名服务商处添加 CNAME 记录指向：`hfdhf.github.io`
5. 等待生效

### 7. 查看网站数据统计

1. 访问：https://analytics.google.com
2. 用 Google 账号登录
3. 查看访问人数、来源、浏览页面等数据

---

## 📁 文件结构

shoelink-website/
├── index.html # 首页
├── products.html # 产品列表页
├── product-detail.html # 产品详情页
├── about.html # 关于我们
├── contact.html # 联系页面
├── sample-request.html # 样品申请
├── faq.html # 常见问题
├── manage.html # 管理后台
├── css/style.css # 样式
├── js/main.js # 脚本
├── _data/ # 数据文件（可编辑）
│ ├── products.json # 产品数据
│ ├── categories.json # 分类数据
│ └── site.json # 网站设置
├── images/ # 产品图片
└── admin/ # 备用后台


---

## ⚠️ 注意事项

- 修改数据后等待 1-2 分钟网站才更新
- 图片文件名不要有空格，用英文或数字
- 建议图片尺寸 600x400，大小不超过 200KB


