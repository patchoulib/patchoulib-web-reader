<div style="width: 100%; display: flex; justify-content: center;">
    <img src="./img/end-lib-lore.png" alt="世界尽头图书馆"/>
</div>

开源轻小说资源站

欢迎加入 [Telegram 群组](https://t.me/patchoulib)

项目目前还是起步阶段

## 技术栈

Next.js 系列

- Solid.js
- PWA
- Tailwind CSS
- Typescript
- Node.js

API 交互

- tRPC
- S3 对象存储

数据库

- Redis
- MongoDB
- PostgreSQL
- InfluxDB 时序数据库
- Milvus 向量数据库

机器学习

- TensorFlow.js

## 开发须知

使用`pnpm`作为包管理器

请遵循代码规范，使用`eslint`和`prettier`进行代码格式化

数据库配置文件在`.env`中，开发时，如果不想和数据库交互，可以设置`DEVELOP_WITHOUT_DB=true`
