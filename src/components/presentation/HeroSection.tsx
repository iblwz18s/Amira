const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col pt-20">


      {/* Hero Content */}
      <div className="flex-1 relative flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 section-primary" />

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
            <path
              d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              className="fill-background"
            />
          </svg>
        </div>

        {/* Water Drop Decoration */}
        <div className="absolute right-10 bottom-1/4 opacity-20">
          <svg width="150" height="200" viewBox="0 0 100 140" className="fill-primary-foreground">
            <path d="M50 0 C50 0 0 60 0 90 C0 120 22 140 50 140 C78 140 100 120 100 90 C100 60 50 0 50 0Z" />
          </svg>
        </div>

        <div className="container relative z-10 text-center max-w-5xl px-4 pt-12 pb-48 md:py-32">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 text-primary-foreground animate-slide-up">
            منصة Smartsheet الذكية
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in stagger-2">
            لإدارة المعاملات في إدارة عمليات الموارد البشرية بتجمع تبوك الصحي
          </p>

          {/* Video Demo Section */}
          <div className="w-full max-w-4xl mx-auto mb-6 md:mb-12 animate-fade-in stagger-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-background">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto max-h-[200px] md:max-h-[400px] object-cover pointer-events-none bg-background"
              >
                <source src="/videos/demo-video.webm" type="video/webm" />
                <source src="/videos/demo-video.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="text-center text-primary-foreground/80 mt-4 text-sm">عرض توضيحي لمنصة Smartsheet</p>
          </div>

          {/* Author Info */}
          <div className="relative z-20 animate-fade-in stagger-3">
            <p className="text-primary-foreground/70 mb-2">مشروع مقدم من</p>
            <p className="text-2xl font-semibold text-primary-foreground">أميرة عبدالله عواد العنزي</p>
            <p className="text-primary-foreground/80">مديرة إدارة عمليات الموارد البشرية</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;