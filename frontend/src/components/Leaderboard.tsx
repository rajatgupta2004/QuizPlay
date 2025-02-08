import React from 'react';
import { Trophy } from 'lucide-react';

interface LeaderboardEntry {
  name: string;
  score: number;
  level: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

export function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="text-yellow-500" size={24} />
        <h2 className="text-xl font-bold">Leaderboard</h2>
      </div>
      <div className="space-y-4">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <span className={`
                ${index === 0 ? 'text-yellow-500' : ''}
                ${index === 1 ? 'text-gray-400' : ''}
                ${index === 2 ? 'text-amber-600' : ''}
                font-bold text-lg
              `}>
                #{index + 1}
              </span>
              <div>
                <p className="font-semibold">{entry.name}</p>
                <p className="text-sm text-gray-600">Level {entry.level}</p>
              </div>
            </div>
            <span className="font-bold">{entry.score} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}