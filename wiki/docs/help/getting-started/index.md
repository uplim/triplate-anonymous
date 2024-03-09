# さあ、開発を開始しよう！

## 環境構築

DockerとNode.jsが必要です。

```sh
$ docker -v
Docker version 25.0.3, build 4debf41
$ node -v
v20.11.1

# 依存ライブラリをインストール
$ yarn install

# VRT用のDockerコンテナをビルド
$ docker compose -f ./dev/vrt/docker-compose.yml build

# 開発サーバの起動
$ yarn dev:all
```

- http://localhost:3000 （Next.js）
- http://localhost:3001 （Wiki）
- http://localhost:6006 （Storybook）
