<sns>

  <div class="m-sns-share">
    <ul class="m-sns-share__list">
      <li>
        <a onclick={ popupFb } href="https://www.facebook.com/sharer/sharer.php?u={ current_url }&display=popup" class="js-share-fb">
          <img src="./images/global/icon_fb.svg" alt="">
        </a>
      </li>
      <li>
        <a onclick={ popupTw } href="https://twitter.com/intent/tweet?via={ account }&amp;url={ current_url }&amp;text={ text }" class="js-share-tw">
          <img src="./images/global/icon_tw.svg" alt="">
        </a>
      </li>
    </ul>
  </div>

  <script>

    var self = this;

    self.current_url = encodeURIComponent(location.href)
    self.text = 'WordCamp Tokyo 2015 Design Archives'
    self.account = 'wctokyo'

    popupFb(e) {
      e.preventDefault;

      var winFb;
      winFb = window.open(e.target.parentElement.getAttribute('href'), 'Facebook に投稿', 'width=670, height=400, menubar=no, toolbar=no, scrollbars=yes');
    }

    popupTw(e) {
      e.preventDefault;

      var winTw;
      winTw = window.open(e.target.parentElement.getAttribute('href'), 'Twitter でリンクを共有する', 'width=550, height=400, menubar=no, toolbar=no, scrollbars=yes');
    }

  </script>

</sns>
