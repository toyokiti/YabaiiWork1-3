let arrTask = ['掃除','買い物','散歩']; // タスクを管理する配列
let Newtask; //これから登録するタスク

function inputTask(taskName) {
    // タスク管理の配列に新タスクを追加
    arrTask[arrTask.length] = taskName;
    showtask(); 
    alert('新しいタスクを追加しました。');
}

function showtask() {
    console.log('=============================');
    console.log('現在持っているタスクの一覧');
    console.log('=============================');
    arrTask.forEach((Value, index) => {
        console.log(`${index} : ${Value}`);
    })
}

showtask(); //最初に入っているタスクの表示
while(Newtask !== null) {
    Newtask = prompt('タスクを入力してください')   
    if (Newtask !== null) { //タスクの追加(キャンセルをクリックした場合は無視)
        inputTask(Newtask);
    }
}
