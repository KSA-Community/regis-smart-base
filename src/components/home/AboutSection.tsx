import ksaLogo from "@/assets/KSA-Logo.png";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              About KSA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where Bold Minds Become{" "}
              <span className="text-gradient">Global Voices</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At King Standard Academy, we celebrate boldness as a confident and compassionate 
              reflection of our pupils. This empowers them to grow into articulate leaders 
              and critical thinkers.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Whether it's your first time or you're simply curious about how STEM works, 
              KSA is your space to start — no experience needed, just curiosity and the 
              drive to grow.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold text-secondary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Teachers</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="glass-card p-8 md:p-12">
              <img 
                src={ksaLogo} 
                alt="King Standard Academy" 
                className="w-full max-w-sm mx-auto animate-float"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
