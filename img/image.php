<?php
	$id = $_GET['id'];

	require_once '../inc/inc_path.php';
	require_once 'db_config.php';

try{

/*---------------
●MySQLとの接続
・PDOクラスをインスタンス化する
・オブジェクトdbhとしてPDOクラスのインスタンスを格納
・長い文字列は;区切りの.で接続
※dbh=DataBaseHandler
----------------*/
	$dbh = new PDO($dsn, $user, $pass);

/*---------------
●属性を設定する:プレースホルダ利用に必要
・ATTR_EMULATE_PREPARES：エミュレーションの設定
	→今回はオフ（PDO::PARAM_* 定数による正しい型変換を行うため）
・ATTR_ERRMODE: エラーレポート 
・ERRMODE_EXCEPTION: 例外を投げる
※この文を設定しておくと、エラーの中身を確認しやすい
----------------*/
	$dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, 
										 PDO::ERRMODE_EXCEPTION);


/*---------------
●SQL文作成
・挿入文
・formから送られてきた情報をINSERT文で挿入
----------------*/
	$sql = "SELECT * FROM products WHERE id = ?";

/*---------------
●一覧を取り出す
・$stmt：「オブジェクト$dbh（データベースとの接続）に対して
					prepareメソッドで命令文$sqlを実行する」という変数
・$stmtに対して「$sqlの1番目の?に対して$idの値をINT型として代入する」
・$stmtを実行する（execute()）
※stmt:Statement
----------------*/
	$stmt = $dbh->prepare($sql);
	
// 送信された各情報をプレースホルダに代入する
	$stmt->bindValue(1, $id, PDO::PARAM_STR);
	
// SQL文実行
	$stmt->execute();
	
	$result = $stmt->fetch(PDO::FETCH_ASSOC);
	
	echo $result['image_data'];


// 接続終了
// オブジェクト$dbhの中身をnullで上書き（≒削除）
	$dbh = null;
	
} // end try{}

/*---------------
●例外処理
・$e：例外が起きたというオブジェクトが作成される
・エラーメッセージとか格納されてる
・最後はプログラムを強制終了
----------------*/
catch (Exception $e) {
	echo "▲エラー発生：".
				htmlspecialchars($e->getMessage(), ENT_QUOTES, 'UTF-8').
				"!<br>";
//	error_log($e->getMessage(), 3, "./errorLog.txt");
	die();
} // end catch{}
?>