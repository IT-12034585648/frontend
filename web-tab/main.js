/**
 * selectorに該当するタブを表示する
 */
function showTab(selector) {
  // 引数selectorの中身をコンソールで確認する
  //console.log(selector);

  // .tabs-menuのうち、selectorに該当するものにだけactiveクラスを付ける
  $("div[id='" + selector + "']").addClass("active");
  //console.log("tab-menu div[id='" + selector + "']");

  // いったん、すべての.tabs-contentを非表示にする
  $(".tabs-content > div > p").hide();
  // .tabs-content > sectionのうち、selectorに該当するものだけを表示する

  //console.log('"' + slice_string(selector) + " > p" + '"');
  $(".tabs-content > div > p").hide();
  $(slice_string(selector) + " > p").show();
}

function slice_string(tabcontents) {
  var lastchar = tabcontents.slice(-1);
  return "#tabs-" + lastchar;
}

$(document).ready(function() {
  // 初期状態として1番目のタブを表示
  showTab("tab-menu-a");

  // タブがクリックされたらコンテンツを表示
  $(".tabs-menu div").click(function() {
    // 一旦、tab-menuの子要素から全部の"active"を削除
    $(".tabs-menu > div").removeClass("active");

    var selector = $(this).attr("id");
    console.log(selector);
    showTab(selector);

    // hrefへのページ遷移と、クリックイベントが親要素へ伝わるのを止める
    return false;
  });
});
