document.addEventListener('DOMContentLoaded', function() {
      
    const liveBattles = [
      {
        id: 1,
        name: "Python Speed Challenge",
        status: "live",
        type: "paid",
        prize: "₹500",
        participants: 8,
        duration: "30m",
        difficulty: "medium",
        language: "Python"
      },
      {
        id: 2,
        name: "JavaScript Algorithms",
        status: "live",
        type: "free",
        participants: 12,
        duration: "45m",
        difficulty: "hard",
        language: "JavaScript"
      },
      {
        id: 3,
        name: "Beginner Friendly Duel",
        status: "live",
        type: "free",
        participants: 5,
        duration: "15m",
        difficulty: "easy",
        language: "Any"
      },
      {
        id: 4,
        name: "Data Structures Master",
        status: "live",
        type: "paid",
        prize: "₹1000",
        participants: 6,
        duration: "60m",
        difficulty: "hard",
        language: "C++"
      },
      {
        id: 5,
        name: "Weekly Coding Sprint",
        status: "live",
        type: "paid",
        prize: "₹750",
        participants: 15,
        duration: "45m",
        difficulty: "medium",
        language: "Java"
      }
    ];
    
    
    const leaderboard = [
      { rank: 1, name: "Neo", rating: 2850, avatar: "https://i.pravatar.cc/60?img=10", streak: 12 },
      { rank: 2, name: "Trinity", rating: 2750, avatar: "https://i.pravatar.cc/60?img=11", streak: 8 },
      { rank: 3, name: "Morpheus", rating: 2650, avatar: "https://i.pravatar.cc/60?img=12", streak: 5 },
      { rank: 4, name: "Alice", rating: 2550, avatar: "https://i.pravatar.cc/60?img=1", streak: 3 },
      { rank: 5, name: "Bob", rating: 2450, avatar: "https://i.pravatar.cc/60?img=2", streak: 1 }
    ];
    
    
    const communityPosts = [
      {
        id: 1,
        user: "CodeMaster",
        avatar: "https://i.pravatar.cc/60?img=13",
        time: "5 min ago",
        content: "Just solved the 'Trapping Rain Water' problem with O(n) time and O(1) space complexity! Anyone want to discuss approaches?",
        likes: 8,
        comments: 3,
        isLiked: false
      },
      {
        id: 2,
        user: "AlgoQueen",
        avatar: "https://i.pravatar.cc/60?img=14",
        time: "25 min ago",
        content: "Hosting a free Python battle in 30 minutes for beginners. We'll work on basic string manipulation problems. Join if you're interested!",
        likes: 15,
        comments: 7,
        isLiked: true
      },
      {
        id: 3,
        user: "ByteMe",
        avatar: "https://i.pravatar.cc/60?img=15",
        time: "1 hour ago",
        content: "Looking for a JavaScript partner to practice DOM manipulation challenges. I'm intermediate level, ping me if interested!",
        likes: 5,
        comments: 2,
        isLiked: false
      }
    ];
    
    
    const battlesContainer = document.getElementById('live-battles-container');
    liveBattles.forEach(battle => {
      const battleElement = document.createElement('div');
      battleElement.className = 'battle-card bg-gray-800 border border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all';
      battleElement.innerHTML = `
        <div class="flex justify-between items-start">
          <div>
            <div class="flex items-center mb-1">
              <h4 class="font-bold text-lg text-white mr-2">${battle.name}</h4>
              <span class="live-pulse bg-red-600 text-white px-2 py-0.5 rounded-full text-xs flex items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-1"></span> LIVE
              </span>
            </div>
            <div class="flex flex-wrap items-center gap-2 text-sm">
              <span class="bg-gray-700 text-gray-300 px-2 py-0.5 rounded">${battle.language}</span>
              <span class="bg-gray-700 text-gray-300 px-2 py-0.5 rounded">${battle.difficulty}</span>
              <span class="bg-gray-700 text-gray-300 px-2 py-0.5 rounded">${battle.duration}</span>
              <span class="flex items-center text-gray-400">
                <i class="fas fa-users mr-1 text-xs"></i> ${battle.participants}/20
              </span>
            </div>
          </div>
          <div class="text-right">
            ${battle.type === 'paid' ? `
              <div class="text-yellow-400 font-bold mb-1">${battle.prize} Prize</div>
              <button class="btn-primary px-4 py-1.5 rounded-lg text-sm font-semibold">
                Join ₹100
              </button>
            ` : `
              <button class="btn-secondary px-4 py-1.5 rounded-lg text-sm font-semibold">
                Join Free
              </button>
            `}
          </div>
        </div>
      `;
      battlesContainer.appendChild(battleElement);
    });
    
    
    const leaderboardContainer = document.getElementById('leaderboard-container');
    leaderboard.forEach(user => {
      const userElement = document.createElement('div');
      userElement.className = 'flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-all';
      userElement.innerHTML = `
        <div class="flex items-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3 rank-${user.rank} font-bold">
            ${user.rank}
          </div>
          <div>
            <p class="font-medium text-white">${user.name}</p>
            <div class="flex items-center text-xs text-gray-400">
              <span class="mr-2">${user.rating} rating</span>
              <span class="flex items-center">
                <i class="fas fa-bolt text-yellow-400 mr-1"></i> ${user.streak} wins
              </span>
            </div>
          </div>
        </div>
        <img src="${user.avatar}" class="w-10 h-10 rounded-full border-2 border-gray-600" />
      `;
      leaderboardContainer.appendChild(userElement);
    });
    
    
    const communityContainer = document.getElementById('community-feed-container');
    communityPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'bg-gray-800 rounded-lg p-4 border border-gray-700';
      postElement.innerHTML = `
        <div class="flex items-start space-x-3">
          <img src="${post.avatar}" class="w-10 h-10 rounded-full" />
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-semibold text-white">${post.user}</p>
                <p class="text-xs text-gray-400">${post.time}</p>
              </div>
              <button class="text-gray-400 hover:text-yellow-400">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>
            <p class="mt-2 text-gray-300">${post.content}</p>
            <div class="flex items-center justify-between mt-3 pt-3 border-t border-gray-700">
              <div class="flex items-center space-x-4">
                <button class="flex items-center text-sm ${post.isLiked ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition-all">
                  <i class="fas fa-heart mr-1"></i> ${post.likes}
                </button>
                <button class="flex items-center text-sm text-gray-400 hover:text-yellow-400 transition-all">
                  <i class="fas fa-comment mr-1"></i> ${post.comments}
                </button>
              </div>
              <button class="text-gray-400 hover:text-yellow-400 transition-all">
                <i class="fas fa-share"></i>
              </button>
            </div>
          </div>
        </div>
      `;
      communityContainer.appendChild(postElement);
    });
    
    
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
      });
    });
    
    
    const notificationBtn = document.getElementById('notifications-btn');
    const notificationDropdown = document.getElementById('notification-dropdown');
    
    notificationBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      notificationDropdown.classList.toggle('show');
      this.classList.add('animate-ping');
      setTimeout(() => {
        this.classList.remove('animate-ping');
      }, 500);
    });
    
    
    document.addEventListener('click', function() {
      notificationDropdown.classList.remove('show');
    });
    
    
    notificationDropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    
    const darkModeToggle = document.querySelector('.dark-mode-toggle input');
    darkModeToggle.addEventListener('change', function() {
      if(this.checked) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
    
    
    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '1';
      });
    }, 100);
    
    
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
      tooltip.addEventListener('mouseenter', function() {
        const tooltipText = this.querySelector('.tooltip-text');
        tooltipText.style.opacity = '1';
        tooltipText.style.visibility = 'visible';
      });
      tooltip.addEventListener('mouseleave', function() {
        const tooltipText = this.querySelector('.tooltip-text');
        tooltipText.style.opacity = '0';
        tooltipText.style.visibility = 'hidden';
      });
    });
    
    
    const fabButton = document.querySelector('.fab-button');
    fabButton.addEventListener('click', function() {
      
      document.querySelector('.card.rounded-xl').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  rating: { type: Number, default: 1200 },
  rank: { type: String, default: 'Bronze' },
  battlesWon: { type: Number, default: 0 },
  problemsSolved: { type: Number, default: 0 },
  currentStreak: { type: Number, default: 0 },
  maxStreak: { type: Number, default: 0 },
  preferredLanguages: [{ type: String }],
  skills: {
    python: { type: Number, default: 0 },
    javascript: { type: Number, default: 0 },
    java: { type: Number, default: 0 },
    cpp: { type: Number, default: 0 }
  },
  notifications: [{
    type: { type: String, enum: ['battle', 'tournament', 'friend', 'system'] },
    message: String,
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now }
});

// Password hashing middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Instance method for password verification
userSchema.methods.correctPassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Instance method for generating JWT token
userSchema.methods.generateAuthToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// Static method for updating user rating and rank
userSchema.statics.updateRating = async function(userId, ratingChange) {
  const user = await this.findById(userId);
  user.rating += ratingChange;
  
  // Update rank based on new rating
  if (user.rating >= 2500) user.rank = 'Diamond';
  else if (user.rating >= 2000) user.rank = 'Platinum';
  else if (user.rating >= 1500) user.rank = 'Gold';
  else if (user.rating >= 1000) user.rank = 'Silver';
  else user.rank = 'Bronze';
  
  await user.save();
  return user;
};

module.exports = mongoose.model('User', userSchema);
// models/Battle.js
const mongoose = require('mongoose');

const battleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  participants: [{ 
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    joinedAt: { type: Date, default: Date.now },
    solution: String,
    solved: { type: Boolean, default: false },
    timeTaken: Number,
    score: Number
  }],
  problem: { type: mongoose.Schema.ObjectId, ref: 'Problem' },
  problemSource: { 
    platform: { type: String, enum: ['leetcode', 'codeforces', 'hackerrank', 'custom'] },
    link: String,
    customDescription: String
  },
  entryFee: { type: Number, default: 0 },
  prizePool: { type: Number, default: 0 },
  duration: { type: Number, required: true }, // in minutes
  startTime: { type: Date },
  endTime: { type: Date },
  status: { 
    type: String, 
    enum: ['waiting', 'active', 'completed', 'cancelled'],
    default: 'waiting'
  },
  languageRestriction: { type: String },
  difficulty: { 
    type: String, 
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  maxParticipants: { type: Number, default: 20 },
  winner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

// Start battle
battleSchema.methods.startBattle = async function() {
  this.status = 'active';
  this.startTime = new Date();
  this.endTime = new Date(Date.now() + this.duration * 60000);
  await this.save();
  
  // Notify all participants
  await NotificationService.notifyBattleStart(this);
  
  return this;
};

// End battle and determine winner
battleSchema.methods.endBattle = async function() {
  this.status = 'completed';
  
  // Determine winner based on solution quality and speed
  const activeParticipants = this.participants.filter(p => p.solved);
  if (activeParticipants.length > 0) {
    activeParticipants.sort((a, b) => {
      if (a.score !== b.score) return b.score - a.score;
      return a.timeTaken - b.timeTaken;
    });
    
    this.winner = activeParticipants[0].user;
    
    // Distribute prize if any
    if (this.prizePool > 0) {
      await User.findByIdAndUpdate(this.winner, { 
        $inc: { balance: this.prizePool },
        $push: { notifications: {
          type: 'battle',
          message: `You won ₹${this.prizePool} in "${this.name}" battle!`
        }}
      });
    }
    
    // Update ratings using Elo rating system
    await RatingService.updateRatings(this);
  }
  
  await this.save();
  await NotificationService.notifyBattleEnd(this);
  
  return this;
};

module.exports = mongoose.model('Battle', battleSchema);
// models/Problem.js
const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { 
    type: String, 
    enum: ['easy', 'medium', 'hard'],
    required: true
  },
  tags: [{ type: String }],
  testCases: [{
    input: { type: String, required: true },
    output: { type: String, required: true },
    isHidden: { type: Boolean, default: false }
  }],
  constraints: { type: String },
  timeLimit: { type: Number, default: 2 }, // in seconds
  memoryLimit: { type: Number, default: 256 }, // in MB
  solutionTemplate: {
    python: { type: String },
    javascript: { type: String },
    java: { type: String },
    cpp: { type: String }
  },
  source: { 
    platform: { type: String, enum: ['leetcode', 'codeforces', 'hackerrank', 'custom'] },
    link: String
  },
  creator: { type: mongoose.Schema.ObjectId, ref: 'User' },
  solvedCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Problem', problemSchema);

// services/CodeExecutionService.js
const { exec } = require('child_process');
const Docker = require('dockerode');
const fs = require('fs');
const path = require('path');
const Problem = require('../models/Problem');

class CodeExecutionService {
  constructor() {
    this.docker = new Docker();
    this.tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(this.tempDir)) {
      fs.mkdirSync(this.tempDir);
    }
  }

  async executeCode(language, code, problemId) {
    const problem = await Problem.findById(problemId);
    if (!problem) throw new Error('Problem not found');
    
    const testCases = problem.testCases;
    const results = [];
    
    // Prepare Docker container based on language
    const containerConfig = this.getContainerConfig(language);
    
    try {
      // Create container
      const container = await this.docker.createContainer(containerConfig);
      
      // Start container
      await container.start();
      
      // Execute code for each test case
      for (const testCase of testCases) {
        const result = await this.runTestCase(container, language, code, testCase);
        results.push(result);
      }
      
      // Stop and remove container
      await container.stop();
      await container.remove();
      
      return results;
    } catch (error) {
      console.error('Execution error:', error);
      throw error;
    }
  }

  getContainerConfig(language) {
    const configs = {
      python: {
        Image: 'python:3.9-slim',
        Cmd: ['python', '-c', ''],
        Tty: false,
        HostConfig: {
          Memory: 256 * 1024 * 1024, // 256MB
          MemorySwap: 512 * 1024 * 1024, // 512MB
          CpuPeriod: 100000,
          CpuQuota: 50000 // Limit to 50% of CPU
        }
      },
      javascript: {
        Image: 'node:16-slim',
        Cmd: ['node', '-e', ''],
        Tty: false,
        HostConfig: {
          Memory: 256 * 1024 * 1024,
          MemorySwap: 512 * 1024 * 1024,
          CpuPeriod: 100000,
          CpuQuota: 50000
        }
      },
      // Similar configs for Java and C++
    };
    
    return configs[language] || configs.python;
  }

  async runTestCase(container, language, code, testCase) {
    // Implementation depends on language and test case
    // Would involve writing files to container, executing them,
    // capturing output, and comparing with expected output
    // Also handles timeouts and memory limits
    
    // This is a simplified version
    return {
      input: testCase.input,
      expectedOutput: testCase.output,
      actualOutput: '...', // from execution
      passed: true, // or false
      executionTime: 120, // ms
      memoryUsed: 45 // MB
    };
  }
}

module.exports = new CodeExecutionService();
// models/Tournament.js
const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  organizer: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  participants: [{ 
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    joinedAt: { type: Date, default: Date.now },
    currentRound: { type: Number, default: 0 },
    score: { type: Number, default: 0 }
  }],
  prizePool: { type: Number, required: true },
  entryFee: { type: Number, default: 0 },
  maxParticipants: { type: Number },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  status: { 
    type: String, 
    enum: ['upcoming', 'registration', 'active', 'completed', 'cancelled'],
    default: 'upcoming'
  },
  rounds: [{
    name: String,
    problems: [{ type: mongoose.Schema.ObjectId, ref: 'Problem' }],
    duration: Number, // in minutes
    startTime: Date,
    endTime: Date
  }],
  rules: { type: String },
  winners: [{
    position: { type: Number, required: true },
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    prize: { type: Number, required: true }
  }],
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

// Start tournament
tournamentSchema.methods.startTournament = async function() {
  if (this.status !== 'registration') {
    throw new Error('Tournament can only start from registration phase');
  }
  
  this.status = 'active';
  this.rounds[0].startTime = new Date();
  this.rounds[0].endTime = new Date(Date.now() + this.rounds[0].duration * 60000);
  
  await this.save();
  await NotificationService.notifyTournamentStart(this);
  
  return this;
};

// Advance to next round
tournamentSchema.methods.nextRound = async function() {
  if (this.status !== 'active') {
    throw new Error('Tournament is not active');
  }
  
  const currentRoundIndex = this.rounds.findIndex(r => 
    r.startTime && !r.endTime
  );
  
  if (currentRoundIndex === -1 || currentRoundIndex === this.rounds.length - 1) {
    throw new Error('No next round available');
  }
  
  // End current round
  this.rounds[currentRoundIndex].endTime = new Date();
  
  // Start next round
  this.rounds[currentRoundIndex + 1].startTime = new Date();
  this.rounds[currentRoundIndex + 1].endTime = new Date(
    Date.now() + this.rounds[currentRoundIndex + 1].duration * 60000
  );
  
  await this.save();
  await NotificationService.notifyRoundStart(this, currentRoundIndex + 1);
  
  return this;
};

// End tournament and determine winners
tournamentSchema.methods.endTournament = async function() {
  this.status = 'completed';
  
  // Sort participants by score to determine winners
  const sortedParticipants = [...this.participants].sort((a, b) => b.score - a.score);
  
  // Assign winners and prizes
  this.winners = [];
  const prizeDistribution = this.calculatePrizeDistribution();
  
  for (let i = 0; i < Math.min(prizeDistribution.length, sortedParticipants.length); i++) {
    this.winners.push({
      position: i + 1,
      user: sortedParticipants[i].user,
      prize: prizeDistribution[i]
    });
    
    // Update user's balance and notify
    await User.findByIdAndUpdate(sortedParticipants[i].user, {
      $inc: { balance: prizeDistribution[i] },
      $push: { notifications: {
        type: 'tournament',
        message: `You won ₹${prizeDistribution[i]} in "${this.name}" tournament!`
      }}
    });
  }
  
  await this.save();
  await NotificationService.notifyTournamentEnd(this);
  
  return this;
};

module.exports = mongoose.model('Tournament', tournamentSchema);
// services/MatchmakingService.js
const User = require('../models/User');
const Battle = require('../models/Battle');
const Problem = require('../models/Problem');
const { io } = require('../server');

class MatchmakingService {
  constructor() {
    this.waitingQueue = {
      easy: [],
      medium: [],
      hard: []
    };
    this.activeMatches = new Map(); // socketId -> match data
  }

  async joinQueue(userId, difficulty, language) {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');
    
    // Check if user is already in queue
    for (const level in this.waitingQueue) {
      if (this.waitingQueue[level].some(u => u.userId === userId)) {
        throw new Error('User already in queue');
      }
    }
    
    const userData = { userId, socketId: user.socketId, language, rating: user.rating };
    this.waitingQueue[difficulty].push(userData);
    
    // Try to find a match
    await this.tryMatch(difficulty);
    
    return { message: 'Added to queue', position: this.waitingQueue[difficulty].length };
  }

  async tryMatch(difficulty) {
    const queue = this.waitingQueue[difficulty];
    if (queue.length < 2) return;
    
    // Sort by rating to find closest matches
    queue.sort((a, b) => a.rating - b.rating);
    
    // Find pairs with closest ratings
    for (let i = 0; i < queue.length - 1; i++) {
      const ratingDiff = Math.abs(queue[i].rating - queue[i + 1].rating);
      
      // If ratings are close enough (within 200 points)
      if (ratingDiff <= 200) {
        const user1 = queue[i];
        const user2 = queue[i + 1];
        
        // Create a battle
        const battle = await this.createBattle(user1, user2, difficulty);
        
        // Notify both users
        io.to(user1.socketId).emit('matchFound', { battle });
        io.to(user2.socketId).emit('matchFound', { battle });
        
        // Remove from queue
        this.waitingQueue[difficulty].splice(i, 2);
        i--; // Adjust index after removal
      }
    }
  }

  async createBattle(user1, user2, difficulty) {
    // Find a suitable problem
    const problems = await Problem.find({ difficulty })
      .sort({ solvedCount: 1 })
      .limit(10);
    
    if (problems.length === 0) {
      throw new Error('No problems available for this difficulty');
    }
    
    // Select random problem from the least solved
    const randomIndex = Math.floor(Math.random() * Math.min(5, problems.length));
    const problem = problems[randomIndex];
    
    // Create battle
    const battle = new Battle({
      name: `${difficulty} Duel`,
      creator: user1.userId,
      participants: [
        { user: user1.userId },
        { user: user2.userId }
      ],
      problem: problem._id,
      problemSource: {
        platform: problem.source.platform,
        link: problem.source.link
      },
      duration: 30, // minutes
      difficulty,
      status: 'waiting',
      maxParticipants: 2
    });
    
    await battle.save();
    return battle;
  }

  leaveQueue(userId) {
    for (const level in this.waitingQueue) {
      this.waitingQueue[level] = this.waitingQueue[level].filter(u => u.userId !== userId);
    }
  }
}

module.exports = new MatchmakingService();
// services/NotificationService.js
const User = require('../models/User');
const Battle = require('../models/Battle');
const Tournament = require('../models/Tournament');
const { io } = require('../server');

class NotificationService {
  static async notifyBattleStart(battle) {
    const participants = await User.find({ 
      _id: { $in: battle.participants.map(p => p.user) }
    });
    
    participants.forEach(user => {
      io.to(user.socketId).emit('battleStarted', {
        battleId: battle._id,
        message: `Battle "${battle.name}" has started!`
      });
      
      // Save to database
      User.findByIdAndUpdate(user._id, {
        $push: { notifications: {
          type: 'battle',
          message: `Battle "${battle.name}" has started!`,
          link: `/battles/${battle._id}`
        }}
      }).exec();
    });
  }

  static async notifyBattleEnd(battle) {
    const participants = await User.find({ 
      _id: { $in: battle.participants.map(p => p.user) }
    });
    
    participants.forEach(user => {
      const isWinner = battle.winner && battle.winner.equals(user._id);
      const message = isWinner 
        ? `You won the battle "${battle.name}"!` 
        : `Battle "${battle.name}" has ended`;
      
      io.to(user.socketId).emit('battleEnded', {
        battleId: battle._id,
        message,
        isWinner
      });
      
      // Save to database
      User.findByIdAndUpdate(user._id, {
        $push: { notifications: {
          type: 'battle',
          message,
          link: `/battles/${battle._id}`
        }}
      }).exec();
    });
  }

  static async notifyTournamentStart(tournament) {
    const participants = await User.find({ 
      _id: { $in: tournament.participants.map(p => p.user) }
    });
    
    participants.forEach(user => {
      io.to(user.socketId).emit('tournamentStarted', {
        tournamentId: tournament._id,
        message: `Tournament "${tournament.name}" has started!`
      });
      
      // Save to database
      User.findByIdAndUpdate(user._id, {
        $push: { notifications: {
          type: 'tournament',
          message: `Tournament "${tournament.name}" has started!`,
          link: `/tournaments/${tournament._id}`
        }}
      }).exec();
    });
  }

  // Similar methods for other notification types
}

module.exports = NotificationService;
// services/RatingService.js
const User = require('../models/User');
const Battle = require('../models/Battle');

class RatingService {
  static async updateRatings(battle) {
    if (!battle.winner || battle.participants.length < 2) return;
    
    const participants = battle.participants.filter(p => p.user);
    if (participants.length < 2) return;
    
    const winner = participants.find(p => p.user.equals(battle.winner));
    const loser = participants.find(p => !p.user.equals(battle.winner));
    
    if (!winner || !loser) return;
    
    const winnerUser = await User.findById(winner.user);
    const loserUser = await User.findById(loser.user);
    
    // Calculate expected scores
    const expectedWinner = 1 / (1 + Math.pow(10, (loserUser.rating - winnerUser.rating) / 400));
    const expectedLoser = 1 / (1 + Math.pow(10, (winnerUser.rating - loserUser.rating) / 400));
    
    // K-factor determines how much ratings change
    const winnerK = this.getKFactor(winnerUser.rating);
    const loserK = this.getKFactor(loserUser.rating);
    
    // Update ratings
    const winnerNewRating = Math.round(winnerUser.rating + winnerK * (1 - expectedWinner));
    const loserNewRating = Math.round(loserUser.rating + loserK * (0 - expectedLoser));
    
    // Apply updates
    await User.updateRating(winner.user, winnerNewRating - winnerUser.rating);
    await User.updateRating(loser.user, loserNewRating - loserUser.rating);
    
    // Update streaks
    await User.findByIdAndUpdate(winner.user, { 
      $inc: { currentStreak: 1, battlesWon: 1 },
      $max: { maxStreak: { $add: ["$currentStreak", 1] } }
    });
    
    await User.findByIdAndUpdate(loser.user, { 
      $set: { currentStreak: 0 }
    });
  }

  static getKFactor(rating) {
    if (rating < 1400) return 32; // New players get bigger adjustments
    if (rating < 1800) return 24;
    if (rating < 2200) return 16;
    return 10; // Top players get smaller adjustments
  }

  static async getGlobalLeaderboard(limit = 100) {
    return User.find({})
      .sort({ rating: -1 })
      .limit(limit)
      .select('username avatar rating rank battlesWon currentStreak');
  }

  static async getWeeklyLeaderboard(limit = 100) {
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    
    // Get users with most battles won in the last week
    return User.aggregate([
      { $lookup: {
        from: 'battles',
        let: { userId: '$_id' },
        pipeline: [
          { $match: {
            $expr: {
              $and: [
                { $eq: ['$winner', '$$userId'] },
                { $gte: ['$endTime', oneWeekAgo] }
              ]
            }
          }},
          { $count: 'wins' }
        ],
        as: 'weeklyWins'
      }},
      { $addFields: {
        weeklyWins: { $ifNull: [{ $arrayElemAt: ['$weeklyWins.wins', 0] }, 0] }
      }},
      { $sort: { weeklyWins: -1, rating: -1 } },
      { $limit: limit },
      { $project: {
        username: 1,
        avatar: 1,
        rating: 1,
        rank: 1,
        weeklyWins: 1
      }}
    ]);
  }
}

module.exports = RatingService;