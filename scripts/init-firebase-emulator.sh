#!/bin/bash -eu

# scriptsが置かれてる階層に移動する
cd `dirname $0`

# envファイルの中身を変数として保持する（.envファイル内のPRIVATEがコマンドとして解釈されてエラー出るのでそれは無視する）
source ../.env.local > /dev/null 2>&1

# ビルド&起動
docker compose -f ../dev/firebase-emulator/docker-compose.yml up --build -d

wait

# ログイン
docker compose -f ../dev/firebase-emulator/docker-compose.yml exec firebase firebase login --no-localhost

# firebaseの設定ファイルを用意
FIREBASE_CONFIG_PATH="../dev/firebase-emulator/node"
FIREBASE_CONFIG=$(cat << EOS
{
  "projects": {
    "default": "${FIREBASE_PROJECT_ID}"
  }
}
EOS
)

# なければ設定ファイルを作成する
if [ ! -f ${FIREBASE_CONFIG_PATH} ]; then
  echo "Create .firebaserc ..."
  echo ${FIREBASE_CONFIG} > "$FIREBASE_CONFIG_PATH/.firebaserc"
fi

# コンテナを落とす
docker compose -f ../dev/firebase-emulator/docker-compose.yml down
