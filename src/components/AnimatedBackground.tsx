const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background animate-gradient-shift" />
      
      {/* Animated Orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.015]" />
    </div>
  );
};

export default AnimatedBackground;
