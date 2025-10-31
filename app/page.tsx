'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedSetting, setSelectedSetting] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedLength, setSelectedLength] = useState<string>('');
  const [justSelectedSetting, setJustSelectedSetting] = useState<string>('');
  const [justSelectedGenre, setJustSelectedGenre] = useState<string>('');
  const [justSelectedLength, setJustSelectedLength] = useState<string>('');

  const handleSettingClick = (id: string) => {
    setSelectedSetting(id);
    setJustSelectedSetting(id);
    setTimeout(() => setJustSelectedSetting(''), 600);
  };

  const handleGenreClick = (id: string) => {
    setSelectedGenre(id);
    setJustSelectedGenre(id);
    setTimeout(() => setJustSelectedGenre(''), 600);
  };

  const handleLengthClick = (id: string) => {
    setSelectedLength(id);
    setJustSelectedLength(id);
    setTimeout(() => setJustSelectedLength(''), 600);
  };

  const settings = [
    { id: 'city', label: 'City', emoji: '🏙️' },
    { id: 'forest', label: 'Forest', emoji: '🌲' },
    { id: 'ocean', label: 'Ocean', emoji: '🌊' },
    { id: 'mountains', label: 'Mountains', emoji: '⛰️' },
    { id: 'space', label: 'Space', emoji: '🚀' },
    { id: 'desert', label: 'Desert', emoji: '🏜️' },
  ];

  const genres = [
    { id: 'scary', label: 'Scary', emoji: '👻' },
    { id: 'funny', label: 'Funny', emoji: '😂' },
    { id: 'fantasy', label: 'Fantasy', emoji: '🧙‍♂️' },
    { id: 'romance', label: 'Romance', emoji: '❤️' },
    { id: 'adventure', label: 'Adventure', emoji: '⚔️' },
    { id: 'children', label: 'Children', emoji: '🧸' },
  ];

  const lengths = [
    { id: 'short', label: 'Short', description: '~2 min read' },
    { id: 'medium', label: 'Medium', description: '~5 min read' },
    { id: 'long', label: 'Long', description: '~10 min read' },
  ];

// ------------------------------------------------------------------
//  I added this section that might help with integration of the API
//  the "apiPayload" contains the selected option for each category (setting, genre, length)
//------------------------------------------------------------------

  const handleGenerateStory = () => {
    if (selectedSetting && selectedGenre && selectedLength) {
      const apiPayload = {
        setting: selectedSetting,
        genre: selectedGenre,
        length: selectedLength
      };
      
      console.log('API Payload:', apiPayload);
      console.log('API Call Example:');
      console.log(`fetch('/api/generate-story', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(${JSON.stringify(apiPayload, null, 2)})
})`);
      
      
      fetch('/api/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiPayload)
      })
      .then(res => res.json())
      .then(data => console.log(data));
    }
  };

