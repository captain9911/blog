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

    const handler = function (data) {
      let status = data['status']
      if (status == 0) {
        let ip = data['result']['ip']
        let nation = data['result']['ad_info']['nation']
        let province = data['result']['ad_info']['province']
        let city = data['result']['ad_info']['city']
        let district = data['result']['ad_info']['district']
        let lat = data['result']['location']['lat']
        let lng = data['result']['location']['lng']
        let addr = nation + ' ' + province + ' ' + city + ' ' + district

        var Visitor = AV.Object.extend('blog_visitor_log');
        var vis = new Visitor();
        vis.set('title', title);
        vis.set('key', key);
        vis.set('lat', lat);
        vis.set('lng', lng);
        vis.set('ip', ip);
        vis.set('addr', addr);
        vis.save();
      }
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

      // ====下面这段是记录访问日志====

      
      const url = "https://apis.map.qq.com/ws/location/v1/ip?output=jsonp&callback=handler&key=2HTBZ-NAKE3-6ID35-YAPBX-GZTSK-G7FGD"
      var script = document.createElement('script');
      script.setAttribute('src', url);
      script.async = true
      document.getElementsByTagName('head')[0].appendChild(script);

      // =======================
  
    }
  }
  window.pageview = pageview;
})();
