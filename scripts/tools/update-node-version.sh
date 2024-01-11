#!/bin/bash -e

# rootに移動する
cd $(dirname "$0")/../..

if [ -z "$1" ]; then
  echo "Usage: $0 version_number"
  exit 1
fi

NODE_VERSION="$1"

# # バージョン書き換え
# sed -i "" "s/\"node\": \".*\",/\"node\": \"$NODE_VERSION\",/g" package.json
# sed -i "" "s/FROM node:.*-slim/FROM node:$NODE_VERSION-slim/g" dev/firebase-emulator/node/Dockerfile
# sed -i "" "s/Use Node.js .*/Use Node.js $NODE_VERSION/g" .github/workflows/ci.yml .github/workflows/deploy-storybook.yml
# sed -i "" "s/node-version: '.*'/node-version: '$NODE_VERSION'/g" .github/workflows/ci.yml .github/workflows/deploy-storybook.yml

# # 書き換えたので一応フォーマット
# yarn format

# # @types/nodeは追従するので一緒にupdate
# yarn add -D "@types/node@$NODE_VERSION"

# # 現在のNode.jsのバージョンを取得（vがいらないので消す）
# CURRENT_NODE_VERSION=$(node -v | sed 's/v//')

# # Node.js最新をインストールしてセットする
# echo "Node.jsをインストールします"
# brew update && brew upgrade node-build
# git -C ~/.nodenv/plugins/node-build pull
# nodenv install $NODE_VERSION
# nodenv local $NODE_VERSION

# コミット
git add . && git commit -m "update Node.js to $NODE_VERSION"

# # アンインストールの確認メッセージを表示
# read -p "Node.jsの古いバージョン $CURRENT_NODE_VERSION をアンインストールしますか？ (y/n): " choice

# # ユーザの選択に応じて処理を実行
# if [ "$choice" == "y" ]; then
#   echo "アンインストール中..."
#   nodenv uninstall -f 20.10.0
#   echo "Node.js $current_node_version をアンインストールしました。"
# fi

# echo "Node.jsのアップデートが完了しました"
