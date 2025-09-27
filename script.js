
        // Typing animation for name + designation
        const lines = [
        "Akash Singh Rathour",
        "Data Analyst & Visualization Expert"
        ];

        let lineIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
        const currentLine = lines[lineIndex];
        const element = lineIndex === 0 
            ? document.getElementById("typedText") 
            : document.getElementById("typedText1");

        // Update text
        element.textContent = currentLine.substring(0, charIndex);

        if (!isDeleting) {
            charIndex++;
            if (charIndex > currentLine.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // pause at end of line
            return;
            }
        } else {
            charIndex--;
            if (charIndex < 0) {
            isDeleting = false;
            lineIndex = (lineIndex + 1) % lines.length; // loop to next line
            setTimeout(typeEffect, 500); // pause before typing next line
            return;
            }
        }

        setTimeout(typeEffect, isDeleting ? 80 : 120); // speed based on typing or deleting
        }

        typeEffect();




        const form = document.getElementById("contactForm");
        const status = document.getElementById("formStatus");

        form.addEventListener("submit", async (e) => {
            e.preventDefault(); // stop default redirect
            const formData = new FormData(form);

            try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                status.textContent = "✅ Thanks! Your message has been sent.";
                status.style.color = "green";
                form.reset();
            } else {
                status.textContent = "❌ Oops! Something went wrong. Try again.";
                status.style.color = "red";
            }
            } catch (error) {
            status.textContent = "❌ Network error. Please try again.";
            status.style.color = "red";
            }
        });





        
        // Scroll animations
        const sections = document.querySelectorAll('.section');
        const projectCards = document.querySelectorAll('.project-card');
        const timelineItems = document.querySelectorAll('.timeline-item');
        const skillCategories = document.querySelectorAll('.skill-category');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        // Observe sections
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Observe project cards
        projectCards.forEach(card => {
            observer.observe(card);
        });
        
        // Observe timeline items
        timelineItems.forEach(item => {
            observer.observe(item);
        });
        
        // Observe skill categories
        skillCategories.forEach(category => {
            observer.observe(category);
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });


        // const scriptURL = 'https://docs.google.com/spreadsheets/d/1bnkomkSxvS26utFSizIAIqgXLqwDE38Lk7eyrivsKy0/edit?usp=sharing';
        
        // Form submission
        // document.getElementById('contactForm').addEventListener('submit', async function(e) {
        //     e.preventDefault();
            
        //     const submitBtn = document.getElementById('submitBtn');
        //     const formMessage = document.getElementById('formMessage');
            
        //     // Get form values
        //     const formData = {
        //         name: document.getElementById('name').value,
        //         email: document.getElementById('email').value,
        //         subject: document.getElementById('subject').value,
        //         message: document.getElementById('message').value,
        //         timestamp: new Date().toLocaleString()
        //     };
            
        //     // Disable submit button to prevent multiple submissions
        //     submitBtn.disabled = true;
        //     submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
        //     try {
        //         // Send data to Google Sheets via Google Apps Script
        //         const response = await fetch(scriptURL, {
        //             method: 'POST',
        //             mode: 'no-cors',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(formData)
        //         });
                
        //         // Show success message
        //         formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        //         formMessage.className = 'form-message success';
                
        //         // Reset form
        //         this.reset();
        //     } catch (error) {
        //         // Show error message
        //         formMessage.textContent = 'Sorry, there was an error sending your message. Please try again later.';
        //         formMessage.className = 'form-message error';
        //         console.error('Error:', error);
        //     } finally {
        //         // Re-enable submit button
        //         submitBtn.disabled = false;
        //         submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                
        //         // Hide message after 5 seconds
        //         setTimeout(() => {
        //             formMessage.style.display = 'none';
        //         }, 5000);
        //     }
        // });