// 加载站点信息
async function loadSiteInfo() {
    try {
        const response = await fetch('_data/site.json');
        const siteData = await response.json();
        
        // 更新页面上的品牌名称
        document.querySelectorAll('.navbar-brand').forEach(el => {
            el.textContent = siteData.brandName || 'ShoeLink';
        });
        
        // 更新页脚邮箱和 WhatsApp
        const footerContact = document.querySelector('footer .small');
        if (footerContact && siteData.contactEmail) {
            footerContact.textContent = `Contact us: ${siteData.contactEmail} | WhatsApp: ${siteData.whatsapp || ''}`;
        }
        
        // 更新社交链接
        const socialLinks = siteData.socialLinks || {};
        const footerLinks = document.querySelectorAll('footer a');
        footerLinks.forEach(link => {
            const text = link.textContent.trim().toLowerCase();
            if (text === 'facebook' && socialLinks.facebook) {
                link.href = socialLinks.facebook;
            } else if (text === 'instagram' && socialLinks.instagram) {
                link.href = socialLinks.instagram;
            } else if (text === 'linkedin' && socialLinks.linkedin) {
                link.href = socialLinks.linkedin;
            }
        });
        
        return siteData;
    } catch (error) {
        console.error('Error loading site info:', error);
        return null;
    }
}

// 加载分类
async function loadCategories() {
    try {
        const response = await fetch('_data/categories.json');
        const categoriesData = await response.json();
        const categories = categoriesData.categories || categoriesData;
        return categories;
    } catch (error) {
        console.error('Error loading categories:', error);
        return [];
    }
}

// 加载产品
async function loadProducts() {
    try {
        const response = await fetch('_data/products.json');
        const productsData = await response.json();
        const products = productsData.products || productsData;
        return products;
    } catch (error) {
        console.error('Error loading products:', error);
        return [];
    }
}

// 渲染首页分类卡片
async function renderCategoryCards() {
    const container = document.getElementById('categoryCards');
    if (!container) return;
    
    const categories = await loadCategories();
    
    if (categories.length === 0) {
        container.innerHTML = '<div class="col-12 text-center"><p>No categories found.</p></div>';
        return;
    }
    
    container.innerHTML = categories.map(category => `
        <div class="col-md-3 col-sm-6 mb-3">
            <a href="products.html?category=${encodeURIComponent(category)}" class="category-card">
                <h5>${category}</h5>
            </a>
        </div>
    `).join('');
}

// 渲染首页精选产品
async function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    const products = await loadProducts();
    const featured = products.filter(p => p.featured === true);
    const displayProducts = featured.length > 0 ? featured : products.slice(0, 4);
    
    if (displayProducts.length === 0) {
        container.innerHTML = '<div class="col-12 text-center"><p>No featured products.</p></div>';
        return;
    }
    
    container.innerHTML = displayProducts.map(product => `
        <div class="col-md-3 col-sm-6 mb-4">
            <div class="card product-card">
                <img src="${product.image || 'https://via.placeholder.com/600x400?text=Product'}" class="product-img" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted small">${product.category || ''}</p>
                    <p class="card-text">${product.description ? product.description.substring(0, 60) + '...' : ''}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary btn-sm">View Details</a>
                </div>
            </div>
        </div>
    `).join('');
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', async function() {
    await loadSiteInfo();
    await renderCategoryCards();
    await renderFeaturedProducts();
});
