const _0xf7ec = [
  "1WTzlLu",
  "displayWeather",
  "innerText",
  ".humidity",
  "style",
  ".icon",
  "Jaunpur",
  "url(\x27https://source.unsplash.com/1600x900/?",
  "keyup",
  "querySelector",
  "weather",
  "loading",
  "body",
  "then",
  "No\x20weather\x20found.",
  ".png",
  "\x20km/h",
  "main",
  "click",
  "fetchWeather",
  "624254JAKbCI",
  "backgroundImage",
  ".weather",
  "278720rBCJVY",
  "800fd005579d27a234b5ea3722aeb935",
  "Humidity:\x20",
  "search",
  ".wind",
  "638539kEARMI",
  "1210334gNcjTQ",
  "&units=metric&appid=",
  "Enter",
  "627017NHrYpg",
  "1594628qBtVoe",
  ".search-bar",
  "apiKey",
  "https://openweathermap.org/img/wn/",
  "Weather\x20in\x20",
  "classList",
  ".description",
  "src",
  "json",
  "key",
  "remove",
  "113544jQxTjo",
];
const _0x2ed9 = function (_0x2cb9bf, _0x34ddd8) {
  _0x2cb9bf = _0x2cb9bf - 0x1bd;
  let _0xf7ec4d = _0xf7ec[_0x2cb9bf];
  return _0xf7ec4d;
};
const _0x2aae01 = _0x2ed9;
(function (_0x3ff0bc, _0x4659bb) {
  const _0x5d4f57 = _0x2ed9;
  while (!![]) {
    try {
      const _0x5745ce =
        -parseInt(_0x5d4f57(0x1c1)) +
        parseInt(_0x5d4f57(0x1ca)) +
        parseInt(_0x5d4f57(0x1c4)) +
        parseInt(_0x5d4f57(0x1c9)) +
        parseInt(_0x5d4f57(0x1d9)) +
        parseInt(_0x5d4f57(0x1cd)) * parseInt(_0x5d4f57(0x1da)) +
        -parseInt(_0x5d4f57(0x1ce));
      if (_0x5745ce === _0x4659bb) break;
      else _0x3ff0bc["push"](_0x3ff0bc["shift"]());
    } catch (_0x31e4fe) {
      _0x3ff0bc["push"](_0x3ff0bc["shift"]());
    }
  }
})(_0xf7ec, 0x9e838);
let weather = {
  apiKey: _0x2aae01(0x1c5),
  fetchWeather: function (_0x5e7481) {
    const _0x4d51a0 = _0x2aae01;
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        _0x5e7481 +
        _0x4d51a0(0x1cb) +
        this[_0x4d51a0(0x1d0)]
    )
      [_0x4d51a0(0x1e7)]((_0x17922e) => {
        const _0x25b410 = _0x4d51a0;
        if (!_0x17922e["ok"]) {
          alert(_0x25b410(0x1e8));
          throw new Error(_0x25b410(0x1e8));
        }
        return _0x17922e[_0x25b410(0x1d6)]();
      })
      [_0x4d51a0(0x1e7)]((_0x57b1ef) => this[_0x4d51a0(0x1db)](_0x57b1ef));
  },
  displayWeather: function (_0x1878db) {
    const _0x349224 = _0x2aae01,
      { name: _0x3a2405 } = _0x1878db,
      { icon: _0x1ed832, description: _0x50e4bb } =
        _0x1878db[_0x349224(0x1e4)][0x0],
      { temp: _0x1bb053, humidity: _0x2ea79d } = _0x1878db[_0x349224(0x1be)],
      { speed: _0x5c4211 } = _0x1878db["wind"];
    (document["querySelector"](".city")[_0x349224(0x1dc)] =
      _0x349224(0x1d2) + _0x3a2405),
      (document[_0x349224(0x1e3)](_0x349224(0x1df))[_0x349224(0x1d5)] =
        _0x349224(0x1d1) + _0x1ed832 + _0x349224(0x1e9)),
      (document[_0x349224(0x1e3)](_0x349224(0x1d4))[_0x349224(0x1dc)] =
        _0x50e4bb),
      (document[_0x349224(0x1e3)](".temp")[_0x349224(0x1dc)] =
        _0x1bb053 + "Â°C"),
      (document[_0x349224(0x1e3)](_0x349224(0x1dd))[_0x349224(0x1dc)] =
        _0x349224(0x1c6) + _0x2ea79d + "%"),
      (document["querySelector"](_0x349224(0x1c8))[_0x349224(0x1dc)] =
        "Wind\x20speed:\x20" + _0x5c4211 + _0x349224(0x1bd)),
      document["querySelector"](_0x349224(0x1c3))[_0x349224(0x1d3)][
        _0x349224(0x1d8)
      ](_0x349224(0x1e5)),
      (document[_0x349224(0x1e6)][_0x349224(0x1de)][_0x349224(0x1c2)] =
        _0x349224(0x1e1) + _0x3a2405 + "\x27)");
  },
  search: function () {
    const _0x14da47 = _0x2aae01;
    this[_0x14da47(0x1c0)](
      document[_0x14da47(0x1e3)](_0x14da47(0x1cf))["value"]
    );
  },
};
document["querySelector"](".search\x20button")["addEventListener"](
  _0x2aae01(0x1bf),
  function () {
    weather["search"]();
  }
),
  document["querySelector"](_0x2aae01(0x1cf))["addEventListener"](
    _0x2aae01(0x1e2),
    function (_0x34b397) {
      const _0x36ffda = _0x2aae01;
      _0x34b397[_0x36ffda(0x1d7)] == _0x36ffda(0x1cc) &&
        weather[_0x36ffda(0x1c7)]();
    }
  ),
  weather[_0x2aae01(0x1c0)](_0x2aae01(0x1e0));
