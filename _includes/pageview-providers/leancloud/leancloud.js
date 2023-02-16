(function() {
  function errorHandler(error, callback) {
    if (error) {
      callback && callback(error);
      throw error;
    }
  }

  function pageview(_AV, options) {
    var AV = _AV;
    var appId, appKey, appClass;
    appId = options.appId;
    appKey = options.appKey;
    appClass = options.appClass;
    AV.init({
      serverURLs: 'https://avoscloud.com',
      appId: appId,
      appKey: appKey
    });
    return {
      get: get,
      increase: increase
    };

    function searchKey(key) {
      var query = new AV.Query(appClass);
      query.equalTo('key', key);
      return query.first();
    }

    function insert(key, title) {
      var Blog = AV.Object.extend(appClass);
      var blog = new Blog();
      blog.set('title', title);
      blog.set('key', key);
      blog.set('views', 0);
      return blog.save();
    }

    function increment(result) {
      result.increment('views', 1);
      return result.save(null, {
        fetchWhenSave: true
      });
    }

    function get(key, callback) {
      searchKey(key).then(function(result) {
        if (result) {
          callback && callback(result.attributes.views);
        }
      }, errorHandler);
    }

    function increase(key, title, callback) {
      searchKey(key).then(function(result) {
        if (result) {
          increment(result).then(function(result) {
            callback && callback(result.attributes.views);
          });
        } else {
          insert(key, title).then(function(result) {
            increment(result).then(function(result) {
              callback && callback(result.attributes.views);
            });
          }, errorHandler);
        }
      }, errorHandler);

      // ====下面这段是访问日志====
      var Visitor = AV.Object.extend('blog_visitor_log');
      var vis = new Visitor();
      vis.set('title', title);
      vis.set('key', key);
      vis.save();
      // =======================
      
    }
  }
  window.pageview = pageview;
})();
