// Initialize Lucide icons
lucide.createIcons();

// Tab switching functionality
function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');

    if (tab === 'login') {
        // Show login, hide signup
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        
        // Update tab styles
        loginTab.classList.add('text-indigo-600', 'border-indigo-600', 'bg-indigo-50/50');
        loginTab.classList.remove('text-gray-500', 'border-transparent');
        
        signupTab.classList.remove('text-indigo-600', 'border-indigo-600', 'bg-indigo-50/50');
        signupTab.classList.add('text-gray-500', 'border-transparent');
    } else {
        // Show signup, hide login
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        
        // Update tab styles
        signupTab.classList.add('text-indigo-600', 'border-indigo-600', 'bg-indigo-50/50');
        signupTab.classList.remove('text-gray-500', 'border-transparent');
        
        loginTab.classList.remove('text-indigo-600', 'border-indigo-600', 'bg-indigo-50/50');
        loginTab.classList.add('text-gray-500', 'border-transparent');
    }

    // Re-initialize icons for the newly visible form
    lucide.createIcons();
}

// Password visibility toggle
function togglePassword(inputId, eyeId) {
    const input = document.getElementById(inputId);
    const eyeIcon = document.getElementById(eyeId);
    
    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.setAttribute('data-lucide', 'eye-off');
    } else {
        input.type = 'password';
        eyeIcon.setAttribute('data-lucide', 'eye');
    }
    
    lucide.createIcons();
}

// Form submission handlers
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted');
    
    // Visual feedback
    const btn = this.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Signing in...';
    btn.disabled = true;
    lucide.createIcons();
    
    setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.disabled = false;
        lucide.createIcons();
    }, 2000);
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signup submitted');
    
    // Visual feedback
    const btn = this.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Creating account...';
    btn.disabled = true;
    lucide.createIcons();
    
    setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.disabled = false;
        lucide.createIcons();
    }, 2000);
});

// Add input focus effects
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('transform', 'scale-[1.02]');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('transform', 'scale-[1.02]');
    });
});

// Social login handlers
document.querySelectorAll('button img').forEach(img => {
    img.parentElement.addEventListener('click', function(e) {
        e.preventDefault();
        const provider = this.querySelector('span').textContent;
        console.log(`${provider} login clicked`);
    });
});
