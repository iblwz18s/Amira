import { User, Building, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="footer" className="py-24 px-4 section-primary">
      <div className="container max-w-4xl">
        {/* Author Card */}
        <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-3xl p-8 md:p-12 text-center">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-primary-foreground mx-auto mb-6 flex items-center justify-center shadow-lg">
            <User className="w-12 h-12 text-primary" />
          </div>

          {/* Name */}
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
            أميرة عبدالله عواد العنزي
          </h3>

          {/* Title */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80 mb-4">
            <Building className="w-5 h-5" />
            <span>مديرة إدارة عمليات الموارد البشرية</span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
            <MapPin className="w-5 h-5" />
            <span>تجمع تبوك الصحي</span>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent" />

          {/* Thank You */}
          <p className="text-xl font-medium text-primary-foreground">
            شكراً لاهتمامكم ووقتكم
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} منصة Smartsheet الذكية - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;