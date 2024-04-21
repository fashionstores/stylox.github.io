
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.fe553dd11be4ba5cdf3b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/902.baseline.en.bcc1733a6f890fcce4b2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/672.baseline.en.d78060e0d85efc9695fe.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/991.baseline.en.165fd2ea3e8092a0f360.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.64391a98474995cb7f23.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/845.baseline.en.d590c77360b092302df2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/924.baseline.en.4b6a5bbd82c3890fa6b4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/462.baseline.en.f988862cd198e294d564.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/18.baseline.en.31c813fb0109666b0a1e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.820fb230cb70a077f400.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/902.baseline.en.e11205b132d83ce78bf8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.f9eb51761cd09a2185d0.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.baseline.en.3970055027214a5e7103.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  