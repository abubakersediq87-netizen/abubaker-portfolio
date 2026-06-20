export type Language = 'en' | 'ps' | 'fa'

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    'nav.brand': 'Badree 313',
    
    // Hero Section
    'hero.available': 'Available for work',
    'hero.experience': '3+ Years Experience',
    'hero.quality': 'Premium Quality',
    'hero.hi': "Hi, I'm",
    'hero.name': 'Abubaker Sediq',
    'hero.title': 'Product Creator & Innovator',
    'hero.description': 'Welcome to my digital space where creativity meets innovation. I\'m passionate about creating products that make a difference and sharing my journey with the world.',
    'hero.products': 'View My Products',
    'hero.contact': 'Get In Touch',
    
    // Stats Section
    'stats.title': 'Impressive Results',
    'stats.subtitle': 'Numbers that speak for themselves - delivering excellence across all projects',
    'stats.projects': 'Projects Completed',
    'stats.clients': 'Happy Clients',
    'stats.experience': 'Years Experience',
    'stats.products': 'Products Launched',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Passionate developer with a love for creating innovative solutions',
    'about.story': 'My Story',
    'about.text1': 'With over 3 years of experience in software development, I\'ve had the privilege of working on diverse projects ranging from web applications to mobile apps and everything in between.',
    'about.text2': 'My journey started with a curiosity about how things work, which led me to discover the world of programming. Since then, I\'ve been constantly learning and evolving, staying up-to-date with the latest technologies and best practices.',
    'about.text3': 'I believe in the power of technology to solve real problems and improve people\'s lives. Whether it\'s building a user-friendly interface or architecting a robust backend system, I approach each project with dedication and attention to detail.',
    'about.contact': 'Contact Me',
    'about.bring': 'What I Bring',
    'about.cleanCode': 'Clean Code',
    'about.cleanCodeDesc': 'Writing maintainable, scalable, and efficient code',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'Always exploring new technologies and creative solutions',
    'about.collaboration': 'Collaboration',
    'about.collaborationDesc': 'Working effectively with teams and stakeholders',
    'about.performance': 'Performance',
    'about.performanceDesc': 'Optimizing for speed, efficiency, and user experience',
    
    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'Technologies and tools I work with to bring ideas to life',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.tools': 'Tools & Technologies',
    'skills.techTitle': 'Technologies I Use',
    
    // Products Section
    'products.title': 'My Management Systems',
    'products.subtitle': 'Professional management systems usable in various fields',
    'products.all': 'All Products',
    'products.web': 'Web Applications',
    'products.mobile': 'Mobile Applications',
    'products.saas': 'SaaS Systems',
    'products.tools': 'Development Tools',
    'products.hospital': 'Medical Management System',
    'products.school': 'School Management System',
    'products.course': 'Course Management System',
    'products.university': 'University Management System',
    'products.agriculture': 'Agriculture Management System',
    'products.tax': 'Tax Accounting System',
    'products.tailor': 'Tailor Management System',
    'products.loan': 'Loan Management System',
    'products.hotel': 'Hotel & Restaurant Management System',
    'products.inventory': 'Inventory Management System',
    'products.hr': 'HR Management System',
    'products.ecommerce': 'E-commerce Management System',
    'products.more': 'More Information',
    'products.watch': 'Watch Video',
    'products.stats.customers': 'Happy Customers',
    'products.stats.downloads': 'Downloads',
    'products.stats.rating': 'Average Rating',
    'products.stats.countries': 'Countries',
    
    // Pricing Section
    'pricing.title': 'Flexible Pricing Plans',
    'pricing.starter': 'Starter',
    'pricing.professional': 'Professional',
    'pricing.enterprise': 'Enterprise',
    'pricing.month': 'per month',
    'pricing.popular': 'Most Popular',
    'pricing.getStarted': 'Get Started',
    'pricing.contact': 'Contact Sales',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Do you offer a free trial?',
    'faq.a1': 'Yes, we offer a 14-day free trial for all our premium plans. No credit card required to start your trial.',
    'faq.q2': 'Can I change my plan later?',
    'faq.a2': 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any differences.',
    'faq.q3': 'What payment methods do you accept?',
    'faq.a3': 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans.',
    'faq.q4': 'Do you offer discounts for non-profits?',
    'faq.a4': 'Yes, we offer a 25% discount for registered non-profit organizations. Contact our sales team with your documentation to get set up.',
    
    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonial.1.text': 'Their systems are well-organized and modern. Everything is explained clearly and simply, which makes the work much easier.',
    'testimonial.1.name': 'Ahmad Rahimi',
    'testimonial.1.title': 'Customer, Mazar-i-Sharif',
    'testimonial.2.text': 'I\'m very satisfied with their services. The team is professional and delivers everything on time. Their support is truly admirable.',
    'testimonial.2.name': 'Javid Haidri',
    'testimonial.2.title': 'Business Man, Herat',
    'testimonial.3.text': 'I\'ve used their services several times, and every time the quality is high and the staff are friendly. I highly recommend this company to others.',
    'testimonial.3.name': 'Fareed Sediqi',
    'testimonial.3.title': 'University Manager',
    
    // CTA Section
    'cta.title': 'Ready to bring your idea to life?',
    'cta.text': 'Let\'s work together to create something amazing. I\'m always excited to take on new challenges and help bring innovative ideas to reality.',
    'cta.button': 'Start a Project',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Have a project in mind or just want to chat? I\'d love to hear from you.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.connect': 'Let\'s Connect',
    'contact.text': 'I\'m always open to discussing new opportunities, creative projects, or just having a friendly chat about technology and innovation.',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.locationLabel': 'Location',
    'contact.whyTitle': 'Why Work With Me?',
    'contact.why1': 'Fast response times and clear communication',
    'contact.why2': 'Quality-focused development with attention to detail',
    'contact.why3': 'Collaborative approach to problem-solving',
    'contact.why4': 'Ongoing support and maintenance',
    
    // Footer
    'footer.text': 'Building exceptional digital experiences with passion and precision.',
    'footer.links': 'Quick Links',
    'footer.services': 'Services',
    'footer.webDev': 'Web Development',
    'footer.mobileDev': 'Mobile App Development',
    'footer.uiux': 'UI/UX Design',
    'footer.consulting': 'Consulting',
    'footer.writing': 'Technical Writing',
    'footer.copyright': '© 2025 Abubaker Sediq. All rights reserved.',
    'footer.made': 'Made with',
    
    // Modal
    'modal.close': 'Close',
    'modal.contact': 'Contact Us',
    'modal.features': 'System Features',
    'modal.more': 'More Information',
    
    // Product Detailed Translations
    'product.hospital.title': 'Hospital Management System',
    'product.hospital.desc': 'A complete system for managing patient registration, treatment, and other hospital activities.',
    'product.school.title': 'School Management System',
    'product.school.desc': 'A complete system for managing students, teachers, and other school activities.',
    'product.course.title': 'Course Management System',
    'product.course.desc': 'System for managing online and offline courses, student registration, and assessment.',
    'product.university.title': 'University Management System',
    'product.university.desc': 'A complete management system for all aspects of the university that manages students, faculty, and finances.',
    'product.agriculture.title': 'Agriculture Management System',
    'product.agriculture.desc': 'A professional system for managing agricultural activities, products, and finances.',
    'product.tax.title': 'Tax Accounting System',
    'product.tax.desc': 'A system for calculating, filing, and tracking personal and business taxes.',
    'product.tailor.title': 'Tailor Management System',
    'product.tailor.desc': 'A system for managing a tailoring factory or shop that manages customers, products, and finances.',
    'product.loan.title': 'Loan Management System',
    'product.loan.desc': 'A system for managing, tracking, and collecting bank or non-bank loans.',
    'product.hotel.title': 'Hotel Management System',
    'product.hotel.desc': 'Complete system for managing all hotel and restaurant activities.',
    'product.inventory.title': 'Inventory Management System',
    'product.inventory.desc': 'Complete system for tracking and managing inventory across multiple locations.',
    'product.hr.title': 'HR Management System',
    'product.hr.desc': 'Complete system for managing employee records, payroll, and HR operations.',
    'product.ecommerce.title': 'E-commerce Management System',
    'product.ecommerce.desc': 'Complete system for managing online stores, products, and customer orders.',
    
    // Category Translations
    'category.web': 'Web Applications',
    'category.mobile': 'Mobile Applications',
    'category.saas': 'SaaS Systems',
    'category.tools': 'Tools',
    
    // Product Stats Translations
    'stat.customers': 'Happy Customers',
    'stat.downloads': 'Downloads',
    'stat.rating': 'Average Rating',
    'stat.countries': 'Countries',
  },
  
  ps: {
    // Navigation
    'nav.home': 'کور',
    'nav.about': 'زما په اړه',
    'nav.skills': 'مهارتونه',
    'nav.products': 'محصولات',
    'nav.contact': 'اړیکه',
    'nav.brand': 'بدري ۳۱۳',
    
    // Hero Section
    'hero.available': 'د کار لپاره شتون لري',
    'hero.experience': '۳+ کاله تجربه',
    'hero.quality': 'لوړ کیفیت',
    'hero.hi': 'سلام، زه یم',
    'hero.name': 'ابوبکر صدیق',
    'hero.title': 'د محصولاتو جوړونکی او نوښتګر',
    'hero.description': 'زما ډیجیټل ځای ته ښه راغلاست چیرې چې خلاقیت له نوښت سره ملاقات کوي. زه د هغو محصولاتو جوړولو ته لیواله یم چې توپیر رامینځته کوي او خپل سفر له نړۍ سره شریکوم.',
    'hero.products': 'زما محصولات وګورئ',
    'hero.contact': 'اړیکه ونیسئ',
    
    // Stats Section
    'stats.title': 'په زړه پورې پایلې',
    'stats.subtitle': 'هغه شمیرې چې پخپله خبرې کوي - په ټولو پروژو کې غوره والی',
    'stats.projects': 'پای ته رسیدلې پروژې',
    'stats.clients': 'خوښ پیرودونکي',
    'stats.experience': 'کاله تجربه',
    'stats.products': 'پیل شوي محصولات',
    
    // About Section
    'about.title': 'زما په اړه',
    'about.subtitle': 'یو لیواله پراختیا ورکوونکی د نوښتګرو حل لارو جوړولو سره مینه لري',
    'about.story': 'زما کیسه',
    'about.text1': 'د سافټویر پراختیا کې د ۳ کلونو څخه زیاتې تجربې سره، ما د ویب ایپسونو څخه تر موبایل ایپسونو پورې په مختلفو پروژو کار کولو امتیاز درلود.',
    'about.text2': 'زما سفر د دې په اړه د تجسس سره پیل شو چې شیان څنګه کار کوي، کوم چې ما د پروګرامینګ نړۍ کشف کولو ته لاره هواره کړه. له هغه وخت راهیسې، زه په دوامداره توګه زده کوم او وده کوم، د وروستي ټیکنالوژیو او غوره کړنو سره تازه پاتې کیږم.',
    'about.text3': 'زه د ټیکنالوژۍ قدرت باور لرم چې ریښتیني ستونزې حل کړي او د خلکو ژوند ښه کړي. که دا د کاروونکي دوستانه انٹرفیس جوړول وي یا د پیاوړي بیک انډ سیسټم جوړول وي، زه هرې پروژې ته د وقف او تفصیل سره پاملرنه کوم.',
    'about.contact': 'زما سره اړیکه ونیسئ',
    'about.bring': 'زه څه راوړم',
    'about.cleanCode': 'پاک کوډ',
    'about.cleanCodeDesc': 'د ساتلو وړ، د اندازې وړ، او اغیزمن کوډ لیکل',
    'about.innovation': 'نوښت',
    'about.innovationDesc': 'تل د نویو ټیکنالوژیو او تخلیقي حلونو سپړنه',
    'about.collaboration': 'همکاري',
    'about.collaborationDesc': 'د ټیمونو او شریکانو سره په اغیزمنه توګه کار کول',
    'about.performance': 'فعالیت',
    'about.performanceDesc': 'د سرعت، موثریت، او کاروونکي تجربې لپاره اصلاح کول',
    
    // Skills Section
    'skills.title': 'مهارتونه او تخصص',
    'skills.subtitle': 'هغه ټیکنالوژۍ او وسایل چې زه یې د نظریاتو د ژوندي کولو لپاره کاروم',
    'skills.frontend': 'فرنټ انډ پراختیا',
    'skills.backend': 'بیک انډ پراختیا',
    'skills.tools': 'وسایل او ټیکنالوژۍ',
    'skills.techTitle': 'هغه ټیکنالوژۍ چې زه یې کاروم',
    
    // Products Section
    'products.title': 'زما مدیریتي سیسټمونه',
    'products.subtitle': 'په مختلفو برخو کې د کارولو وړ مسلکي مدیریتي سیسټمونه',
    'products.all': 'ټول محصولات',
    'products.web': 'ویب ایپلیکیشنونه',
    'products.mobile': 'موبایل ایپلیکیشنونه',
    'products.saas': 'SaaS سیسټمونه',
    'products.tools': 'د پراختیا وسایل',
    'products.hospital': 'طبي مدیریت سیسټم',
    'products.school': 'د ښوونځي مدیریت سیسټم',
    'products.course': 'د کورس مدیریت سیسټم',
    'products.university': 'د پوهنتون مدیریت سیسټم',
    'products.agriculture': 'د کرنې مدیریت سیسټم',
    'products.tax': 'د مالیې محاسبه سیسټم',
    'products.tailor': 'د خیاطۍ مدیریت سیسټم',
    'products.loan': 'د پور مدیریت سیسټم',
    'products.hotel': 'د هوټل او رستورانت مدیریت سیسټم',
    'products.inventory': 'د موجوداتو مدیریت سیسټم',
    'products.hr': 'د HR مدیریت سیسټم',
    'products.ecommerce': 'د ای کامرس مدیریت سیسټم',
    'products.more': 'نور معلومات',
    'products.watch': 'ویډیو وګورئ',
    'products.stats.customers': 'خوښ پیرودونکي',
    'products.stats.downloads': 'ډاونلوډونه',
    'products.stats.rating': 'اوسط درجه بندي',
    'products.stats.countries': 'هیوادونه',
    
    // Pricing Section
    'pricing.title': 'د انعطاف وړ نرخ پلانونه',
    'pricing.starter': 'پیل کوونکی',
    'pricing.professional': 'مسلکي',
    'pricing.enterprise': 'شرکتي',
    'pricing.month': 'په میاشت کې',
    'pricing.popular': 'ډیر مشهور',
    'pricing.getStarted': 'پیل وکړئ',
    'pricing.contact': 'د پلور اړیکه',
    
    // FAQ Section
    'faq.title': 'په مکرر ډول پوښتل شوي پوښتنې',
    'faq.q1': 'ایا تاسو وړیا ازموینه وړاندې کوئ؟',
    'faq.a1': 'هو، موږ د خپلو ټولو پریمیم پلانونو لپاره د ۱۴ ورځو وړیا ازموینه وړاندې کوو. د ازموینې پیل کولو لپاره هیڅ کریډیټ کارت ته اړتیا نشته.',
    'faq.q2': 'ایا زه کولی شم خپل پلان وروسته بدل کړم؟',
    'faq.a2': 'بالکل! تاسو کولی شئ خپل پلان په هر وخت کې لوړ یا ښکته کړئ. بدلونونه سمدلاسه پلي کیږي، او موږ به هر ډول توپیرونه په تناسب سره حساب کړو.',
    'faq.q3': 'تاسو د تادیې کومې طریقې منئ؟',
    'faq.a3': 'موږ ټول لوی کریډیټ کارتونه (ویزا، ماسټرکارډ، امریکن ایکسپریس)، پی پال، او د کلني پلانونو لپاره بانکي لیږدونې منو.',
    'faq.q4': 'ایا تاسو د غیر انتفاعي سازمانونو لپاره تخفیف وړاندې کوئ؟',
    'faq.a4': 'هو، موږ د راجستر شوي غیر انتفاعي سازمانونو لپاره ۲۵٪ تخفیف وړاندې کوو. د تنظیم کولو لپاره زموږ د پلور ټیم سره اړیکه ونیسئ.',
    
    // Testimonials
    'testimonials.title': 'زموږ پیرودونکي څه وايي',
    'testimonial.1.text': 'د دوی سیسټمونه ډیر منظم او عصري دي. هر څه په واضحه او ساده توګه تشریح شوي، چې کار خورا اسانه کوي.',
    'testimonial.1.name': 'احمد رحیمي',
    'testimonial.1.title': 'پیرودونکی، مزار شریف',
    'testimonial.2.text': 'زه د دوی له خدماتو ډیر خوښ یم. ټیم مسلکي دی او هر څه په وخت سره ترسره کوي. د دوی ملاتړ واقعیا د ستاینې وړ دی.',
    'testimonial.2.name': 'جاوید حیدري',
    'testimonial.2.title': 'سوداګر، هرات',
    'testimonial.3.text': 'ما څو ځله د دوی خدمات کارولي دي، او هر وخت کیفیت لوړ او کارمندان دوستانه وو. زه دا شرکت نورو ته په کلکه سپارښتنه کوم.',
    'testimonial.3.name': 'فرید صدیقي',
    'testimonial.3.title': 'د پوهنتون مدیر',
    
    // CTA Section
    'cta.title': 'ایا تاسو چمتو یاست چې خپل نظر ژوندی کړئ؟',
    'cta.text': 'راځئ چې یوځای کار وکړو ترڅو یو څه حیرانونکي جوړ کړو. زه تل لیواله یم چې نوي ننګونې ومنم او د نوښتګرو نظریاتو په واقعیت کې بدلولو کې مرسته وکړم.',
    'cta.button': 'پروژه پیل کړئ',
    
    // Contact Section
    'contact.title': 'اړیکه ونیسئ',
    'contact.subtitle': 'ایا تاسو په ذهن کې پروژه لرئ یا یوازې غواړئ خبرې وکړئ؟ زه به ستاسو اوریدلو ته لیواله یم.',
    'contact.name': 'نوم',
    'contact.email': 'بریښنالیک',
    'contact.subject': 'موضوع',
    'contact.message': 'پیغام',
    'contact.send': 'پیغام واستوئ',
    'contact.connect': 'راځئ چې وصل شو',
    'contact.text': 'زه تل د نویو فرصتونو، تخلیقي پروژو، یا یوازې د ټیکنالوژۍ او نوښت په اړه دوستانه خبرو اترو لپاره خلاص یم.',
    'contact.emailLabel': 'بریښنالیک',
    'contact.phoneLabel': 'تلیفون',
    'contact.locationLabel': 'ځای',
    'contact.whyTitle': 'ولې زما سره کار وکړئ؟',
    'contact.why1': 'چټک ځواب او روښانه اړیکه',
    'contact.why2': 'د کیفیت پر بنسټ پراختیا د تفصیل سره پاملرنه',
    'contact.why3': 'د ستونزو حل لپاره ګډه همکاريزه طریقه',
    'contact.why4': 'دوامداره ملاتړ او ساتنه',
    
    // Footer
    'footer.text': 'د لیوالتیا او دقیقیت سره د استثنایی ډیجیټل تجربو جوړول.',
    'footer.links': 'چټک لینکونه',
    'footer.services': 'خدمتونه',
    'footer.webDev': 'ویب پراختیا',
    'footer.mobileDev': 'موبایل ایپ پراختیا',
    'footer.uiux': 'UI/UX ډیزاین',
    'footer.consulting': 'مشاوره',
    'footer.writing': 'تخنیکي لیکنه',
    'footer.copyright': '© ۲۰۲۵ ابوبکر صدیق. ټول حقونه خوندي دي.',
    'footer.made': 'سره جوړ شوی',
    
    // Modal
    'modal.close': 'تړل',
    'modal.contact': 'موږ سره اړیکه ونیسئ',
    'modal.features': 'د سیسټم ځانګړتیاوې',
    'modal.more': 'نور معلومات',
    
    // Product Detailed Translations
    'product.hospital.title': 'د روغتون مدیریت سیسټم',
    'product.hospital.desc': 'د ناروغانو ثبتولو، درملنې او د روغتون نورو فعالیتونو لپاره بشپړ سیسټم',
    'product.school.title': 'د ښوونځي مدیریت سیسټم',
    'product.school.desc': 'د زده کونکو، ښوونکو او د ښوونځي نورو فعالیتونو لپاره بشپړ سیسټم',
    'product.course.title': 'د کورس مدیریت سیسټم',
    'product.course.desc': 'د آنلاین او آفلاین کورسونو، د زده کونکو ثبتولو او ارزونې لپاره سیسټم',
    'product.university.title': 'د پوهنتون مدیریت سیسټم',
    'product.university.desc': 'د پوهنتون د ټولو اړخونو لپاره بشپړ مدیریت سیسټم چې زده کونکي، ښوونکي او مالیات مدیریت کوي',
    'product.agriculture.title': 'د کرنې مدیریت سیسټم',
    'product.agriculture.desc': 'د کرنیزو فعالیتونو، محصولاتو او مالیاتو مدیریت لپاره مسلکي سیسټم',
    'product.tax.title': 'د مالیې محاسبه سیسټم',
    'product.tax.desc': 'د شخصي او سوداګریزو مالیاتو محاسبه، ثبت او تعقیب لپاره سیسټم',
    'product.tailor.title': 'د خیاطۍ مدیریت سیسټم',
    'product.tailor.desc': 'د خیاطۍ فابریکې یا دوکان مدیریت لپاره سیسټم چې پیرودونکي، محصولات او مالیات مدیریت کوي',
    'product.loan.title': 'د پور مدیریت سیسټم',
    'product.loan.desc': 'د بانکي یا غیر بانکي پورونو مدیریت، تعقیب او راټولولو لپاره سیسټم',
    'product.hotel.title': 'د هوټل مدیریت سیسټم',
    'product.hotel.desc': 'د هوټل او رستورانت د ټولو فعالیتونو مدیریت لپاره بشپړ سیسټم',
    'product.inventory.title': 'د موجوداتو مدیریت سیسټم',
    'product.inventory.desc': 'د څو ځایونو په اوږدو کې د موجوداتو تعقیب او مدیریت لپاره بشپړ سیسټم',
    'product.hr.title': 'د سرچینو مدیریت سیسټم',
    'product.hr.desc': 'د کارمندانو ریکارډونو، معاشونو او HR عملیاتو مدیریت لپاره بشپړ سیسټم',
    'product.ecommerce.title': 'د ای کامرس مدیریت سیسټم',
    'product.ecommerce.desc': 'د آنلاین پلورنځیو، محصولاتو او پیرودونکو امرونو مدیریت لپاره بشپړ سیسټم',
    
    // Category Translations
    'category.web': 'ویب ایپلیکیشنونه',
    'category.mobile': 'موبایل ایپلیکیشنونه',
    'category.saas': 'SaaS سیسټمونه',
    'category.tools': 'وسایل',
    
    // Product Stats Translations
    'stat.customers': 'خوښ پیرودونکي',
    'stat.downloads': 'ډاونلوډونه',
    'stat.rating': 'اوسط درجه بندي',
    'stat.countries': 'هیوادونه',
  },
  
  fa: {
    // Navigation
    'nav.home': 'خانه',
    'nav.about': 'درباره من',
    'nav.skills': 'مهارت‌ها',
    'nav.products': 'محصولات',
    'nav.contact': 'تماس',
    'nav.brand': 'بدری ۳۱۳',
    
    // Hero Section
    'hero.available': 'برای کار در دسترس',
    'hero.experience': '۳+ سال تجربه',
    'hero.quality': 'کیفیت ممتاز',
    'hero.hi': 'سلام، من هستم',
    'hero.name': 'ابوبکر صدیق',
    'hero.title': 'سازنده محصول و نوآور',
    'hero.description': 'به فضای دیجیتال من خوش آمدید، جایی که خلاقیت با نوآوری ملاقات می‌کند. من مشتاق ساختن محصولاتی هستم که تفاوت ایجاد می‌کنند و سفر خود را با جهان به اشتراک می‌گذارم.',
    'hero.products': 'مشاهده محصولات من',
    'hero.contact': 'در تماس باشید',
    
    // Stats Section
    'stats.title': 'نتایج چشمگیر',
    'stats.subtitle': 'اعدادی که خودشان صحبت می‌کنند - ارائه برتری در تمام پروژه‌ها',
    'stats.projects': 'پروژه‌های تکمیل شده',
    'stats.clients': 'مشتریان راضی',
    'stats.experience': 'سال تجربه',
    'stats.products': 'محصولات راه‌اندازی شده',
    
    // About Section
    'about.title': 'درباره من',
    'about.subtitle': 'توسعه‌دهنده‌ای پرشور با عشق به خلق راه‌حل‌های نوآورانه',
    'about.story': 'داستان من',
    'about.text1': 'با بیش از ۳ سال تجربه در توسعه نرم‌افزار، این افتخار را داشته‌ام که روی پروژه‌های متنوعی از برنامه‌های وب گرفته تا برنامه‌های موبایل و هر چیزی بین آنها کار کنم.',
    'about.text2': 'سفر من با کنجکاوی درباره نحوه کارکرد چیزها شروع شد که مرا به کشف دنیای برنامه‌نویسی هدایت کرد. از آن زمان، من دائماً در حال یادگیری و تکامل بوده‌ام و با آخرین فناوری‌ها و بهترین روش‌ها به‌روز می‌مانم.',
    'about.text3': 'من به قدرت فناوری برای حل مشکلات واقعی و بهبود زندگی مردم اعتقاد دارم. چه ساخت یک رابط کاربرپسند باشد و چه معماری یک سیستم بک‌اند قوی، من به هر پروژه با تعهد و توجه به جزئیات نزدیک می‌شوم.',
    'about.contact': 'با من تماس بگیرید',
    'about.bring': 'آنچه من ارائه می‌دهم',
    'about.cleanCode': 'کد تمیز',
    'about.cleanCodeDesc': 'نوشتن کد قابل نگهداری، مقیاس‌پذیر و کارآمد',
    'about.innovation': 'نوآوری',
    'about.innovationDesc': 'همیشه در حال کاوش فناوری‌های جدید و راه‌حل‌های خلاقانه',
    'about.collaboration': 'همکاری',
    'about.collaborationDesc': 'کار موثر با تیم‌ها و ذینفعان',
    'about.performance': 'عملکرد',
    'about.performanceDesc': 'بهینه‌سازی برای سرعت، کارایی و تجربه کاربری',
    
    // Skills Section
    'skills.title': 'مهارت‌ها و تخصص',
    'skills.subtitle': 'فناوری‌ها و ابزارهایی که با آنها برای زنده کردن ایده‌ها کار می‌کنم',
    'skills.frontend': 'توسعه فرانت‌اند',
    'skills.backend': 'توسعه بک‌اند',
    'skills.tools': 'ابزارها و فناوری‌ها',
    'skills.techTitle': 'فناوری‌هایی که استفاده می‌کنم',
    
    // Products Section
    'products.title': 'سیستم‌های مدیریتی من',
    'products.subtitle': 'سیستم‌های مدیریت حرفه‌ای قابل استفاده در زمینه‌های مختلف',
    'products.all': 'همه محصولات',
    'products.web': 'برنامه‌های تحت وب',
    'products.mobile': 'برنامه‌های موبایل',
    'products.saas': 'سیستم‌های SaaS',
    'products.tools': 'ابزارهای توسعه',
    'products.hospital': 'سیستم مدیریت پزشکی',
    'products.school': 'سیستم مدیریت مدرسه',
    'products.course': 'سیستم مدیریت دوره',
    'products.university': 'سیستم مدیریت دانشگاه',
    'products.agriculture': 'سیستم مدیریت کشاورزی',
    'products.tax': 'سیستم حسابداری مالیاتی',
    'products.tailor': 'سیستم مدیریت خیاطی',
    'products.loan': 'سیستم مدیریت وام',
    'products.hotel': 'سیستم مدیریت هتل و رستوران',
    'products.inventory': 'سیستم مدیریت موجودی',
    'products.hr': 'سیستم مدیریت منابع انسانی',
    'products.ecommerce': 'سیستم مدیریت تجارت الکترونیک',
    'products.more': 'اطلاعات بیشتر',
    'products.watch': 'مشاهده ویدیو',
    'products.stats.customers': 'مشتریان راضی',
    'products.stats.downloads': 'دانلودها',
    'products.stats.rating': 'میانگین امتیاز',
    'products.stats.countries': 'کشورها',
    
    // Pricing Section
    'pricing.title': 'طرح‌های قیمت‌گذاری انعطاف‌پذیر',
    'pricing.starter': 'شروع‌کننده',
    'pricing.professional': 'حرفه‌ای',
    'pricing.enterprise': 'شرکتی',
    'pricing.month': 'در ماه',
    'pricing.popular': 'محبوب‌ترین',
    'pricing.getStarted': 'شروع کنید',
    'pricing.contact': 'تماس فروش',
    
    // FAQ Section
    'faq.title': 'سوالات متداول',
    'faq.q1': 'آیا دوره آزمایشی رایگان ارائه می‌دهید؟',
    'faq.a1': 'بله، ما یک دوره آزمایشی ۱۴ روزه رایگان برای همه طرح‌های پریمیوم خود ارائه می‌دهیم. برای شروع دوره آزمایشی به کارت اعتباری نیاز نیست.',
    'faq.q2': 'آیا می‌توانم طرح خود را بعداً تغییر دهم؟',
    'faq.a2': 'حتماً! می‌توانید طرح خود را در هر زمان ارتقا یا کاهش دهید. تغییرات بلافاصله اعمال می‌شوند و ما هرگونه تفاوت را به نسبت محاسبه می‌کنیم.',
    'faq.q3': 'چه روش‌های پرداختی را می‌پذیرید؟',
    'faq.a3': 'ما همه کارت‌های اعتباری اصلی (ویزا، مسترکارت، امریکن اکسپرس)، پی‌پال و حواله‌های بانکی را برای طرح‌های سالانه می‌پذیریم.',
    'faq.q4': 'آیا برای سازمان‌های غیرانتفاعی تخفیف ارائه می‌دهید؟',
    'faq.a4': 'بله، ما برای سازمان‌های غیرانتفاعی ثبت‌شده ۲۵٪ تخفیف ارائه می‌دهیم. برای راه‌اندازی، با تیم فروش ما تماس بگیرید و مدارک خود را ارائه دهید.',
    
    // Testimonials
    'testimonials.title': 'مشتریان ما چه می‌گویند',
    'testimonial.1.text': 'سیستم‌های آنها بسیار منظم و مدرن هستند. همه چیز به وضوح و سادگی توضیح داده شده است که کار را بسیار آسان می‌کند.',
    'testimonial.1.name': 'احمد رحیمی',
    'testimonial.1.title': 'مشتری، مزار شریف',
    'testimonial.2.text': 'من از خدمات آنها بسیار راضی هستم. تیم حرفه‌ای است و همه چیز را به موقع تحویل می‌دهد. پشتیبانی آنها واقعاً قابل تحسین است.',
    'testimonial.2.name': 'جاوید حیدری',
    'testimonial.2.title': 'تاجر، هرات',
    'testimonial.3.text': 'من چندین بار از خدمات آنها استفاده کرده‌ام، و هر بار کیفیت بالا و کارکنان دوستانه بوده است. من این شرکت را به دیگران توصیه می‌کنم.',
    'testimonial.3.name': 'فرید صدیقی',
    'testimonial.3.title': 'مدیر دانشگاه',
    
    // CTA Section
    'cta.title': 'آماده‌اید ایده خود را به واقعیت تبدیل کنید؟',
    'cta.text': 'بیایید با هم کاری شگفت‌انگیز خلق کنیم. من همیشه برای پذیرش چالش‌های جدید و کمک به تبدیل ایده‌های نوآورانه به واقعیت هیجان‌زده هستم.',
    'cta.button': 'شروع پروژه',
    
    // Contact Section
    'contact.title': 'در تماس باشید',
    'contact.subtitle': 'آیا پروژه‌ای در ذهن دارید یا فقط می‌خواهید گپ بزنید؟ من دوست دارم از شما بشنوم.',
    'contact.name': 'نام',
    'contact.email': 'ایمیل',
    'contact.subject': 'موضوع',
    'contact.message': 'پیام',
    'contact.send': 'ارسال پیام',
    'contact.connect': 'بیایید ارتباط برقرار کنیم',
    'contact.text': 'من همیشه برای بحث در مورد فرصت‌های جدید، پروژه‌های خلاقانه، یا فقط یک گفتگوی دوستانه درباره فناوری و نوآوری باز هستم.',
    'contact.emailLabel': 'ایمیل',
    'contact.phoneLabel': 'تلفن',
    'contact.locationLabel': 'موقعیت',
    'contact.whyTitle': 'چرا با من کار کنید؟',
    'contact.why1': 'زمان پاسخگویی سریع و ارتباط واضح',
    'contact.why2': 'توسعه متمرکز بر کیفیت با توجه به جزئیات',
    'contact.why3': 'رویکرد مشارکتی برای حل مسئله',
    'contact.why4': 'پشتیبانی و نگهداری مداوم',
    
    // Footer
    'footer.text': 'ساخت تجربیات دیجیتال استثنایی با اشتیاق و دقت.',
    'footer.links': 'لینک‌های سریع',
    'footer.services': 'خدمات',
    'footer.webDev': 'توسعه وب',
    'footer.mobileDev': 'توسعه برنامه موبایل',
    'footer.uiux': 'طراحی UI/UX',
    'footer.consulting': 'مشاوره',
    'footer.writing': 'نوشتن فنی',
    'footer.copyright': '© ۲۰۲۵ ابوبکر صدیق. تمام حقوق محفوظ است.',
    'footer.made': 'ساخته شده با',
    
    // Modal
    'modal.close': 'بستن',
    'modal.contact': 'تماس با ما',
    'modal.features': 'ویژگی‌های سیستم',
    'modal.more': 'اطلاعات بیشتر',
    
    // Product Detailed Translations
    'product.hospital.title': 'سیستم مدیریت بیمارستان',
    'product.hospital.desc': 'یک سیستم کامل برای مدیریت ثبت‌نام بیماران، درمان و سایر فعالیت‌های بیمارستانی',
    'product.school.title': 'سیستم مدیریت مدرسه',
    'product.school.desc': 'یک سیستم کامل برای مدیریت دانش‌آموزان، معلمان و سایر فعالیت‌های مدرسه',
    'product.course.title': 'سیستم مدیریت دوره',
    'product.course.desc': 'سیستم مدیریت دوره‌های آنلاین و آفلاین، ثبت‌نام دانشجویان و ارزیابی',
    'product.university.title': 'سیستم مدیریت دانشگاه',
    'product.university.desc': 'یک سیستم مدیریت کامل برای تمام جنبه‌های دانشگاه که دانشجویان، اساتید و امور مالی را مدیریت می‌کند',
    'product.agriculture.title': 'سیستم مدیریت کشاورزی',
    'product.agriculture.desc': 'یک سیستم حرفه‌ای برای مدیریت فعالیت‌های کشاورزی، محصولات و امور مالی',
    'product.tax.title': 'سیستم حسابداری مالیاتی',
    'product.tax.desc': 'سیستمی برای محاسبه، ثبت و پیگیری مالیات‌های شخصی و تجاری',
    'product.tailor.title': 'سیستم مدیریت خیاطی',
    'product.tailor.desc': 'سیستمی برای مدیریت کارخانه یا مغازه خیاطی که مشتریان، محصولات و امور مالی را مدیریت می‌کند',
    'product.loan.title': 'سیستم مدیریت وام',
    'product.loan.desc': 'سیستمی برای مدیریت، پیگیری و جمع‌آوری وام‌های بانکی یا غیربانکی',
    'product.hotel.title': 'سیستم مدیریت هتل',
    'product.hotel.desc': 'سیستم کامل برای مدیریت تمام فعالیت‌های هتل و رستوران',
    'product.inventory.title': 'سیستم مدیریت موجودی',
    'product.inventory.desc': 'سیستم کامل برای پیگیری و مدیریت موجودی در مکان‌های مختلف',
    'product.hr.title': 'سیستم مدیریت منابع انسانی',
    'product.hr.desc': 'سیستم کامل برای مدیریت سوابق کارکنان، حقوق و دستمزد و عملیات منابع انسانی',
    'product.ecommerce.title': 'سیستم مدیریت تجارت الکترونیک',
    'product.ecommerce.desc': 'سیستم کامل برای مدیریت فروشگاه‌های آنلاین، محصولات و سفارشات مشتریان',
    
    // Category Translations
    'category.web': 'برنامه‌های تحت وب',
    'category.mobile': 'برنامه‌های موبایل',
    'category.saas': 'سیستم‌های SaaS',
    'category.tools': 'ابزارها',
    
    // Product Stats Translations
    'stat.customers': 'مشتریان راضی',
    'stat.downloads': 'دانلودها',
    'stat.rating': 'میانگین امتیاز',
    'stat.countries': 'کشورها',
  },
}

// Helper function to get translation
export function t(key: string, lang: Language): string {
  return translations[lang]?.[key] || translations.en[key] || key
}

// Helper function to get product title
export function getProductTitle(productId: string, lang: Language): string {
  return translations[lang]?.[`product.${productId}.title`] || 
         translations.en[`product.${productId}.title`] || 
         productId
}

// Helper function to get product description
export function getProductDesc(productId: string, lang: Language): string {
  return translations[lang]?.[`product.${productId}.desc`] || 
         translations.en[`product.${productId}.desc`] || 
         ''
}

// Helper function to get category name
export function getCategoryName(categoryKey: string, lang: Language): string {
  return translations[lang]?.[`category.${categoryKey}`] || 
         translations.en[`category.${categoryKey}`] || 
         categoryKey
}

// Helper function to get stat translation
export function getStat(statKey: string, lang: Language): string {
  return translations[lang]?.[`stat.${statKey}`] || 
         translations.en[`stat.${statKey}`] || 
         statKey
}