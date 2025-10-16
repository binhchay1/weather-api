# European City 7-Day Weather Forecast 🌍

![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5) ![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript) ![License](https://img.shields.io/badge/License-MIT-green)

Welcome to the **European City 7-Day Weather Forecast**! 🚀 This is a lightweight web app designed for a European travel agency to boost online bookings by showing 7-day weather forecasts for major cities. Think of it as a sleek feature you’d add to a travel website, like a dynamic widget to help travelers pick the perfect sunny destination. Built with vanilla **HTML**, **CSS**, and **JavaScript**, it uses the **7Timer! API** to fetch weather data and displays it with a space-themed UI, complete with an Earth animation and dynamic weather icons.

## 📋 Project Overview
As a web dev, imagine you’re tasked with building a front-end feature to keep users glued to a travel site. This project does just that, answering questions like:
- 🌞 What’s the weather like in Paris next week?
- ❄️ Will it rain in Berlin during my trip?
- 🌴 Which city has the best weather for a spontaneous getaway?
- ⚠️ Are there any API issues or missing forecasts?

The app fetches data from the **7Timer! API**, formats it cleanly (e.g., `pcloudyday` → "Partly Cloudy Day"), and presents it in a beautiful, responsive UI with no heavy frameworks—pure vanilla JS for that old-school, lightweight vibe.

## 🗃️ Data Source
The app uses the **7Timer! API** (free, no API key needed) to fetch 7-day weather forecasts for European cities. The API response includes:
- **timepoint**: Hours from the request time (e.g., 3 = 3 hours later).
- **weather**: Weather condition (e.g., `pcloudyday`, `clearday`).
- **temp2m**: Temperature in Celsius.
- **Sample Response**:
  ```json
  {
    "dataseries": [
      {
        "timepoint": 3,
        "weather": "pcloudyday",
        "temp2m": 18
      }
    ]
  }
  ```

📂 Weather icons (e.g., `clear.png`, `cloudy.png`) are stored locally in `images/`.

## 🛠️ Environment Requirements
To run this project, you need:
- **Browser**: Any modern browser (Chrome, Firefox, Edge, etc.) 🌐
- **System**: Linux, macOS, or Windows (no server setup needed) 💻
- **Dependencies**: None! Pure vanilla HTML, CSS, and JS—no frameworks or npm required. 🛠️
- **Optional**: A local web server (e.g., `live-server`) for testing, but opening `index.html` directly works fine.

## ⚙️ Setup Instructions
Follow these steps to get the project running, like serving a static site:

1. **Clone the Repository** 📥:
   ```bash
   git clone https://github.com/binhchay1/european-city-weather.git
   cd european-city-weather
   ```

2. **Verify Files** 📂:
   Ensure the project contains:
   - `index.html`: Main webpage.
   - `master.css`: Styles for the space-themed UI.
   - `js/main.js`: API fetching and DOM updates.
   - `images/`: Weather icons (`clear.png`, `cloudy.png`, etc.) and `earth.png`.

3. **Open the App** 🌐:
   - Double-click `index.html` to open it in your browser, or
   - Use a local server for a smoother experience:
     ```bash
     npm install -g live-server
     live-server
     ```
     Access at `http://localhost:8080`.

## 🚀 How to Run
1. **Open the Webpage** 🌍:
   Open `index.html` in your browser (directly or via `live-server`).

2. **Use the App** ▶️:
   - Select a European city from the dropdown (e.g., Paris, Berlin).
   - Click “Get Forecast” to fetch and display the 7-day weather forecast.
   - View the results with dynamic weather icons and formatted conditions (e.g., "Partly Cloudy Day").

3. **Stop the Server** (if using `live-server`) 🛑:
   Ctrl+C to stop the server.

## 📁 Project Structure
Like a static web app repo, here’s the layout:
```
european-city-weather/
├── images/                      # Weather icons and Earth image 🌍
│   ├── clear.png
│   ├── cloudy.png
│   ├── pcloudyday.png
│   └── earth.png
├── js/                         # JavaScript logic, like src/ in a React app 🛠️
│   └── main.js                 # API fetch and DOM updates
├── master.css                  # Space-themed styling, like Tailwind CSS 🎨
├── index.html                  # Main webpage, like the entry point 🌐
├── .gitignore                  # Excludes temp files, etc. 🚫
├── README.md                   # You're reading it! 📖
└── LICENSE                     # MIT License 📜
```

## 📈 Key Features
- **7-Day Forecast**: Fetches weather data for major European cities via 7Timer! API 🌤️
- **Dynamic UI**: Displays weather with local icons and formatted names (e.g., `pcloudyday` → "Partly Cloudy Day") 🎨
- **Space-Themed Design**: Earth animation and sleek layout to keep users engaged 🚀
- **Lightweight**: No frameworks, just vanilla HTML/CSS/JS for fast loading ⚡
- **Responsive**: Works on desktop, tablet, and mobile 📱

## 🌤️ API Reference
- **Endpoint**: `https://www.7timer.info/bin/api.pl?lon={longitude}&lat={latitude}&product=civil&output=json`
- **Parameters**:
  - `lon`: City longitude (e.g., 2.35 for Paris).
  - `lat`: City latitude (e.g., 48.85 for Paris).
  - `product`: Set to `civil` for standard weather data.
  - `output`: Set to `json` for JSON response.
- **Example Call** (Paris):
  ```bash
  https://www.7timer.info/bin/api.pl?lon=2.35&lat=48.85&product=civil&output=json
  ```

## 💡 Recommendations
Like optimizing a web app feature:
- **City Selection**: Add autocomplete for city input (like Google Places API) 🌍
- **Caching**: Store API responses in `localStorage` to reduce calls ⚡
- **UI Enhancements**: Use CSS animations for weather transitions (like GSAP) 🎨
- **Analytics**: Track user interactions with Google Analytics for insights 📊
- **API Fallback**: Add error handling for API downtime (display cached data) ⚠️

## 🛠️ Troubleshooting
- **API Fetch Fails** ⚠️: Check internet connection or API endpoint (`https://www.7timer.info`). Ensure city coordinates are correct.
- **Icons Not Loading** 🚫: Verify `images/` folder exists and paths in `master.css` or `main.js` are correct.
- **UI Misaligned** 🌐: Test in different browsers; ensure `master.css` is loaded.
- **CORS Issues** 🔒: Use a local server (`live-server`) instead of opening `index.html` directly.

## 🤝 Contributing
Feel free to fork, submit PRs, or open issues! Treat it like contributing to an open-source static site project. 🌟

## 📜 License
MIT License (see `LICENSE`).

## 📞 Contact
- **Author**: Thanh Bình Nguyễn
- **Role**: Web Developer
- **Email**: binhchay1@gmail.com
- **GitHub**: [github.com/binhchay1](https://github.com/binhchay1)
Got questions? Open an issue at [github.com/binhchay1/european-city-weather/issues](https://github.com/binhchay1/european-city-weather/issues).