// ------------------------------------------------------------------
//  End of API Handling
//------------------------------------------------------------------
  const getApiPayload = () => {
    return {
      setting: selectedSetting,
      genre: selectedGenre,
      length: selectedLength
    };
  };

  const isFormComplete = selectedSetting && selectedGenre && selectedLength;

  const handleLogin = () => {
    console.log('Login clicked');
    // TODO: Add login logic here
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
    // TODO: Add sign up logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo/Title - Left */}
            <div className="flex items-center gap-3">
              <div className="text-2xl">✨</div>
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent font-[family-name:var(--font-playfair)] hover:from-purple-700 hover:via-purple-600 hover:to-blue-700 transition-all duration-300 cursor-pointer">
                AI Storyteller
              </h1>
            </div>

            {/* Auth Buttons - Right */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogin}
                className="px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 tracking-wide"
              >
                Log In
              </button>
              <button
                onClick={handleSignUp}
                className="px-6 py-2.5 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl tracking-wide"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight font-[family-name:var(--font-playfair)] leading-tight">
            AI Story Generator
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Craft captivating narratives with our intelligent story generator
          </p>
        </div>

        {/* Category Sections */}
        <div className="space-y-12">
          {/* Setting Selection */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-700/50">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight font-[family-name:var(--font-playfair)]">
              1. Choose a Setting
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-light">
              Where does your story take place?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {settings.map((setting) => (
                <button
                  key={setting.id}
                  onClick={() => handleSettingClick(setting.id)}
                  className={`p-7 rounded-2xl border transition-all duration-300 ${
                    selectedSetting === setting.id
                      ? 'border-transparent bg-gradient-to-br from-purple-500 via-purple-400 to-purple-300 shadow-2xl scale-105'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg hover:scale-105'
                  } ${justSelectedSetting === setting.id ? 'select-animation' : ''}`}
                >
                  <div className={`text-5xl mb-3 transition-transform duration-300 ${
                    selectedSetting === setting.id ? 'scale-110' : ''
                  }`}>
                    {setting.emoji}
                  </div>
                  <div className={`font-semibold text-base tracking-wide ${
                    selectedSetting === setting.id
                      ? 'text-white'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {setting.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Genre Selection */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-700/50">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight font-[family-name:var(--font-playfair)]">
              2. Pick a Genre
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-light">
              What type of story would you like?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {genres.map((genre) => (
                <button
                  key={genre.id}
                  onClick={() => handleGenreClick(genre.id)}
                  className={`p-7 rounded-2xl border transition-all duration-300 ${
                    selectedGenre === genre.id
                      ? 'border-transparent bg-gradient-to-br from-purple-500 via-purple-400 to-purple-300 shadow-2xl scale-105'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg hover:scale-105'
                  } ${justSelectedGenre === genre.id ? 'select-animation' : ''}`}
                >
                  <div className={`text-5xl mb-3 transition-transform duration-300 ${
                    selectedGenre === genre.id ? 'scale-110' : ''
                  }`}>
                    {genre.emoji}
                  </div>
                  <div className={`font-semibold text-base tracking-wide ${
                    selectedGenre === genre.id
                      ? 'text-white'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {genre.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Length Selection */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-700/50">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight font-[family-name:var(--font-playfair)]">
              3. Select Length
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-light">
              How long should your story be?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {lengths.map((length) => (
                <button
                  key={length.id}
                  onClick={() => handleLengthClick(length.id)}
                  className={`p-7 rounded-2xl border transition-all duration-300 ${
                    selectedLength === length.id
                      ? 'border-transparent bg-gradient-to-br from-purple-500 via-purple-400 to-purple-300 shadow-2xl scale-105'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg hover:scale-105'
                  } ${justSelectedLength === length.id ? 'select-animation' : ''}`}
                >
                  <div className={`font-semibold text-xl mb-2 tracking-wide ${
                    selectedLength === length.id
                      ? 'text-white'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {length.label}
                  </div>
                  <div className={`text-sm tracking-wide ${
                    selectedLength === length.id
                      ? 'text-white/90'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {length.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="mt-16 text-center">
          <button
            onClick={handleGenerateStory}
            disabled={!isFormComplete}
            className={`px-14 py-5 rounded-2xl text-base font-bold tracking-wide transition-all duration-300 ${
              isFormComplete
                ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 hover:scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
            }`}
          >
            {isFormComplete ? '✨ Generate My Story' : 'Please select all options'}
          </button>
        </div>

        {/* Developer Helper - API Payload Preview */}
        {isFormComplete && (
          <div className="mt-12 p-6 bg-gray-900 rounded-2xl border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                API Payload (for backend integration)
              </h3>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(getApiPayload(), null, 2));
                  alert('Copied to clipboard!');
                }}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Copy JSON
              </button>
            </div>
            <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{JSON.stringify(getApiPayload(), null, 2)}
            </pre>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-400 mb-2">Example API Call:</p>
              <pre className="text-xs text-gray-300 font-mono overflow-x-auto bg-gray-800 p-3 rounded">
{`fetch('/api/generate-story', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(${JSON.stringify(getApiPayload())})
})`}
              </pre>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 max-w-7xl">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} AI Storyteller. Created by <span className="font-semibold text-purple-600 dark:text-purple-400">Arsh, Dil, Joey, Owen</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
