import { Eye, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="text-right">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              عن منصة Smartsheet الذكية
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              منظومة ذكية متكاملة لإدارة المعاملات تعتمد على الأتمتة والتنبيهات الذكية 
              ومؤشرات الأداء الحية، صُممت لتحويل بيئة العمل من ارتجالية إلى احترافية 
              تعتمد على البيانات والشفافية والمساءلة.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="space-y-6">
            {/* Vision Card */}
            <div className="relative bg-primary rounded-2xl p-6 text-primary-foreground overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-20">
                <svg width="120" height="160" viewBox="0 0 100 140" className="fill-current">
                  <path d="M50 0 C50 0 0 60 0 90 C0 120 22 140 50 140 C78 140 100 120 100 90 C100 60 50 0 50 0Z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6" />
                  <h3 className="text-xl font-bold">الرؤيـة</h3>
                </div>
                <p className="text-primary-foreground/90">
                  التحسين المستمر لإدارة المعاملات والارتقاء بجودة العمل مع جعل العمليات 
                  شفافة ومتاحة للمتابعة من جميع المستويات الإدارية.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative bg-primary rounded-2xl p-6 text-primary-foreground overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-20">
                <svg width="120" height="160" viewBox="0 0 100 140" className="fill-current">
                  <path d="M50 0 C50 0 0 60 0 90 C0 120 22 140 50 140 C78 140 100 120 100 90 C100 60 50 0 50 0Z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6" />
                  <h3 className="text-xl font-bold">الرســالة</h3>
                </div>
                <p className="text-primary-foreground/90">
                  تعزيز المساءلة الفردية والشفافية الإدارية مع توفير مؤشرات أداء دقيقة 
                  لقياس الإنجاز وجودة الخدمة المقدمة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;