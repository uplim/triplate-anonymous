#!/bin/bash -e

# rootに移動する
cd $(dirname "$0")/../..

# 初期値の設定
INSTALL_ONLY=false
NODE_VERSION=""

# 引数の解析
while [[ $# -gt 0 ]]; do
  case "$1" in
    --install-only)
      INSTALL_ONLY=true
      shift
      ;;
    *)
      # オプション以外の引数は新しいNode.jsのバージョンとして扱う
      NODE_VERSION="$1"
      shift
      ;;
  esac
done

if [ "$INSTALL_ONLY" == false ]; then
  # バージョン書き換え
  sed -i "" "s/\"node\": \".*\",/\"node\": \"$NODE_VERSION\",/g" package.json
  sed -i "" "s/FROM node:.*-slim/FROM node:$NODE_VERSION-slim/g" dev/firebase-emulator/node/Dockerfile
  sed -i "" "s/Use Node.js .*/Use Node.js $NODE_VERSION/g" .github/workflows/ci.yml .github/workflows/deploy-storybook.yml
  sed -i "" "s/node-version: '.*'/node-version: '$NODE_VERSION'/g" .github/workflows/ci.yml .github/workflows/deploy-storybook.yml

  # 書き換えたので一応フォーマット
  yarn format

  # @types/nodeは追従するので一緒にupdate
  yarn add -D "@types/node@$NODE_VERSION"

  # コミット
  git add . && git commit -m "update Node.js to $NODE_VERSION"
fi

# 古いNode.jsのバージョンを取得（vがいらないので消す）
PREV_NODE_VERSION=$(node -v | sed 's/v//')

# 最新Node.jsをインストールしてセットする
echo "Installing Node.js now."
brew update && brew upgrade node-build
git -C ~/.nodenv/plugins/node-build pull
nodenv install $NODE_VERSION
nodenv local $NODE_VERSION
npm install -g yarn && corepack enable

# アンインストールの確認メッセージを表示
read -p "Node.jsの古いバージョン $PREV_NODE_VERSION をアンインストールしますか？ (y/n): " choice

# ユーザの選択に応じて処理を実行
if [ "$choice" == "y" ]; then
  echo "アンインストール中..."
  nodenv uninstall -f $PREV_NODE_VERSION
  echo "Node.js $PREV_NODE_VERSION をアンインストールしました。"
fi

echo "Node.js now installed."
echo Node.js: $(node -v)
