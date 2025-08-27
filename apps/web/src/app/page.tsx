'use client'
import { useState, useEffect } from "react";

export default function HomePage() {
  const [greeting, setGreeting] = useState("Chào mừng");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Chào buổi sáng");
    else if (hour < 18) setGreeting("Chào buổi chiều");
    else setGreeting("Chào buổi tối");
  }, []);

  const songs = [
    { id: 1, title: "Người Đầu Tiên", artist: "Juky San", img: "/covers/song1.png" },
    { id: 2, title: "Ngày Này Năm Ấy", artist: "Việt Anh", img: "/covers/song2.png" },
    { id: 3, title: "Nỗi Đau Giữa Hòa Bình", artist: "Hoà Minzy", img: "/covers/song3.png" },
    { id: 4, title: "Kho Báu", artist: "Trọng Hiếu, Rhymastic", img: "/covers/song4.png" },
  ];

  const artists = [
    { id: 1, name: "Sơn Tùng M-TP", img: "/artists/mtp.png" },
    { id: 2, name: "SOOBIN", img: "/artists/soobin.jpeg" },
    { id: 3, name: "HIEUTHUHAI", img: "/artists/hieuthuhai.jpg" },
  ];

  return (
    <main className="p-8">
      {/* Greeting */}
      <h1 className="text-3xl font-bold mb-8">{greeting}</h1>

      {/* Songs */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6">Những bài hát thịnh hành</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {songs.map((song) => (
            <div key={song.id} className="spotify-card group w-full max-w-[160px]">
              <div className="relative mb-3">
                {/* Ảnh vuông cho bài hát */}
                <img
                  src={song.img}
                  alt={song.title}
                  className="w-full aspect-square object-cover rounded-md"
                />
                <button className="play-button absolute bottom-2 right-2">
                  <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <h3 className="font-semibold text-sm truncate">{song.title}</h3>
              <p className="text-spotify-gray text-xs truncate">{song.artist}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Artists */}
      <section>
        <h2 className="text-xl font-bold mb-6">Nghệ sĩ phổ biến</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="artist-card group w-full max-w-[160px] text-center">
              <div className="relative mb-3 flex justify-center">
                {/* Avatar tròn cho nghệ sĩ */}
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="w-[140px] h-[140px] object-cover rounded-full"
                />
                <button className="play-button absolute bottom-4 right-6">
                  <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <h3 className="font-semibold text-sm">{artist.name}</h3>
              <p className="text-spotify-gray text-xs">Nghệ sĩ</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <div className="premium-gradient rounded-lg p-6 flex items-center justify-between mt-12">
        <div>
          <h3 className="text-lg font-bold">Xem trước Spotify</h3>
          <p className="text-sm opacity-90">
            Đăng ký để nghe nhạc không giới hạn và không quảng cáo.
          </p>
        </div>
        <button className="btn-primary">Đăng ký miễn phí</button>
      </div>
    </main>
  );
}
