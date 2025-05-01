document.addEventListener('DOMContentLoaded', function() {
    // Sample data for live battles
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
    
    // Sample leaderboard data
    const leaderboard = [
      { rank: 1, name: "Neo", rating: 2850, avatar: "https://i.pravatar.cc/60?img=10", streak: 12 },
      { rank: 2, name: "Trinity", rating: 2750, avatar: "https://i.pravatar.cc/60?img=11", streak: 8 },
      { rank: 3, name: "Morpheus", rating: 2650, avatar: "https://i.pravatar.cc/60?img=12", streak: 5 },
      { rank: 4, name: "Alice", rating: 2550, avatar: "https://i.pravatar.cc/60?img=1", streak: 3 },
      { rank: 5, name: "Bob", rating: 2450, avatar: "https://i.pravatar.cc/60?img=2", streak: 1 }
    ];
    
    // Sample community posts
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
    
    // Render live battles
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
    
    // Render leaderboard
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
    
    // Render community posts
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
    
    // Tab switching functionality
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        // Here you would typically load different content based on the tab
      });
    });
    
    // Notification button functionality
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
    
    // Close notifications when clicking outside
    document.addEventListener('click', function() {
      notificationDropdown.classList.remove('show');
    });
    
    // Prevent dropdown from closing when clicking inside
    notificationDropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle input');
    darkModeToggle.addEventListener('change', function() {
      if(this.checked) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
    
    // Simulate loading animation
    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '1';
      });
    }, 100);
    
    // Tooltip initialization
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
    
    // Floating action button click handler
    const fabButton = document.querySelector('.fab-button');
    fabButton.addEventListener('click', function() {
      // Scroll to create battle section
      document.querySelector('.card.rounded-xl').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });