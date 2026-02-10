#!/bin/bash

START_DATE="2025-04-05"
FILE="app.js"

messages=(
"fix: resolve login bug"
"feat: add user profile feature"
"chore: update dependencies"
"refactor: improve auth logic"
"style: UI button alignment"
"fix: crash on startup"
"feat: add API endpoint"
"docs: update readme"
"perf: optimize query speed"
"test: add unit tests"
"bug: fix null pointer issue"
"ui: improve dashboard layout"
"conflict: resolve merge conflict"
"change: update validation rules"
"feat: add AI support"
)

touch $FILE

current=$(date -j -f "%Y-%m-%d" "$START_DATE" "+%s")
today=$(date "+%s")
one_day=86400

while [ $current -le $today ]
do
    # random hour and minute using $RANDOM
    hour=$((9 + RANDOM % 10))    # 9-18
    minute=$((10 + RANDOM % 50)) # 10-59

    commit_date=$(date -r $current "+%Y-%m-%dT$hour:$minute:00")

    # random code change
    echo "// change $((1000 + RANDOM % 9000))" >> $FILE

    git add $FILE

    # random commit message
    msg=${messages[$RANDOM % ${#messages[@]}]}

    GIT_AUTHOR_DATE="$commit_date" \
    GIT_COMMITTER_DATE="$commit_date" \
    git commit -m "$msg"

    current=$((current + one_day))
done

echo "Done. Now push:"
echo "git push origin main"
