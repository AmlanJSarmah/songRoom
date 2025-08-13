import { useState, useRef, useEffect } from "react";

export function Song() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Testing by adding artificial delay to simulate loading
    setTimeout(() => {
      setAudio(() => {
        return {
          name: "The Chain",
          artist: "Fleetwood Mac",
          src: "../../assets/song.mp3",
        };
      });
      setIsLoaded(() => true);
    }, 1000);

    // setAudio(() => {
    //   return {
    //     name: "The Chain",
    //     artist: "Fleetwood Mac",
    //     src: "../../assets/song.mp3",
    //   };
    // });
    // setIsLoaded(() => true);
  }, []);

  useEffect(() => {
    // Flush the audio element buffer when the audio changes
    if (audio) audioRef.current.load();
  }, [audio]);

  const playAndPauseAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(() => false);
    } else {
      audioRef.current.play();
      setIsPlaying(() => true);
    }
  };

  const handleAudioFastForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const handleAudioRollback = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(() => false);
    setIsLoaded(() => false);

    // Test delay to simulate loading next song
    setTimeout(() => {
      setAudio(() => {
        return {
          name: "Kashmir",
          artist: "Led Zeppelin",
          src: "../../assets/song2.mp3",
        };
      });
      setIsLoaded(() => true);
    }, 1000);

    //   setAudio({
    //     name: "Kashmir",
    //     artist: "Led Zeppelin",
    //     src: "../../assets/song2.mp3",
    //   });
    // setIsLoaded(() => true);
  };

  return (
    <div className="song">
      {isLoaded ? (
        <>
          <h1>
            {audio.artist} - {audio.name}
          </h1>
          <audio
            controls
            id="audio-player"
            ref={audioRef}
            onEnded={handleAudioEnded}
          >
            <source src={audio.src} type="audio/mpeg" />
          </audio>
          <ul>
            <li onClick={handleAudioRollback}>⏪</li>
            <li onClick={playAndPauseAudio}> {isPlaying ? "⏸️" : "▶️"}️</li>
            <li onClick={handleAudioFastForward}>⏩</li>
          </ul>
        </>
      ) : (
        <h1 style={{ marginBottom: "2rem" }}>Loading...</h1>
      )}
    </div>
  );
}
