/*=============================================================================
javascriptのモジュール
=============================================================================*/
//テスト
//import dev from "./modules/js/main.js";
//dev();

//共通部分の呼び出し
import * as common_parts from "./modules/js/common/common_parts.js";

common_parts.header();
common_parts.footer();
common_parts.toTopBtn();
common_parts.menuBtn();

/*=============================================================================
cssのモジュール（scssはgulpでコンパイルのためコメントアウト）
=============================================================================*/

// import "./modules/css/style.scss";
