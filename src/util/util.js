import axios from "axios";
import _ from "lodash";

const server = "http://localhost/revival-songs-backend";
const urlMaker = api => {
  return `${server}/${api}/`;
};
const sendRequest = (api, data) => {
  const thenFn = (data.success && data.success.fn) || (() => {});
  const errorFn = (data.error && data.error.fn) || (() => {});

  const param = _.omit(data, ["success", "error"]);

  console.log(param);
  const params = new URLSearchParams();
  params.append("data", JSON.stringify(param || {}));
  axios({
    method: api.type,
    url: urlMaker(api.path),
    data: params
  }).then(response => {
    console.log(response);
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
export { sendRequest };