import axios from "axios";
import _ from "lodash";

// const server = "http://revivalsong.org.in/server";
// const server = "http://3.1.206.106/server";
const server = "http://localhost/revival-songs-backend";
const urlMaker = api => {
  return `${server}/${api}/`;
};
const sendRequest = (api, data) => {
  const thenFn = (data.success && data.success.fn) || (() => {});
  const errorFn = (data.error && data.error.fn) || (() => {});

  const param = _.omit(data, ["success", "error"]);

  const params = new URLSearchParams();
  params.append("data", JSON.stringify(param || {}));
  axios({
    method: api.type,
    url: urlMaker(api.path),
    data: params
  }).then(response => {
    if (response.status == 200) {
      if (response.data && response.data.success) {
        try {
          thenFn(JSON.parse(response.data));
        } catch (e) {
          thenFn(response.data);
        }
      } else {
        errorFn();
      }
    } else {
      errorFn();
    }
  });
};
const uploadFile = (api, data) => {
  const thenFn = (data.success && data.success.fn) || (() => {});
  const errorFn = (data.error && data.error.fn) || (() => {});
  const progressFn = (data.progress && data.progress.fn) || (() => {});

  const param = _.omit(data, ["success", "error"]);
  const params = new FormData();
  const url = urlMaker(api.path);

  params.append("file", param.file);
  // console.log(params);
  axios({
    method: api.type,
    url,
    data: params,
    onUploadProgress: function(progressEvent) {
      var percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      progressFn(percentCompleted);
    },
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }).then(response => {
    // console.log(response);
    progressFn(0);
    if (response.status == 200) {
      if (response.data && response.data.success) {
        thenFn(`${url}${response.data.data.file}`);
      } else {
        errorFn();
      }
    } else {
      errorFn();
    }
  });
};
export { sendRequest, uploadFile };
