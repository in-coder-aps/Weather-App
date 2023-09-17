const request = require("request");
const forecast = (lattitude, longitude, callback) => {
    const url =
        "http://api.weatherstack.com/current?access_key=973185794e316b2700c87c0e5b797f38&query=" + lattitude + "," + longitude;
    request({
        url,
        json: true,
    },
        (error, { body }) => {
            if (error) {
                callback("Not connected to Internet...", undefined);
            } else if (body.error) {
                callback("Location not found...", undefined);
            } else {
                callback(
                    undefined,
                    "It is currently " +
                    body.current.temperature +
                    " degrees out. It feels like " +
                    body.current.feelslike +
                    " degrees out."
                );
            }
        }
    );
};

module.exports = forecast;