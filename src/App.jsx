import React, { useState } from 'react';
import { FaSun, FaMoon, FaQuoteRight } from 'react-icons/fa';
import { MdFlag } from 'react-icons/md';
import './App.css';

const App = () => {
  const quotesFR = [
    "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme. - Winston Churchill",
    "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre. - Albert Einstein",
    "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui. - Franklin D. Roosevelt",
    "Agissez comme s'il était impossible d'échouer. - Winston Churchill",
    "Votre temps est limité, ne le gâchez pas en vivant la vie de quelqu'un d'autre. - Steve Jobs",
    "Le seul véritable échec est d'abandonner. - Jean-Paul Sartre",
    "Ne laisse jamais les ombres d'hier obscurcir la lumière de demain. - Anonyme",
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre. - Gandhi",
    "Celui qui ne fait jamais d’erreur ne fait jamais rien. - Théodore Roosevelt",
    "Si tu veux changer le monde, commence par te changer toi-même. - Gandhi",
    "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions. - Dalai Lama",
    "Les rêves ne deviennent réalité que si vous travaillez pour eux. - Anonyme",
    "L'imagination est plus importante que la connaissance. - Albert Einstein",
    "Le meilleur moyen de prédire l'avenir est de le créer. - Peter Drucker",
    "Ce n'est pas ce que nous avons mais ce que nous apprécions qui fait notre bonheur. - Charles Spurgeon",
    "N'attendez pas les moments parfaits, prenez chaque moment et rendez-le parfait. - Zoey Sayward",
    "La simplicité est la sophistication suprême. - Léonard de Vinci",
    "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute. - Confucius",
    "Ce que vous faites aujourd'hui peut améliorer tous vos lendemains. - Ralph Marston",
    "Rien n'est plus contagieux que l'exemple. - François de La Rochefoucauld",
    "L'échec est simplement l'opportunité de recommencer, cette fois plus intelligemment. - Henry Ford",
    "La créativité, c'est l'intelligence qui s'amuse. - Albert Einstein",
    "Crois en toi-même et tout est possible. - Anonyme",
    "Visez toujours la lune, même si vous la manquez, vous atterrirez parmi les étoiles. - Norman Vincent Peale",
    "N'ayez pas peur de l'échec, ayez peur de ne pas avoir essayé. - Anonyme"
  ];

  const quotesEN = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "The only real failure is the one from which we learn nothing. - Henry Ford",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "If you can dream it, you can achieve it. - Zig Ziglar",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Dream big and dare to fail. - Norman Vaughan",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Strive not to be a success, but rather to be of value. - Albert Einstein"
  ];

  const [quote, setQuote] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('FR');

  const generateQuote = () => {
    if (language === 'FR') {
      const randomIndex = Math.floor(Math.random() * quotesFR.length);
      setQuote(quotesFR[randomIndex]);
    } else {
      const randomIndex = Math.floor(Math.random() * quotesEN.length);
      setQuote(quotesEN[randomIndex]);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'FR' ? 'EN' : 'FR');
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="absolute top-4 right-4 flex space-x-4">
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
        </button>
        <button onClick={toggleLanguage} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          <MdFlag className="text-blue-600" />
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4">Quote Generator</h1>
      <p className="text-lg italic text-center px-4 mb-6">{quote || 'Cliquez sur le bouton pour générer une citation !'}</p>
      <button
        onClick={generateQuote}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        <FaQuoteRight />
        <span>{language === 'FR' ? 'Nouvelle citation' : 'New Quote'}</span>
      </button>
    </div>
  );
};

export default App;
