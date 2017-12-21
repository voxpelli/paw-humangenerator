(function() {
  var HumanGenerator;

  HumanGenerator = function() {
    this.request = function(paw_request) {
      var headers = [];
      var is_json = false;
      var ref = paw_request.headers;
      var key;
      var value;

      for (key in ref) {
        value = ref[key];
        if (key === 'Content-Type') {
          is_json = value.search(/(json)/i) > -1;
          continue;
        }
        if (key === 'Authorization') {
          value = value.replace(/^(\w+)\s.*$/, '$1 xxxxxx')
        }
        headers.push({
          key: key,
          value: value
        });
      }
      var body = paw_request.body;

      if (body.length && is_json) {
        body = JSON.stringify(JSON.parse(body), null, 2);
      }

      return {
        headers: headers,
        body: body
      };
    };
    this.generate = function(context) {
      var paw_request = context.getCurrentRequest();
      var request = this.request(paw_request);


      var result = paw_request.method + ' ' + decodeURIComponent(paw_request.url);

      if (request.headers.length) {
        result += '\n\n' + request.headers.map(function (header) {
          return header.key + ': ' + header.value;
        }).join('\n');
      }
      if (request.body.length) {
        result += '\n\n' + request.body;
      }

      return result;
    };
  };

  HumanGenerator.identifier = "se.kodfabrik.PawExtensions.HumanGenerator";

  HumanGenerator.title = "Human Readable Generator";

  HumanGenerator.fileExtension = "txt";

  registerCodeGenerator(HumanGenerator);

}).call(this);
