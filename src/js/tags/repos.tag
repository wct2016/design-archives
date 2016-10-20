<repos>

  <div class="s-repos">

    <p if={ isLoading } class="s-repos__message s-repos__message--loading">Loading...</p>

    <p if={ error } class="s-repos__message">Sorry, There is something error within GitHub or network.</p>

    <ul if={ repos_list.length } class="s-repos__list">
      <li each={ repos_list } class="s-repos__item">
        <div class="s-repo">
          <a href="{ html_url }">
            <div class="s-repo__thumb">
              <img src="./images/repos/img_{ name }.png" onerror="this.onerror = null; this.src = './images/repos/img_noimage.png';">
            </div>
            <div class="s-repo__content">
              <p class="s-repo__name">{ name }</p>
              <p class="s-repo__description">{ description }</p>
              <p class="s-repo__date">Updated at { updated_at.substr(0, 10) }</p>
            </div>
            <div class="s-repo__overlay">
              <p class="s-repo__text s-repo__text--ja">リポジトリをみる</p>
              <p class="s-repo__text s-repo__text--en">VIEW ON GITHUB</p>
            </div>
          </a>
        </div>
      </li>
    </ul>

  </div>

  <script>

    var self = this

    self.isLoading = []

    fetch('https://api.github.com/users/wct2015/repos')
      .then(function (result) {
        return result.json()
      })
      .then(function (data) {

        if (data.length) {
          self.repos_list = data
        } else self.error = true

        self.isLoading = false
        self.update()

        checkImage()

      }).catch(function(err) {
        self.error = true
      });

  </script>

</repos>
