import { config } from 'config';

document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const cardInner = document.querySelector('.card-inner');
    const cardFront = document.querySelector('.card-front');
    const cardBack = document.querySelector('.card-back');

    // Apply dimensions and animation
    card.style.width = config.cardWidth;
    card.style.height = config.cardHeight;
    cardInner.style.transition = `transform ${config.flipDuration}`;

    // Apply colors
    cardFront.style.background = config.frontColor;
    cardBack.style.background = config.backColor;

    // Update content
    cardFront.innerHTML = `
        <img src="${config.profileImage}" alt="Profile" class="profile-image">
        <h2 class="name">${config.name}</h2>
        <p class="title">${config.title}</p>
        <p class="bio">${config.bio}</p>
    `;

    cardBack.innerHTML = `
        <h2>Contact & Skills</h2>
        <div class="details-list">
            <div class="details-item">
                <svg viewBox="0 0 24 24"><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z"/></svg>
                <a href="mailto:${config.details.email}" class="email-link">${config.details.email}</a>
            </div>
            <div class="details-item">
                <svg viewBox="0 0 24 24"><path d="M12,2C8.13,2,5,5.13,5,9c0,5.25,7,13,7,13s7-7.75,7-13C19,5.13,15.87,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,11.5,12,11.5z"/></svg>
                ${config.details.location}
            </div>
        </div>
        <div class="skills-list">
            ${config.details.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <div class="social-links">
            <a href="${config.details.socialLinks.behance}" target="_blank" class="social-icon">
                <svg viewBox="0 0 24 24"><path d="M22 7h-7V5h7v2zm-7 10h7v-2h-7v2zm0-4h7v-2h-7v2zm-4-2h4V7h-4v4zm-4 6h4v-4h-4v4zm0-6h4V7h-4v4zM2 7h4v4H2V7zm0 6h4v4H2v-4z"/></svg>
            </a>
            <a href="${config.details.socialLinks.twitter}" target="_blank" class="social-icon">
                <svg viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="${config.details.socialLinks.github}" target="_blank" class="social-icon">
                <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
        </div>
    `;
});