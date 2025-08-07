// src/App.tsx
import React, { useState } from "react";

// ユーザーの型
type User = {
  id: number;
  name: string;
  age: number;
};

// 任意の10人のユーザー
const users: User[] = [
  { id: 1, name: "田中 太郎", age: 28 },
  { id: 2, name: "佐藤 花子", age: 32 },
  { id: 3, name: "鈴木 次郎", age: 25 },
  { id: 4, name: "高橋 美咲", age: 30 },
  { id: 5, name: "伊藤 健太", age: 35 },
  { id: 6, name: "渡辺 彩香", age: 27 },
  { id: 7, name: "山本 大輔", age: 29 },
  { id: 8, name: "中村 由紀", age: 31 },
  { id: 9, name: "小林 悠", age: 26 },
  { id: 10, name: "加藤 奈々", age: 33 },
];

// 地域名 → Yahoo!天気のURLマッピング（よく使う都市だけ例として登録）
const weatherUrls: { [key: string]: string } = {
  京都市: "https://weather.yahoo.co.jp/weather/jp/26/6110.html",
  大阪市: "https://weather.yahoo.co.jp/weather/jp/27/6200.html",
  東京: "https://weather.yahoo.co.jp/weather/jp/13/4410.html",
  札幌市: "https://weather.yahoo.co.jp/weather/jp/1/1400.html",
  名古屋市: "https://weather.yahoo.co.jp/weather/jp/23/5110.html",
  福岡市: "https://weather.yahoo.co.jp/weather/jp/40/8210.html",
};

const App: React.FC = () => {
  const [region, setRegion] = useState("京都市"); // 初期は京都市
  const [weatherUrl, setWeatherUrl] = useState(weatherUrls["京都市"]);

  const handleSearch = () => {
    if (weatherUrls[region]) {
      setWeatherUrl(weatherUrls[region]);
    } else {
      alert("対応していない地域です（例：京都市, 大阪市, 東京）");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>ユーザー一覧</h2>
      <table border={1} cellPadding={8} cellSpacing={0}>
        <thead>
          <tr>
            <th>名前</th>
            <th>年齢</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 地域検索バー */}
      <div style={{ marginTop: "40px" }}>
        <h2>地域別 天気情報</h2>
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          placeholder="例：京都市、東京、大阪市"
          style={{ padding: "8px", width: "200px", marginRight: "10px" }}
        />
        <button onClick={handleSearch} style={{ padding: "8px 16px" }}>
          検索
        </button>
      </div>

      {/* 天気情報iframe */}
      <div style={{ marginTop: "20px" }}>
        <iframe
          src={weatherUrl}
          title="地域の天気"
          width="100%"
          height="600"
          style={{ border: "1px solid #ccc" }}
        ></iframe>
      </div>
    </div>
  );
};

export default App;
