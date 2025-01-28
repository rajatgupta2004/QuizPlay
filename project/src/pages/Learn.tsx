import React, { useState, useRef, useEffect } from 'react';
import { VideoCard } from '../components/VideoCard';
import { QuizModal } from '../components/QuizModal';
import { Leaderboard } from '../components/Leaderboard';
import { Video, Quiz, User } from '../types';
import { BookOpen, Trophy, Coins, List } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// Mock data
const mockQuiz: Quiz = {
  
  id: '1',
  videoId: '1',
  questions: [
    {
      id: '1',
      text: 'What is the primary purpose of the useState hook?',
      options: [
        'To manage component state',
        'To handle side effects',
        'To optimize performance',
        'To create custom hooks',
      ],
      correctAnswer: 0,
    },
    {
      id: '2',
      text: 'Which hook is used for side effects in React?',
      options: [
        'useState',
        'useEffect',
        'useContext',
        'useReducer',
      ],
      correctAnswer: 1,
    },
  ],
};

const mockLeaderboard = [
  { name: 'Sarah Johnson', score: 2500, level: 15 },
  { name: 'Mike Chen', score: 2100, level: 12 },
  { name: 'Emma Davis', score: 1800, level: 10 },
];

function Learn() {
  
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User>({
    id: '1',
    name: 'John Doe',
    tokens: 100,
    completedQuizzes: [],
    level: 5,
  });
  const [showQuiz, setShowQuiz] = useState(false);
  const [searchTerm, setSearchTerm] = useState('web3');
  const [videos, setVideos] = useState<Video[]>([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [progress, setProgress] = useState<{ [key: string]: number }>({});
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(()=>{
    async function f(){
      const res = await axios.post('http://localhost:3000/data', {
        body :videos
      });
    }
    f();
  },[videos])

  const handleQuizComplete = (score: number) => {
    const tokensEarned = score * 10;
    setCurrentUser(prev => ({
      ...prev,
      tokens: prev.tokens + tokensEarned,
      completedQuizzes: [...prev.completedQuizzes, mockQuiz.id],
    }));
    setShowQuiz(false);
  };

  const handleSearch = async () => {
    const API_KEY = 'AIzaSyAagz9_C1p-Uyy40OOyT51BKdoirzNvU5s';
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        q: searchTerm,
        type: 'video',
        maxResults: 10,
        key: API_KEY,
      },
    });

    
    const fetchedVideos = response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails.high.url,
      videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      category: 'YouTube',
    }));
    setVideos(fetchedVideos);

  
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.contentWindow?.document.querySelector('video')?.currentTime || 0;
      const duration = videoRef.current.contentWindow?.document.querySelector('video')?.duration || 1;
      const progress = (currentTime / duration) * 100;
      setProgress(prev => ({
        ...prev,
        [selectedVideo!.id]: progress,
      }));
    }
  };

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      const interval = setInterval(handleTimeUpdate, 1000);
      return () => clearInterval(interval);
    }
  }, [selectedVideo]);

  const handleProfileClick = () => {
    navigate('/profile');
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BookOpen className="text-blue-600" size={24} />
              <h1 className="text-2xl font-bold text-gray-900">QuizPlay Learn</h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Coins className="text-yellow-500" size={20} />
                <span className="font-semibold">{currentUser.tokens} tokens</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="text-green-500" size={20} />
                <span className="font-semibold">Level {currentUser.level}</span>
              </div>
              <button
                onClick={() => setShowLeaderboard(!showLeaderboard)}
                className="flex items-center gap-2 p-2 bg-blue-500 text-white rounded"
              >
                <List size={20} />
                <span>Leaderboard</span>
              </button>
              <img
                src="https://www.svgrepo.com/show/341258/user-avatar-filled-alt.svg"
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={handleProfileClick}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${showLeaderboard ? 'lg:grid-cols-3' : 'lg:grid-cols-3'} gap-8`}>
          <div className={`${showLeaderboard ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
            <h2 className="text-xl font-bold mb-6">Featured Content</h2>
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-6 p-2 border border-gray-300 rounded"
            />
            <button onClick={handleSearch} className="mb-6 p-2 bg-blue-500 text-white rounded">
              Search
            </button>
            <div className={`grid grid-cols-1 ${showLeaderboard ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
              {videos.map(video => (
                <VideoCard
                  key={video.id}
                  video={video}
                  progress={progress[video.id] || 0}
                  onPlay={(video) => setSelectedVideo(video)}
                  onTakeQuiz={() => setShowQuiz(true)}
                />
              ))}
            </div>
          </div>
          {showLeaderboard && (
            <div>
              <Leaderboard entries={mockLeaderboard} />
            </div>
          )}
        </div>
      </main>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-2"
            >
              Close
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedVideo.title}</h2>
            <iframe
              ref={videoRef}
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedVideo.title}
            ></iframe>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${progress[selectedVideo.id] || 0}%` }}
              ></div>
            </div>
            <p className="mt-4">{selectedVideo.description}</p>
          </div>
        </div>
      )}

      {showQuiz && (
        <QuizModal
          quiz={mockQuiz}
          onClose={() => setShowQuiz(false)}
          onComplete={handleQuizComplete}
        />
      )}
    </div>
  );
}

export default Learn;
