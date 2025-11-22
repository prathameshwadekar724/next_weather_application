Here is your **complete, professional, beautifully formatted `README.md`** for your **Modern Weather Dashboard (Next.js)**.
Just copy → paste → commit to GitHub.
This is **resume-ready & recruiter-friendly**.

---

# 🌦️ **Modern Weather Dashboard – Next.js 14 (App Router)**

A beautiful, real-time, feature-rich **Weather Dashboard** built using
**Next.js + TailwindCSS + Recharts + OpenWeather API**.

Includes auto-location detection, animated gradients, theme toggle, charts, glass UI, sunrise/sunset, and a responsive design perfect for portfolio & deployment.

---

## ✨ **Features**

### 🌍 **Real-Time Weather**

* Auto-detect current location (Geolocation API)
* Search weather by city name
* Temperature, humidity, wind speed, weather icon

### 🎨 **Modern UI (Glassmorphism + Gradients)**

* Animated gradient background
* Dynamic theme (Light / Dark)
* Floating glass cards
* Smooth transitions and responsiveness

### 📊 **Interactive Charts**

* Temperature trend (Next 8 timestamps)
* Line chart built using **Recharts**

### 🌅 **Sunrise & Sunset**

* Local sunrise & sunset time display

### ☁️ **5-Day Forecast**

* Weather cards for upcoming hours/days

### 🌓 **Theme Toggle**

* Dark / Light mode with localStorage save

---

## 🛠️ **Tech Stack**

| Technology          | Purpose                                |
| ------------------- | -------------------------------------- |
| **Next.js 14**      | Routing, server components, deployment |
| **TailwindCSS**     | Modern styling & animations            |
| **Recharts**        | Temperature line graph                 |
| **OpenWeather API** | Weather data source                    |
| **Lucide Icons**    | Clean, modern icons                    |

---

## 📂 **Project Structure**

```
app/
│── components/
│   ├── ErrorBox.jsx
│   ├── ForecastList.jsx
│   ├── Loader.jsx
│   ├── SearchBox.jsx
│   ├── SunTimes.jsx
│   ├── TempChart.jsx
│   ├── ThemeToggle.jsx
│   └── WeatherCard.jsx
│
│── utils/
│   └── getBg.js
│
│── page.jsx
│── layout.js
│── globals.css
|
public/
|
.env.local
package.json
tailwind.config.js
postcss.config.js
next.config.js
README.md
```

---

## ⚙️ **Setup Instructions**

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/YOUR_USERNAME/weather-dashboard.git
cd weather-dashboard
```

### 2️⃣ **Install Dependencies**

```bash
npm install
```

### 3️⃣ **Add API Key**

Create `.env.local` file in the root folder:

```
NEXT_PUBLIC_WEATHER_KEY=your_openweathermap_api_key
```

### 4️⃣ **Run the Development Server**

```bash
npm run dev
```

Visit the app at:

```
http://localhost:3000
```

---

## 🚀 **Deployment (Vercel)**

1. Commit & push your code
2. Go to [https://vercel.com](https://vercel.com) → Import GitHub repo
3. Add your environment variable (`NEXT_PUBLIC_WEATHER_KEY`)
4. Deploy 🎉

---

## 📸 **App Preview**

> (You can add your own screenshots here)

```
📍 Home Page  
📍 Weather Details Card  
📍 Forecast Grid  
📍 Temperature Line Chart  
📍 Theme Toggle (Dark / Light)
```

---

## 🧠 **Key Concepts Learned**

* Next.js App Router
* Client Components vs Server Components
* Tailwind advanced styling
* Animated CSS gradients
* Using Recharts inside Next.js
* Handling APIs with async/await
* Working with Geolocation API
* Managing theme using localStorage

---

## 🤝 **Contributing**

Contributions are welcome!
Feel free to fork this repository and submit pull requests.

---

## 📝 **License**

MIT License © 2025
Developed by **Prathamesh Wadekar**

---
