// src/admin/app.js
export default {
  bootstrap() {
    // When the application loads, inject our CSS
    if (typeof window !== 'undefined') {
      const style = document.createElement('style');
      style.innerHTML = `
        li:has(a[aria-label="Media Library"]) {
          display: none !important;
        }

        /* Backup selectors in case the aria-label changes */
        a[href="/admin/plugins/upload"] {
          display: none !important;
        }
        
        /* Hide parent li if needed */
        li:has(a[href="/admin/plugins/upload"]) {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  },
};