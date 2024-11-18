// src/admin/app.js
export default {
  bootstrap() {
    if (typeof window !== 'undefined') {
      const style = document.createElement('style');
      style.innerHTML = `
        /* Hide Media Library */
        li:has(a[aria-label="Media Library"]) {
          display: none !important;
        }
        a[href="/admin/plugins/upload"] {
          display: none !important;
        }
        
        /* Hide Marketplace */
        li:has(a[aria-label="Marketplace"]) {
          display: none !important;
        }
        a[href="/admin/marketplace"] {
          display: none !important;
        }
        
        /* Hide parent li for both */
        li:has(a[href="/admin/marketplace"]), 
        li:has(a[href="/admin/plugins/upload"]) {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  },
};