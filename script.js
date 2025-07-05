function startExploring() {
    const category = document.getElementById('jobCategory').value;
    const location = document.getElementById('location').value;
    
    if (category || location) {
        alert(`🚀 Searching for ${category || 'all'} jobs in ${location || 'all locations'}! Feature coming soon!`);
    } else {
        alert('✨ Ready to explore? Enter a job category or location to get started!');
    }
}

function selectJob(jobType) {
    alert(`🎯 Great choice! ${jobType} positions are in high demand. Start your application process now!`);
}

function createProfile() {
    alert('📝 Profile creation feature coming soon! Get ready to showcase your amazing skills!');
}

function browseJobs() {
    alert('🔍 Job browser launching soon! Thousands of opportunities await you!');
}

function applyAndChat() {
    alert('💬 Real-time chat with employers coming soon! Connect instantly with your future boss!');
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.job-card, .step-card, .testimonial').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Add interactive hover effects for job cards
document.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Profile button interaction
document.querySelector('.profile-btn').addEventListener('click', function() {
    alert('👋 Profile menu coming soon! Manage your account and preferences here.');
});

// Add typing effect to search inputs
const inputs = document.querySelectorAll('.search-input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#6366f1';
        this.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = '#e5e7eb';
        this.style.boxShadow = 'none';
    });
});