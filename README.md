# 🌍 European City 7-Day Weather Forecast

This project simulates the role of a **web developer** working for a European travel agency.  
The goal is to **increase online travel bookings** by providing weather forecasts for major European cities — helping travelers plan their trips better.

---

## 📖 Project Overview

**Scenario:**
A European travel agency wants to enhance their website by adding a **7-day weather forecast** feature for major European cities.  
This feature aims to:

- Keep visitors engaged on the website longer.
- Help travelers choose destinations wisely.
- Increase the agency’s online booking conversion rates.

**Objective:**  
Create a webpage that retrieves and displays 7-day weather forecasts using an external API.

---

## ⚙️ Technical Requirements

- **Frontend:** HTML, CSS, JavaScript
- **Weather API:** [7Timer! API](https://www.7timer.info/doc.php?lang=en) (Free, no API key required)
- **External Resources:** Weather icons stored locally under `/images`

---

## 🧩 Features

✅ Retrieve 7-day weather forecast for selected European cities  
✅ Beautiful space-themed UI with Earth animation  
✅ Displays weather icons dynamically based on API response  
✅ Formats weather names automatically (e.g., `pcloudyday → Partly Cloudy Day`)  
✅ Simple, lightweight implementation without frameworks

---

## 🗂️ Project Structure

project/
│
├── images/ # Weather icons and Earth image
│ ├── clear.png
│ ├── cloudy.png
│ ├── ...
│ └── earth.png
│
├── js/
│ └── main.js # Handles API fetch and DOM updates
│
├── master.css # UI styling and layout
├── index.html # Main webpage
└── README.md # Project documentation

---

## 💻 How to Run

1. **Clone or download** this repository to your local machine.
2. Open the `index.html` file in your browser.
3. Select a city and click **“Get Forecast”**.
4. View the 7-day forecast displayed instantly below.

---

## 🌤️ API Reference

**Endpoint used:**
https://www.7timer.info/bin/api.pl?lon={longitude}&lat={latitude}&product=civil&output=json

**Response format (simplified):**

```json
{
  "dataseries": [
    {
      "timepoint": 3,
      "weather": "pcloudyday",
      "temp2m": 18,
      ...
    }
  ]
}
```
