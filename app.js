
        // ==================== DATA ====================
        const categories = [
            { id: 'fashion', name: 'أزياء', icon: 'fa-tshirt', count: 24, color: 'fashion' },
            { id: 'electronics', name: 'إلكترونيات', icon: 'fa-laptop', count: 18, color: 'electronics' },
            { id: 'supermarket', name: 'سوبرماركت', icon: 'fa-shopping-cart', count: 15, color: 'supermarket' },
            { id: 'perfumes', name: 'عطور', icon: 'fa-spray-can', count: 12, color: 'perfumes' },
            { id: 'furniture', name: 'أثاث', icon: 'fa-couch', count: 10, color: 'furniture' },
            { id: 'restaurants', name: 'مطاعم', icon: 'fa-utensils', count: 22, color: 'restaurants' },
            { id: 'services', name: 'خدمات', icon: 'fa-tools', count: 16, color: 'services' }
        ];

        const stores = [
            {
                id: 1, name: 'متجر الأناقة', category: 'fashion', categoryName: 'أزياء',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
                logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop',
                rating: 4.8, reviews: 156, location: 'شارع محمد خيضر، وسط المدينة',
                phone: '213550000001', lat: 33.3568, lng: 6.8637,
                description: 'متجر الأناقة هو وجهتك الأولى للأزياء الرجالية والنسائية في الوادي. نقدم تشكيلة واسعة من الملابس العصرية بأسعار منافسة.',
                hours: { 'السبت': '09:00 - 21:00', 'الأحد': '09:00 - 21:00', 'الإثنين': '09:00 - 21:00', 'الثلاثاء': '09:00 - 21:00', 'الأربعاء': '09:00 - 21:00', 'الخميس': '09:00 - 21:00', 'الجمعة': '14:00 - 21:00' },
                featured: true, status: 'active'
            },
            {
                id: 2, name: 'تقنية الوادي', category: 'electronics', categoryName: 'إلكترونيات',
                image: 'https://images.unsplash.com/photo-1498049860654-af1a5c5668ba?w=600&h=400&fit=crop',
                logo: 'https://images.unsplash.com/photo-1498049860654-af1a5c5668ba?w=100&h=100&fit=crop',
                rating: 4.6, reviews: 89, location: 'شارع أحمد زبانة، حي النصر',
                phone: '213550000002', lat: 33.3580, lng: 6.8650,
                description: 'متجر متخصص في الهواتف الذكية، الكمبيوترات، والإكسسوارات الإلكترونية. خدمة ما بعد البيع ممتازة وضمان على جميع المنتجات.',
                hours: { 'السبت': '08:30 - 20:00', 'الأحد': '08:30 - 20:00', 'الإثنين': '08:30 - 20:00', 'الثلاثاء': '08:30 - 20:00', 'الأربعاء': '08:30 - 20:00', 'الخميس': '08:30 - 20:00', 'الجمعة': '14:00 - 20:00' },
                featured: true, status: 'active'
            },
            {
                id: 3, name: 'سوبرماركت الواحة', category: 'supermarket', categoryName: 'سوبرماركت',
                image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=400&fit=crop',
                logo: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=100&h=100&fit=crop',
                rating: 4.5, reviews: 234, location: 'شارع الحرية، حي السلام',
                phone: '213550000003', lat: 33.3550, lng: 6.8620,
                description: 'سوبرماركت كبير يوفر جميع احتياجاتك اليومية من المواد الغذائية، المنظفات، والمنتجات الطازجة. عروض يومية وأسعار تنافسية.',
                hours: { 'السبت': '07:00 - 22:00', 'الأحد': '07:00 - 22:00', 'الإثنين': '07:00 - 22:00', 'الثلاثاء': '07:00 - 22:00', 'الأربعاء': '07:00 - 22:00', 'الخميس': '07:00 - 22:00', 'الجمعة': '08:00 - 22:00' },
                featured: true, status: 'active'
            },
            {
                id: 4, name: 'عطور الصحراء', category: 'perfumes', categoryName: 'عطور',
                image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=400&fit=crop',
                logo: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=100&h=100&fit=crop',
                rating: 4.9, reviews: 67, location: 'شارع محمد بوضياف، حي الصناعة',
                phone: '213550000004', lat: 33.3570, lng: 6.8640,
                description: 'متجر متخصص في العطور الفاخرة والفرنسية والعربية الأصيلة. تشكيلة فريدة من أجود أنواع العطور والبخور.',
                hours: { 'السبت': '09:00 - 21:00', 'الأحد': '09:00 - 21:00', 'الإثنين': '09:00 - 21:00', 'الثلاثاء': '09:00 - 21:00', 'الأربعاء': '09:00 - 21:00', 'الخميس': '09:00 - 21:00', 'الجمعة': '16:00 - 21:00' },
                featured: true, status: 'active'
            },
            {
                id: 5, name: 'أثاث النخيل', category: 'furniture', categoryName: 'أثاث',
                image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
                logo: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=100&h=100&fit=crop',
                rating: 4.4, reviews: 45, location: 'شارع الجزائر، حي 20 أوت',
                phone: '213550000005', lat: 33.3590, lng: 6.8660,
                description: 'معرض أثاث فاخر يقدم تشكيلة واسعة من الأثاث العصري والكلاسيكي. تصاميم فريدة وجودة عالية بأسعار مناسبة.',
                hours: { 'السبت': '08:00 - 19:00', 'الأحد': '08:00 - 19:00', 'الإثنين': '08:00 - 19:00', 'الثلاثاء': '08:00 - 19:00', 'الأربعاء': '08:00 - 19:00', 'الخميس': '08:00 - 19:00', 'الجمعة': '14:00 - 19:00' },
                featured: false, status: 'active'
            },
            {
                id: 6, name: 'مطعم الصحراء', category: 'restaurants', categoryName: 'مطاعم',
                image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
                logo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop',
                rating: 4.7, reviews: 312, location: 'شارع أول نوفمبر، وسط المدينة',
                phone: '213550000006', lat: 33.3560, lng: 6.8645,
                description: 'مطعم يقدم أشهى الأطباق الجزائرية والعربية التقليدية. أجواء راقية وخدمة ممتازة. مناسب للعائلات والمناسبات.',
                hours: { 'السبت': '11:00 - 23:00', 'الأحد': '11:00 - 23:00', 'الإثنين': '11:00 - 23:00', 'الثلاثاء': '11:00 - 23:00', 'الأربعاء': '11:00 - 23:00', 'الخميس': '11:00 - 23:00', 'الجمعة': '12:00 - 23:00' },
                featured: true, status: 'active'
            },
            {
                id: 7, name: 'مخبز الوادي', category: 'restaurants', categoryName: 'مطاعم',
                image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
                logo: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop',
                rating: 4.3, reviews: 178, location: 'شارع الحرية، حي السلام',
                phone: '213550000007', lat: 33.3555, lng: 6.8630,
                description: 'مخبز تقليدي يقدم أشهى أنواع الخبز والحلويات الجزائرية. خبز طازج يومياً وكعك منزلي الصنع.',
                hours: { 'السبت': '05:00 - 20:00', 'الأحد': '05:00 - 20:00', 'الإثنين': '05:00 - 20:00', 'الثلاثاء': '05:00 - 20:00', 'الأربعاء': '05:00 - 20:00', 'الخميس': '05:00 - 20:00', 'الجمعة': '06:00 - 20:00' },
                featured: false, status: 'active'
            },
            {
                id: 8, name: 'صيدلية النور', category: 'services', categoryName: 'خدمات',
                image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop',
                logo: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=100&h=100&fit=crop',
                rating: 4.6, reviews: 92, location: 'شارع محمد خيضر، حي النصر',
                phone: '213550000008', lat: 33.3575, lng: 6.8645,
                description: 'صيدلية حديثة تقدم جميع أنواع الأدوية والمستحضرات الطبية. خدمة استشارات صيدلانية وتوصيل للمنازل.',
                hours: { 'السبت': '08:00 - 22:00', 'الأحد': '08:00 - 22:00', 'الإثنين': '08:00 - 22:00', 'الثلاثاء': '08:00 - 22:00', 'الأربعاء': '08:00 - 22:00', 'الخميس': '08:00 - 22:00', 'الجمعة': '08:00 - 22:00' },
                featured: false, status: 'active'
            },
            {
                id: 9, name: 'صالون الجمال', category: 'services', categoryName: 'خدمات',
                image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop',
                logo: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=100&h=100&fit=crop',
                rating: 4.5, reviews: 134, location: 'شارع أول نوفمبر، حي الصناعة',
                phone: '213550000009', lat: 33.3585, lng: 6.8655,
                description: 'صالون تجميل متكامل للسيدات. خدمات الشعر، البشرة، المكياج، والعناية بالأظافر. فريق محترف ومواد عالية الجودة.',
                hours: { 'السبت': '09:00 - 19:00', 'الأحد': '09:00 - 19:00', 'الإثنين': '09:00 - 19:00', 'الثلاثاء': '09:00 - 19:00', 'الأربعاء': '09:00 - 19:00', 'الخميس': '09:00 - 19:00', 'الجمعة': 'مغلق' },
                featured: true, status: 'active'
            },
            {
                id: 10, name: 'مكتبة المعرفة', category: 'services', categoryName: 'خدمات',
                image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop',
                logo: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=100&h=100&fit=crop',
                rating: 4.2, reviews: 56, location: 'شارع الحرية، وسط المدينة',
                phone: '213550000010', lat: 33.3565, lng: 6.8635,
                description: 'مكتبة شاملة توفر الكتب، القرطاسية، والأدوات المدرسية. خدمة الطباعة والتصوير متوفرة.',
                hours: { 'السبت': '08:00 - 20:00', 'الأحد': '08:00 - 20:00', 'الإثنين': '08:00 - 20:00', 'الثلاثاء': '08:00 - 20:00', 'الأربعاء': '08:00 - 20:00', 'الخميس': '08:00 - 20:00', 'الجمعة': '14:00 - 20:00' },
                featured: false, status: 'active'
            },
            {
                id: 11, name: 'محل الأحذية الفاخرة', category: 'fashion', categoryName: 'أزياء',
                image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop',
                logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
                rating: 4.4, reviews: 78, location: 'شارع محمد خيضر، حي النصر',
                phone: '213550000011', lat: 33.3570, lng: 6.8640,
                description: 'متجر متخصص في الأحذية الفاخرة للرجال والنساء. تشكيلة واسعة من الماركات العالمية والمحلية.',
                hours: { 'السبت': '09:00 - 20:00', 'الأحد': '09:00 - 20:00', 'الإثنين': '09:00 - 20:00', 'الثلاثاء': '09:00 - 20:00', 'الأربعاء': '09:00 - 20:00', 'الخميس': '09:00 - 20:00', 'الجمعة': '14:00 - 20:00' },
                featured: false, status: 'active'
            },
            {
                id: 12, name: 'مطعم البحر الأبيض', category: 'restaurants', categoryName: 'مطاعم',
                image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
                logo: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=100&h=100&fit=crop',
                rating: 4.6, reviews: 189, location: 'شارع أحمد زبانة، حي 20 أوت',
                phone: '213550000012', lat: 33.3595, lng: 6.8670,
                description: 'مطعم متخصص في المأكولات البحرية الطازجة. أسماك، جمبري، وكلمار بطرق تحضير متنوعة.',
                hours: { 'السبت': '11:00 - 22:00', 'الأحد': '11:00 - 22:00', 'الإثنين': '11:00 - 22:00', 'الثلاثاء': '11:00 - 22:00', 'الأربعاء': '11:00 - 22:00', 'الخميس': '11:00 - 22:00', 'الجمعة': '12:00 - 22:00' },
                featured: true, status: 'active'
            }
        ];

        const testimonials = [
            { id: 1, name: 'أحمد بن علي', role: 'زائر من وهران', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', rating: 5, text: 'Souf غيّر طريقة تسوقي في الوادي. وجدت أفضل المطاعم والمحلات بسهولة. التصميم رائع والمعلومات دقيقة جداً.' },
            { id: 2, name: 'فاطمة الزهراء', role: 'ساكنة الوادي', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face', rating: 5, text: 'أفضل منصة للتسوق المحلي! ساعدتني في اكتشاف محلات جديدة في المدينة. خاصة ميزة التواصل عبر واتساب ممتازة.' },
            { id: 3, name: 'كريم بوعلام', role: 'صاحب متجر إلكترونيات', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', rating: 4, text: 'سجلت محلي على Souf وزاد عدد العملاء بشكل ملحوظ. المنصة سهلة الاستخدام وتوفر رؤية حقيقية لعملي.' }
        ];

        const storeReviews = [
            { id: 1, storeId: 1, name: 'محمد سعيد', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face', rating: 5, date: '2026-06-15', text: 'خدمة ممتازة ومنتجات عالية الجودة. سأعود بالتأكيد!' },
            { id: 2, storeId: 1, name: 'ليلى حمادي', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', rating: 4, date: '2026-06-10', text: 'تشكيلة رائعة من الأزياء. الأسعار معقولة والموظفين محترفون.' },
            { id: 3, storeId: 6, name: 'يوسف خالد', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', rating: 5, date: '2026-06-20', text: 'أفضل مطعم في الوادي! الكسكسي هنا لا يُضاهى. أجواء رائعة للعائلات.' }
        ];

        let currentFilter = 'all';
        let currentTheme = 'light';

        // ==================== INITIALIZATION ====================
        document.addEventListener('DOMContentLoaded', function() {
            renderCategories();
            renderStores();
            renderTestimonials();
            animateCounters();
            initScrollReveal();
            initNavbarScroll();
            initTheme();

            // Close search results when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.hero-search')) {
                    document.getElementById('searchResults').classList.remove('active');
                }
            });
        });

        // ==================== THEME ====================
        function initTheme() {
            const savedTheme = localStorage.getItem('souf-theme') || 'light';
            setTheme(savedTheme);
        }

        function toggleTheme() {
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        }

        function setTheme(theme) {
            currentTheme = theme;
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('souf-theme', theme);
        }

        // ==================== NAVIGATION ====================
        function initNavbarScroll() {
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }

        function toggleMobileMenu() {
            document.getElementById('navLinks').classList.toggle('active');
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
            }
            document.getElementById('navLinks').classList.remove('active');
        }

        // ==================== SCROLL REVEAL ====================
        function initScrollReveal() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        }

        // ==================== COUNTERS ====================
        function animateCounters() {
            animateCounter('statStores', stores.length, 1500);
            animateCounter('statUsers', 12500, 2000);
        }

        function animateCounter(id, target, duration) {
            const element = document.getElementById(id);
            if (!element) return;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current).toLocaleString('ar-EG');
            }, 16);
        }

        // ==================== CATEGORIES ====================
        function renderCategories() {
            const grid = document.getElementById('categoriesGrid');
            grid.innerHTML = categories.map(cat => `
                <div class="category-card reveal stagger-${Math.min(cat.count % 7 + 1, 7)}" onclick="filterStores('${cat.id}'); scrollToSection('featured')">
                    <div class="category-icon ${cat.color}">
                        <i class="fas ${cat.icon}"></i>
                    </div>
                    <div class="category-name">${cat.name}</div>
                    <div class="category-count">${cat.count} محل</div>
                </div>
            `).join('');
        }

        // ==================== STORES ====================
        function renderStores(filter = 'all') {
            const grid = document.getElementById('storesGrid');
            const filteredStores = filter === 'all' 
                ? stores 
                : stores.filter(s => s.category === filter);

            if (filteredStores.length === 0) {
                grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)"><i class="fas fa-search" style="font-size:3rem;margin-bottom:1rem;display:block"></i>لا توجد محلات في هذا التصنيف</div>';
                return;
            }

            grid.innerHTML = filteredStores.map((store, index) => `
                <div class="store-card reveal stagger-${(index % 6) + 1}" onclick="openStoreModal(${store.id})">
                    ${store.featured ? '<div class="store-card-badge premium-glow"><i class="fas fa-crown" style="margin-left:0.25rem"></i>مميز</div>' : ''}
                    <img class="store-card-image" src="${store.image}" alt="${store.name}" loading="lazy">
                    <div class="store-card-content">
                        <div class="store-card-header">
                            <div>
                                <div class="store-card-title">${store.name}</div>
                                <div class="store-card-category">${store.categoryName}</div>
                            </div>
                            <div class="store-card-rating">
                                <i class="fas fa-star"></i>
                                <span>${store.rating}</span>
                            </div>
                        </div>
                        <div class="store-card-location">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${store.location}</span>
                        </div>
                        <div class="store-card-actions" onclick="event.stopPropagation()">
                            <button class="store-card-btn whatsapp" onclick="openWhatsApp('${store.phone}')">
                                <i class="fab fa-whatsapp"></i>
                                واتساب
                            </button>
                            <button class="store-card-btn map" onclick="openMap(${store.lat}, ${store.lng}, '${store.name}')">
                                <i class="fas fa-map"></i>
                                الخريطة
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');

            // Re-init reveal for new elements
            setTimeout(() => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) entry.target.classList.add('visible');
                    });
                }, { threshold: 0.1 });
                document.querySelectorAll('#storesGrid .reveal').forEach(el => observer.observe(el));
            }, 100);
        }

        function filterStores(category) {
            currentFilter = category;

            // Update tabs
            document.querySelectorAll('.filter-tab').forEach(tab => {
                tab.classList.toggle('active', tab.dataset.category === category);
            });

            // Show loading skeleton briefly
            const grid = document.getElementById('storesGrid');
            grid.innerHTML = Array(6).fill(0).map(() => `
                <div class="store-skeleton">
                    <div class="store-skeleton-image skeleton"></div>
                    <div class="store-skeleton-content">
                        <div class="store-skeleton-title skeleton"></div>
                        <div class="store-skeleton-line skeleton"></div>
                        <div class="store-skeleton-actions">
                            <div class="store-skeleton-btn skeleton"></div>
                            <div class="store-skeleton-btn skeleton"></div>
                        </div>
                    </div>
                </div>
            `).join('');

            setTimeout(() => renderStores(category), 400);
        }

        // ==================== SEARCH ====================
        function handleSearch(query) {
            const resultsContainer = document.getElementById('searchResults');

            if (!query || query.length < 2) {
                resultsContainer.classList.remove('active');
                return;
            }

            const normalizedQuery = query.toLowerCase();
            const results = stores.filter(store => 
                store.name.toLowerCase().includes(normalizedQuery) ||
                store.categoryName.includes(query) ||
                store.location.includes(query)
            ).slice(0, 6);

            if (results.length === 0) {
                resultsContainer.innerHTML = '<div style="padding:1.5rem;text-align:center;color:var(--text-muted)">لا توجد نتائج</div>';
            } else {
                resultsContainer.innerHTML = results.map(store => `
                    <div class="search-result-item" onclick="openStoreModal(${store.id}); document.getElementById('searchResults').classList.remove('active');">
                        <img class="search-result-image" src="${store.logo}" alt="${store.name}">
                        <div class="search-result-info">
                            <h4>${store.name}</h4>
                            <p>${store.location}</p>
                        </div>
                        <span class="search-result-category">${store.categoryName}</span>
                    </div>
                `).join('');
            }

            resultsContainer.classList.add('active');
        }

        function showSearchResults() {
            const query = document.getElementById('heroSearch').value;
            if (query.length >= 2) {
                document.getElementById('searchResults').classList.add('active');
            }
        }

        function performSearch() {
            const query = document.getElementById('heroSearch').value;
            if (query) {
                scrollToSection('featured');
                // Filter stores based on search
                const filtered = stores.filter(s => 
                    s.name.toLowerCase().includes(query.toLowerCase()) ||
                    s.categoryName.includes(query)
                );
                if (filtered.length > 0) {
                    renderStores('all');
                    showToast(`تم العثور على ${filtered.length} نتيجة`, 'success');
                } else {
                    showToast('لم يتم العثور على نتائج', 'info');
                }
            }
        }

        // ==================== STORE MODAL ====================
        function openStoreModal(storeId) {
            const store = stores.find(s => s.id === storeId);
            if (!store) return;

            const reviews = storeReviews.filter(r => r.storeId === storeId);
            const today = new Date().toLocaleDateString('ar-DZ', { weekday: 'long' });

            document.getElementById('modalImage').src = store.image;
            document.getElementById('modalBody').innerHTML = `
                <img class="modal-store-logo" src="${store.logo}" alt="${store.name}">
                <h2 class="modal-store-name">${store.name}</h2>
                <div class="modal-store-meta">
                    <span><i class="fas fa-tag"></i> ${store.categoryName}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${store.location}</span>
                    <span><i class="fas fa-phone"></i> +${store.phone}</span>
                </div>
                <div class="modal-rating">
                    <div class="modal-rating-stars">
                        ${Array(5).fill(0).map((_, i) => `<i class="fas fa-star${i < Math.floor(store.rating) ? '' : '-half-alt'}"></i>`).join('')}
                    </div>
                    <span class="modal-rating-text">${store.rating}</span>
                    <span class="modal-rating-count">(${store.reviews} تقييم)</span>
                </div>

                <div class="modal-section">
                    <h3 class="modal-section-title"><i class="fas fa-info-circle"></i> نبذة عن المحل</h3>
                    <p class="modal-description">${store.description}</p>
                </div>

                <div class="modal-section">
                    <h3 class="modal-section-title"><i class="fas fa-clock"></i> ساعات العمل</h3>
                    <table class="hours-table">
                        ${Object.entries(store.hours).map(([day, hours]) => `
                            <tr>
                                <td>${day}</td>
                                <td class="${day === today ? (hours !== 'مغلق' ? 'open-now' : 'closed-now') : ''}">${hours} ${day === today ? '<span style="font-size:0.75rem;margin-right:0.5rem">(اليوم)</span>' : ''}</td>
                            </tr>
                        `).join('')}
                    </table>
                </div>

                <div class="modal-section">
                    <h3 class="modal-section-title"><i class="fas fa-map-marked-alt"></i> الموقع على الخريطة</h3>
                    <div class="modal-map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${store.lng}!3d${store.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDIxJzI0LjUiTiA2wrA1MSc0OS4zIkU!5e0!3m2!1sen!2sdz!4v1" 
                            allowfullscreen="" 
                            loading="lazy">
                        </iframe>
                    </div>
                </div>

                ${reviews.length > 0 ? `
                <div class="modal-section">
                    <h3 class="modal-section-title"><i class="fas fa-comments"></i> التقييمات (${reviews.length})</h3>
                    ${reviews.map(review => `
                        <div class="review-item">
                            <div class="review-header">
                                <div class="review-author">
                                    <img class="review-avatar" src="${review.avatar}" alt="${review.name}">
                                    <div>
                                        <div class="review-name">${review.name}</div>
                                        <div class="review-date">${review.date}</div>
                                    </div>
                                </div>
                                <div class="review-stars">
                                    ${Array(5).fill(0).map((_, i) => `<i class="fas fa-star${i < review.rating ? '' : (i < review.rating + 0.5 ? '-half-alt' : '')}"></i>`).join('')}
                                </div>
                            </div>
                            <p class="review-text">${review.text}</p>
                        </div>
                    `).join('')}
                </div>
                ` : ''}

                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="openWhatsApp('${store.phone}')">
                        <i class="fab fa-whatsapp"></i>
                        تواصل عبر واتساب
                    </button>
                    <button class="btn btn-secondary" onclick="openMap(${store.lat}, ${store.lng}, '${store.name}')">
                        <i class="fas fa-directions"></i>
                        الاتجاهات
                    </button>
                </div>
            `;

            document.getElementById('storeModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeStoreModal() {
            document.getElementById('storeModal').classList.remove('active');
            document.body.style.overflow = '';
        }

        function closeModal(event) {
            if (event.target === event.currentTarget) {
                closeStoreModal();
            }
        }

        // ==================== TESTIMONIALS ====================
        function renderTestimonials() {
            const grid = document.getElementById('testimonialsGrid');
            grid.innerHTML = testimonials.map((t, i) => `
                <div class="testimonial-card reveal stagger-${i + 1}">
                    <div class="testimonial-stars">
                        ${Array(5).fill(0).map((_, j) => `<i class="fas fa-star${j < t.rating ? '' : (j < t.rating + 0.5 ? '-half-alt' : '')}"></i>`).join('')}
                    </div>
                    <p class="testimonial-text">"${t.text}"</p>
                    <div class="testimonial-author">
                        <img class="testimonial-avatar" src="${t.avatar}" alt="${t.name}">
                        <div>
                            <div class="testimonial-name">${t.name}</div>
                            <div class="testimonial-role">${t.role}</div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // ==================== UTILITIES ====================
        function openWhatsApp(phone) {
            const cleanPhone = phone.replace(/\D/g, '');
            window.open(`https://wa.me/${cleanPhone}`, '_blank');
        }

        function openMap(lat, lng, name) {
            const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${encodeURIComponent(name)}`;
            window.open(url, '_blank');
        }

        function showToast(message, type = 'info') {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;

            const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
            const colors = { success: '#43e97b', error: '#ef4444', info: '#4facfe' };

            toast.innerHTML = `
                <i class="fas ${icons[type]}" style="color:${colors[type]};font-size:1.25rem"></i>
                <span style="font-weight:500">${message}</span>
            `;

            container.appendChild(toast);

            setTimeout(() => {
                toast.style.animation = 'slideOutLeft 0.4s ease-out forwards';
                setTimeout(() => toast.remove(), 400);
            }, 3000);
        }

        // ==================== ADMIN PANEL ====================
        function openAdminPanel() {
            document.getElementById('adminPanel').classList.add('active');
            document.body.style.overflow = 'hidden';
            showAdminTab('dashboard');
        }

        function closeAdminPanel() {
            document.getElementById('adminPanel').classList.remove('active');
            document.body.style.overflow = '';
        }

        function showAdminTab(tab) {
            // Update nav
            document.querySelectorAll('.admin-nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.textContent.trim().includes(getTabLabel(tab))) {
                    link.classList.add('active');
                }
            });

            const main = document.getElementById('adminMain');

            switch(tab) {
                case 'dashboard':
                    main.innerHTML = renderAdminDashboard();
                    break;
                case 'stores':
                    main.innerHTML = renderAdminStores();
                    break;
                case 'categories':
                    main.innerHTML = renderAdminCategories();
                    break;
                case 'reviews':
                    main.innerHTML = renderAdminReviews();
                    break;
                case 'users':
                    main.innerHTML = renderAdminUsers();
                    break;
                case 'settings':
                    main.innerHTML = renderAdminSettings();
                    break;
            }
        }

        function getTabLabel(tab) {
            const labels = { dashboard: 'لوحة التحكم', stores: 'المحلات', categories: 'التصنيفات', reviews: 'التقييمات', users: 'المستخدمين', settings: 'الإعدادات' };
            return labels[tab] || tab;
        }

        function renderAdminDashboard() {
            const activeStores = stores.filter(s => s.status === 'active').length;
            const featuredStores = stores.filter(s => s.featured).length;
            const totalReviews = storeReviews.length + stores.reduce((a, s) => a + s.reviews, 0);

            return `
                <div class="admin-header">
                    <h1>لوحة التحكم</h1>
                    <button class="btn btn-primary" onclick="showToast('سيتم إضافة محل جديد', 'info')">
                        <i class="fas fa-plus"></i>
                        إضافة محل
                    </button>
                </div>
                <div class="admin-stats-grid">
                    <div class="admin-stat-card">
                        <div class="admin-stat-icon blue"><i class="fas fa-store"></i></div>
                        <div class="admin-stat-value">${stores.length}</div>
                        <div class="admin-stat-label">إجمالي المحلات</div>
                    </div>
                    <div class="admin-stat-card">
                        <div class="admin-stat-icon green"><i class="fas fa-check-circle"></i></div>
                        <div class="admin-stat-value">${activeStores}</div>
                        <div class="admin-stat-label">محلات نشطة</div>
                    </div>
                    <div class="admin-stat-icon orange"><i class="fas fa-crown"></i></div>
                        <div class="admin-stat-value">${featuredStores}</div>
                        <div class="admin-stat-label">محلات مميزة</div>
                    </div>
                    <div class="admin-stat-card">
                        <div class="admin-stat-icon purple"><i class="fas fa-star"></i></div>
                        <div class="admin-stat-value">${totalReviews}</div>
                        <div class="admin-stat-label">إجمالي التقييمات</div>
                    </div>
                </div>
                <div class="admin-table-container">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>المحل</th>
                                <th>التصنيف</th>
                                <th>التقييم</th>
                                <th>الحالة</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${stores.slice(0, 5).map(store => `
                                <tr>
                                    <td style="font-weight:600">${store.name}</td>
                                    <td>${store.categoryName}</td>
                                    <td><span style="color:var(--sunset-gold)"><i class="fas fa-star"></i> ${store.rating}</span></td>
                                    <td><span class="admin-status ${store.status}"><span class="admin-status-dot"></span>${store.status === 'active' ? 'نشط' : 'غير نشط'}</span></td>
                                    <td>
                                        <button class="admin-btn-sm admin-btn-edit" onclick="showToast('سيتم فتح تعديل المحل', 'info')">تعديل</button>
                                        <button class="admin-btn-sm admin-btn-delete" onclick="showToast('سيتم حذف المحل', 'error')">حذف</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        function renderAdminStores() {
            return `
                <div class="admin-header">
                    <h1>إدارة المحلات</h1>
                    <button class="btn btn-primary" onclick="showToast('سيتم إضافة محل جديد', 'info')">
                        <i class="fas fa-plus"></i>
                        إضافة محل
                    </button>
                </div>
                <div class="admin-table-container">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>المحل</th>
                                <th>التصنيف</th>
                                <th>الموقع</th>
                                <th>التقييم</th>
                                <th>الحالة</th>
                                <th>مميز</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${stores.map(store => `
                                <tr>
                                    <td style="font-weight:600">${store.name}</td>
                                    <td>${store.categoryName}</td>
                                    <td>${store.location}</td>
                                    <td><span style="color:var(--sunset-gold)"><i class="fas fa-star"></i> ${store.rating}</span></td>
                                    <td><span class="admin-status ${store.status}"><span class="admin-status-dot"></span>${store.status === 'active' ? 'نشط' : 'غير نشط'}</span></td>
                                    <td>${store.featured ? '<i class="fas fa-crown" style="color:var(--sunset-gold)"></i>' : '-'}</td>
                                    <td>
                                        <button class="admin-btn-sm admin-btn-edit" onclick="showToast('سيتم فتح تعديل المحل', 'info')">تعديل</button>
                                        <button class="admin-btn-sm admin-btn-delete" onclick="showToast('سيتم حذف المحل', 'error')">حذف</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        function renderAdminCategories() {
            return `
                <div class="admin-header">
                    <h1>إدارة التصنيفات</h1>
                    <button class="btn btn-primary" onclick="showToast('سيتم إضافة تصنيف جديد', 'info')">
                        <i class="fas fa-plus"></i>
                        إضافة تصنيف
                    </button>
                </div>
                <div class="admin-table-container">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>التصنيف</th>
                                <th>الأيقونة</th>
                                <th>عدد المحلات</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${categories.map(cat => `
                                <tr>
                                    <td style="font-weight:600">${cat.name}</td>
                                    <td><i class="fas ${cat.icon}" style="color:var(--sunset-orange)"></i></td>
                                    <td>${cat.count}</td>
                                    <td>
                                        <button class="admin-btn-sm admin-btn-edit" onclick="showToast('سيتم فتح تعديل التصنيف', 'info')">تعديل</button>
                                        <button class="admin-btn-sm admin-btn-delete" onclick="showToast('سيتم حذف التصنيف', 'error')">حذف</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        function renderAdminReviews() {
            return `
                <div class="admin-header">
                    <h1>إدارة التقييمات</h1>
                </div>
                <div class="admin-table-container">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>المستخدم</th>
                                <th>المحل</th>
                                <th>التقييم</th>
                                <th>التعليق</th>
                                <th>التاريخ</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${storeReviews.map(review => {
                                const store = stores.find(s => s.id === review.storeId);
                                return `
                                    <tr>
                                        <td style="font-weight:600">${review.name}</td>
                                        <td>${store ? store.name : 'غير معروف'}</td>
                                        <td><span style="color:var(--sunset-gold)"><i class="fas fa-star"></i> ${review.rating}</span></td>
                                        <td>${review.text.substring(0, 50)}...</td>
                                        <td>${review.date}</td>
                                        <td>
                                            <button class="admin-btn-sm admin-btn-edit" onclick="showToast('سيتم فتح تعديل التقييم', 'info')">تعديل</button>
                                            <button class="admin-btn-sm admin-btn-delete" onclick="showToast('سيتم حذف التقييم', 'error')">حذف</button>
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        function renderAdminUsers() {
            return `
                <div class="admin-header">
                    <h1>إدارة المستخدمين</h1>
                </div>
                <div class="admin-stats-grid">
                    <div class="admin-stat-card">
                        <div class="admin-stat-icon blue"><i class="fas fa-users"></i></div>
                        <div class="admin-stat-value">1,247</div>
                        <div class="admin-stat-label">إجمالي المستخدمين</div>
                    </div>
                    <div class="admin-stat-card">
                        <div class="admin-stat-icon green"><i class="fas fa-user-check"></i></div>
                        <div class="admin-stat-value">892</div>
                        <div class="admin-stat-label">مستخدمين نشطين</div>
                    </div>
                    <div class="admin-stat-card">
                        <div class="admin-stat-icon orange"><i class="fas fa-store"></i></div>
                        <div class="admin-stat-value">${stores.length}</div>
                        <div class="admin-stat-label">أصحاب محلات</div>
                    </div>
                    <div class="admin-stat-card">
                        <div class="admin-stat-icon purple"><i class="fas fa-user-plus"></i></div>
                        <div class="admin-stat-value">156</div>
                        <div class="admin-stat-label">جديد هذا الشهر</div>
                    </div>
                </div>
                <div class="admin-table-container">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>المستخدم</th>
                                <th>البريد الإلكتروني</th>
                                <th>النوع</th>
                                <th>تاريخ التسجيل</th>
                                <th>الحالة</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="font-weight:600">أحمد بن علي</td>
                                <td>ahmed@example.com</td>
                                <td>مستخدم</td>
                                <td>2026-01-15</td>
                                <td><span class="admin-status active"><span class="admin-status-dot"></span>نشط</span></td>
                                <td>
                                    <button class="admin-btn-sm admin-btn-edit" onclick="showToast('سيتم فتح تعديل المستخدم', 'info')">تعديل</button>
                                    <button class="admin-btn-sm admin-btn-delete" onclick="showToast('سيتم حظر المستخدم', 'error')">حظر</button>
                                </td>
                            </tr>
                            <tr>
                                <td style="font-weight:600">فاطمة الزهراء</td>
                                <td>fatima@example.com</td>
                                <td>مستخدم</td>
                                <td>2026-02-20</td>
                                <td><span class="admin-status active"><span class="admin-status-dot"></span>نشط</span></td>
                                <td>
                                    <button class="admin-btn-sm admin-btn-edit" onclick="showToast('سيتم فتح تعديل المستخدم', 'info')">تعديل</button>
                                    <button class="admin-btn-sm admin-btn-delete" onclick="showToast('سيتم حظر المستخدم', 'error')">حظر</button>
                                </td>
                            </tr>
                            <tr>
                                <td style="font-weight:600">كريم بوعلام</td>
                                <td>karim@example.com</td>
                                <td>صاحب محل</td>
                                <td>2026-03-10</td>
                                <td><span class="admin-status active"><span class="admin-status-dot"></span>نشط</span></td>
                                <td>
                                    <button class="admin-btn-sm admin-btn-edit" onclick="showToast('سيتم فتح تعديل المستخدم', 'info')">تعديل</button>
                                    <button class="admin-btn-sm admin-btn-delete" onclick="showToast('سيتم حظر المستخدم', 'error')">حظر</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        }

        function renderAdminSettings() {
            return `
                <div class="admin-header">
                    <h1>إعدادات المنصة</h1>
                </div>
                <div class="admin-stats-grid">
                    <div class="admin-stat-card" style="cursor:pointer" onclick="showToast('سيتم فتح إعدادات الموقع', 'info')">
                        <div class="admin-stat-icon blue"><i class="fas fa-globe"></i></div>
                        <div class="admin-stat-value" style="font-size:1.25rem">إعدادات الموقع</div>
                        <div class="admin-stat-label">اسم الموقع، الوصف، اللغة</div>
                    </div>
                    <div class="admin-stat-card" style="cursor:pointer" onclick="showToast('سيتم فتح إعدادات SEO', 'info')">
                        <div class="admin-stat-icon green"><i class="fas fa-search"></i></div>
                        <div class="admin-stat-value" style="font-size:1.25rem">SEO</div>
                        <div class="admin-stat-label">الكلمات المفتاحية، الوصف</div>
                    </div>
                    <div class="admin-stat-card" style="cursor:pointer" onclick="showToast('سيتم فتح إعدادات الدفع', 'info')">
                        <div class="admin-stat-icon orange"><i class="fas fa-credit-card"></i></div>
                        <div class="admin-stat-value" style="font-size:1.25rem">المدفوعات</div>
                        <div class="admin-stat-label">الاشتراكات، الإعلانات</div>
                    </div>
                    <div class="admin-stat-card" style="cursor:pointer" onclick="showToast('سيتم فتح إعدادات الإشعارات', 'info')">
                        <div class="admin-stat-icon purple"><i class="fas fa-bell"></i></div>
                        <div class="admin-stat-value" style="font-size:1.25rem">الإشعارات</div>
                        <div class="admin-stat-label">البريد، الرسائل</div>
                    </div>
                </div>
            `;
        }

        // ==================== KEYBOARD SHORTCUTS ====================
        document.addEventListener('keydown', function(e) {
            // ESC to close modals
            if (e.key === 'Escape') {
                closeStoreModal();
                closeAdminPanel();
            }
            // Ctrl/Cmd + K to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                document.getElementById('heroSearch').focus();
            }
        });
    