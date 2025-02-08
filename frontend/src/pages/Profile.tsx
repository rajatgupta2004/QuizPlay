import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const user = {
    username: 'John Doe',
    bio: 'A passionate learner and avid coder. Loves to explore new technologies and share knowledge with others.',
    avatar: 'https://www.svgrepo.com/show/425236/users-avatar.svg',
    activity: [
      { date: '2023-01-01', count: 1 },
      { date: '2023-01-02', count: 4 },
      { date: '2023-01-03', count: 2 },
      // Add more activity data here
    ],
    followers: 120,
    following: 80,
    quizzesCompleted: 15,
  };

  const handleDashboardClick = () => {
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <img src={user.avatar} alt="User Avatar" className="w-24 h-24 rounded-full mr-6 border-4 border-white" />
          <div>
            <h2 className="text-3xl font-bold">{user.username}</h2>
            <p className="text-lg">{user.bio}</p>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Activity</h3>
          <CalendarHeatmap
            startDate={new Date('2023-01-01')}
            endDate={new Date('2023-12-31')}
            values={user.activity}
            classForValue={(value:any) => {
              if (!value) {
                return 'color-empty';
              }
              return `color-scale-${value.count}`;
            }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Statistics</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg text-center shadow-md">
              <h4 className="text-xl font-bold text-blue-700">Followers</h4>
              <p className="text-3xl text-blue-900">{user.followers}</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center shadow-md">
              <h4 className="text-xl font-bold text-blue-700">Following</h4>
              <p className="text-3xl text-blue-900">{user.following}</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center shadow-md">
              <h4 className="text-xl font-bold text-blue-700">Quizzes Completed</h4>
              <p className="text-3xl text-blue-900">{user.quizzesCompleted}</p>
            </div>
          </div>
        </div>
        <div className="p-6 text-center">
          <button
            onClick={handleDashboardClick}
            className="bg-red-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
