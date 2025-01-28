import React from 'react';
import { Play, BookOpen } from 'lucide-react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onPlay: (video: Video) => void;
  onTakeQuiz: (videoId: string) => void;
}

export function VideoCard({ video, onPlay, onTakeQuiz }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {video.description}
        </p>
        <div className="flex justify-between">
          <button
            onClick={() => onPlay(video)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Play size={18} />
            Watch
          </button>
          <button
            onClick={() => onTakeQuiz(video.id)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <BookOpen size={18} />
            Take Quiz
          </button>
        </div>
      </div>
    </div>
  );
}