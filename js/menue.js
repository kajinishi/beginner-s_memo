function dropdown(place){//画面トップのナビゲーション
  /* ↓パスのやつ */
  var index="",c="c/",cp="c++/",DX="DX/",Unity="Unity/",algorithm="algorithm/",poke="pokemon/";
  if(place!=""){
      index="../";
      place=="c"?c="":c="../"+c;
      place=="cp"?cp="":cp="../"+cp;
      place=="DX"?DX="":DX="../"+DX;
      place=="Unity"?Unity="":Unity="../"+Unity;
      place=="algorithm"?algorithm="":algorithm="../"+algorithm;
      place=="pokemon"?poke="":poke="../"+poke;
  }
  document.writeln(" <nav> <!-- ↓ドロップダウンメニュー --> ");
  document.writeln(" <ul> ");
  document.writeln("         <li  id='gohome' ><span class='demoSpan1'><a href='#'  id='gotohome' class='demoSpan2'>　</a></span></li> ");

  document.writeln("         <li> ");
  document.writeln("           <a href=\"#\">PC関連</a> ");
  document.writeln("           <ul> ");
  document.writeln("             <li><a href=\"#\">ファイル操作超入門</a></li> ");
  document.writeln("             <li><a href=\"https://brew.sh/index_ja.html\" target='_blank'>homebrew</a></li> ");
  document.writeln("             <li><a href=\"#\">ツムツム</a></li> ");
  document.writeln("             <li><a href=\"#\">git</a></li> ");
  document.writeln("           </ul> ");
  document.writeln("         </li> ");

  document.writeln("       	<li> ");
  document.writeln("       		<a href=\"#\">プログラミング言語</a> ");
  document.writeln("       		<ul> ");
  document.writeln("             <li> ");
  document.writeln("       				<a href=\"#\">c</a> ");
  document.writeln("       				<ul> ");
  document.writeln("       					<li><a href=\"#\">環境設定</a></a></li> ");
  document.writeln("       					<li><a href=\"#\">変数</a></li> ");
  document.writeln("       					<li><a href=\"#\">関数</a></li> ");
  document.writeln("       				</ul> ");
  document.writeln("       			</li> ");
  document.writeln("       			<li><a href=\"#\">c++</a></li> ");
  document.writeln("       		</ul> ");
  document.writeln("       	</li> ");

  document.writeln("       	<li> ");
  document.writeln("       		<a href=\"#\">アルゴリズム</a> ");
  document.writeln("       		<ul> ");
  document.writeln("       			<li><a href=\"#\">動的計画法</a></li> ");
  document.writeln("       			<li><a href=\"#\">ダイクストラ</a></li> ");
  document.writeln("       			<li><a href=\"#\">二分探索</a></li> ");
  document.writeln("       		</ul> ");
  document.writeln("       	</li> ");

  document.writeln("       	<li><a href=\"#\">雑記</a></li> ");
  document.writeln("       </ul> ");
  document.writeln(" </nav> <!-- ↓ドロップダウンメニュー --> ");
}
